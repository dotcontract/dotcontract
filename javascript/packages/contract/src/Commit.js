import CommitAction from "./CommitAction.js";
import JSONHash from "@dotcontract/utils/JSONHash";
import { Expression as ModalityExpression } from "@dotcontract/modality";

const KNOWN_PATH_DATA_TYPES = ["text", "string", "boolean", "bool", "integer", "int", "number", "num", "balance", "bal", "set", "list", "table"];
const KNOWN_PATH_FILE_TYPES = ["txt", "json", "pdf", "zip", "tar", "html", "png", "jpg", "jpeg", "gif", "svg", "doc", "docx", "xls", "xlsx", "csv"]
const KNOWN_PATH_TYPES = [...KNOWN_PATH_DATA_TYPES, ...KNOWN_PATH_FILE_TYPES];

export default class Commit {
  constructor() {
    this.body = [];
    this.head = {};
    return this;
  }

  act({ method, path, value }) {
    const ca = new CommitAction({ method, path, value });
    if (method === "post") {
      if (path.match(`\\.(.*)\/`)) {
        throw new Error(`Invalid path ${path} contains a '.' nested in the path`);
      }
      if (!path.match(`\\.(${KNOWN_PATH_TYPES.join("|")})$`)) {
        throw new Error(`Cannot post to untyped path ${path} \n
    Use an extension from a known data type: ${KNOWN_PATH_DATA_TYPES.join(", ")}
    or an extension from a known file type: ${KNOWN_PATH_FILE_TYPES.join(", ")}

    For example: ${path}.text
    `);
      }
      const paths_used = this.body.map((p) => p.path);
      if (paths_used.indexOf(path) !== -1) {
        throw new Error(`cannot post to same path ${path} within one commit`);
      }
    } else if (method === "rule") {
      try {
        new ModalityExpression(value);
      } catch(e) {
        throw new Error(`unable to parse rule: ${value}`)
      }
    }
    this.body.push(ca.toJSON());
  }

  post(path, value) {
    this.act({ method: "post", path, value });
  }

  rule(value) {
    this.act({ method: "rule", path: null, value });
  }

  static fromJSON({ body, head }) {
    const actions = [];
    for (const part of body) {
      const ca = new CommitAction(part);
      actions.push(ca);
    }
    const c = new Commit();
    c.body = body;
    c.head = head;
    return c;
  }

  static fromJSONString(str) {
    return this.fromJSON(JSON.parse(str));
  }

  toJSON() {
    return {
      body: this.body,
      head: this.head,
    };
  }

  setHead(key, value) {
    this.head[key] = value;
  }

  async signWith(keys) {
    if (!Array.isArray(keys)) {
      keys = [keys];
    }
    const signatures = this.head.signatures || {};
    for (const key of keys) {
      const by = await key.asPublicMultiaddress();
      const signature = await key.signJSON(this.body);
      signatures[by] = signature;
    }
    this.head.signatures = signatures;
  }

  getHash() {
    return JSONHash(this.toJSON());
  }
}
