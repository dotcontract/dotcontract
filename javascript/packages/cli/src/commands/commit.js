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
  'sign': {
    desc: "signs a commit using your default dotcontract keypair ($HOME/.dotcontract/default.keypair)",
  },
  'sign-with': {
    desc: "signs a commit using the given keypair file [filepath]",
    nargs: 1,
    array: true
  },
  attach: {
    desc: "attaches a file to a commit [filepath]",
  },
  post: {
    desc: "posts a value to a contract path, two args: [path] [value]",
    array: true,
    nargs: 2,
  },
  define: {
    desc: "defines the type of a contract path, two args: [path] [value]",
    array: true,
    nargs: 2,
  },
  rule: {
    desc: "adds a rule to a contract, one arg: [rule]",
    array: true,
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

import os from 'os';
import path from 'path';
import DotContractFile from "@dotcontract/file";
import Contract, { Commit, CommitAction } from "@dotcontract/contract";
import Key from '@dotcontract/utils/Key';

export async function handler(argv) {
  let {
    body,
    bodyFromFile,
    sign,
    ['sign-with']: sign_with,
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
    return process.exit(-1);
  }
  // TODO
  if (body || bodyFromFile) {
    console.error(
      "Input as body not yet implemented"
    );
    return process.exit(-1);
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

  const c = new Commit();
  if (post && post.length) {
    for (let i = 0; i < post.length; i = i + 2) {
      const path = post[i];
      const value = post[i + 1];
      c.post(path, value);
    }
  }
  if (rule && rule.length) {
    for (let i = 0; i < rule.length; i++) {
      const value = rule[i];
      c.rule(value);
    }
  }

  const signing_keys = [];
  if (sign) {
    const keypair_path = path.resolve(`${os.homedir}/.dotcontract/default.keypair`);
    const key = await Key.fromJSONFile(keypair_path);
    signing_keys.push(key);
  }
  if (sign_with) {
    for (const keypair_path of sign_with) {
      const key = await Key.fromJSONFile(keypair_path);
      signing_keys.push(key);
    } 
  }
  if (signing_keys.length) {
    await c.signWith(signing_keys);
  }

  await dcf.commit(c.toJSON());
  await dcf.save();
}

export default handler;
