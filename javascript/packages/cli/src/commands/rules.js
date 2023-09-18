export const command = "rules";
export const describe = "log of the rules of a contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
  order: {
    default: "desc",
    type: "string",
    describe: "order of the commits to print (desc or asc)",
  },
  limit: {
    default: 5,
    type: "number",
    describe: "limit the number of commits to print",
  },
  all: {
    default: false,
    type: "boolean",
    describe: "print all commits (if set, overrides --limit)",
  },
  linked: {
    default: false,
    type: "boolean",
    describe: "print commits of the linked contract",
  },
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
import Sync from "@dotcontract/sync";
import DotContract from "@dotcontract/storage";

function describeRules({ commitLog, commitOrder, order, limit, all }) {
  log(`${asBold(`# Contract Rules Log`)}`);

  const orderList = [];
  let rules_count = 0;

  for (let i = 0; i < commitOrder.length; i++) {
    orderList.push(i);
  }
  if (order === "desc") {
    orderList.reverse();
  }
  if (!all) {
    if (limit < orderList.length) {
      log();
      log(
        `Printing the ${
          order === "desc" ? "last" : "first"
        } ${limit} commits. There are ${
          commitOrder.length
        } commits in total. Use --all to print all commits.`
      );
      orderList.splice(limit);
    }
  }
  for (const i of orderList) {
    log();
    //log(`${asBold(`## Commit #${i + 1} => ${commitOrder[i]}`)}`);
    const c = Commit.fromJSONString(commitLog[i]);
    for (const part of c.body) {
      if (part.method?.toString().match("rule")) {
        rules_count++;
        log(`#${rules_count}`);
        if (c.head.message) {
          log(`message: ${c.head.message}`);
        }
        for (const part of c.body) {
          const part_value_formatted =
            part.value?.toString().match(`crypto://`) ||
            part.value?.toString().match(`attachment://`)
              ? asViolet(part.value)
              : part.value;
          log(`rule: ${part_value_formatted}`);
        }
        if (c.head.signatures) {
          log(`${`Signed By`}`);
          for (const pub_key of Object.keys(c.head.signatures)) {
            log(`* ${asViolet(`crypto:/${pub_key}`)}`);
          }
        }
      }
    }
  }
}

export async function handler(argv) {
  const { order, limit, all, linked } = argv;

  if (order !== "desc" && order !== "asc") {
    throw new Error(
      `ERROR: Invalid order provided. Valid options are: desc, asc`
    );
  }

  if (limit < 1) {
    throw new Error(
      `ERROR: Invalid limit provided. Valid options are: positive integers`
    );
  }
  var { dotcontract: dc } = await ensureContractArgs(argv);
  if (linked) {
    const link_config = Sync.getLinkedContract(dc);
    if (link_config == null) {
      throw new Error("No linked contract found!");
    }
    const contract_path = link_config["path"];

    if ("server" in link_config) {
      dc = await Sync.validateRemoteContract(
        contract_path,
        link_config["server"],
        link_config["user"],
        link_config["port"],
        link_config["identity"]
      );
    } else {
      dc = await DotContract.getDCFromPath(contract_path);
    }
  }

  const commitLog = await dc.getCommitLog();
  const commitOrder = await dc.getCommitOrder();

  describeRules({ commitLog, commitOrder, order, limit, all });
}

export default handler;
