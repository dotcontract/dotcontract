import CommitAction from "./CommitAction.js";
import JSONHash from "@dotcontract/utils/JSONHash";
export default class Commit {
  constructor() {
    this.body = [];
    this.head = {};
    return this;
  }

  act({method, path, value}) {
    const ca = new CommitAction({method, path, value});
    if (method === 'post') {
      const paths_used = this.body.map(p => p.path);
      if (paths_used.indexOf(path) !== -1) {
        throw new Error(`cannot post to same path ${path} within one commit`);
      }
    }
    this.body.push(ca.toJSON());
  }

  post(path, value) {
    this.act({method: 'post', path, value});
  }

  rule(value) {
    this.act({method: 'rule', path: null, value});
  }

  static fromJSON({body, head}) {
    const actions = [];
    for (const part of body) {
      const ca = new CommitAction(part);
      actions.push(ca);
    }
    const c = new Commit()
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
      head: this.head
    }
  }

  setHead(key, value) {
    this.head[key] = value;
  }

  getHash() {
    return JSONHash(this.toJSON());
  }
}
