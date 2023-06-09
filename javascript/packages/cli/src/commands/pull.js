export const command = "pull";
export const describe = "pulls updated contract state from linked contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

import DotContractFile from "@dotcontract/file";
import { copyAttachmentsToDir, createEmptyContract, reCommit } from "./undo.js";
import path from "path";
import temp from "temp";
temp.track();

const log = console.log;

export async function sync(source_dcf, dcf){
  const source_commit_order = await source_dcf.getCommitOrder();
  const cur_commit_order = await dcf.getCommitOrder();
  const source_commit_log = await source_dcf.getCommitLog();
  const cur_commit_log = await dcf.getCommitLog();

  const source_commit_length = source_commit_order.length;
  const cur_commit_length = cur_commit_order.length;

  let largest_common_commit_index = -1;
  let si = 0;
  let ci = 0;

  while(si < source_commit_length && ci < cur_commit_length){
    if(source_commit_order[si] === cur_commit_order[ci]){
      largest_common_commit_index = si;
      si++;
      ci++;
    }
    else{
      break;
    }
  }
  const source_attachments_dir = await copyAttachmentsToDir(source_dcf);

  if(largest_common_commit_index === cur_commit_length - 1){
    // Equal length and equal commits
    if(source_commit_length == cur_commit_length){
      log("Nothing to pull");
      return;
    }
    // fast-forward pull
    else if(source_commit_length > cur_commit_length){
      await reCommit(dcf, source_commit_log, source_attachments_dir, largest_common_commit_index+1, source_commit_length-1);
      log("Fast-forward pull complete");
      return;
    }
  }
  // Additional commits in local contract
  else if (largest_common_commit_index === source_commit_length - 1){
    log("Nothing to pull");
    return;
  }
  // Additional commits in both contracts - Rebase
  else {
    dcf = await createEmptyContract(dcf);
    await reCommit(dcf, source_commit_log, source_attachments_dir, 0, source_commit_length - 1);
    const cur_attachments_dir = await copyAttachmentsToDir(dcf);
    await reCommit(dcf, cur_commit_log, cur_attachments_dir, largest_common_commit_index+1, cur_commit_length - 1);
    log("Pull with rebase complete");
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

  if (contract_path.endsWith(".contract")){
    source_dcf = await DotContractFile.open(contract_path);
  }
  else{
    source_dcf = await DotContractFile.fromDir(path.join(contract_path, ".contract"));
  }
  if(!source_dcf.isValid()){
    log("Invalid linked contract!");
    process.exit(-1);
  }
  await sync(source_dcf, dcf);
}

export default handler;

// 1. Dir <- File
// contract create --dir linktest
// contract create --file linktest.contract
// contract link --dir linktest --path linktest.contract
// contract commit --dir linktest --post /a.text "assd"
// contract commit --file linktest.contract --post /a.text "assd"
// contract commit --dir linktest --post /b.text "polly" 
// contract commit --file linktest.contract --post /c.text "lolly"
// contract pull --dir linktest
// contract log --dir linktest

// 2. Dir <- Dir
// contract create --dir linktest
// contract create --dir linktest2
// contract link --dir linktest --path linktest2
// contract commit --dir linktest --post /a.text "assd"
// contract commit --dir linktest2 --post /a.text "assd"
// contract commit --dir linktest --post /b.text "polly" 
// contract commit --dir linktest2 --post /c.text "lolly"
// contract pull --dir linktest
// contract log --dir linktest

// 3. File <- File
// contract create --file linktest.contract
// contract create --file linktest2.contract
// contract link --file linktest.contract --path linktest2.contract
// contract commit --file linktest.contract --post /a.text "assd"
// contract commit --file linktest2.contract --post /a.text "assd"
// contract commit --file linktest.contract --post /b.text "polly" 
// contract commit --file linktest2.contract --post /c.text "lolly"
// contract pull --file linktest.contract
// contract log --file linktest.contract

// 4. File <- Dir
// contract create --file linktest.contract
// contract create --dir linktest
// contract link --file linktest.contract --path linktest
// contract commit --file linktest.contract --post /a.text "assd"
// contract commit --dir linktest --post /a.text "assd"
// contract commit --dir linktest --post /b.text "polly" 
// contract commit --file linktest.contract --post /c.text "lolly"
// contract pull --file linktest.contract
// contract log --file linktest.contract