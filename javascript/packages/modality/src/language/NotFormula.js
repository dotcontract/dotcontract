import BaseFormula from "./BaseFormula.js";

export default class NotFormula extends BaseFormula {
  constructor(formula) {
    super();
    this.formula = formula;
  }

  getValue(ctx) {
    return !this.formula.getValue(ctx);
  }

  expandFunctions() {
    const formula = this.formula.expandFunctions();
    return {
      constraint: `not (${formula.constraint})`,
      functions: {
        ...formula.functions,
      },
    };
  }

  toModalFormula() {
    return `not ${this.inner.toModalFormula()}`;
  }
}
