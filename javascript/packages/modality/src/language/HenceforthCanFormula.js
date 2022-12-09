import BaseFormula from './BaseFormula.js';

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