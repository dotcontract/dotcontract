import BaseFormula from "./BaseFormula.js";
import { unionOfSets, setMinus } from "@dotcontract/utils/sets";

export default class GfpFormula extends BaseFormula {
  constructor(state_set_variable, inner) {
    super();
    this.state_set_variable = state_set_variable;
    this.inner = inner;
  }

  getValue(ctx) {
    return true; // TODO
  }

  getFreeVars(ctx) {
    return new setMinus(
      this.inner.getFreeVars(),
      this.state_set_variable.toText()
    );
  }

  getBoundVars(ctx) {
    return new unionOfSets(
      this.inner.getBoundVars(),
      this.state_set_variable.toText()
    );
  }

  toText() {
    return `gfp(${this.state_set_variable.toText()}, ${this.inner.toText()})`;
  }

  toModalFormula() {
    return `gfp(${this.state_set_variable.toModalFormula()}, ${this.inner.toModalFormula()})`;
  }
}
