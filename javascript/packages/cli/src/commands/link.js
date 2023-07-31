export const command = "link";
export const describe = "links a contract to a remote/local contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

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
  const { dotcontract: dc } = await ensureContractArgs(argv);
  if ((!url && !path) || (url && path)) {
    throw new Error(
      "ERROR: Please provide either a url for an ssh server or a local path"
    );
  }

  if (!url) {
    await Sync.ensureLocalContractPath(path);
    log("Local contract verified...");
    Sync.linkContract(dc, path);
    await dc.save();
    log(`Local contract linked successfully!`);
  } else {
    const re = /^(.*)@([a-zA-Z.]*)(:[0-9]*|)(\/.*)$/;
    const m = url.match(re);
    const user = m?.[1];
    const server = m?.[2];
    const port = parseInt(m?.[3]?.replace(":", "")) || 22;
    const file_path = m?.[4];
    if (!user || !port || !server || !file_path) {
      throw new Error(
        "ERROR: Please provide a valid url. Example: user@host:port/path"
      );
    }

    if (!identity) {
      throw new Error("ERROR: Please provide a valid identity file");
    }

    await Sync.validateRemoteContract(file_path, server, user, port, identity);
    Sync.linkContract(dc, file_path, server, user, port, identity);
    await dc.save();
    log(`Remote contract linked successfully!`);
  }
}

export default handler;
