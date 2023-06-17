export const command = "pull";
export const describe = "pulls updated contract state from linked contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

import DotContractFile from "@dotcontract/file";
import { copyAttachmentsToDir, createEmptyContract, reCommit } from "./undo.js";
import { cleanUp, validateRemoteContract } from "./link.js";
import path from "path";
import temp from "temp";
temp.track();

const log = console.log;

export async function sync_target(source_dcf, dcf) {
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
  const source_attachments_dir = await copyAttachmentsToDir(source_dcf);

  if (largest_common_commit_index === cur_commit_length - 1) {
    // Equal length and equal commits
    if (source_commit_length == cur_commit_length) {
      log("Nothing to pull");
      return;
    }
    // fast-forward pull
    else if (source_commit_length > cur_commit_length) {
      await reCommit(
        dcf,
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
    dcf = await createEmptyContract(dcf);
    await reCommit(
      dcf,
      source_commit_log,
      source_attachments_dir,
      0,
      source_commit_length - 1
    );
    const cur_attachments_dir = await copyAttachmentsToDir(dcf);
    await reCommit(
      dcf,
      cur_commit_log,
      cur_attachments_dir,
      largest_common_commit_index + 1,
      cur_commit_length - 1
    );
    log("Pull with rebase complete");
  }
}

export async function handler(argv) {
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  const link_config_obj = await dcf.getLinkedContract();
  const contract_path = link_config_obj["path"];
  if (contract_path == null) {
    log("No linked contract found!");
    process.exit(-1);
  }

  let source_dcf = null;

  if("server" in link_config_obj){
    source_dcf = await validateRemoteContract(contract_path, link_config_obj["server"], link_config_obj["user"], link_config_obj["port"], link_config_obj["identity"]);
  }
  else{
    if (contract_path.endsWith(".contract")) {
      source_dcf = await DotContractFile.open(contract_path);
    } else {
      source_dcf = await DotContractFile.fromDir(
        path.join(contract_path, ".contract")
      );
    }
  }
  
  if (!source_dcf.isValid()) {
    log("Invalid linked contract!");
    process.exit(-1);
  }
  await sync_target(source_dcf, dcf);
  if("server" in link_config_obj){
    cleanUp();
  }
}

export default handler;
