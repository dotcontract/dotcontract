export const command = "pack";
export const describe = "pack a contract directory into a contract file";

import DotContractDirectory from "@dotcontract/directory";

export const builder = {
  output: {
    alias: "o",
    desc: "output contract file [filepath]",
    required: true
  },
  dir: {
    desc: "contract directory [filepath]",
    required: true
  },
};

export async function handler(argv) {
  const { dir, output } = argv;
  const dcd = await DotContractDirectory.mount(dir);
  await dcd.zip(output);
}

export default handler;
