import BaseFormula from './BaseFormula.js';

export default class TrueAtom extends BaseFormula {
  constructor() {
    super();
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
    return `true`;
  }
}