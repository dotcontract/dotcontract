export const command = "log";
export const describe = "log of the commits of a contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
  order: {
    alias: "o",
    default: "desc"
  }
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

function describeCommits({ commitLog, commitOrder, order }) {
  log(`${asBold(`# Contract Commit Log`)}`);
  
  let orderList = [];
  for (let i = 0; i < commitOrder.length; i++) {
    orderList.push(i)
  }
  if (order == "desc") {
    orderList = orderList.reverse();
  }
  for (let i of orderList) {
    log();
    log(`${asBold(`## Commit #${i + 1} => ${commitOrder[i]}`)}`);
    const c = Commit.fromJSONString(commitLog[i]);
    if (c.head.message) {
      log();
      log(`${`### Message`}`);
      log(c.head.message);
    }
    if (c.body.length) {
      log();
      log(`${`### Actions`}`);
    }
    for (const part of c.body) {
      const part_value_formatted =
        part.value?.toString().match(`crypto://`) || part.value?.toString().match(`attachment://`)
          ? asViolet(part.value)
          : part.value;
      log(
        `${asGreen(part.method.toUpperCase())}\t${asCyan(
          part.path || ""
        )}\t\t\t${part_value_formatted}`
      );
    }
    if (c.head.signatures) {
      log();
      log(`${`### Signed By`}`);
      for (const pub_key of Object.keys(c.head.signatures)) {
        log(`* ${asViolet(`crypto:/${pub_key}`)}`);
      }
    }
  }
  log();
}

export async function handler(argv) {

  let order = argv["order"];
  if(order != "desc" && order != "asc") {
    console.error(`ERROR: Invalid order provided. Valid options are: desc, asc`);
    process.exit(-1);
  }
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);

  const commitLog = await dcf.getCommitLog();
  const commitOrder = await dcf.getCommitOrder();

  describeCommits({ commitLog, commitOrder, order });
}

export default handler;
