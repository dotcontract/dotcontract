// Generated from ModalFormula.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0016{\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0007\u0012^\n\u0012\f\u0012\u000e\u0012",
    "a\u000b\u0012\u0003\u0013\u0003\u0013\u0007\u0013e\n\u0013\f\u0013\u000e",
    "\u0013h\u000b\u0013\u0003\u0014\u0006\u0014k\n\u0014\r\u0014\u000e\u0014",
    "l\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0007\u0015u\n\u0015\f\u0015\u000e\u0015x\u000b\u0015\u0003\u0015",
    "\u0003\u0015\u0002\u0002\u0016\u0003\u0003\u0005\u0004\u0007\u0005\t",
    "\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019",
    "\u000e\u001b\u000f\u001d\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015",
    ")\u0016\u0003\u0002\u0007\u0004\u0002C\\c|\u0006\u00022;C\\aac|\u0003",
    "\u0002BB\u0005\u0002\u000b\f\u000f\u000f\"\"\u0004\u0002\f\f\u000f\u000f",
    "\u0002~\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002",
    "\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002",
    "\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002",
    "\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002",
    "\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002",
    "\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002",
    "\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002",
    "\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002",
    "\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002",
    "\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002",
    "\u0003+\u0003\u0002\u0002\u0002\u00050\u0003\u0002\u0002\u0002\u0007",
    "6\u0003\u0002\u0002\u0002\t:\u0003\u0002\u0002\u0002\u000b=\u0003\u0002",
    "\u0002\u0002\rA\u0003\u0002\u0002\u0002\u000fC\u0003\u0002\u0002\u0002",
    "\u0011E\u0003\u0002\u0002\u0002\u0013G\u0003\u0002\u0002\u0002\u0015",
    "I\u0003\u0002\u0002\u0002\u0017K\u0003\u0002\u0002\u0002\u0019M\u0003",
    "\u0002\u0002\u0002\u001bO\u0003\u0002\u0002\u0002\u001dQ\u0003\u0002",
    "\u0002\u0002\u001fS\u0003\u0002\u0002\u0002!W\u0003\u0002\u0002\u0002",
    "#[\u0003\u0002\u0002\u0002%b\u0003\u0002\u0002\u0002\'j\u0003\u0002",
    "\u0002\u0002)p\u0003\u0002\u0002\u0002+,\u0007v\u0002\u0002,-\u0007",
    "t\u0002\u0002-.\u0007w\u0002\u0002./\u0007g\u0002\u0002/\u0004\u0003",
    "\u0002\u0002\u000201\u0007h\u0002\u000212\u0007c\u0002\u000223\u0007",
    "n\u0002\u000234\u0007u\u0002\u000245\u0007g\u0002\u00025\u0006\u0003",
    "\u0002\u0002\u000267\u0007c\u0002\u000278\u0007p\u0002\u000289\u0007",
    "f\u0002\u00029\b\u0003\u0002\u0002\u0002:;\u0007q\u0002\u0002;<\u0007",
    "t\u0002\u0002<\n\u0003\u0002\u0002\u0002=>\u0007p\u0002\u0002>?\u0007",
    "q\u0002\u0002?@\u0007v\u0002\u0002@\f\u0003\u0002\u0002\u0002AB\u0007",
    ".\u0002\u0002B\u000e\u0003\u0002\u0002\u0002CD\u0007-\u0002\u0002D\u0010",
    "\u0003\u0002\u0002\u0002EF\u0007/\u0002\u0002F\u0012\u0003\u0002\u0002",
    "\u0002GH\u0007]\u0002\u0002H\u0014\u0003\u0002\u0002\u0002IJ\u0007_",
    "\u0002\u0002J\u0016\u0003\u0002\u0002\u0002KL\u0007>\u0002\u0002L\u0018",
    "\u0003\u0002\u0002\u0002MN\u0007@\u0002\u0002N\u001a\u0003\u0002\u0002",
    "\u0002OP\u0007*\u0002\u0002P\u001c\u0003\u0002\u0002\u0002QR\u0007+",
    "\u0002\u0002R\u001e\u0003\u0002\u0002\u0002ST\u0007n\u0002\u0002TU\u0007",
    "h\u0002\u0002UV\u0007r\u0002\u0002V \u0003\u0002\u0002\u0002WX\u0007",
    "i\u0002\u0002XY\u0007h\u0002\u0002YZ\u0007r\u0002\u0002Z\"\u0003\u0002",
    "\u0002\u0002[_\t\u0002\u0002\u0002\\^\t\u0003\u0002\u0002]\\\u0003\u0002",
    "\u0002\u0002^a\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002_`\u0003",
    "\u0002\u0002\u0002`$\u0003\u0002\u0002\u0002a_\u0003\u0002\u0002\u0002",
    "bf\t\u0004\u0002\u0002ce\t\u0003\u0002\u0002dc\u0003\u0002\u0002\u0002",
    "eh\u0003\u0002\u0002\u0002fd\u0003\u0002\u0002\u0002fg\u0003\u0002\u0002",
    "\u0002g&\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002ik\t\u0005",
    "\u0002\u0002ji\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lj\u0003",
    "\u0002\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002",
    "no\b\u0014\u0002\u0002o(\u0003\u0002\u0002\u0002pq\u00071\u0002\u0002",
    "qr\u00071\u0002\u0002rv\u0003\u0002\u0002\u0002su\n\u0006\u0002\u0002",
    "ts\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002vt\u0003\u0002\u0002",
    "\u0002vw\u0003\u0002\u0002\u0002wy\u0003\u0002\u0002\u0002xv\u0003\u0002",
    "\u0002\u0002yz\b\u0015\u0002\u0002z*\u0003\u0002\u0002\u0002\u0007\u0002",
    "_flv\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ModalFormulaLexer extends antlr4.Lexer {

    static grammarFileName = "ModalFormula.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'true'", "'false'", "'and'", "'or'", "'not'", 
                         "','", "'+'", "'-'", "'['", "']'", "'<'", "'>'", 
                         "'('", "')'", "'lfp'", "'gfp'" ];
	static symbolicNames = [ null, "TRUE", "FALSE", "AND", "OR", "NOT", "COMMA", 
                          "PLUS", "MINUS", "LBOX", "RBOX", "LDIA", "RDIA", 
                          "LPAREN", "RPAREN", "LFP", "GFP", "NAME", "BOUND_VAR", 
                          "WS", "LINE_COMMENT" ];
	static ruleNames = [ "TRUE", "FALSE", "AND", "OR", "NOT", "COMMA", "PLUS", 
                      "MINUS", "LBOX", "RBOX", "LDIA", "RDIA", "LPAREN", 
                      "RPAREN", "LFP", "GFP", "NAME", "BOUND_VAR", "WS", 
                      "LINE_COMMENT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

ModalFormulaLexer.EOF = antlr4.Token.EOF;
ModalFormulaLexer.TRUE = 1;
ModalFormulaLexer.FALSE = 2;
ModalFormulaLexer.AND = 3;
ModalFormulaLexer.OR = 4;
ModalFormulaLexer.NOT = 5;
ModalFormulaLexer.COMMA = 6;
ModalFormulaLexer.PLUS = 7;
ModalFormulaLexer.MINUS = 8;
ModalFormulaLexer.LBOX = 9;
ModalFormulaLexer.RBOX = 10;
ModalFormulaLexer.LDIA = 11;
ModalFormulaLexer.RDIA = 12;
ModalFormulaLexer.LPAREN = 13;
ModalFormulaLexer.RPAREN = 14;
ModalFormulaLexer.LFP = 15;
ModalFormulaLexer.GFP = 16;
ModalFormulaLexer.NAME = 17;
ModalFormulaLexer.BOUND_VAR = 18;
ModalFormulaLexer.WS = 19;
ModalFormulaLexer.LINE_COMMENT = 20;



