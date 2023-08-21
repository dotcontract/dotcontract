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
  const { dotcontract: dc } = await ensureContractArgs(argv);
  log(asGreen(asBold("Kripke Machine:")) + "\n");
  log(JSON.stringify(dc.getKM(), null, 2));
}

export default handler;
