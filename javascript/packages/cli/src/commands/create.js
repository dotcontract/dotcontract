export const command = "create";
export const describe = "creates a new contract";

export const builder = {
  file: {
    alias: "f",
    desc: "where to output a dotcontract file [filepath]"
  },
  dir: {
    alias: "d",
    desc: "creates a new dotcontract directory [dirpath]"
  }
};

import DotContractFile from "@dotcontract/file";
import DotContractDirectory from '@dotcontract/directory';

export async function handler(argv) {
  const { dir, file } = argv;
  if (!dir && !file) {
    console.error(`ERROR: You must specify where to create the dotcontract.
* use --file to create a dotcontract file
* use --dir to create a dotcontract directory
`);
    process.exit(-1);
  }

  if (file) {
    await DotContractFile.create(file);
    console.log(`dotcontract file created at: ${file}`);
  } else if (dir) {
    await DotContractDirectory.generate(`${dir}/.contract`);
    console.log("Contract created successfully")
    console.log(`dotcontract directory created at: ${dir}`);
  }
}

export default handler;
