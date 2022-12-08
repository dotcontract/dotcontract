import antlr4 from "antlr4";

import Parser from "../grammars/build/PropositionalFormulaParser.js";
import Lexer from "../grammars/build/PropositionalFormulaLexer.js";
import Visitor from "./PropositionalFormulaVisitor.js";
import { unionOfSets } from "@dotcontract/utils/sets";

class BaseFormula {
  constructor() {
    return this;
  }
}

export class TrueAtom extends BaseFormula {
  constructor() {
    super();
  }

  getValue(ctx) {
    return true;
  }

  getFreeProps() {
    return new Set();
  }
}
export class FalseAtom extends BaseFormula {
  constructor() {
    super();
  }

  getValue(ctx) {
    return false;
  }

  getFreeProps() {
    return new Set();
  }
}

export class PropAtom extends BaseFormula {
  constructor(text) {
    super();
    this.text = text;
  }

  getValue(ctx) {
    return !!ctx?.[this.text];
  }

  getFreeProps() {
    return new Set([this.text]);
  }
}
export class AndFormula extends BaseFormula {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  getValue(ctx) {
    return this.left.getValue(ctx) && this.right.getValue(ctx);
  }

  getFreeProps() {
    return new unionOfSets(this.left.getFreeProps(), this.right.getFreeProps());
  }
}

export class OrFormula extends BaseFormula {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  getValue(ctx) {
    return this.left.getValue(ctx) || this.right.getValue(ctx);
  }

  getFreeProps() {
    return new unionOfSets(this.left.getFreeProps(), this.right.getFreeProps());
  }
}

export class NotFormula extends BaseFormula {
  constructor(formula) {
    super();
    this.formula = formula;
  }

  getValue(ctx) {
    return !this.formula.getValue(ctx);
  }

  getFreeProps() {
    return new Set(this.formula.getFreeProps());
  }
}

export class PropositionalFormula {
  constructor(input, defaultTo = null) {
    if (typeof input === "string") {
      if (input.match(/^\s*$/)) {
        return defaultTo ? new TrueAtom() : new FalseAtom();
      }
      const parser = this.constructor.parse(input);
      const formula = parser.formula();
      const visitor = new Visitor();
      return visitor.visit(formula);
    } else if (input?.prototype instanceof BaseFormula) {
      return input;
    } else {
      throw new Error("not a formula");
    }
  }

  static parse(text) {
    const chars = new antlr4.InputStream(text);
    const lexer = new Lexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new Parser(tokens);
    parser.buildParseTrees = true;
    return parser;
  }
}

export default PropositionalFormula;
