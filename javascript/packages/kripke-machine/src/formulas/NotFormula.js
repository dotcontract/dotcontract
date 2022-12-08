import BaseFormula from './BaseFormula';

export default class NotFormula extends BaseFormula {
  constructor(formula) {
    super();
    this.formula = formula;
  }

  getValue(ctx) {
    return !this.formula.getValue(ctx);
  }

  getFreeVars() {
    return new Set(this.formula.getFreeVars());
  }

  getBoundVars() {
    return new Set();
  }

  toText() {
    return `not (${this.inner.toText()})`;
  }

}