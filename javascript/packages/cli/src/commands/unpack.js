export const command = "unpack";
export const describe = "unpack a contract file into a contract directory";

import DotContractFile from "@dotcontract/file/DotContractFile";

export const builder = {
  input: {
    alias: "i",
    desc: "input contract file [filepath]",
    required: true
  },
  dir: {
    desc: "contract directory [filepath]",
    required: true
  },
};

export async function handler(argv) {
  const { dir, input } = argv;
  await DotContractFile.unzip(input, dir);
}

export default handler;
