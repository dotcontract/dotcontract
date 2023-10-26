export const command = "clone";
export const describe = "clone a contract to a remote/local contract";

import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

import Sync from "@dotcontract/sync";
import DotContract from "@dotcontract/storage";
import os from "os";
import node_path from "path";

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
  "access-with": {
    describe: "access using an SSH identity file",
  },
  "no-access-key": {
    describe: "don't use any access key",
  },
  "access-as": {
    describe: "access as a DotContract profile",
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
  let { dir, file, ["access-with"]: access_with } = argv;
  const {
    path,
    url,
    ["no-access-key"]: no_access_key,
    ["access-as"]: access_as,
  } = argv;

  if (!access_with) {
    if (no_access_key) {
      access_with = null;
    } else {
      const login_name = access_as || "default";
      access_with = node_path.resolve(
        `${os.homedir}/.dotcontract/${login_name}/access/id_ed25519`
      );
    }
  }

  const identity = access_with;

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
