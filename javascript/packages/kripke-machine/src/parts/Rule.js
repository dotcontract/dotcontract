import ModalFormula from "../formulas/ModalFormula.js";
export default class Rule {
  constructor(text, root_states) {
    this.modal_formula_text = text;
    this.modal_formula = new ModalFormula(text);
    this.root_states = root_states;
  }

  clone() {
    return new Rule(this.modal_formula_text, [...this.root_states]);
  }
}