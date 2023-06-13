import BaseFormula from "./BaseFormula.js";
import NegatedFormula from "./NegatedFormula.js";

import { functionCallToPropName } from "../Functions.js";

export default class FunctionAtom extends BaseFormula {
  constructor(name, args) {
    super();
    this.name = name;
    this.args = args;
  }

  getValue(ctx) {
    return ctx.callFunction(this.name, this.args);
  }

  expandFunctions() {
    const funcCallPropName = functionCallToPropName(this.name, this.args);
    return {
      constraint: funcCallPropName,
      functions: {
        [funcCallPropName]: (ctx) => {
          return ctx.callFunction(this.name, this.args);
        },
      },
    };
  }

  negated({ filterMaybe = false } = {}) {
    return new NegatedFormula(this);
  }

  toModalFormula() {
    const funcCallPropName = functionCallToPropName(
      this.name,
      this.args.map((i) => (i.toFunctionArg ? i.toFunctionArg() : i))
    );
    return `${funcCallPropName}`;
  }
}
