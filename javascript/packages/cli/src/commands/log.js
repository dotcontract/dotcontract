export const command = "log";
export const describe = "log of the commits of a contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";

function describeCommits({commitLog, commitOrder}) {
  log(`${asBold(`# Contract Commit Log`)}`);
  for (let i = 0; i < commitOrder.length; i++) {
    log();
    log(`${asBold(`## ${i+1} => ${commitOrder[i]}`)}`);
    log(commitLog[i]);
  }
}

export async function handler(argv) {
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);

  const commitLog = await dcf.getCommitLog();
  const commitOrder = await dcf.getCommitOrder();

  describeCommits({ commitLog, commitOrder });
}

export default handler;
