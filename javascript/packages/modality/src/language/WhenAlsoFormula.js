import BaseFormula from "./BaseFormula";

export default class WhenAlsoFormula extends BaseFormula {
  constructor(when_formula, also_formula) {
    super();
    this.when_formula = when_formula;
    this.also_formula = also_formula;
  }

  getValue(ctx) {
    return true;
  }

  expandFunctions() {
    return {
      constraint: `true`,
      functions: {},
    };
  }

  toModalFormula() {
    return `not ${this.when_formula.toModalFormula()} or ${this.also_formula.toModalFormula()}`;
  }
}
