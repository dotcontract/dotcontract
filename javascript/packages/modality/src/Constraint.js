import Expression from "./language/Expression.js";

const MODALITY_CONSTRAINT_MATCHER =
  /^\s*?alwaysMust\s+\((.*?)\)\s*?(until\s+?\((.*?)\))?\s*?$/;

export default class Constraint {
  constructor(str) {
    const match = str.replace(/\n/g, " ").match(MODALITY_CONSTRAINT_MATCHER);
    if (!match) {
      throw new Error(
        "Constraint string not valid for Guard Machine. Modality does not yet use a full Kripke machine."
      );
    }
    const always_formula_string = match[1];
    const until_formula_string = match[3];
    this.string = str;
    this.always_formula_string = always_formula_string;
    this.always_formula = always_formula_string
      ? new Expression(always_formula_string, true)
      : null;
    this.until_formula_string = until_formula_string;
    this.until_formula = until_formula_string
      ? new Expression(until_formula_string, false)
      : null;
    return this;
  }

  expandFunctions() {
    if (this.always_formula && this.until_formula) {
      const expanded_always_formula = this.always_formula.expandFunctions();
      const expanded_until_formula = this.until_formula.expandFunctions();
      return {
        constraint: `alwaysMust (${expanded_always_formula.constraint}) until (${expanded_until_formula.constraint})`,
        functions: {
          ...expanded_always_formula.functions,
          ...expanded_until_formula.functions,
        },
      };
    } else if (this.always_formula) {
      const expanded_always_formula = this.always_formula.expandFunctions();
      return {
        constraint: `alwaysMust (${expanded_always_formula.constraint})`,
        functions: {
          ...expanded_always_formula.functions,
        },
      };
    }
  }
}
