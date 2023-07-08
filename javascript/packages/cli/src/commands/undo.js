export const command = "undo";
export const describe = `Undo all commits, including the specified commit hash and 
any subsequent ones. In the absence of a commit hash, the most recent commit will be undone.`;
import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

const log = console.log;

export const builder = {
  ...CommonContractArgs,
  "commit-hash": {
    alias: "h",
    desc: "commit hash",
  },
};

import temp from "temp";
temp.track();

export function findDeleteIndex(commit_hash, commitOrder) {
  // check if commit hash is valid
  let delete_from_indx = commitOrder.length - 1;
  if (commit_hash) {
    let valid_hash = false;
    for (let i = commitOrder.length - 1; i >= 0; i--) {
      if (commitOrder[i] == commit_hash) {
        valid_hash = true;
        delete_from_indx = i;
        break;
      }
    }
    if (valid_hash == false) {
      throw new Error(`ERROR: Invalid commit hash provided.`);
    }
  }
  return delete_from_indx;
}

export async function handler(argv) {
  const commit_hash = argv["commit-hash"];
  var { dotcontract: dc } = await ensureContractArgs(argv);

  const commitLog = await dc.getCommitLog();
  const commitOrder = await dc.getCommitOrder();

  if (commitLog.length < 1) {
    throw new Error(`ERROR: No commits in the specified contract`);
  }

  const delete_from_indx = findDeleteIndex(commit_hash, commitOrder);
  const attachments_dir = await dc.copyAttachmentsToTempDir();
  dc = await dc.emptyDC();
  await dc.reCommit(commitLog, attachments_dir, 0, delete_from_indx - 1);

  if (delete_from_indx == commitOrder.length - 1)
    log(`Deleted latest commit - ${commitOrder[delete_from_indx]}`);
  else
    log(
      `Deleted all commits including and subsequent to - ${commitOrder[delete_from_indx]}`
    );
}

export default handler;
