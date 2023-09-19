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
  const max_path = Math.max(
    ...contents.map((file) => file.path.length).filter((i) => i)
  );
  for (const file of contents) {
    log(`${asBold(file.path.padEnd(max_path + 4, " "))}  ${file.value}`);
  }
}

export default handler;
