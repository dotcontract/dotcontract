export const command = "pack";
export const describe = "pack a contract directory into a contract file";

export const builder = {
  input: {
    alias: 'i',
    required: true
  },
  output: {
    alias: 'o',
  }
};

export async function handler(argv) {
}

export default handler;
