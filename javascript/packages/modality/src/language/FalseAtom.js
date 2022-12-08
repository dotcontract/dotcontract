import BaseFormula from './BaseFormula';

export default class FalseAtom extends BaseFormula {
  constructor() {
    super();
  }

  getValue(ctx) {
    return false;
  }

  expandFunctions() {
    return {
      constraint: `false`,
      functions: {},
    };
  }

  toModalFormula() {
    return `false`;
  }
}