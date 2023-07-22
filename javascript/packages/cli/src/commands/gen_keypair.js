export const command = "gen_keypair";
export const describe = "generates a keypair used for signing contracts";

export const builder = {};
const log = console.log;

import Key from "@dotcontract/utils/Key";

export async function handler(argv) {
  const key = await Key.generate();
  const json = await key.asJSON();

  log(JSON.stringify(json));
}

export default handler;
