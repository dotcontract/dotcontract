import Expression from "./language/Expression.js";
export default class Modality {
  static toModalFormula(text) {
    const expr = new Expression(text);
    return expr.toModalFormula();
  }
}
