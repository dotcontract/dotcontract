import BaseFormula from "./BaseFormula.js";

export default class AndFormula extends BaseFormula {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  getValue(ctx) {
    return this.left.getValue(ctx) && this.right.getValue(ctx);
  }

  expandFunctions() {
    const left = this.left.expandFunctions();
    const right = this.right.expandFunctions();
    return {
      constraint: `${left.constraint} and ${right.constraint}`,
      functions: {
        ...left.functions,
        ...right.functions,
      },
    };
  }

  toModalFormula() {
    return `${this.left.toModalFormula()} and ${this.right.toModalFormula()}`;
  }
}
