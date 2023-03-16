export const METHODS = [
  "post",
  "rule",
  "define",
  "repost",
  "create",
  "send",
  "receive",
];

export default class CommitAction {
  constructor({ method, path, value }) {
    if (!METHODS.includes(method)) {
      throw new Error(`unknown method: ${method}`);
    }
    this.method = method;
    this.path = path;
    this.value = value;
    return this;
  }

  toJSON() {
    return {
      method: this.method,
      path: this.path,
      value: this.value
    }
  }
}
