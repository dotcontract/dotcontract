export const METHODS = [
  "post",
  "rule",
  "define",
  "repost",
  "create",
  "send",
  "receive",
];

export default class Commit {
  constructor({ body, head }) {
    for (const part of body) {
      if (!METHODS.includes(part.method)) {
        throw new Error(`unknown method: ${method}`);
      }
    }
    this.body = body;
    this.head = head;
    return this;
  }
}
