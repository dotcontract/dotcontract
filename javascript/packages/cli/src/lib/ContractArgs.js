import DotContractDirectory from "@dotcontract/directory";
import DotContractFile from "@dotcontract/file";
import path from "path";
import fs from "fs";

export const CommonContractArgs = {
  file: {
    alias: "f",
    desc: "dotcontract file [filepath]",
  },
  dir: {
    alias: "d",
    desc: "dotcontract directory [filepath]",
  },
};

export const CommonContractWithOutputArgs = {
  file: {
    alias: "f",
    desc: "dotcontract file [filepath]",
  },
  dir: {
    alias: "d",
    desc: "dotcontract directory [filepath]",
  },
};

export const findNearestDotContractDir = async function (dirpath) {
  let dotcontract_dirpath = null;
  const dirs = dirpath.split(path.sep);
  const dir_depth = dirs.length;
  for (let i = 1; i < dir_depth; i++) {
    const dir_path = dirs.join(path.sep);
    if (fs.existsSync(path.join(dir_path, ".contract"))) {
      dotcontract_dirpath = dir_path;
    }
    dirs.pop();
  }
  if (!dotcontract_dirpath) {
    return;
  }
  const dc_dir = new DotContractDirectory(
    path.join(dotcontract_dirpath, ".contract")
  );
  if (!(await dc_dir.isValid())) {
    return;
  }
  return dotcontract_dirpath;
};

export const ensureContractArgs = async function (argv) {
  const { file, dir } = argv;
  const nearest_dotcontract_dir = await findNearestDotContractDir(
    process.cwd()
  );
  if (!file && !dir && !nearest_dotcontract_dir) {
    throw new Error(
      `ERROR: DotContract required:
*  run this command within a dotcontract directory to work on it
*  use --file to specify a dotcontract file
*  use --dir to specify a dotcontract directory
  `
    );
  }

  const contract_dir = dir || nearest_dotcontract_dir;

  const dotcontract_file = await (() => {
    if (file) {
      return DotContractFile.open(file);
    } else if (contract_dir) {
      return DotContractFile.fromDir(path.join(contract_dir, ".contract"));
    }
  })();

  return {
    file,
    dir: contract_dir,
    dotcontract_file,
  };
};
