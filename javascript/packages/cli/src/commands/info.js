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
import { Commit } from "@dotcontract/contract";

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
    const commit_log = local_status.commit_log;
    const count = [];
    let rules_count = 0;
    let contributors = []; 
    let contributors_unknown = 0;

    for (let i = 0; i < local_status.commit_count; i++) {
      count.push(i);
    }

    for (const i of count) {
      const c = Commit.fromJSONString(commit_log[i]);
      
      //rules count
      if (!c.body.length) {
        rules_count = 0;
      } else {
        for (const part of c.body) {
          if (part.method?.toString().match("rule")) {
            rules_count++;
          }
        }
      }
      //contributors count
      if(c.head.signatures ){
        contributors.push(Object.keys(c.head.signatures))
      }else{
        contributors_unknown = 1;
      }
    }
    
    contributors = contributors.flat(1)
    contributors = [...new Set(contributors)];

    log();
    log(`${asBold(`##SUMMARY`)}`);
    log();
    log(`${asBold(`## Local Status`)}`);
    log(
      `* Status = ${
        local_status.status ? asSuccess("VALID") : asError("INVALID")
      }`
    );
    log(`* Contributors: ${contributors.length + contributors_unknown }`);
    log(`* Commits: ${local_status.commit_count}`);
    log(`* Rules:  ${rules_count}`);
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
    commit_log: commitLog,
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
      commit_log: commitLogLinked,
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
