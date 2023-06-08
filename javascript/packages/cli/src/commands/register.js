export const command = "register";
export const describe = "registers a contract";

import { parseNetworkArgs, CommonNetworkArgs } from "../lib/NetworkArgs.js";

export const builder = {
  ...CommonNetworkArgs,
  contract: {
    alias: "c",
    required: true,
  },
};

import DotContractFile from "@dotcontract/file";

export async function handler(argv) {
  const pf = await DotContractFile.open(argv.contract);
  const contract = pf.directory.contract;
  // TODO
}

export default handler;
