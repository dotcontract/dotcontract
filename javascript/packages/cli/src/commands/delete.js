export const command = "delete";
export const describe = "delete latest commit"; //latest pending commit?
import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";


const log = console.log;

export const builder = {
    ...CommonContractArgs,
};

import DotContractFile from "@dotcontract/file";
import DotContractDirectory from '@dotcontract/directory';
import { Commit } from "@dotcontract/contract";
import fs from "fs";

export async function handler(argv) {
 
    
    var { dotcontract_file: dcf } = await ensureContractArgs(argv);

    const commitLog = await dcf.getCommitLog();
    const commitOrder = await dcf.getCommitOrder();

    if (commitLog.length < 1){
        console.error(`ERROR: No commits in the specified contract`)
        process.exit(-1);
    }

    // Handle attachments


    const dotcontract_json = await dcf.getDotContractJson();
    if(dcf.filepath){
        fs.rmSync(`${dcf.filepath}`, { recursive: true });
        dcf = await DotContractFile.create(dcf.filepath, dotcontract_json);
    }
    else{
        fs.rmSync(`${dcf.directory.path}`, { recursive: true });
        const dcd = await DotContractDirectory.generate(`${dcf.directory.path}`, dotcontract_json);
        dcf = await DotContractFile.fromDir(dcd.path);
    }

    for (let i = 0; i < commitOrder.length - 1; i++) {
        const c = Commit.fromJSONString(commitLog[i]);
        await dcf.commit(c.toJSON());
    }
    await dcf.save()

    log(`Deleted latest commit - ${commitOrder[commitOrder.length - 1]}`)
  
}

export default handler;
