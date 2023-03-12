import DotContractDirectory from "@dotcontract/file/DotContractDirectory";
import DotContractFile from "@dotcontract/file/DotContractFile";

export const CommonContractArgs = {
  contract: {
    alias: "c",
    desc: "contract file (modified in-place) [filepath]",
  },
  input: {
    alias: "input",
    desc: "input contract file [filepath]",
  },
  output: {
    alias: "o",
    desc: "output contract file [filepath]",
  },
  dir: {
    desc: "contract directory [filepath]",
  },
};

export const isDotContractDir = async function (dir) {
  const dc_dir = new DotContractDirectory(dir);
  return dc_dir.isValid();
};

export const ensureContractArgs = async function (argv) {
  const { contract, input, output, dir } = argv;
  const in_dotcontract_dir = await isDotContractDir(process.cwd());
  if (!contract && !input && !dir && !in_dotcontract_dir) {
    console.error(
      `ERROR: Contract required:
*  use --contract for in-place modification of a .contract
*  use --input and --output to save a modified .contract elsewhere
*  use --dir or run this command within a .contract directory to work on it
  `
    );
    process.exit(-1);
  }

  const contract_dir = !dir && in_dotcontract_dir ? process.cwd() : dir

  const dotcontract_file = await (() => {
    if (input && output) {
      return DotContractFile.fromFile(input, output);
    } else if (contract || input) {
      return DotContractFile.open(contract || input, output);
    } else if (contract_dir) {
      return DotContractFile.fromDir(contract_dir);
    }
  })();


  return {
    input,
    output,
    contract,
    dir: !dir && in_dotcontract_dir ? process.cwd() : dir,
    dotcontract_file
  };
};
