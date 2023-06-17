export const command = "link";
export const describe = "links a contract to a remote/local contract";

import {
  CommonContractArgs,
  ensureContractArgs,
  ensureLocalContractPath,
} from "../lib/ContractArgs.js";

import SSH2Promise from 'ssh2-promise';
import fs from "fs";

export const builder = {
  ...CommonContractArgs,
  path: {
    alias: "l",
    describe: "local/remote contract path to be linked",
    required: true
  },
  server: {
    alias: "s",
    describe: "SSH server address",
  },
  user: {
    alias: "u",
    describe: "SSH username",
  },
  port: {
    alias: "p",
    describe: "SSH port",
  },
  identity: {
    alias: "i",
    describe: "SSH identity file",
  },
};

const log = console.log;

export async function handler(argv) {
  const { path, server, user, port, identity} = argv;
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  
  if(!server){
    await ensureLocalContractPath(path);
    log("Local contract verified...");
    await dcf.linkContract(path);
    await dcf.save();
    log(`Local contract linked successfully!`);
  }

  else{
    if(!user || !port || !identity || !path){
      console.error("ERROR: Please provide all of the following arguments: user, port, identity, path");
      process.exit(1);
    }
    const sshconfig = {
      host: server,
      username: user,
      port: port,
      identity: identity
    }
    const ssh = new SSH2Promise(sshconfig);
    await ssh.connect().catch(err => {
      console.error("ERROR: Invalid ssh credentials!");
      process.exit(1);
    });
    log("Connection verified...");
   
    const sftp = ssh.sftp();
    const temp_file = 'temp.contract';
    await sftp.fastGet(path, temp_file).catch(err => {
      console.error("ERROR: Invalid remote contract path provided!");
      process.exit(1);
    });
    ssh.close();
    await ensureLocalContractPath(temp_file);
    log("Remote contract verified...");
    fs.rmSync(temp_file);
    await dcf.linkContract(path, server, user, port, identity);
    await dcf.save();
    log(`Remote contract linked successfully!`);

  }

}

export default handler;
