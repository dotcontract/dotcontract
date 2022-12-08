import AbstractVisitor from "../../grammars/build/ModalityVisitor.js";

import {
  TrueAtom,
  FalseAtom,
  FunctionAtom,
  PropAtom,
  AndFormula,
  OrFormula,
  NotFormula,
  WhenAlsoFormula,
  HenceforthCanFormula,
  HenceforthMustFormula,
} from "./Expression.js";

export default class ModalityVisitor extends AbstractVisitor {
  visitExpression(ctx) {
    return this.visit(ctx.f);
  }

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
    // console.log(ctx.right);
    return new AndFormula(left, right);
  }

  visitPropAtom(ctx) {
    return new PropAtom(ctx.prop.text);
  }

  visitTrueArg(ctx) {
    return true;
  }

  visitFalseARgs(ctx) {
    return false;
  }

  visitStringArg(ctx) {
    let str = ctx.getText();
    // TODO handle escaped etc
    return str.slice(1, -1);
  }

  visitNumberArg(ctx) {
    const str = ctx.getText();
    if (str.indexOf(".") !== -1) {
      return parseFloat(str);
    } else {
      return parseInt(str);
    }
  }

  visitFunctionAtom(ctx) {
    const name = ctx.name.text;
    const args = Array.from(ctx.arg()).map((arg) => {
      const val = this.visit(arg);
      return val;
    });
    return new FunctionAtom(name, args);
  }

  visitWhenAlsoFormula(ctx) {
    const when_formula = this.visit(ctx.when_formula);
    const also_formula = this.visit(ctx.also_formula);
    return new WhenAlsoFormula(when_formula, also_formula);
  }

  visitHenceforthMustFormula(ctx) {
    const inner_formula = this.visit(ctx.inner_formula);
    const until_formula = ctx.until_formula ? this.visit(ctx.until_formula) : null;
    return new HenceforthMustFormula(inner_formula, until_formula);
  }

  visitHenceforthCanFormula(ctx) {
    const inner_formula = this.visit(ctx.inner_formula);
    const until_formula = ctx.until_formula ? this.visit(ctx.until_formula) : null;
    return new HenceforthCanFormula(inner_formula, until_formula);
  }
}
