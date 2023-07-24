export const command = "pubkey";
export const describe = "outputs the pubkey of a key";

export const builder = {
  file: {
    alias: "f",
    required: true,
  },
  format: {
    desc: "format to output",
    default: "crypto",
  },
};

import Key from "@dotcontract/utils/Key";

const log = console.log;

export async function handler(argv) {
  const { file, format } = argv;

  const key = await Key.fromJSONFile(file);

  if (format === "multiaddress") {
    log(await key.asPublicMultiaddress());
  } else {
    log(`crypto:/${await key.asPublicMultiaddress()}`);
  }
}

export default handler;
