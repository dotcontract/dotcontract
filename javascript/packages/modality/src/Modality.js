import Expression from "./language/Expression.js";

import TestFunction from "./TestFunction.js";
import Test from "./Test.js";

export const SIGNS = {
  TRUE: '+',
  FALSE: '-',
  MAYBE: '?'
}
export default class Modality {
  static SIGNS = SIGNS
  
  static escapeArgs = TestFunction.escapeArgs;
  static unescapeArgs = TestFunction.unescapeArgs;

  static toModalFormula(text) {
    const expr = new Expression(text);
    return expr.toModalFormula();
  }

  static createTestFunction(name) {
    return new TestFunction(name);
  }

  constructor() {
    this.test_functions = {};
    return this;
  }

  registerTestFunction(tf) {
    this.test_functions[tf.name] = tf;
  }

  getAllTestFunctions() {
    return Object.values(this.test_functions);
  }

  getTestFunction(name) {
    const tf = this.test_functions[name];
    if (!tf) {
      throw new Error(`test '${name}' not found`);
    }
    return tf;
  }
}
