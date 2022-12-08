import antlr4 from "antlr4";

import Parser from "../../grammars/build/ModalFormulaParser.js";
import Lexer from "../../grammars/build/ModalFormulaLexer.js";
import Visitor from "./Visitor.js";
import { unionOfSets, setMinus } from "@dotcontract/utils/sets";

import BaseFormula from './BaseFormula';

export {default as PropsAtom} from './PropsAtom';
export {default as TrueAtom} from './TrueAtom';
export {default as FalseAtom} from './FalseAtom';
export {default as AndFormula} from './AndFormula';
export {default as OrFormula} from './OrFormula';
export {default as NotFormula} from './NotFormula';
export {default as BoxFormula} from './BoxFormula';
export {default as DiamondFormula} from './DiamondFormula';
export {default as GfpFormula} from './GfpFormula';
export {default as LfpFormula} from './LfpFormula';
export {default as BoundVar} from './BoundVar';
class ThrowingErrorListener extends antlr4.error.ErrorListener {
  constructor() {
      super();
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
      // console.error("line " + line + ":" + column + " " + msg);
      throw new Error(`Parsing ERROR: ${offendingSymbol} line ${line}, col ${column}: ${msg}`);
  }
}

export class ModalFormula {
  constructor(input, defaultTo = null) {
    if (typeof input === "string") {
      if (input.match(/^\s*$/)) {
        return defaultTo ? new TrueAtom() : new FalseAtom();
      }
      const parser = this.constructor.parse(input);
      parser.removeErrorListeners();
      parser.addErrorListener(new ThrowingErrorListener())
      const formula = parser.formula();
      const visitor = new Visitor();
      return visitor.visit(formula)[0];
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

export default ModalFormula;
