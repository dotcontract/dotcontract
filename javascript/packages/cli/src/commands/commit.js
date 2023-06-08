export const command = "commit";
export const describe = "adds a commit to a contract";
import { CommonContractArgs, ensureContractArgs } from "../lib/ContractArgs.js";
import fs from "fs";

export const builder = {
  ...CommonContractArgs,
  body: {
    desc: "commit body in standard format [text]",
  },
  bodyFromFile: {
    desc: "commit body in standard format from a local file [filepath]",
  },
  sign: {
    desc: "signs a commit using your default dotcontract keypair ($HOME/.dotcontract/default.keypair)",
  },
  "sign-with": {
    desc: "signs a commit using the given keypair file [filepath]",
    nargs: 1,
    array: true,
  },
  message: {
    alias: "m",
    desc: "include a message with a commit [text]",
  },
  post: {
    desc: "posts a value to a contract path, two args: [path] [value]",
    array: true,
    nargs: 2,
  },
  rule: {
    desc: "adds a rule to a contract, one arg: [rule]",
    array: true,
    nargs: 1,
  },
  evolution: {
    desc: "evolves kripke machine, one arg: [evolution.json]",
  },
  // TODO
  // define: {
  //   desc: "defines the type of a contract path, two args: [path] [value]",
  //   array: true,
  //   nargs: 2,
  // },
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

import os from "os";
import path from "path";
import DotContractFile from "@dotcontract/file";
import Contract, { Commit, Route } from "@dotcontract/contract";
import Key from "@dotcontract/utils/Key";
import FileHash from "@dotcontract/utils/FileHash";

export async function handler(argv) {
  let {
    message,
    body,
    bodyFromFile,
    sign,
    ["sign-with"]: sign_with,
    post,
    rule,
    evolution,
    // define,
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
    console.error("Input as body not yet implemented");
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
  const attachments = [];
  if (post && post.length) {
    for (let i = 0; i < post.length; i = i + 2) {
      const path = post[i];
      let value;
      if (Route.isPrimitive(post[i])) {
        value = post[i + 1];
      } else if (Route.isAttachment(post[i])) {
        const filepath = post[i + 1];
        const attachment_hash = FileHash(filepath);
        value = `attachment://${attachment_hash}`;
        attachments.push({
          path,
          filepath,
        });
      } else {
        throw new Error(`Cannot post to route ${path} \n
You can only post to routes of known types. \n
Primitive file types: ${Route.getPrimitiveTypes().join(", ")}\n
Attachment file type: ${Route.getAttachmentTypes().join(", ")}
    
For example: ${path}.text
        `);
      }
      c.addPost(path, value);
    }
  }
  if (rule && rule.length) {
    for (let i = 0; i < rule.length; i++) {
      const value = rule[i];
      c.addRule(value);
    }
  }

  if (message) {
    c.setHead("message", message);
  }

  if (evolution) {
    c.setHead("evolution", JSON.parse(fs.readFileSync(evolution)));
  }

  const signing_keys = [];
  if (sign) {
    const keypair_path = path.resolve(
      `${os.homedir}/.dotcontract/default.keypair`
    );
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

  if (!dcf.directory.contract.canAppendCommitFromJson(c.toJSON())) {
    throw new Error("Unable to append commit to contract.");
  }

  await dcf.commit(c.toJSON());

  for (const attachment of attachments) {
    await dcf.attach(attachment);
  }
  await dcf.save();
}

export default handler;
