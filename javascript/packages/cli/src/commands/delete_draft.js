export const command = "delete-draft";
export const describe = "deletes a draft";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
  name: {
    desc: "name of draft",
    nargs: 1,
  },
  draft: {
    desc: "name of draft",
    nargs: 1,
  },
  all: {
    desc: "deletes all drafts",
  },
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";

export async function handler(argv) {
  const { name, draft, all } = argv;

  if (all) {
    const { dotcontract: dc } = await ensureContractArgs(argv);
    await dc.deleteAllDrafts();
    return;
  }

  if (!name && !draft) {
    throw new Error("name of draft required. use --name");
  }

  const { dotcontract: dc } = await ensureContractArgs(argv);
  await dc.deleteDraft(name || draft);
}

export default handler;
