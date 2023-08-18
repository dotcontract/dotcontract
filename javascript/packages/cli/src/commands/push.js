export const command = "push";
export const describe = "pushes updated contract state to the linked contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

import temp from "temp";
import DotContract from "@dotcontract/storage";
import Sync from "@dotcontract/sync";
temp.track();

export async function handler(argv) {
  const { dotcontract: dc } = await ensureContractArgs(argv);
  const link_config = Sync.getLinkedContract(dc);
  if (link_config == null) {
    throw new Error("No linked contract found!");
  }
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
  if (!await source_dc.isValid()) {
    throw new Error("Invalid linked contract!");
  }
  await Sync.sync_source(source_dc, dc);
  if ("server" in link_config) {
    await Sync.pushToRemote(
      source_dc,
      contract_path,
      link_config["server"],
      link_config["user"],
      link_config["port"],
      link_config["identity"]
    );
  }
}

export default handler;
