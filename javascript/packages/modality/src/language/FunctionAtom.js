import BaseFormula from "./BaseFormula.js";

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

  toModalFormula() {
    const funcCallPropName = functionCallToPropName(this.name, this.args);
    return `${funcCallPropName}`;
  }
}
