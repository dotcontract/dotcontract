export const command = "extract";
export const describe = "extracts a path from a contract";

import fs from "fs";
import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  path: {
    desc: "the contract path to extract [path]",
  },
  output: {
    alias: "o",
    desc: "where to output, if not set stdout [filepath]",
  },
  ...CommonContractArgs,
};

export async function handler(argv) {
  const { path, output } = argv;
  let { dotcontract: dc } = await ensureContractArgs(argv);

  await dc.extractPath(path, {
    output: output ? fs.createWriteStream(output) : process.stdout,
  });
}

export default handler;
