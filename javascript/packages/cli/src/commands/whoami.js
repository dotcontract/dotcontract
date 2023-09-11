export const command = "whoami";
export const describe = "outputs the pub of the default signing key";

export const builder = {
  format: {
    desc: "format to output",
    default: "crypto",
  },
  name: {
    desc: "identity name",
    default: "default",
  },
};

import os from "os";
import fs from "fs";
import Key from "@dotcontract/utils/Key";

const log = console.log;

export async function handler(argv) {
  const { name, format } = argv;

  const path_to_keypair = `${os.homedir()}/.dotcontract/${name}/signing.keypair`;
  if (!fs.existsSync(path_to_keypair)) {
    console.error(`ERROR "${name}" identity doesn't exist`);
    return;
  }
  const key = await Key.fromJSONFile(path_to_keypair);

  if (format === "multiaddress") {
    log(await key.asPublicMultiaddress());
  } else {
    log(`crypto:/${await key.asPublicMultiaddress()}`);
  }
}

export default handler;
