// Generated from PropositionalFormula.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by PropositionalFormulaParser.

export default class PropositionalFormulaVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by PropositionalFormulaParser#parenFormula.
	visitParenFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PropositionalFormulaParser#falseAtom.
	visitFalseAtom(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PropositionalFormulaParser#andFormula.
	visitAndFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PropositionalFormulaParser#propAtom.
	visitPropAtom(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PropositionalFormulaParser#notFormula.
	visitNotFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PropositionalFormulaParser#orFormula.
	visitOrFormula(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by PropositionalFormulaParser#trueAtom.
	visitTrueAtom(ctx) {
	  return this.visitChildren(ctx);
	}



}