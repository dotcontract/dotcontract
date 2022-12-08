import Evolution from "./Evolution";
export default class Step {
  constructor(properties_text, opts = {}) {
    this.properties_text = properties_text;
    this.rule_text = opts.rule_text;
    this.evolution_json = opts.evolution_json;
    return this;
  }

  hasRule() {
    return !!this.rule_text;
  }

  getEvolution() {
    if (!this.evolution_json) { return null; }
    return new Evolution(this.evolution_json);
  }
}