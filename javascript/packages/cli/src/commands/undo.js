export const command = "undo";
export const describe = `Undo all commits, including the specified commit hash and 
any subsequent ones. In the absence of a commit hash, the most recent commit will be undone.`;
import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

const log = console.log;

export const builder = {
  ...CommonContractArgs,
  "commit-hash": {
    alias: "ch",
    desc: "commit hash",
  },
};

import DotContractFile from "@dotcontract/file";
import DotContractDirectory from "@dotcontract/directory";
import { Commit, CommitAction } from "@dotcontract/contract";
import temp from "temp";

export async function handler(argv) {
  let commit_hash = argv["commit-hash"];
  var { dotcontract_file: dcf } = await ensureContractArgs(argv);

  const commitLog = await dcf.getCommitLog();
  const commitOrder = await dcf.getCommitOrder();

  if (commitLog.length < 1) {
    console.error(`ERROR: No commits in the specified contract`);
    process.exit(-1);
  }

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
      console.error(`ERROR: Invalid commit hash provided.`);
      process.exit(-1);
    }
  }

  // Handle attachments
  let attachments_dir = null;
  if (await dcf.hasAttachments()) {
    attachments_dir = temp.mkdirSync();
    await dcf.copyAttachments(attachments_dir);
  }

  // Create empty contract with same dotcontract json
  const dotcontract_json = await dcf.getDotContractJson();
  await dcf.clear();
  if (dcf.filepath) {
    dcf = await DotContractFile.create(dcf.filepath, dotcontract_json);
  } else {
    const dcd = await DotContractDirectory.generate(
      dcf.directory.path,
      dotcontract_json
    );
    dcf = await DotContractFile.fromDir(dcd.path);
  }

  // Recommit
  for (let i = 0; i < delete_from_indx; i++) {
    const attachments = [];
    const c = Commit.fromJSONString(commitLog[i]);
    for (const part of c.body) {
      const ca = new CommitAction(part);
      if (ca.hasAttachment()) {
        const file_hash = ca.getFileHash();
        const path = ca.getPath();
        const filepath = `${attachments_dir}/${file_hash}`;
        attachments.push({
          path,
          filepath,
        });
      }
    }
    for (const attachment of attachments) {
      await dcf.attach(attachment);
    }
    await dcf.commit(c.toJSON());
  }
  await dcf.save();

  if (delete_from_indx == commitOrder.length - 1)
    log(`Deleted latest commit - ${commitOrder[delete_from_indx]}`);
  else
    log(
      `Deleted all commits including and subsequent to - ${commitOrder[delete_from_indx]}`
    );
}

export default handler;
