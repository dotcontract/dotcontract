export const command = "merge";
export const describe = "merges a draft into the contract";

import Sync from "@dotcontract/sync";
import {
  CommonContractArgs,
  DraftArgs,
  ensureContractArgs,
} from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
  ...DraftArgs,
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";

export async function handler(argv) {
  const { draft } = argv;

  const { dotcontract: dc } = await ensureContractArgs(argv);
  const source_dc = await dc.clone();

  await source_dc.checkoutDraft(draft);
  await Sync.sync_target(source_dc, dc);
}

export default handler;
