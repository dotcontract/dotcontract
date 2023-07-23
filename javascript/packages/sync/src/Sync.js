import SSH2Promise from "ssh2-promise";
import path from "path";
import fs from "fs";
import temp from "temp";
temp.track();

import DotContract from "@dotcontract/storage";

const log = console.log;

export default class Sync {
  static getSSHConfig(server, user, port, identity) {
    return {
      host: server,
      username: user,
      port: port,
      identity: identity,
    };
  }

  static async ensureLocalContractPath(contract_path) {
    let file = null;
    let dir = null;
    if (fs.existsSync(path.join(contract_path, ".contract"))) {
      dir = contract_path;
    } else if (fs.existsSync(contract_path)) {
      file = contract_path;
    }
    if (!file && !dir) {
      throw new Error(`ERROR: Invalid contract path`);
    }
    let dc = null;
    if (file) {
      dc = await DotContract.getDCFromFile(file);
    } else if (dir) {
      dc = await DotContract.getDCFromDir(dir);
    }
    if (!(await dc.isValid())) {
      throw new Error(`ERROR: Invalid contract`);
    }
    return dc;
  }

  static async validateRemoteContract(file_path, server, user, port, identity) {
    const sshconfig = this.getSSHConfig(server, user, port, identity);
    const ssh = new SSH2Promise(sshconfig);
    await ssh.connect().catch((err) => {
      throw new Error("ERROR: Invalid ssh credentials!");
    });
    log("Connection verified...");

    const sftp = ssh.sftp();
    const dirpath = temp.mkdirSync();
    const temp_file = dirpath + "/temp.contract";
    const write_stream = fs.createWriteStream(temp_file);
    const read_stream = await sftp.createReadStream(file_path);
    await new Promise((resolve, reject) => {
      read_stream.on("data", (data) => {
        write_stream.write(data);
      });
      read_stream.on("end", () => {
        write_stream.on("close", () => {
          resolve();
        });
        write_stream.end();
      });
      read_stream.on("error", (e) => {
        reject(e);
      });
    }).catch((err) => {
      throw new Error(`ERROR: Error in reading contract from remote! ${err}`);
    });

    await ssh.close();
    const new_dc = await this.ensureLocalContractPath(temp_file);
    log("Remote contract verified...");
    return new_dc;
  }

  static linkContract(
    dc,
    contract_path,
    server = null,
    user = null,
    port = null,
    identity = null
  ) {
    const config_str = fs.readFileSync(
      `${dc.getDirPath()}/config.json`,
      "utf-8"
    );
    const config_obj = JSON.parse(config_str);

    config_obj["link"] = {};
    config_obj["link"]["path"] = `${contract_path}`; // can be a local or remote path
    if (server) {
      config_obj["link"]["server"] = server;
      config_obj["link"]["user"] = user;
      config_obj["link"]["port"] = port;
      config_obj["link"]["identity"] = identity;
    }
    fs.writeFileSync(
      `${dc.getDirPath()}/config.json`,
      JSON.stringify(config_obj),
      "utf-8"
    );
  }

  static getLinkedContract(dc) {
    const config_str = fs.readFileSync(
      `${dc.getDirPath()}/config.json`,
      "utf-8"
    );
    const config_obj = JSON.parse(config_str);
    if (!("link" in config_obj)) {
      return null;
    }
    return config_obj["link"];
  }

