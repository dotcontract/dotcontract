import BaseFormula from "./BaseFormula.js";
import { unionOfSets } from "@dotcontract/utils/sets";

export default class OrFormula extends BaseFormula {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  getValue(ctx) {
    return this.left.getValue(ctx) || this.right.getValue(ctx);
  }

  getProps(ctx) {
    return new unionOfSets(this.left.getProps(), this.right.getProps());
  }

  getSignedProps(ctx) {
    return new unionOfSets(this.left.getSignedProps(), this.right.getSignedProps());
  }

  getFreeVars() {
    return new unionOfSets(this.left.getFreeVars(), this.right.getFreeVars());
  }

  getBoundVars() {
    return new unionOfSets(this.left.getBoundVars(), this.right.getBoundVars());
  }

  toText() {
    return `${this.left.toText()} or ${this.right.toText()}`;
  }
}
