export const command = "push";
export const describe = "pushes updated contract state to the linked contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

import DotContractFile from "@dotcontract/file";
import { copyAttachmentsToDir, reCommit } from "./undo.js";
import path from "path";
import temp from "temp";
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
  const contract_path = await dcf.getLinkedContract();
  if (contract_path == null) {
    log("No linked contract found!");
    process.exit(-1);
  }

  let source_dcf = null;

  if (contract_path.endsWith(".contract")) {
    source_dcf = await DotContractFile.open(contract_path);
  } else {
    source_dcf = await DotContractFile.fromDir(
      path.join(contract_path, ".contract")
    );
  }
  if (!source_dcf.isValid()) {
    log("Invalid linked contract!");
    process.exit(-1);
  }
  await sync_source(source_dcf, dcf);
}

export default handler;
