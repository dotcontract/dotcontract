export const command = "contract/register";
export const describe = "registers a contract";

import {
  parseNetworkArgs,
  CommonNetworkArgs,
} from "../../lib/NetworkArgs.js";

export const builder = {
  ...CommonNetworkArgs,
  contract: {
    alias: "c",
    required: true
  },
};

import DotContractFile from "@dotcontract/file/DotContractFile";

export async function handler(argv) {
  const pf = await DotContractFile.open(argv.contract);
  const contract = pf.directory.contract;
  const events = await contract.toNetworkCommitLog();
  // TODO
}

export default handler;