  static async pushToRemote(dc, file_path, server, user, port, identity) {
    const sshconfig = this.getSSHConfig(server, user, port, identity);
    const ssh = new SSH2Promise(sshconfig);
    await ssh.connect().catch((err) => {
      throw new Error("ERROR: Invalid ssh credentials!");
    });
    log("Connection verified...");

    const sftp = ssh.sftp();
    const dirpath = temp.mkdirSync();
    const temp_file = dirpath + "/" + file_path.split("/").pop();
    await dc.zip(temp_file);
    await sftp.unlink(file_path);
    const read_stream = fs.createReadStream(temp_file);
    const write_stream = await sftp.createWriteStream(file_path);
    await new Promise((resolve, reject) => {
      read_stream.on("data", (data) => {
        write_stream.write(data);
      });
      read_stream.on("end", () => {
        write_stream.on("close", () => {
          resolve();
        });
        write_stream.end();
      });
      read_stream.on("error", (e) => {
        reject(e);
      });
    }).catch((err) => {
      throw new Error(`ERROR: Error in writing contract from remote! ${err}`);
    });
    await ssh.close();
    log("Remote contract updated!");
  }
  static async sync_source(source_dc, dc) {
    const source_commit_order = await source_dc.getCommitOrder();
    const cur_commit_order = await dc.getCommitOrder();
    const cur_commit_log = await dc.getCommitLog();

    const source_commit_length = source_commit_order.length;
    const cur_commit_length = cur_commit_order.length;

    let largest_common_commit_index = -1;
    let si = 0;
    let ci = 0;

    while (si < source_commit_length && ci < cur_commit_length) {
      if (source_commit_order[si] === cur_commit_order[ci]) {
        largest_common_commit_index = si;
        si++;
        ci++;
      } else {
        break;
      }
    }

    if (largest_common_commit_index === cur_commit_length - 1) {
      // Equal length and equal commits OR additional commits in linked contract
      log("Nothing to push"); // source_commit_length >= cur_commit_length
      return;
    }
    // Additional commits in local contract
    else if (largest_common_commit_index === source_commit_length - 1) {
      // fast-forward push
      const cur_attachments_dir = await dc.copyAttachmentsToTempDir();
      await source_dc.reCommit(
        cur_commit_log,
        cur_attachments_dir,
        largest_common_commit_index + 1,
        cur_commit_length - 1
      );
    }
    // Additional commits in both contracts
    else {
      log(`Local and linked contracts have diverged, consider pulling first to rebase and then push.
          contract pull --dir __contract_name__
          contract push --dir __contract_name__`);
      return;
    }
  }

  static async sync_target(source_dc, dc) {
    const source_commit_order = await source_dc.getCommitOrder();
    const cur_commit_order = await dc.getCommitOrder();
    const source_commit_log = await source_dc.getCommitLog();
    const cur_commit_log = await dc.getCommitLog();

    const source_commit_length = source_commit_order.length;
    const cur_commit_length = cur_commit_order.length;

    let largest_common_commit_index = -1;
    let si = 0;
    let ci = 0;

    while (si < source_commit_length && ci < cur_commit_length) {
      if (source_commit_order[si] === cur_commit_order[ci]) {
        largest_common_commit_index = si;
        si++;
        ci++;
      } else {
        break;
      }
    }
    const source_attachments_dir = await source_dc.copyAttachmentsToTempDir();

    if (largest_common_commit_index === cur_commit_length - 1) {
      // Equal length and equal commits
      if (source_commit_length == cur_commit_length) {
        log("Nothing to pull");
        return;
      }
      // fast-forward pull
      else if (source_commit_length > cur_commit_length) {
        await dc.reCommit(
          source_commit_log,
          source_attachments_dir,
          largest_common_commit_index + 1,
          source_commit_length - 1
        );
        log("Fast-forward pull complete");
        return;
      }
    }
    // Additional commits in local contract
    else if (largest_common_commit_index === source_commit_length - 1) {
      log("Nothing to pull");
      return;
    }
    // Additional commits in both contracts - Rebase
    else {
      dc = await dc.emptyDC();
      await dc.reCommit(
        source_commit_log,
        source_attachments_dir,
        0,
        source_commit_length - 1
      );
      const cur_attachments_dir = await dc.copyAttachmentsToTempDir();
      await dc.reCommit(
        cur_commit_log,
        cur_attachments_dir,
        largest_common_commit_index + 1,
        cur_commit_length - 1
      );
      log("Pull with rebase complete");
    }
  }
}
