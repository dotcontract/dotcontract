import BaseFormula from "./BaseFormula.js";

export default class OrFormula extends BaseFormula {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  getValue(ctx) {
    return this.left.getValue(ctx) || this.right.getValue(ctx);
  }

  expandFunctions() {
    const left = this.left.expandFunctions();
    const right = this.right.expandFunctions();
    return {
      constraint: `${left.constraint} or ${right.constraint}`,
      functions: {
        ...left.functions,
        ...right.functions,
      },
    };
  }

  toModalFormula() {
    return `${this.left.toModalFormula()} or ${this.right.toModalFormula()}`;
  }
}
