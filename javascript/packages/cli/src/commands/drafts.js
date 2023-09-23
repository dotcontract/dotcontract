export const command = "drafts";
export const describe = "list drafts";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";

export async function handler(argv) {
  const { dotcontract: dc } = await ensureContractArgs(argv);

  const drafts = await dc.listDrafts();
  const active_draft = await dc.activeDraft();
  for (const draft of drafts) {
    const is_active = draft === active_draft ? "*" : " ";
    log(`${is_active} ${draft}`);
  }
}

export default handler;
