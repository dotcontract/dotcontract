export const command = "new-id";
export const describe = "create new cryptographic keys and pubs";

export const builder = {
  name: {
    desc: "name",
    default: "default",
  },
  overwrite: {
  }
};

import os from "os";
import fs from "fs";
import Key from "@dotcontract/utils/Key";

const log = console.log;

export async function handler(argv) {
  const { name, overwrite } = argv;

  const base_path = `${os.homedir()}/.dotcontract/${name}`;
  const path_to_keypair = `${base_path}/signing.keypair`;
  if (fs.existsSync(path_to_keypair) ) {
    if (!overwrite) {
      console.error(`ERROR: "${name}" identity already exists`);
      return;
    } else {
      console.log(`WARNING: "${name}" identity already exists, overwriting`);
    }
  }
  const key = await Key.generate();

  fs.mkdirSync(base_path, { recursive: true });
  await key.asJSONFile(`${base_path}/signing.keypair`);

  const access_key = await Key.generate();
  fs.mkdirSync(`${base_path}/access`, { recursive: true });
  await fs.writeFileSync(
    `${base_path}/access/id_ed25519`,
    await access_key.asSSHPrivatePem()
  );
  await fs.writeFileSync(
    `${base_path}/access/id_ed25519.pub`,
    await access_key.asSSHDotPub()
  );

  log(`crypto:/${await key.asPublicMultiaddress()}`);
}

export default handler;
