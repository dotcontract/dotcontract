export const command = "create-draft";
export const describe = "creates a new draft";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
  name: {
    desc: "name of draft",
  },
  draft: {
    desc: "name of draft",
  },
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";

export async function handler(argv) {
  const { name, draft } = argv;
  if (!name && !draft) {
    throw new Error("name of draft required. use --name");
  }

  const { dotcontract: dc } = await ensureContractArgs(argv);
  await dc.createDraft(name || draft);
}

export default handler;
