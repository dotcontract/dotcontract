export const command = "pull";
export const describe = "pulls updated contract state from linked contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
};

import DotContract from "@dotcontract/storage";
import Sync from "@dotcontract/sync";
import temp from "temp";
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

  if (!source_dc.isValid()) {
    throw new Error("Invalid linked contract!");
  }
  await Sync.sync_target(source_dc, dc);
}

export default handler;
