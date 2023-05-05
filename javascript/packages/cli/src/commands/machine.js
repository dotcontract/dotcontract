export const command = "machine";
export const describe = "get the kripke machine from a dotcontract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

const log = console.log;
import {
  asBold,
  asSuccess,
  asError,
  asWarning,
  asGreen,
  asCyan,
  asViolet,
} from "../lib/LogStyles.js";

import { Commit } from "@dotcontract/contract";

export async function handler(argv) {
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  console.log(JSON.stringify(dcf.directory.contract.km.toJSON(), null, 2));
}

export default handler;
