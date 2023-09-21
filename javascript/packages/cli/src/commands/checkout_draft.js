export const command = "checkout-draft";
export const describe = "switches to a draft";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";

export async function handler(argv) {
  const { dotcontract: dc } = await ensureContractArgs(argv);
}

export default handler;
