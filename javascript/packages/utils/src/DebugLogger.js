import { logger } from "@libp2p/logger";

export default class Logger {
  constructor(scope) {
    this.scope = null;
    this.logger = logger(scope ? `dotcontract:${scope}` : "dotcontract");
    return this;
  }

  log(msg) {
    if (msg instanceof AggregateError) {
      for (const e of msg.errors) {
        this.logger(e);
      }
    } else {
      this.logger(msg);
    }
  }
}