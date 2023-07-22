export const command = "info";
export const describe = "describe a contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

const log = console.log;
import { asBold, asSuccess, asError, asWarning } from "../lib/LogStyles.js";
import Sync from "@dotcontract/sync";
import DotContract from "@dotcontract/storage";

function describeContract({
  contract_id,
  local_status,
  link_status,
  network_status,
}) {
  log(`${asBold(`# Contract Info`)}`);
  log(`* ID = ${asBold(contract_id)}`);
  log();

  if (link_status) {
    log(`${asBold(`## Link status`)}`);
    log(
      `* Status = ${
        link_status.status ? asSuccess("VALID") : asError("INVALID")
      }`
    );
    if (link_status.remote) {
      log(`* Server = ${link_status.server}`);
      log(`* User = ${link_status.user}`);
      log(`* Port = ${link_status.port}`);
      log(`* Identity File = ${link_status.identity}`);
    }
    log(`* Contract Path = ${link_status.path}`);
    log(`* Remote = ${link_status.remote}`);
    log(`* Commit Count = ${link_status.commit_count}`);
    if (link_status.commit_count) {
      log(`* Latest Commit = ${link_status.latest_commit}`);
    }
  }

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
}

export async function handler(argv) {
  const { dotcontract: dc } = await ensureContractArgs(argv);

  const isValid = await dc.isValid();
  const genesis = await dc.getDotContractJson();
  const commitLog = await dc.getCommitLog();
  const commitOrder = await dc.getCommitOrder();
  const local_status = {
    status: isValid,
    commit_count: commitLog.length,
    latest_commit:
      commitOrder.length > 0 ? commitOrder[commitOrder.length - 1] : null,
  };
  const contract_id = genesis.genesis.contract_id;

  const link_config = Sync.getLinkedContract(dc);
  let link_status = null;
  if (link_config) {
    const contract_path = link_config["path"];
    let source_dc = null;
    if ("server" in link_config) {
      source_dc = await Sync.validateRemoteContract(
        contract_path,
        link_config["server"],
        link_config["user"],
        link_config["port"],
        link_config["identity"]
      );
    } else {
      source_dc = await DotContract.getDCFromPath(contract_path);
    }
    const isValidLinked = await source_dc.isValid();
    const commitLogLinked = await source_dc.getCommitLog();
    const commitOrderLinked = await source_dc.getCommitOrder();

    link_status = {
      status: isValidLinked,
      server: link_config?.server,
      user: link_config?.user,
      port: link_config?.port,
      identity: link_config?.identity,
      path: link_config?.path,
      remote: "server" in link_config,
      commit_count: commitLogLinked.length,
      latest_commit:
        commitOrderLinked.length > 0
          ? commitOrderLinked[commitOrderLinked.length - 1]
          : null,
    };
  }

  describeContract({ contract_id, local_status, link_status });
}

export default handler;
