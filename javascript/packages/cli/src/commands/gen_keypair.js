export const command = "gen_keypair";
export const describe = "generates a keypair";

export const builder = {
};

import Key from '@dotcontract/utils/Key';

export async function handler(argv) {
  const key = await Key.generate()
  const json = await key.asJSON()

  console.log(JSON.stringify(json));
}

export default handler;
