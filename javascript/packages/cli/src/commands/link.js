export const command = "link";
export const describe = "links a contract to a remote/local contract";

import {
  CommonContractArgs,
  ensureContractArgs,
} from "../lib/ContractArgs.js";

import Sync from "@dotcontract/sync";

export const builder = {
  ...CommonContractArgs,
  path: {
    alias: "l",
    describe: "local contract path to be linked",
  },
  url: {
    alias: "u",
    describe: "SSH server url to remote contract. Example: user@host:port/path",
  },
  identity: {
    alias: "i",
    describe: "SSH identity file",
  },
};

const log = console.log;

export async function handler(argv) {
  const { path, url, identity } = argv;
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  if ((!url && !path) || (url && path)) {
    throw new Error(
      "ERROR: Please provide either a url for an ssh server or a local path"
    );
  }

  if (!url) {
    await Sync.ensureLocalContractPath(path);
    log("Local contract verified...");
    Sync.linkContract(dcf, path);
    await dcf.save();
    log(`Local contract linked successfully!`);
  } else {
    const [user, server_port_path] = url.split("@");
    const [server, port_path] = server_port_path.split(":");
    const port_path_list = port_path.split("/");
    const port = port_path_list[0];
    const file_path = "/" + port_path_list.slice(1).join("/");
    if (!user || !port || !server || !file_path) {
      throw new Error(
        "ERROR: Please provide a valid url. Example: user@host:port/path"
      );
    }

    if (!identity) {
      throw new Error("ERROR: Please provide a valid identity file");
    }

    await Sync.validateRemoteContract(file_path, server, user, port, identity);
    Sync.linkContract(dcf, file_path, server, user, port, identity);
    await dcf.save();
    log(`Remote contract linked successfully!`);
  }
}

export default handler;
