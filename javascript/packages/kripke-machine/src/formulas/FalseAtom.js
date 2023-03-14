import BaseFormula from './BaseFormula.js';

export default class FalseAtom extends BaseFormula {
  constructor() {
    super();
  }

  getValue(ctx) {
    return false;
  }

  getFreeVars() {
    return new Set();
  }

  getBoundVars() {
    return new Set();
  }

  toText() {
    return `false`;
  }
}