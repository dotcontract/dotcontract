import Functions from './Functions.js';

export default class Context {
  constructor(values = {}) {
    this.values = values;
    return this;
  }

  setValue(key, value) {
    this.values[key] = value;
  }

  getValues() {
    return this.values;
  }

  callFunction(name, args) {
    if (Functions.allFunctions[name]) {
      return this.callBuiltinFunction(name, args);
    // } else if (this.userFunctions[])
    } else {
      throw new Error(`Unknown function: ${name}`);
    }
  }

  callBuiltinFunction(name, args) {
    const func = Functions.allFunctions[name]
    const ctx = this.getValues();
    return func(ctx, ...(args || []))
  }

  callUserFunction(name, args) {
  }
}