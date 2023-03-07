export const command = "pull";
export const describe = "pulls updated contract state from network";

import { parseNetworkArgs, CommonNetworkArgs } from "../lib/NetworkArgs.js";

export const builder = {
  ...CommonNetworkArgs,
  output: {
    alias: "o",
    required: true
  },
  contract: {
    alias: "c",
    required: true
  },

};

import DotContractFile from "@dotcontract/file/DotContractFile";
import DotContractDirectory from "@dotcontract/file/DotContractDirectory";

const log = console.log;

export async function handler(argv) {
  if (!argv.contract && !argv.output) {
    console.error('--contract && --output required');
    return;
  }

  let contract_id = argv.contract_id;
  let local_status = null;
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
    log(pf)
    await pf.saveTo(argv.output);
  }
  
  // TODO
  //once dotcontract file is opened --> setup a node and DotContractQuery on the node
  //push the query_res into a dotcontract file --> TBD
  
}


export default handler;
