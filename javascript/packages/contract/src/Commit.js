export const METHODS = [
  "post",
  "define",
  "constrain",
  "repost",
  "create",
  "send",
  "receive",
];

export default class Commit {
  constructor({ method, content, meta }) {
    if (!METHODS.includes(method)) {
      throw new Error(`unknown method: ${method}`);
    }
    this.method = method;
    this.content = content;
    this.meta = meta;
    return this;
  }
}
