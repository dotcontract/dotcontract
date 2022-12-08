import BaseFormula from './BaseFormula';

export default class HenceforthCanFormula extends BaseFormula {
  constructor(formula) {
    super();
    this.formula = formula;
    return this;
  }

  toModalFormula() {
    throw new Error('not yet implemented');
  }
}