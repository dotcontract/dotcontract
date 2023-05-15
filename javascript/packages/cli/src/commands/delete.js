export const command = "delete";
export const describe = "delete latest commit"; //latest pending commit?
import { CommonContractArgs, ensureContractArgs, isDotContractDir } from "../lib/ContractArgs.js";
import { Commit } from "@dotcontract/contract";

const log = console.log();

export const builder = {
  /*contract: {
    alias: "c",
    desc: "where to output a .contract file [filepath]"
  },
  output: {
    alias: "o",
    desc: "where to output a .contract file [filepath]"
  },
  dir: {
    desc: "creates a new .contract directory [filepath]"
  }*/
};

import DotContractFile from "@dotcontract/file";
import DotContractDirectory from '@dotcontract/directory';

export async function handler(argv) {
 
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  
  
  const commitLog = await dcf.getCommitLog();
  const commitOrder = await dcf.getCommitOrder();

  const new_commitLog = commitLog.pop()
  const new_commitOrder = commitOrder.pop()
  //const new_commitLog = "";
  const dc = await dcf.deleteCommit(new_commitOrder, new_commitLog);

}

export default handler;
