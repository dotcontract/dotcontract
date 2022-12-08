import AbstractVisitor from "../grammars/build/PropositionalFormulaVisitor.js";
import Parser from "../grammars/build/PropositionalFormulaParser.js";

import {
  TrueAtom,
  FalseAtom,
  PropAtom,
  AndFormula,
  OrFormula,
  NotFormula,
} from "./PropositionalFormula.js";

export default class PropositionalFormulaVisitor extends AbstractVisitor {
  visitTrueAtom(ctx) {
    return new TrueAtom();
  }

  visitFalseAtom(ctx) {
    return new FalseAtom();
  }

  visitNotFormula(ctx) {
    const formula = this.visit(ctx.inner);
    return new NotFormula(formula);
  }

  visitParenFormula(ctx) {
    return this.visit(ctx.inner);
  }

  visitOrFormula(ctx) {
    const left = this.visit(ctx.left);
    const right = this.visit(ctx.right);
    return new OrFormula(left, right);
  }

  visitAndFormula(ctx) {
    const left = this.visit(ctx.left);
    const right = this.visit(ctx.right);
    return new AndFormula(left, right);
  }

  visitPropAtom(ctx) {
    return new PropAtom(ctx.prop.text);
  }
}
