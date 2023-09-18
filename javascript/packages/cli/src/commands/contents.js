export const command = "contents";
export const describe = "list the contents of a contract";

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

export async function handler(argv) {
  // const {  } = argv;
  let { dotcontract: dc } = await ensureContractArgs(argv);

  const contents = await dc.listContents();
  for (const file of contents) {
    log(`${asBold(file.path)}\t\t\t\t${file.value}`);
  }
}

export default handler;
