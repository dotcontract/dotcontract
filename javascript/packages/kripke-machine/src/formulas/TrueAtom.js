import BaseFormula from "./BaseFormula.js";

export default class TrueAtom extends BaseFormula {
  constructor() {
    super();
  }

  getValue(ctx) {
    return true;
  }

  getFreeVars() {
    return new Set();
  }

  getBoundVars() {
    return new Set();
  }

  toText() {
    return `true`;
  }
}
