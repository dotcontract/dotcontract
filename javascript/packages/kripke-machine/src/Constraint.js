import PropositionalFormula from "./PropositionalFormula.js";

const GUARD_CONSTRAINT_MATCHER =
  /^\s*?alwaysMust\s+\((.*?)\)\s*?(until\s+?\((.*?)\))?\s*?$/;
export default class Constraint {
  constructor(str) {
    const match = str.match(GUARD_CONSTRAINT_MATCHER);
    if (!match) {
      throw new Error(`Constraint string not valid for Guard Machine. ${str}`,);
    }
    const always_formula_string = match[1];
    const until_formula_string = match[3];
    this.string = str;
    this.always_formula_string = always_formula_string;
    this.always_formula = always_formula_string
      ? new PropositionalFormula(always_formula_string, true)
      : null;
    this.until_formula_string = until_formula_string;
    this.until_formula = until_formula_string
      ? new PropositionalFormula(until_formula_string, false)
      : null;
    return this;
  }

  getFreeProps() {
    return new Set([
      ...(this.always_formula?.getFreeProps() || []),
      ...(this.until_formula?.getFreeProps() || []),
    ]);
  }
}
