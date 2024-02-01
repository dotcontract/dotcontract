export const command = "unpack";
export const describe = "unpack a contract file into a contract directory";

import DotContract from "@dotcontract/storage";

export const builder = {
  file: {
    alias: "f",
    desc: "input contract file [filepath]",
  },
  dir: {
    alias: "d",
    desc: "output contract directory [filepath]",
  },
  input: {
    alias: "i",
    desc: "input contract file [filepath]",
  },
  output: {
    alias: "o",
    desc: "output contract directory [filepath]",
  },
};

export async function handler(argv) {
  const { file, dir, input, output } = argv;
  await DotContract.unzip(file || input, dir || output);
  const dc = await DotContract.getDCFromDir(dir || output);
  await dc.cleanPathValues();
}

export default handler;
