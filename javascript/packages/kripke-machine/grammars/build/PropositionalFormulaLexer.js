// Generated from PropositionalFormula.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\fJ\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0007\t4\n\t\f\t\u000e\t7\u000b\t\u0003\n\u0006\n",
    ":\n\n\r\n\u000e\n;\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0007\u000bD\n\u000b\f\u000b\u000e\u000bG\u000b\u000b\u0003",
    "\u000b\u0003\u000b\u0002\u0002\f\u0003\u0003\u0005\u0004\u0007\u0005",
    "\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0003\u0002",
    "\u0006\u0004\u0002C\\c|\u0006\u00022;C\\aac|\u0005\u0002\u000b\f\u000f",
    "\u000f\"\"\u0004\u0002\f\f\u000f\u000f\u0002L\u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002",
    "\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0003\u0017\u0003\u0002",
    "\u0002\u0002\u0005\u0019\u0003\u0002\u0002\u0002\u0007\u001b\u0003\u0002",
    "\u0002\u0002\t \u0003\u0002\u0002\u0002\u000b&\u0003\u0002\u0002\u0002",
    "\r*\u0003\u0002\u0002\u0002\u000f-\u0003\u0002\u0002\u0002\u00111\u0003",
    "\u0002\u0002\u0002\u00139\u0003\u0002\u0002\u0002\u0015?\u0003\u0002",
    "\u0002\u0002\u0017\u0018\u0007*\u0002\u0002\u0018\u0004\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0007+\u0002\u0002\u001a\u0006\u0003\u0002",
    "\u0002\u0002\u001b\u001c\u0007v\u0002\u0002\u001c\u001d\u0007t\u0002",
    "\u0002\u001d\u001e\u0007w\u0002\u0002\u001e\u001f\u0007g\u0002\u0002",
    "\u001f\b\u0003\u0002\u0002\u0002 !\u0007h\u0002\u0002!\"\u0007c\u0002",
    "\u0002\"#\u0007n\u0002\u0002#$\u0007u\u0002\u0002$%\u0007g\u0002\u0002",
    "%\n\u0003\u0002\u0002\u0002&\'\u0007c\u0002\u0002\'(\u0007p\u0002\u0002",
    "()\u0007f\u0002\u0002)\f\u0003\u0002\u0002\u0002*+\u0007q\u0002\u0002",
    "+,\u0007t\u0002\u0002,\u000e\u0003\u0002\u0002\u0002-.\u0007p\u0002",
    "\u0002./\u0007q\u0002\u0002/0\u0007v\u0002\u00020\u0010\u0003\u0002",
    "\u0002\u000215\t\u0002\u0002\u000224\t\u0003\u0002\u000232\u0003\u0002",
    "\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003",
    "\u0002\u0002\u00026\u0012\u0003\u0002\u0002\u000275\u0003\u0002\u0002",
    "\u00028:\t\u0004\u0002\u000298\u0003\u0002\u0002\u0002:;\u0003\u0002",
    "\u0002\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<=\u0003",
    "\u0002\u0002\u0002=>\b\n\u0002\u0002>\u0014\u0003\u0002\u0002\u0002",
    "?@\u00071\u0002\u0002@A\u00071\u0002\u0002AE\u0003\u0002\u0002\u0002",
    "BD\n\u0005\u0002\u0002CB\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002",
    "\u0002EC\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002FH\u0003\u0002",
    "\u0002\u0002GE\u0003\u0002\u0002\u0002HI\b\u000b\u0002\u0002I\u0016",
    "\u0003\u0002\u0002\u0002\u0006\u00025;E\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class PropositionalFormulaLexer extends antlr4.Lexer {

    static grammarFileName = "PropositionalFormula.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'true'", "'false'", "'and'", 
                         "'or'", "'not'" ];
	static symbolicNames = [ null, "LPAREN", "RPAREN", "TRUE", "FALSE", "AND", 
                          "OR", "NOT", "PROP", "WS", "LINE_COMMENT" ];
	static ruleNames = [ "LPAREN", "RPAREN", "TRUE", "FALSE", "AND", "OR", 
                      "NOT", "PROP", "WS", "LINE_COMMENT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

PropositionalFormulaLexer.EOF = antlr4.Token.EOF;
PropositionalFormulaLexer.LPAREN = 1;
PropositionalFormulaLexer.RPAREN = 2;
PropositionalFormulaLexer.TRUE = 3;
PropositionalFormulaLexer.FALSE = 4;
PropositionalFormulaLexer.AND = 5;
PropositionalFormulaLexer.OR = 6;
PropositionalFormulaLexer.NOT = 7;
PropositionalFormulaLexer.PROP = 8;
PropositionalFormulaLexer.WS = 9;
PropositionalFormulaLexer.LINE_COMMENT = 10;



