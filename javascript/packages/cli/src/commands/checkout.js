export const command = "checkout";
export const describe =
  "switches between the local version of the contract or its drafts";

import {
  CommonContractArgs,
  DraftArgs,
  ensureContractArgs,
} from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
  ...DraftArgs,
  local: {
    desc: "switch to the local version of the contract",
  },
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";

export async function handler(argv) {
  const { draft, local } = argv;

  const { dotcontract: dc } = await ensureContractArgs(argv);

  if (draft) {
    dc.checkoutDraft(draft);
  } else {
    dc.checkoutLocal();
  }
}

export default handler;
