export const command = "log";
export const describe = "log of the commits of a contract";

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

function describeCommits({ commitLog, commitOrder }) {
  log(`${asBold(`# Contract Commit Log`)}`);
  for (let i = 0; i < commitOrder.length; i++) {
    log();
    log(`${asBold(`## Commit #${i + 1} => ${commitOrder[i]}`)}`);
    const c = Commit.fromJSONString(commitLog[i]);
    for (const part of c.body) {
      const part_value_formatted = (part.value.match(`crypto://`) || part.value.match(`attachment://`)) ? asViolet(part.value) : part.value;
      log(
        `${asGreen(part.method.toUpperCase())}\t${asCyan(
          part.path || ""
        )}\t\t\t${part_value_formatted}`
      );
    }
    if (c.head.signatures) {
      log(`${(`### Signed By`)}`);
      for (const pub_key of Object.keys(c.head.signatures)) {
        log(`* ${asViolet(`crypto:/${pub_key}`)}`);
      }
    }
  }
}

export async function handler(argv) {
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);

  const commitLog = await dcf.getCommitLog();
  const commitOrder = await dcf.getCommitOrder();

  describeCommits({ commitLog, commitOrder });
}

export default handler;
