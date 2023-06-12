import BaseFormula from "./BaseFormula.js";

export default class CanMacro extends BaseFormula {
  constructor(formula) {
    super();
    this.formula = formula;
  }

  // TODO
  getValue(ctx) {
    return true;
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
    return `<${this.formula.toModalFormula()}> true`;
  }
}
