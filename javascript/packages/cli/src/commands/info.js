export const command = "info";
export const describe = "describe a contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";

function describeContract({ contract_id, local_status, network_status }) {
  log(`${asBold(`# Contract Info`)}`);
  log(`* ID = ${asBold(contract_id)}`);
  if (local_status) {
    log();
    log(`${asBold(`## Local Status`)}`);
    log(
      `* Status = ${
        local_status.status ? asSuccess("VALID") : asError("INVALID")
      }`
    );
    log(`* Commit Count = ${local_status.commit_count}`);
    if (local_status.commit_count) {
      log(`* Latest Commit = ${local_status.latest_commit}`);
    }
  }
  // if (network_status && network_status?.commit_count) {
  //   log();
  //   log(`${asBold(`## Network Status`)}`);
  //   log(`* Status = ${asSuccess("REGISTERED")}`);
  //   log(`* Commit Count = ${network_status.commit_count}`);
  //   log(`* Latest Commit = ${network_status.latest_commit}`);
  // } else {
  //   log();
  //   log(`${asBold(`## Network Status`)}`);
  //   log(`* Status = ${asWarning("UNREGISTERED")}`);
  //   log(`* Commit Count = 0`);
  // }
}

export async function handler(argv) {
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);

  const isValid = await dcf.isValid();
  const genesis = await dcf.getDotContractJson();
  const commitLog = await dcf.getCommitLog();
  const commitOrder = await dcf.getCommitOrder();
  const local_status = {
    status: isValid,
    commit_count: commitLog.length,
    latest_commit: commitOrder.length > 0 ? commitOrder[commitOrder.length - 1] : null,
  };
  const contract_id = genesis.genesis.contract_id;

  describeContract({ contract_id, local_status });
}

export default handler;