// Generated from ModalFormula.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0017\u007f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b",
    "\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003",
    "\u0013\u0007\u0013b\n\u0013\f\u0013\u000e\u0013e\u000b\u0013\u0003\u0014",
    "\u0003\u0014\u0007\u0014i\n\u0014\f\u0014\u000e\u0014l\u000b\u0014\u0003",
    "\u0015\u0006\u0015o\n\u0015\r\u0015\u000e\u0015p\u0003\u0015\u0003\u0015",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016y\n\u0016",
    "\f\u0016\u000e\u0016|\u000b\u0016\u0003\u0016\u0003\u0016\u0002\u0002",
    "\u0017\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017\u0003",
    "\u0002\u0007\u0004\u0002C\\c|\u0006\u00022;C\\aac|\u0003\u0002BB\u0005",
    "\u0002\u000b\f\u000f\u000f\"\"\u0004\u0002\f\f\u000f\u000f\u0002\u0082",
    "\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002",
    "\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002",
    "\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002",
    "\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002",
    "\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002",
    "\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002",
    "\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002",
    "\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003\u0002\u0002\u0002",
    "\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002\u0002\u0002\u0002",
    "\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002\u0002\u0002+\u0003",
    "\u0002\u0002\u0002\u0003-\u0003\u0002\u0002\u0002\u00052\u0003\u0002",
    "\u0002\u0002\u00078\u0003\u0002\u0002\u0002\t<\u0003\u0002\u0002\u0002",
    "\u000b?\u0003\u0002\u0002\u0002\rC\u0003\u0002\u0002\u0002\u000fE\u0003",
    "\u0002\u0002\u0002\u0011G\u0003\u0002\u0002\u0002\u0013I\u0003\u0002",
    "\u0002\u0002\u0015K\u0003\u0002\u0002\u0002\u0017M\u0003\u0002\u0002",
    "\u0002\u0019O\u0003\u0002\u0002\u0002\u001bQ\u0003\u0002\u0002\u0002",
    "\u001dS\u0003\u0002\u0002\u0002\u001fU\u0003\u0002\u0002\u0002!W\u0003",
    "\u0002\u0002\u0002#[\u0003\u0002\u0002\u0002%_\u0003\u0002\u0002\u0002",
    "\'f\u0003\u0002\u0002\u0002)n\u0003\u0002\u0002\u0002+t\u0003\u0002",
    "\u0002\u0002-.\u0007v\u0002\u0002./\u0007t\u0002\u0002/0\u0007w\u0002",
    "\u000201\u0007g\u0002\u00021\u0004\u0003\u0002\u0002\u000223\u0007h",
    "\u0002\u000234\u0007c\u0002\u000245\u0007n\u0002\u000256\u0007u\u0002",
    "\u000267\u0007g\u0002\u00027\u0006\u0003\u0002\u0002\u000289\u0007c",
    "\u0002\u00029:\u0007p\u0002\u0002:;\u0007f\u0002\u0002;\b\u0003\u0002",
    "\u0002\u0002<=\u0007q\u0002\u0002=>\u0007t\u0002\u0002>\n\u0003\u0002",
    "\u0002\u0002?@\u0007p\u0002\u0002@A\u0007q\u0002\u0002AB\u0007v\u0002",
    "\u0002B\f\u0003\u0002\u0002\u0002CD\u0007,\u0002\u0002D\u000e\u0003",
    "\u0002\u0002\u0002EF\u0007.\u0002\u0002F\u0010\u0003\u0002\u0002\u0002",
    "GH\u0007-\u0002\u0002H\u0012\u0003\u0002\u0002\u0002IJ\u0007/\u0002",
    "\u0002J\u0014\u0003\u0002\u0002\u0002KL\u0007]\u0002\u0002L\u0016\u0003",
    "\u0002\u0002\u0002MN\u0007_\u0002\u0002N\u0018\u0003\u0002\u0002\u0002",
    "OP\u0007>\u0002\u0002P\u001a\u0003\u0002\u0002\u0002QR\u0007@\u0002",
    "\u0002R\u001c\u0003\u0002\u0002\u0002ST\u0007*\u0002\u0002T\u001e\u0003",
    "\u0002\u0002\u0002UV\u0007+\u0002\u0002V \u0003\u0002\u0002\u0002WX",
    "\u0007n\u0002\u0002XY\u0007h\u0002\u0002YZ\u0007r\u0002\u0002Z\"\u0003",
    "\u0002\u0002\u0002[\\\u0007i\u0002\u0002\\]\u0007h\u0002\u0002]^\u0007",
    "r\u0002\u0002^$\u0003\u0002\u0002\u0002_c\t\u0002\u0002\u0002`b\t\u0003",
    "\u0002\u0002a`\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003",
    "\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002d&\u0003\u0002\u0002\u0002",
    "ec\u0003\u0002\u0002\u0002fj\t\u0004\u0002\u0002gi\t\u0003\u0002\u0002",
    "hg\u0003\u0002\u0002\u0002il\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002",
    "\u0002jk\u0003\u0002\u0002\u0002k(\u0003\u0002\u0002\u0002lj\u0003\u0002",
    "\u0002\u0002mo\t\u0005\u0002\u0002nm\u0003\u0002\u0002\u0002op\u0003",
    "\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002",
    "qr\u0003\u0002\u0002\u0002rs\b\u0015\u0002\u0002s*\u0003\u0002\u0002",
    "\u0002tu\u00071\u0002\u0002uv\u00071\u0002\u0002vz\u0003\u0002\u0002",
    "\u0002wy\n\u0006\u0002\u0002xw\u0003\u0002\u0002\u0002y|\u0003\u0002",
    "\u0002\u0002zx\u0003\u0002\u0002\u0002z{\u0003\u0002\u0002\u0002{}\u0003",
    "\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002}~\b\u0016\u0002\u0002~",
    ",\u0003\u0002\u0002\u0002\u0007\u0002cjpz\u0003\b\u0002\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ModalFormulaLexer extends antlr4.Lexer {

    static grammarFileName = "ModalFormula.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'true'", "'false'", "'and'", "'or'", "'not'", 
                         "'*'", "','", "'+'", "'-'", "'['", "']'", "'<'", 
                         "'>'", "'('", "')'", "'lfp'", "'gfp'" ];
	static symbolicNames = [ null, "TRUE", "FALSE", "AND", "OR", "NOT", "STAR", 
                          "COMMA", "PLUS", "MINUS", "LBOX", "RBOX", "LDIA", 
                          "RDIA", "LPAREN", "RPAREN", "LFP", "GFP", "NAME", 
                          "BOUND_VAR", "WS", "LINE_COMMENT" ];
	static ruleNames = [ "TRUE", "FALSE", "AND", "OR", "NOT", "STAR", "COMMA", 
                      "PLUS", "MINUS", "LBOX", "RBOX", "LDIA", "RDIA", "LPAREN", 
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
ModalFormulaLexer.STAR = 6;
ModalFormulaLexer.COMMA = 7;
ModalFormulaLexer.PLUS = 8;
ModalFormulaLexer.MINUS = 9;
ModalFormulaLexer.LBOX = 10;
ModalFormulaLexer.RBOX = 11;
ModalFormulaLexer.LDIA = 12;
ModalFormulaLexer.RDIA = 13;
ModalFormulaLexer.LPAREN = 14;
ModalFormulaLexer.RPAREN = 15;
ModalFormulaLexer.LFP = 16;
ModalFormulaLexer.GFP = 17;
ModalFormulaLexer.NAME = 18;
ModalFormulaLexer.BOUND_VAR = 19;
ModalFormulaLexer.WS = 20;
ModalFormulaLexer.LINE_COMMENT = 21;



