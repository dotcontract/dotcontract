export const command = "push";
export const describe = "pushes updated contract state to the linked contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

import DotContractFile from "@dotcontract/file";
import temp from "temp";
import Sync from "@dotcontract/sync";
temp.track();

export async function handler(argv) {
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  const link_config = Sync.getLinkedContract(dcf);
  if (link_config == null) {
    throw new Error("No linked contract found!");
  }
  const contract_path = link_config["path"];
  let source_dcf = null;
  if ("server" in link_config) {
    source_dcf = await Sync.validateRemoteContract(
      contract_path,
      link_config["server"],
      link_config["user"],
      link_config["port"],
      link_config["identity"]
    );
  } else {
    source_dcf = await DotContractFile.getDcfFromPath(contract_path);
  }
  if (!source_dcf.isValid()) {
    throw new Error("Invalid linked contract!");
  }
  await Sync.sync_source(source_dcf, dcf);
  if ("server" in link_config) {
    await Sync.pushToRemote(
      source_dcf,
      contract_path,
      link_config["server"],
      link_config["user"],
      link_config["port"],
      link_config["identity"]
    );
  }
}

export default handler;
