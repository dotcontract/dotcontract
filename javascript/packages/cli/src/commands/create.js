export const command = "create";
export const describe = "creates a new contract";

export const builder = {
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
import DotContract from "@dotcontract/storage";

export async function handler(argv) {
  const { dir, file } = argv;
  if (!dir && !file) {
    throw new Error(`ERROR: You must specify where to create the dotcontract.
* use --file to create a dotcontract file
* use --dir to create a dotcontract directory
`);
  }

  if (file) {
    await DotContract.create(file, false);
    log(`dotcontract file created at: ${file}`);
  } else if (dir) {
    await DotContract.create(dir, true);
    log("Contract created successfully");
    log(`dotcontract directory created at: ${dir}`);
  }
}

export default handler;
