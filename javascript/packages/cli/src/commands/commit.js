export const command = "commit";
export const describe = "adds a commit to a contract";

export const builder = {
  contract: {
    alias: "c",
    desc: "contract file for in-place modification [filepath]",
  },
  input: {
    alias: "i",
    desc: "input contract file [filepath]",
  },
  output: {
    alias: "o",
    desc: "output contract file [filepath]",
  },
  dir: {
    desc: "dotcontract directory [filepath]"
  },
  body: {
    desc: "commit body in standard format [text]",
  },
  bodyFromFile: {
    desc: "commit body in standard format from a local file [filepath]",
  },
  sign: {
    desc: "signs a commit using the given key file [filepath]",
  },
  attach: {
    desc: "attaches a file to a commit [filepath]",
  },
  post: {
    desc: "posts a value to a contract path, two args: [path] [value]",
    nargs: 2,
  },
  rule: {
    desc: "adds a rule to a contract path, two args: [path] [value]",
    nargs: 2
  }, 
  define: {
    desc: "defines the type of a contract path, two args: [path] [value]",
    nargs: 2
  },
  // TODO
  // repost: {
  //   desc: "reposts a post from another contract",
  // },
  // create: {
  //   desc: "creates an object at a contract path",
  // },
  // send: {
  //   desc: "sends an object to another contract",
  // },
  // receive: {
  //   desc: "receives an object from another contract",
  // },
};

import DotContractFile from "@dotcontract/file/DotContractFile";
import Contract from "@dotcontract/contract/Contract";
import Commit, { METHODS } from "@dotcontract/contract/Commit";

export async function handler(argv) {
  let {
    contract,
    input,
    output,
    dir,
    body,
    bodyFromFile,
    sign,
    attach,
    post,
    rule,
    define,
    // repost,
    // create,
    // send,
    // receive,
  } = argv;
  const in_dotcontract_dir = false;
  if (!contract && !input && !output && !dir && !in_dotcontract_dir) {
    console.error(
      `ERROR: Contract required:
*  use --contract for in-place modification of a .contract
*  use --input and --output to save a modified .contract elsewhere
*  use --dir or run this command within a .contract directory to work on it
  `
    );
  }
  if (!post && !rule && !define && !body && !bodyFromFile) {
    console.error("Missing required argument: body or bodyFromFile or a particular action like post, rule, or define");
    return;
  }
  if (bodyFromFile) {
    body = fs.readFileSync(bodyFromFile);
  } else if (!body) {
    body = "";
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
  await pf.commit("POST", body, meta);
  await pf.saveTo(output || contract);
}

export default handler;
