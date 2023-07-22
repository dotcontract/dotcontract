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

import DotContract from "@dotcontract/storage";

export async function handler(argv) {
  const pf = await DotContract.getDCFromFile(argv.contract);
  const contract = pf.directory.contract;
  // TODO
}

export default handler;
