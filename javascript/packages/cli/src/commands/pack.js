export const command = "pack";
export const describe = "pack a contract directory into a contract file";

import DotContract from "@dotcontract/storage";

export const builder = {
  file: {
    alias: "f",
    desc: "output contract file [filepath]",
  },
  dir: {
    alias: "d",
    desc: "input contract directory [filepath]",
  },
  input: {
    alias: "i",
    desc: "input contract directory [filepath]",
  },
  output: {
    alias: "o",
    desc: "output contract file [filepath]",
  },
};

export async function handler(argv) {
  const { file, dir, input, output } = argv;
  const dc = await DotContract.getDCFromDir(dir || input);
  await dc.zip(file || output);
}

export default handler;
