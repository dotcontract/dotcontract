export const command = "commit";
export const describe = "adds a commit to a contract";
import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";

export const builder = {
  ...CommonContractArgs,
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
  define: {
    desc: "defines the type of a contract path, two args: [path] [value]",
    nargs: 2,
  },
  rule: {
    desc: "adds a rule to a contract, one arg: [rule]",
    nargs: 1,
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

import DotContractFile from "@dotcontract/file";
import Contract from "@dotcontract/contract/Contract";
import Commit, { METHODS } from "@dotcontract/contract/Commit";

export async function handler(argv) {
  let {
    // body,
    // bodyFromFile,
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
  const { dotcontract_file: dcf } = await ensureContractArgs(argv);

  if (!post && !rule && !define && !body && !bodyFromFile) {
    console.error(
      "Missing required argument: body or bodyFromFile or a particular action like post, rule, or define"
    );
    return;
  }
  // if (bodyFromFile) {
  //   body = fs.readFileSync(bodyFromFile);
  // } else if (!body) {
  //   body = "";
  // }
  // try {
  //   body = JSON.parse(body);
  // } catch (e) {
  //   console.error("Unable to parse body.");
  //   console.error(e);
  //   return;
  // }
  const body = [];
  if (post && post.length) {
    for (let i = 0; i < post.length / 2; i++) {
      const path = post[i];
      const value = post[i+1];
      body.push({
        method: 'post',
        path,
        value
      });
    }
  }
  const head = {}; // adding signing
  await dcf.commit({body, head});
  await dcf.save();
}

export default handler;
