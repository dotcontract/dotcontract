import CommitAction from "./CommitAction.js";
import JSONHash from "@dotcontract/utils/JSONHash";
export default class Commit {
  constructor() {
    this.body = [];
    this.head = {};
    return this;
  }

  act({ method, path, value }) {
    const ca = new CommitAction({ method, path, value });
    ca.validateOrThrow();
    if (this.getRoutePaths().includes(path)) {
      throw new Error(`cannot post to same path ${path} within one commit`);
    }
     this.body.push(ca.toJSON());
  }

  getRoutePaths() {
    return this.body.map((p) => p.path);
  }

  addPost(path, value) {
    this.act({ method: "post", path, value });
  }

  addRule(value) {
    this.act({ method: "rule", path: null, value });
  }

  static fromJSON({ body, head }) {
    const actions = [];
    for (const part of body) {
      const ca = new CommitAction(part);
      ca.validateOrThrow();
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
