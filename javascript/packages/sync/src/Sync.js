import SSH2Promise from "ssh2-promise";
import path from "path"
import fs from "fs";
import temp from "temp";
temp.track();

import DotContractFile from "@dotcontract/file";

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
        let dcf = null;
        if (file) {
          dcf = await DotContractFile.open(file);
        } else if (dir) {
          dcf = await DotContractFile.fromDir(path.join(dir, ".contract"));
        }
        if (!dcf.isValid()) {
          throw new Error(`ERROR: Invalid contract`);
        }
        return dcf;
      };

    static async validateRemoteContract(
        file_path,
        server,
        user,
        port,
        identity
      ) {
        const sshconfig = this.getSSHConfig(server, user, port, identity);
        const ssh = new SSH2Promise(sshconfig);
        await ssh.connect().catch((err) => {
          throw new Error("ERROR: Invalid ssh credentials!");
        });
        log("Connection verified...");
      
        const sftp = ssh.sftp();
        const dir_path = temp.mkdirSync();
        const temp_file = dir_path + "/temp.contract";
        await sftp.fastGet(file_path, temp_file).catch((err) => {
          throw new Error("ERROR: Error in reading contract from remote!");
        });
        ssh.close();
        const new_dcf = await this.ensureLocalContractPath(temp_file);
        log("Remote contract verified...");
        return new_dcf;
    }


    static linkContract(
        dcf, 
        contract_path,
        server = null,
        user = null,
        port = null,
        identity = null
      ) {
        const config_str = fs.readFileSync(`${dcf.directory.path}/config.json`, "utf-8");
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
          `${dcf.directory.path}/config.json`,
          JSON.stringify(config_obj),
          "utf-8"
        );
      }
    
      static getLinkedContract(dcf) {
        const config_str = fs.readFileSync(`${dcf.directory.path}/config.json`, "utf-8");
        const config_obj = JSON.parse(config_str);
        if (!("link" in config_obj)) {
          return null;
        }
        return config_obj["link"];
      }

      static async pushToRemote(
        dcf,
        file_path,
        server,
        user,
        port,
        identity
      ) {
        const sshconfig = this.getSSHConfig(server, user, port, identity);
        const ssh = new SSH2Promise(sshconfig);
        await ssh.connect().catch((err) => {
          throw new Error("ERROR: Invalid ssh credentials!");
        });
        log("Connection verified...");
      
        const sftp = ssh.sftp();
        const dir_path = temp.mkdirSync();
        const temp_file = dir_path + "/" + file_path.split("/").pop();
        await dcf.directory.zip(temp_file);
        await sftp.unlink(file_path);
        await sftp.fastPut(temp_file, file_path).catch((err) => {
          throw new Error("ERROR: Error in writing contract to remote!");
        });
        ssh.close();
        log("Remote contract updated!");
      }
      static async sync_source(source_dcf, dcf) {
        const source_commit_order = await source_dcf.getCommitOrder();
        const cur_commit_order = await dcf.getCommitOrder();
        const cur_commit_log = await dcf.getCommitLog();
      
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
          const cur_attachments_dir = await dcf.copyAttachmentsToDir();
          await source_dcf.reCommit(
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
    
      static async sync_target(source_dcf, dcf) {
        const source_commit_order = await source_dcf.getCommitOrder();
        const cur_commit_order = await dcf.getCommitOrder();
        const source_commit_log = await source_dcf.getCommitLog();
        const cur_commit_log = await dcf.getCommitLog();
      
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
        const source_attachments_dir = await source_dcf.copyAttachmentsToDir();
      
        if (largest_common_commit_index === cur_commit_length - 1) {
          // Equal length and equal commits
          if (source_commit_length == cur_commit_length) {
            log("Nothing to pull");
            return;
          }
          // fast-forward pull
          else if (source_commit_length > cur_commit_length) {
            await dcf.reCommit(
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
          dcf = await dcf.createEmptyContract();
          await dcf.reCommit(
            source_commit_log,
            source_attachments_dir,
            0,
            source_commit_length - 1
          );
          const cur_attachments_dir = await dcf.copyAttachmentsToDir();
          await dcf.reCommit(
            cur_commit_log,
            cur_attachments_dir,
            largest_common_commit_index + 1,
            cur_commit_length - 1
          );
          log("Pull with rebase complete");
        }
      }    
}