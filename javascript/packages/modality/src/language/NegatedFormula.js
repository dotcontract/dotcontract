import BaseFormula from "./BaseFormula.js";

export default class NegatedFormula extends BaseFormula {
  constructor(formula) {
    super();
    this.formula = formula;
  }

  getValue(ctx) {
    return !this.formula.getValue(ctx);
  }

  negated() {
    return this.formula;
  }

  toModalFormula() {
    return `-${this.formula.toModalFormula()}`;
  }
}
