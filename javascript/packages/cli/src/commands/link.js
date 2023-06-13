export const command = "link";
export const describe = "links a contract to a remote/local contract";

import {
  CommonContractArgs,
  ensureContractArgs,
  ensureContractPath,
} from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
  path: {
    alias: "p",
    describe: "path to the contract to be linked",
    required: true,
  },
};

const log = console.log;

export async function handler(argv) {
  const contract_path = argv["path"];
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  await ensureContractPath(contract_path);
  await dcf.linkContract(contract_path);
  await dcf.save();
  log(`Contract linked successfully!`);
}

export default handler;
