export default class Context {
  constructor(values = {}, funcs = {}) {
    this.values = values;
    this.funcs = funcs;
    return this;
  }

  setValue(key, value) {
    this.values[key] = value;
  }

  getValues() {
    return this.values;
  }

  callFunction(name, args) {
    //
    if (this.funcs[name]) {
      return this.callBuiltinFunction(name, args);
    } else {
      throw new Error(`Unknown function: ${name}`);
    }
  }

  callBuiltinFunction(name, args) {
    const func = this.funcs[name];
    const ctx = this.getValues();
    return func.withArgs(...(args || [])).evaluate(ctx);
  }

  callUserFunction(name, args) {}
}
