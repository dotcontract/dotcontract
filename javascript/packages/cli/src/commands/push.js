export const command = "push";
export const describe = "pushes updated contract state to the linked contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

import DotContractFile from "@dotcontract/file";
import { copyAttachmentsToDir, reCommit } from "./undo.js";
import temp from "temp";
import Sync from "@dotcontract/sync";
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

export async function handler(argv) {
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  const link_config = Sync.getLinkedContract(dcf);
  if (link_config == null) {
    throw new Error("No linked contract found!");
  }
  const contract_path = link_config["path"];
  let source_dcf = null;
  if ("server" in link_config) {
    source_dcf = await Sync.validateRemoteContract(
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
    throw new Error("Invalid linked contract!");
  }
  await sync_source(source_dcf, dcf);
  if ("server" in link_config) {
    await Sync.pushToRemote(
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
