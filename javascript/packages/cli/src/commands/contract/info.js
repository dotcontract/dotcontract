export const command = "contract/info";
export const describe = "describes a contract";

import { parseNetworkArgs, CommonNetworkArgs } from "../../lib/NetworkArgs.js";

export const builder = {
  ...CommonNetworkArgs,
  contract: {
    alias: "c",
  },
  contract_id: {
  }
};

import DotContractFile from "@dotcontract/file/DotContractFile";

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../../lib/LogStyles.js";

function describeContract({ contract_id, local_status, network_status }) {
  log(`${asBold(`# Contract Info`)}`);
  log(`* Address = ${asBold(contract_id)}`);
  if (local_status) {
    log();
    log(`${asBold(`## Local Status`)}`);
    log(`* Status = ${local_status.status ? asSuccess("VALID") : asError("INVALID")}`);
    log(`* Commit Count = ${local_status.commit_count}`);
    if (local_status.commit_count) {
      log(`* Latest Commit = ${local_status.latest_commit}`);
    }
  }
  if (network_status && network_status?.commit_count) {
    log();
    log(`${asBold(`## Network Status`)}`);
    log(`* Status = ${asSuccess("REGISTERED")}`);
    log(`* Commit Count = ${network_status.commit_count}`);
    log(`* Latest Commit = ${network_status.latest_commit}`);
  } else {
    log();
    log(`${asBold(`## Network Status`)}`);
    log(`* Status = ${asWarning("UNREGISTERED")}`);
    log(`* Commit Count = 0`);
  }
}

export async function handler(argv) {
  if (!argv.contract && !argv.contract_id) {
    console.error('either --contract or --contract_id required');
    return;
  }
  let local_status = null;
  let contract_id = argv.contract_id;
  if (argv.contract) {
    const pf = await DotContractFile.open(argv.contract);
    const isValid = await pf.isValid();
    const genesis = await pf.getGenesis();
    local_status = {
      status: isValid,
      commit_count: 0,
      latest_commit: ''
    };
    contract_id = genesis.contract_id;
  }

  // TODO
  // describeContract({contract_id, local_status, network_status});
}

export default handler;
