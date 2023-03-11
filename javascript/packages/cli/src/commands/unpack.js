export const command = "unpack";
export const describe = "unpack a contract file into a contract directory";

export const builder = {
  contract: {
    alias: 'c',
  },
  input: {
    alias: 'i',
  },
  dir: {
  }
};

export async function handler(argv) {
}

export default handler;
