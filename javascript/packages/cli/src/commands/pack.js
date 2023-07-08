export const command = "pack";
export const describe = "pack a contract directory into a contract file";

import DotContract from "@dotcontract/storage";

export const builder = {
  output: {
    alias: "o",
    desc: "output contract file [filepath]",
    required: true,
  },
  dir: {
    alias: "d",
    desc: "contract directory [filepath]",
    required: true,
  },
};

export async function handler(argv) {
  const { dir, output } = argv;
  const dc = await DotContract.getDCFromDir(dir);
  await dc.zip(output);
}

export default handler;
