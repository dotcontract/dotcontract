export const command = "contract/push";
export const describe = "pushes updated contract state to the network";

import {
  parseNetworkArgs,
  CommonNetworkArgs,
} from "../../lib/NetworkArgs.js";

export const builder = {
  ...CommonNetworkArgs,
  contract: {
    alias: "c",
    required: true
  },
};

import DotContractFile from "@dotcontract/file/DotContractFile";

const log = console.log;
import { asSuccess, asBold } from "../../lib/LogStyles.js";

export async function handler(argv) {
  const pf = await DotContractFile.open(argv.contract);
  const { data_dir, key, network, listen, announce } = await parseNetworkArgs(argv);
  const contract = pf.directory.contract;
  const events = await contract.toNetworkCommitLog();
  // TODO
  // log();
  // log(asSuccess(`# Push Accepted`));
  // log(`Received By: ${asBold(res.whoami.id)}`);
  // log(`Current Round: ${asBold(res.current_round)}`);
  // log();
}

export default handler;
