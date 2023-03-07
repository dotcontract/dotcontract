export const command = "commit";
export const describe = "adds commit to a contract";

export const builder = {
  contract: {},
  input: {},
  output: {},
  body: {},
  bodyFile: {},
  signWith: {},
  attach: {},
  post: {},
  rule: {},
  define: {},
  create: {},
  send: {},
  receive: {},
};

import DotContractFile from "@dotcontract/file/DotContractFile";
import Contract from "@dotcontract/contract/Contract";
import Commit, { METHODS } from "@dotcontract/contract/Commit";

export async function handler(argv) {
  let { contract, input, output, method, body, bodyFile, signWith } = argv;
  if (!contract && (!input && !output)) {
    console.error(
      `Contract required.
  use --contract for in-place modification
  or --input and --output to save the updated contract elsewhere`
    );
  }
  if (!body && !bodyFile) {
    console.error("Missing required argument: body or bodyFile");
    return;
  }
  if (bodyFile) {
    body = fs.readFileSync(bodyFile);
  }
  try {
    body = JSON.parse(body);
  } catch (e) {
    console.error("Unable to parse body.");
    console.error(e);
    return;
  }
  const pf = await DotContractFile.open(contract || input);
  const meta = {}; // adding signing
  await pf.commit(method, body, meta);
  await pf.saveTo(output || contract);
}

export default handler;
