import BaseFormula from "./BaseFormula.js";
import TrueAtom from './TrueAtom.js';

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

  negated() {
    return new TrueAtom();
  }
}
