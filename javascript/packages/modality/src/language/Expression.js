import antlr4 from "antlr4";

import Parser from "../../grammars/build/ModalityParser.js";
import Lexer from "../../grammars/build/ModalityLexer.js";
import Visitor from "./Visitor.js";

import BaseFormula from "./BaseFormula.js";

export { default as PropAtom } from "./PropAtom.js";
export { default as TrueAtom } from "./TrueAtom.js";
export { default as FalseAtom } from "./FalseAtom.js";
export { default as AndFormula } from "./AndFormula.js";
export { default as OrFormula } from "./OrFormula.js";
export { default as NotFormula } from "./NotFormula.js";
export { default as WhenAlsoFormula } from "./WhenAlsoFormula.js";
export { default as WhenNextFormula } from "./WhenNextFormula.js";
export { default as FunctionAtom } from "./FunctionAtom.js";
export { default as HenceforthCanFormula } from "./HenceforthCanFormula.js";
export { default as HenceforthMustFormula } from "./HenceforthMustFormula.js";
export { default as BoxFormula } from './BoxFormula.js';
export { default as DiamondFormula } from './DiamondFormula.js';
export { default as GfpFormula } from './GfpFormula.js';
export { default as LfpFormula } from './LfpFormula.js';
export { default as Path } from './Path.js';
class CustomErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    throw new Error(
      `Parsing ERROR: ${offendingSymbol} line ${line}, col ${column}: ${msg}`
    );
  }

  reportAmbiguity(
    recognizer,
    dfa,
    startIndex,
    stopIndex,
    exact,
    ambigAlts,
    configs
  ) {}

  reportAttemptingFullContext(
    recognizer,
    dfa,
    startIndex,
    stopIndex,
    conflictingAlts,
    configs
  ) {}

  reportContextSensitivity(
    recognizer,
    dfa,
    startIndex,
    stopIndex,
    prediction,
    configs
  ) {}
}
export class Expression {
  constructor(input, defaultTo = null) {
    if (typeof input === "string") {
      if (input.match(/^\s*$/)) {
        return defaultTo ? new TrueAtom() : new FalseAtom();
      }
      const parser = this.constructor.parse(input);
      parser.removeErrorListeners();
      parser.addErrorListener(new CustomErrorListener());
      const formula = parser.expression();
      // console.log(antlr4.tree.Trees.toStringTree(formula, parser.ruleNames));
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

export default Expression;
