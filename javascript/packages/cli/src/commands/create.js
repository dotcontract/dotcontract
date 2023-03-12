export const command = "create";
export const describe = "creates a new contract";

export const builder = {
  contract: {
    alias: "c",
    desc: "where to output a .contract file [filepath]"
  },
  output: {
    alias: "o",
    desc: "where to output a .contract file [filepath]"
  },
  dir: {
    desc: "creates a new .contract directory [filepath]"
  }
};

import DotContractFile from "@dotcontract/file/DotContractFile";
import DotContractDirectory from '@dotcontract/file/DotContractDirectory';

export async function handler(argv) {
  const { contract, output, dir } = argv;
  if (!dir && !output && !contract && !(contract && output)) {
    console.error(`ERROR: You must specify where to create the contract.
* use --contract or --output to create a .contract file
* use --dir to create a .contract unpacked to a directory
`);
    process.exit(-1);
  }

  if (output || contract) {
    await DotContractFile.create(output || contract);
    console.log("Contract created successfully")
    console.log(`.contract file at: ${output || contract}`);
  } else if (dir) {
    await DotContractDirectory.generate(dir);
    console.log("Contract created successfully")
    console.log(`.contract directory at: ${dir}`);
  }
}

export default handler;
