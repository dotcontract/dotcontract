export const command = "create";
export const describe = "creates a new unregistered contract";

export const builder = {
  output: {
    alias: "o",
    required: true
  },
};

import DotContractFile from "@dotcontract/file/DotContractFile";

export async function handler(argv) {
  await DotContractFile.create(argv.output)
  console.log("contract created successfully")
}

export default handler;
