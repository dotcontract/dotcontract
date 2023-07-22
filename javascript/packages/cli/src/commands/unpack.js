export const command = "unpack";
export const describe = "unpack a contract file into a contract directory";

import DotContract from "@dotcontract/storage";

export const builder = {
  input: {
    alias: "i",
    desc: "input contract file [filepath]",
    required: true,
  },
  dir: {
    alias: "d",
    desc: "contract directory [filepath]",
    required: true,
  },
};

export async function handler(argv) {
  const { dir, input } = argv;
  await DotContract.unzip(input, dir);
}

export default handler;
