export const command = "log";
export const describe = "log of the commits of a contract";

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
import { validateRemoteContract } from "./link.js";
import DotContractFile from "@dotcontract/file";

function describeCommits({ commitLog, commitOrder, order, limit, all }) {
  log(`${asBold(`# Contract Commit Log`)}`);

  const orderList = [];
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
        part.value?.toString().match(`crypto://`) ||
        part.value?.toString().match(`attachment://`)
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
  const { order, limit, all, linked } = argv;

  if (order !== "desc" && order !== "asc") {
    console.error(
      `ERROR: Invalid order provided. Valid options are: desc, asc`
    );
    process.exit(-1);
  }

  if (limit < 1) {
    console.error(
      `ERROR: Invalid limit provided. Valid options are: positive integers`
    );
    process.exit(-1);
  }
  var { dotcontract_file: dcf } = await ensureContractArgs(argv);
  if (linked) {
    const link_config = await dcf.getLinkedContract();
    if (link_config == null) {
      log("No linked contract found!");
      process.exit(-1);
    }
    const contract_path = link_config["path"];
    console.log(contract_path);

    if ("server" in link_config) {
      dcf = await validateRemoteContract(
        contract_path,
        link_config["server"],
        link_config["user"],
        link_config["port"],
        link_config["identity"]
      );
    } else {
      dcf = await DotContractFile.getDcfFromPath(contract_path);
    }
  }

  const commitLog = await dcf.getCommitLog();
  const commitOrder = await dcf.getCommitOrder();

  describeCommits({ commitLog, commitOrder, order, limit, all });
}

export default handler;
