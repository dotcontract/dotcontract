import DotContract from "@dotcontract/storage";
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
    const dirpath = dirs.join(path.sep);
    if (fs.existsSync(path.join(dirpath, ".contract"))) {
      dotcontract_dirpath = dirpath;
    }
    dirs.pop();
  }
  if (!dotcontract_dirpath) {
    return;
  }
  const dc = await DotContract.create(
    path.join(dotcontract_dirpath, ".contract")
  );
  if (!(await dc.isValid())) {
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

  const dotcontract = await (() => {
    if (file) {
      return DotContract.getDCFromFile(file);
    } else if (contract_dir) {
      return DotContract.getDCFromDir(contract_dir);
    }
  })();

  return {
    file,
    dir: contract_dir,
    dotcontract,
  };
};
