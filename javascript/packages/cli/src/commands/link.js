export const command = "link";
export const describe = "links a contract to a remote/local contract";

import {
  CommonContractArgs,
  ensureContractArgs,
  ensureLocalContractPath,
} from "../lib/ContractArgs.js";

import SSH2Promise from 'ssh2-promise';
import temp from "temp";
temp.track();

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

export function getSSHConfig(server, user, port, identity){
  return {
    host: server,
    username: user,
    port: port,
    identity: identity
  }
}

export async function validateRemoteContract(path, server, user, port, identity){
    const sshconfig = getSSHConfig(server, user, port, identity);
    const ssh = new SSH2Promise(sshconfig);
    await ssh.connect().catch(err => {
      console.error("ERROR: Invalid ssh credentials!");
      console.error(err);
      process.exit(1);
    });
    log("Connection verified...");
   
    const sftp = ssh.sftp();
    const dir_path = temp.mkdirSync();
    const temp_file = dir_path+"/temp.contract";
    await sftp.fastGet(path, temp_file).catch(err => {
      console.error("ERROR: Invalid remote contract path provided!");
      console.error(err);
      process.exit(1);
    });
    ssh.close();
    const new_dcf = await ensureLocalContractPath(temp_file);
    log("Remote contract verified...");
    return new_dcf;
}

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
    
    await validateRemoteContract(path, server, user, port, identity);
    await dcf.linkContract(path, server, user, port, identity);
    await dcf.save();
    log(`Remote contract linked successfully!`);

  }

}

export default handler;
