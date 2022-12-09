import BaseFormula from './BaseFormula';

export default class HenceforthMustFormula extends BaseFormula  {
  constructor(inner_formula, until_formula) {
    super();
    this.inner_formula = inner_formula;
    this.until_formula = until_formula;
    return this;
  }

  expandFunctions() {
    const inner_formula = this.inner_formula.expandFunctions();
    const until_formula = this.until_formula.expandFunctions();
    return {
      constraint: `${inner_formula.constraint} and ${until_formula.constraint}`,
      functions: {
        ...inner_formula.functions,
        ...until_formula.functions,
      },
    };
  }

  toModalFormula() {
    if (this.until_formula) {
      throw new Error("not yet implemented");
    }
    return `gfp(@x, [*]@x and ${this.inner_formula.toModalFormula()})`
  }
}