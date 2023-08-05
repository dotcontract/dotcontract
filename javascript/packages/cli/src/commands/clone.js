export const command = "clone";
export const describe = "clone a contract to a remote/local contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

import Sync from "@dotcontract/sync";
import DotContract from "@dotcontract/storage";

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
  file: {
    alias: "f",
    desc: "where to output a dotcontract file [filepath]",
  },
  dir: {
    alias: "d",
    desc: "creates a new dotcontract directory [dirpath]",
  },
};

const log = console.log;

export async function handler(argv) {
  let { dir, file } = argv;
  const { path, url, identity } = argv;

  if (!dir && !file) {
    const s = [url, path].find((i) => i).split("/");
    const last = s[s.length - 1];
    if (last.match(".contract")) {
      file = last;
    } else {
      dir = last;
    }
  }

  let dc;

  if (file) {
    dc = await DotContract.create(file, false);
    log(`dotcontract file created at: ${file}`);
  } else if (dir) {
    dc = await DotContract.create(dir, true);
    log("Contract created successfully");
    log(`dotcontract directory created at: ${dir}`);
  }

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
