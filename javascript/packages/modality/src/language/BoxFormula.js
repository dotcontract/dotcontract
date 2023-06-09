import BaseFormula from "./BaseFormula.js";
import { unionOfSets } from "@dotcontract/utils/sets";

export default class BoxFormula extends BaseFormula {
  constructor(inner, outer) {
    super();
    this.inner = inner;
    this.outer = outer;
  }

  getValue(ctx) {
    return true; // TODO
  }

  getFreeVars(ctx) {
    return new unionOfSets(this.inner.getFreeVars(), this.outer.getFreeVars());
  }

  getBoundVars(ctx) {
    return new unionOfSets(
      this.inner.getBoundVars(),
      this.outer.getBoundVars()
    );
  }

  toText() {
    return `[${this.inner.toText()}] ${this.outer.toText()}`;
  }
}
