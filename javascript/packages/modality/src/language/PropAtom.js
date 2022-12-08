import BaseFormula from './BaseFormula';

export default class PropAtom extends BaseFormula {
  constructor(text) {
    super();
    this.text = text;
  }

  getValue(ctx) {
    return !!ctx?.[this.text];
  }

  expandFunctions() {
    return {
      constraint: this.text,
      functions: {},
    };
  }
}