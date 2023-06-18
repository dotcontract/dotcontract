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

export function getSSHConfig(server, user, port, identity){
  return {
    host: server,
    username: user,
    port: port,
    identity: identity
  }
}

export async function validateRemoteContract(file_path, server, user, port, identity){
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
    await sftp.fastGet(file_path, temp_file).catch(err => {
      console.error("ERROR: Error in reading contract from remote!");
      console.error(err);
      process.exit(1);
    });
    ssh.close();
    const new_dcf = await ensureLocalContractPath(temp_file);
    log("Remote contract verified...");
    return new_dcf;
}

export async function handler(argv) {
  const { path, url, identity} = argv;
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);
  if(!url && !path || url && path){
    console.error("ERROR: Please provide either a url for an ssh server or a local path");
    process.exit(1);
  }

  if(!url){
    await ensureLocalContractPath(path);
    log("Local contract verified...");
    await dcf.linkContract(path);
    await dcf.save();
    log(`Local contract linked successfully!`);
  }

  else{
    const [user, server_port_path] = url.split("@");
    const [server, port_path] = server_port_path.split(":");
    const port_path_list = port_path.split("/");
    const port = port_path_list[0];
    const file_path = "/" + port_path_list.slice(1).join("/");
    if(!user || !port || !server || !file_path){
      console.error("ERROR: Please provide a valid url. Example: user@host:port/path");
      process.exit(1);
    }

    if(!identity){
      console.error("ERROR: Please provide a valid identity file");
      process.exit(1);
    }
    
    await validateRemoteContract(file_path, server, user, port, identity);
    await dcf.linkContract(file_path, server, user, port, identity);
    await dcf.save();
    log(`Remote contract linked successfully!`);

  }

}

export default handler;
