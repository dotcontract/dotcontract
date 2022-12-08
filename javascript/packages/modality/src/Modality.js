import Constraint from "./Constraint.js";
import Expression from "./language/Expression.js";
export default class Modality {
  static expandConstraintFunctions(constraint) {
    const c = new Constraint(constraint);
    return c.expandFunctions();
  }

  static toModalFormula(text) {
    const expr = new Expression(text);
    return expr.toModalFormula();
  }
}