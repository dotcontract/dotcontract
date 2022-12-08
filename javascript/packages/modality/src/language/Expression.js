import antlr4 from "antlr4";

import Parser from "../../grammars/build/ModalityParser.js";
import Lexer from "../../grammars/build/ModalityLexer.js";
import Visitor from "./Visitor.js";

import BaseFormula from "./BaseFormula";

export { default as PropAtom } from "./PropAtom";
export { default as TrueAtom } from "./TrueAtom";
export { default as FalseAtom } from "./FalseAtom";
export { default as AndFormula } from "./AndFormula";
export { default as OrFormula } from "./OrFormula";
export { default as NotFormula } from "./NotFormula";
export { default as WhenAlsoFormula } from "./WhenAlsoFormula";
export { default as FunctionAtom } from "./FunctionAtom";
export { default as HenceforthCanFormula } from './HenceforthCanFormula';
export { default as HenceforthMustFormula } from './HenceforthMustFormula';
export class Expression {
  constructor(input, defaultTo = null) {
    if (typeof input === "string") {
      if (input.match(/^\s*$/)) {
        return defaultTo ? new TrueAtom() : new FalseAtom();
      }
      const parser = this.constructor.parse(input);
      parser.removeErrorListeners();
      parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, column, msg, err) => {
          throw new Error(
            `Parsing ERROR: ${offendingSymbol} line ${line}, col ${column}: ${msg}`
          );
        },
      });
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
