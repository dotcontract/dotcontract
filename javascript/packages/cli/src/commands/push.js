export const command = "push";
export const describe = "pushes updated contract state to the linked contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

import DotContractFile from "@dotcontract/file";
import { copyAttachmentsToDir, reCommit } from "./undo.js";
import temp from "temp";
import SSH2Promise from "ssh2-promise";
import { getSSHConfig, validateRemoteContract } from "./link.js";
temp.track();

const log = console.log;

export async function sync_source(source_dcf, dcf) {
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
    const cur_attachments_dir = await copyAttachmentsToDir(dcf);
    await reCommit(
      source_dcf,
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

export async function pushToRemote(
  dcf,
  file_path,
  server,
  user,
  port,
  identity
) {
  const sshconfig = getSSHConfig(server, user, port, identity);
  const ssh = new SSH2Promise(sshconfig);
  await ssh.connect().catch((err) => {
    console.error("ERROR: Invalid ssh credentials!");
    console.error(err);
    process.exit(1);
  });
  log("Connection verified...");

  const sftp = ssh.sftp();
  const dir_path = temp.mkdirSync();
  const temp_file = dir_path + "/" + file_path.split("/").pop();
  await dcf.directory.zip(temp_file);
  await sftp.unlink(file_path);
  await sftp.fastPut(temp_file, file_path).catch((err) => {
    console.error("ERROR: Error in writing contract to remote!");
    console.error(err);
    process.exit(1);
  });
  ssh.close();
  log("Remote contract updated!");
}

export async function handler(argv) {
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  const link_config = await dcf.getLinkedContract();
  if (link_config == null) {
    log("No linked contract found!");
    process.exit(-1);
  }
  const contract_path = link_config["path"];
  let source_dcf = null;
  if ("server" in link_config) {
    source_dcf = await validateRemoteContract(
      contract_path,
      link_config["server"],
      link_config["user"],
      link_config["port"],
      link_config["identity"]
    );
  } else {
    source_dcf = await DotContractFile.getDcfFromPath(contract_path);
  }
  if (!source_dcf.isValid()) {
    log("Invalid linked contract!");
    process.exit(-1);
  }
  await sync_source(source_dcf, dcf);
  if ("server" in link_config) {
    await pushToRemote(
      source_dcf,
      contract_path,
      link_config["server"],
      link_config["user"],
      link_config["port"],
      link_config["identity"]
    );
  }
}

export default handler;
