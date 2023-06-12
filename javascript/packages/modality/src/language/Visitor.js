import AbstractVisitor from "../../grammars/build/ModalityVisitor.js";

import {
  TrueAtom,
  FalseAtom,
  FunctionAtom,
  PropAtom,
  PropsAtom,
  AndFormula,
  OrFormula,
  NotFormula,
  WhenAlsoFormula,
  WhenNextFormula,
  HenceforthCanFormula,
  HenceforthMustFormula,
  BoxFormula,
  DiamondFormula,
  GfpFormula,
  LfpFormula,
  Path,
  SignedProp,
  MustMacro,
  CanMacro,
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

  visitPathArg(ctx) {
    const str = ctx.getText();
    return new Path(str);
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

  visitWhenNextFormula(ctx) {
    const when_formula = this.visit(ctx.when_formula);
    const next_formula = this.visit(ctx.next_formula);
    return new WhenNextFormula(when_formula, next_formula);
  }

  visitHenceforthMustFormula(ctx) {
    const inner_formula = this.visit(ctx.inner_formula);
    const until_formula = ctx.until_formula
      ? this.visit(ctx.until_formula)
      : null;
    return new HenceforthMustFormula(inner_formula, until_formula);
  }

  visitHenceforthCanFormula(ctx) {
    const inner_formula = this.visit(ctx.inner_formula);
    const until_formula = ctx.until_formula
      ? this.visit(ctx.until_formula)
      : null;
    return new HenceforthCanFormula(inner_formula, until_formula);
  }

  visitPropsAtom(ctx) {
    const unsigned_actions = ctx.unsignedProp()
      ? [this.visit(ctx.unsignedProp())]
      : [];
    const signed_actions = Array.from(ctx.signedProp()).map((signed_action) => {
      const val = this.visit(signed_action);
      return val;
    });
    return new PropsAtom([...unsigned_actions, ...signed_actions]);
  }

  visitUnsignedProp(ctx) {
    const prop = this.visit(ctx.theProp);
    return new SignedProp(true, prop);
  }

  visitSignedProp(ctx) {
    const sign = ctx.theSign ? this.visit(ctx.theSign) : "+";
    const prop = this.visit(ctx.theProp);
    const sign_as_pseudobool = (() => {
      if (sign === "+") {
        return true;
      } else if (sign === "-") {
        return false;
      } else {
        return null;
      }
    })();
    return new SignedProp(sign_as_pseudobool, prop);
  }

  visitSign(ctx) {
    let str = ctx.getText();
    return str;
  }

  visitProp(ctx) {
    let str = ctx.getText();
    return str;
  }

  visitEmptyBoxFormula(ctx) {
    const inner = new PropsAtom([]);
    const outer = this.visit(ctx.outer);
    return new BoxFormula(inner, outer);
  }

  visitEmptyDiamondFormula(ctx) {
    const inner = new PropsAtom([]);
    const outer = this.visit(ctx.outer);
    return new DiamondFormula(inner, outer);
  }

  visitBoxFormula(ctx) {
    const inner = this.visit(ctx.inner);
    const outer = this.visit(ctx.outer);
    return new BoxFormula(inner, outer);
  }

  visitDiamondFormula(ctx) {
    const inner = this.visit(ctx.inner);
    const outer = this.visit(ctx.outer);
    return new DiamondFormula(inner, outer);
  }

  visitLfpFormula(ctx) {
    const bound_var = this.visit(ctx.boundVar);
    const inner = this.visit(ctx.inner);
    return new LfpFormula(bound_var, inner);
  }

  visitGfpFormula(ctx) {
    const bound_var = this.visit(ctx.boundVar);
    const inner = this.visit(ctx.inner);
    return new GfpFormula(bound_var, inner);
  }

  visitBoundVar(ctx) {
    let str = ctx.getText();
    // TODO return new BoundVar(str);
    return str;
  }

  visitMustMacro(ctx) {
    const formula = this.visit(ctx.formula());
    return new MustMacro(formula);
  }

  visitCanMacro(ctx) {
    const formula = this.visit(ctx.formula());
    return new CanMacro(formula);
  }
}
