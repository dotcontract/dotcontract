import BaseFormula from './BaseFormula.js';

export default class Path extends BaseFormula {
  constructor(str) {
    super();
    this.str = str;
    return this;
  }

  // TODO
  getValue(ctx) {
    return false;
  }

  // TODO
  expandFunctions() {
    return {
      constraint: `false`,
      functions: {},
    };
  }

  // TODO
  toModalFormula() {
    return `false`;
  }
}