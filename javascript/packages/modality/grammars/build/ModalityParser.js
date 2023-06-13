// Generated from Modality.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import ModalityListener from './ModalityListener.js';
import ModalityVisitor from './ModalityVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003#\u00a3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001a\n",
    "\u0003\f\u0003\u000e\u0003\u001d\u000b\u0003\u0003\u0003\u0006\u0003",
    " \n\u0003\r\u0003\u000e\u0003!\u0005\u0003$\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u00039\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003C\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003J",
    "\n\u0003\f\u0003\u000e\u0003M\u000b\u0003\u0005\u0003O\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\u0080",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0007\u0003\u0088\n\u0003\f\u0003\u000e\u0003\u008b\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007\u0005\u0091",
    "\n\u0005\f\u0005\u000e\u0005\u0094\u000b\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u00a1\n\b\u0003\b\u0002\u0003\u0004\t\u0002",
    "\u0004\u0006\b\n\f\u000e\u0002\u0004\u0003\u0002\u0018\u001a\u0004\u0002",
    "\b\t\u001d\u001d\u0002\u00bb\u0002\u0010\u0003\u0002\u0002\u0002\u0004",
    "\u007f\u0003\u0002\u0002\u0002\u0006\u008c\u0003\u0002\u0002\u0002\b",
    "\u008e\u0003\u0002\u0002\u0002\n\u0097\u0003\u0002\u0002\u0002\f\u0099",
    "\u0003\u0002\u0002\u0002\u000e\u00a0\u0003\u0002\u0002\u0002\u0010\u0011",
    "\u0005\u0004\u0003\u0002\u0011\u0012\u0007\u0002\u0002\u0003\u0012\u0003",
    "\u0003\u0002\u0002\u0002\u0013\u0014\b\u0003\u0001\u0002\u0014\u0080",
    "\u0007\b\u0002\u0002\u0015\u0080\u0007\t\u0002\u0002\u0016\u0080\u0007",
    " \u0002\u0002\u0017\u001b\u0005\u0006\u0004\u0002\u0018\u001a\u0005",
    "\b\u0005\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d\u0003",
    "\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003",
    "\u0002\u0002\u0002\u001c$\u0003\u0002\u0002\u0002\u001d\u001b\u0003",
    "\u0002\u0002\u0002\u001e \u0005\b\u0005\u0002\u001f\u001e\u0003\u0002",
    "\u0002\u0002 !\u0003\u0002\u0002\u0002!\u001f\u0003\u0002\u0002\u0002",
    "!\"\u0003\u0002\u0002\u0002\"$\u0003\u0002\u0002\u0002#\u0017\u0003",
    "\u0002\u0002\u0002#\u001f\u0003\u0002\u0002\u0002$\u0080\u0003\u0002",
    "\u0002\u0002%&\u0007\u0003\u0002\u0002&\'\u0007\u0014\u0002\u0002\'",
    "(\u0005\u0004\u0003\u0002()\u0007\u0015\u0002\u0002)\u0080\u0003\u0002",
    "\u0002\u0002*+\u0007\u0004\u0002\u0002+,\u0007\u0014\u0002\u0002,-\u0005",
    "\u0004\u0003\u0002-.\u0007\u0015\u0002\u0002.\u0080\u0003\u0002\u0002",
    "\u0002/0\u0007\u0005\u0002\u000201\u0007\u0014\u0002\u000212\u0005\u0004",
    "\u0003\u000228\u0007\u0015\u0002\u000234\u0007\u0007\u0002\u000245\u0007",
    "\u0014\u0002\u000256\u0005\u0004\u0003\u000267\u0007\u0015\u0002\u0002",
    "79\u0003\u0002\u0002\u000283\u0003\u0002\u0002\u000289\u0003\u0002\u0002",
    "\u00029\u0080\u0003\u0002\u0002\u0002:;\u0007\u0006\u0002\u0002;<\u0007",
    "\u0014\u0002\u0002<=\u0005\u0004\u0003\u0002=B\u0007\u0015\u0002\u0002",
    ">?\u0007\u0007\u0002\u0002?@\u0005\u0004\u0003\u0002@A\u0007\u0015\u0002",
    "\u0002AC\u0003\u0002\u0002\u0002B>\u0003\u0002\u0002\u0002BC\u0003\u0002",
    "\u0002\u0002C\u0080\u0003\u0002\u0002\u0002DE\u0007\u001d\u0002\u0002",
    "EN\u0007\u0014\u0002\u0002FK\u0005\u000e\b\u0002GH\u0007\u0017\u0002",
    "\u0002HJ\u0005\u000e\b\u0002IG\u0003\u0002\u0002\u0002JM\u0003\u0002",
    "\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003\u0002\u0002\u0002LO\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002NF\u0003\u0002\u0002\u0002",
    "NO\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002P\u0080\u0007\u0015",
    "\u0002\u0002QR\u0007\u0010\u0002\u0002RS\u0007\u0011\u0002\u0002S\u0080",
    "\u0005\u0004\u0003\u000eTU\u0007\u0012\u0002\u0002UV\u0007\u0013\u0002",
    "\u0002V\u0080\u0005\u0004\u0003\rWX\u0007\u0010\u0002\u0002XY\u0005",
    "\u0004\u0003\u0002YZ\u0007\u0011\u0002\u0002Z[\u0005\u0004\u0003\f[",
    "\u0080\u0003\u0002\u0002\u0002\\]\u0007\u0012\u0002\u0002]^\u0005\u0004",
    "\u0003\u0002^_\u0007\u0013\u0002\u0002_`\u0005\u0004\u0003\u000b`\u0080",
    "\u0003\u0002\u0002\u0002ab\u0007\u001b\u0002\u0002bc\u0007\u0014\u0002",
    "\u0002cd\u0005\u0004\u0003\u0002de\u0007\u0017\u0002\u0002ef\u0005\u0004",
    "\u0003\u0002fg\u0007\u0015\u0002\u0002g\u0080\u0003\u0002\u0002\u0002",
    "hi\u0007\u001c\u0002\u0002ij\u0007\u0014\u0002\u0002jk\u0005\u0004\u0003",
    "\u0002kl\u0007\u0017\u0002\u0002lm\u0005\u0004\u0003\u0002mn\u0007\u0015",
    "\u0002\u0002n\u0080\u0003\u0002\u0002\u0002op\u0007\r\u0002\u0002pq",
    "\u0005\u0004\u0003\u0002qr\u0007\u000e\u0002\u0002rs\u0005\u0004\u0003",
    "\u0006s\u0080\u0003\u0002\u0002\u0002tu\u0007\r\u0002\u0002uv\u0005",
    "\u0004\u0003\u0002vw\u0007\u000f\u0002\u0002wx\u0005\u0004\u0003\u0005",
    "x\u0080\u0003\u0002\u0002\u0002yz\u0007\f\u0002\u0002z\u0080\u0005\u0004",
    "\u0003\u0004{|\u0007\u0014\u0002\u0002|}\u0005\u0004\u0003\u0002}~\u0007",
    "\u0015\u0002\u0002~\u0080\u0003\u0002\u0002\u0002\u007f\u0013\u0003",
    "\u0002\u0002\u0002\u007f\u0015\u0003\u0002\u0002\u0002\u007f\u0016\u0003",
    "\u0002\u0002\u0002\u007f#\u0003\u0002\u0002\u0002\u007f%\u0003\u0002",
    "\u0002\u0002\u007f*\u0003\u0002\u0002\u0002\u007f/\u0003\u0002\u0002",
    "\u0002\u007f:\u0003\u0002\u0002\u0002\u007fD\u0003\u0002\u0002\u0002",
    "\u007fQ\u0003\u0002\u0002\u0002\u007fT\u0003\u0002\u0002\u0002\u007f",
    "W\u0003\u0002\u0002\u0002\u007f\\\u0003\u0002\u0002\u0002\u007fa\u0003",
    "\u0002\u0002\u0002\u007fh\u0003\u0002\u0002\u0002\u007fo\u0003\u0002",
    "\u0002\u0002\u007ft\u0003\u0002\u0002\u0002\u007fy\u0003\u0002\u0002",
    "\u0002\u007f{\u0003\u0002\u0002\u0002\u0080\u0089\u0003\u0002\u0002",
    "\u0002\u0081\u0082\f\b\u0002\u0002\u0082\u0083\u0007\u000b\u0002\u0002",
    "\u0083\u0088\u0005\u0004\u0003\t\u0084\u0085\f\u0007\u0002\u0002\u0085",
    "\u0086\u0007\n\u0002\u0002\u0086\u0088\u0005\u0004\u0003\b\u0087\u0081",
    "\u0003\u0002\u0002\u0002\u0087\u0084\u0003\u0002\u0002\u0002\u0088\u008b",
    "\u0003\u0002\u0002\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u008a",
    "\u0003\u0002\u0002\u0002\u008a\u0005\u0003\u0002\u0002\u0002\u008b\u0089",
    "\u0003\u0002\u0002\u0002\u008c\u008d\u0005\f\u0007\u0002\u008d\u0007",
    "\u0003\u0002\u0002\u0002\u008e\u0092\u0005\n\u0006\u0002\u008f\u0091",
    "\u0007\"\u0002\u0002\u0090\u008f\u0003\u0002\u0002\u0002\u0091\u0094",
    "\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002\u0002\u0002\u0094\u0092",
    "\u0003\u0002\u0002\u0002\u0095\u0096\u0005\f\u0007\u0002\u0096\t\u0003",
    "\u0002\u0002\u0002\u0097\u0098\t\u0002\u0002\u0002\u0098\u000b\u0003",
    "\u0002\u0002\u0002\u0099\u009a\t\u0003\u0002\u0002\u009a\r\u0003\u0002",
    "\u0002\u0002\u009b\u00a1\u0007\b\u0002\u0002\u009c\u00a1\u0007\t\u0002",
    "\u0002\u009d\u00a1\u0007\u001e\u0002\u0002\u009e\u00a1\u0007\u001f\u0002",
    "\u0002\u009f\u00a1\u0007!\u0002\u0002\u00a0\u009b\u0003\u0002\u0002",
    "\u0002\u00a0\u009c\u0003\u0002\u0002\u0002\u00a0\u009d\u0003\u0002\u0002",
    "\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a0\u009f\u0003\u0002\u0002",
    "\u0002\u00a1\u000f\u0003\u0002\u0002\u0002\u000e\u001b!#8BKN\u007f\u0087",
    "\u0089\u0092\u00a0"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ModalityParser extends antlr4.Parser {

    static grammarFileName = "Modality.g4";
    static literalNames = [ null, "'must'", "'can'", "'always'", "'eventually'", 
                            "'until'", "'true'", "'false'", "'and'", "'or'", 
                            "'not'", "'when'", "'also'", "'next'", "'['", 
                            "']'", "'<'", "'>'", "'('", "')'", "'*'", "','", 
                            "'+'", "'-'", "'?'", "'lfp'", "'gfp'" ];
    static symbolicNames = [ null, "MUST", "CAN", "ALWAYS", "EVENTUALLY", 
                             "UNTIL", "TRUE", "FALSE", "AND", "OR", "NOT", 
                             "WHEN", "ALSO", "NEXT", "LBOX", "RBOX", "LDIA", 
                             "RDIA", "LPAREN", "RPAREN", "STAR", "COMMA", 
                             "PLUS", "MINUS", "QMARK", "LFP", "GFP", "NAME", 
                             "STRING", "NUMBER", "STATE_SET_VARIABLE", "PATH", 
                             "WS", "LINE_COMMENT" ];
    static ruleNames = [ "expression", "formula", "unsignedProp", "signedProp", 
                         "sign", "prop", "arg" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ModalityParser.ruleNames;
        this.literalNames = ModalityParser.literalNames;
        this.symbolicNames = ModalityParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.formula_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    formula_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 6);
    		case 1:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ModalityParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        localctx.f = this.formula(0);
	        this.state = 15;
	        this.match(ModalityParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	formula(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FormulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, ModalityParser.RULE_formula, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TrueAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 18;
	            this.match(ModalityParser.TRUE);
	            break;

	        case 2:
	            localctx = new FalseAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 19;
	            this.match(ModalityParser.FALSE);
	            break;

	        case 3:
	            localctx = new StateSetVariableContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 20;
	            this.match(ModalityParser.STATE_SET_VARIABLE);
	            break;

	        case 4:
	            localctx = new PropsAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 33;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case ModalityParser.TRUE:
	            case ModalityParser.FALSE:
	            case ModalityParser.NAME:
	                this.state = 21;
	                this.unsignedProp();
	                this.state = 25;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 22;
	                        this.signedProp(); 
	                    }
	                    this.state = 27;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	                }

	                break;
	            case ModalityParser.PLUS:
	            case ModalityParser.MINUS:
	            case ModalityParser.QMARK:
	                this.state = 29; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 28;
	                		this.signedProp();
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 31; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 5:
	            localctx = new MustMacroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 35;
	            this.match(ModalityParser.MUST);
	            this.state = 36;
	            this.match(ModalityParser.LPAREN);
	            this.state = 37;
	            this.formula(0);
	            this.state = 38;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 6:
	            localctx = new CanMacroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 40;
	            this.match(ModalityParser.CAN);
	            this.state = 41;
	            this.match(ModalityParser.LPAREN);
	            this.state = 42;
	            this.formula(0);
	            this.state = 43;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 7:
	            localctx = new AlwaysMacroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 45;
	            this.match(ModalityParser.ALWAYS);
	            this.state = 46;
	            this.match(ModalityParser.LPAREN);
	            this.state = 47;
	            localctx.inner_formula = this.formula(0);
	            this.state = 48;
	            this.match(ModalityParser.RPAREN);
	            this.state = 54;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 49;
	                this.match(ModalityParser.UNTIL);
	                this.state = 50;
	                this.match(ModalityParser.LPAREN);
	                this.state = 51;
	                localctx.until_formula = this.formula(0);
	                this.state = 52;
	                this.match(ModalityParser.RPAREN);

	            }
	            break;

	        case 8:
	            localctx = new EventuallyMacroContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 56;
	            this.match(ModalityParser.EVENTUALLY);
	            this.state = 57;
	            this.match(ModalityParser.LPAREN);
	            this.state = 58;
	            localctx.inner_formula = this.formula(0);
	            this.state = 59;
	            this.match(ModalityParser.RPAREN);
	            this.state = 64;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 60;
	                this.match(ModalityParser.UNTIL);
	                this.state = 61;
	                localctx.until_formula = this.formula(0);
	                this.state = 62;
	                this.match(ModalityParser.RPAREN);

	            }
	            break;

	        case 9:
	            localctx = new FunctionAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 66;
	            localctx.name = this.match(ModalityParser.NAME);
	            this.state = 67;
	            this.match(ModalityParser.LPAREN);
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModalityParser.TRUE) | (1 << ModalityParser.FALSE) | (1 << ModalityParser.STRING) | (1 << ModalityParser.NUMBER) | (1 << ModalityParser.PATH))) !== 0)) {
	                this.state = 68;
	                this.arg();
	                this.state = 73;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===ModalityParser.COMMA) {
	                    this.state = 69;
	                    this.match(ModalityParser.COMMA);
	                    this.state = 70;
	                    this.arg();
	                    this.state = 75;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 78;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 10:
	            localctx = new EmptyBoxFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 79;
	            this.match(ModalityParser.LBOX);
	            this.state = 80;
	            this.match(ModalityParser.RBOX);
	            this.state = 81;
	            localctx.outer = this.formula(12);
	            break;

	        case 11:
	            localctx = new EmptyDiamondFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 82;
	            this.match(ModalityParser.LDIA);
	            this.state = 83;
	            this.match(ModalityParser.RDIA);
	            this.state = 84;
	            localctx.outer = this.formula(11);
	            break;

	        case 12:
	            localctx = new BoxFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            this.match(ModalityParser.LBOX);
	            this.state = 86;
	            localctx.inner = this.formula(0);
	            this.state = 87;
	            this.match(ModalityParser.RBOX);
	            this.state = 88;
	            localctx.outer = this.formula(10);
	            break;

	        case 13:
	            localctx = new DiamondFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 90;
	            this.match(ModalityParser.LDIA);
	            this.state = 91;
	            localctx.inner = this.formula(0);
	            this.state = 92;
	            this.match(ModalityParser.RDIA);
	            this.state = 93;
	            localctx.outer = this.formula(9);
	            break;

	        case 14:
	            localctx = new LfpFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 95;
	            this.match(ModalityParser.LFP);
	            this.state = 96;
	            this.match(ModalityParser.LPAREN);
	            this.state = 97;
	            localctx.stateSetVariable = this.formula(0);
	            this.state = 98;
	            this.match(ModalityParser.COMMA);
	            this.state = 99;
	            localctx.inner = this.formula(0);
	            this.state = 100;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 15:
	            localctx = new GfpFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 102;
	            this.match(ModalityParser.GFP);
	            this.state = 103;
	            this.match(ModalityParser.LPAREN);
	            this.state = 104;
	            localctx.stateSetVariable = this.formula(0);
	            this.state = 105;
	            this.match(ModalityParser.COMMA);
	            this.state = 106;
	            localctx.inner = this.formula(0);
	            this.state = 107;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 16:
	            localctx = new WhenAlsoFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 109;
	            this.match(ModalityParser.WHEN);
	            this.state = 110;
	            localctx.when_formula = this.formula(0);
	            this.state = 111;
	            this.match(ModalityParser.ALSO);
	            this.state = 112;
	            localctx.also_formula = this.formula(4);
	            break;

	        case 17:
	            localctx = new WhenNextFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 114;
	            this.match(ModalityParser.WHEN);
	            this.state = 115;
	            localctx.when_formula = this.formula(0);
	            this.state = 116;
	            this.match(ModalityParser.NEXT);
	            this.state = 117;
	            localctx.next_formula = this.formula(3);
	            break;

	        case 18:
	            localctx = new NotFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 119;
	            this.match(ModalityParser.NOT);
	            this.state = 120;
	            localctx.inner = this.formula(2);
	            break;

	        case 19:
	            localctx = new ParenFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 121;
	            this.match(ModalityParser.LPAREN);
	            this.state = 122;
	            localctx.inner = this.formula(0);
	            this.state = 123;
	            this.match(ModalityParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 135;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 133;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new OrFormulaContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ModalityParser.RULE_formula);
	                    this.state = 127;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 128;
	                    this.match(ModalityParser.OR);
	                    this.state = 129;
	                    localctx.right = this.formula(7);
	                    break;

	                case 2:
	                    localctx = new AndFormulaContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ModalityParser.RULE_formula);
	                    this.state = 130;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 131;
	                    this.match(ModalityParser.AND);
	                    this.state = 132;
	                    localctx.right = this.formula(6);
	                    break;

	                } 
	            }
	            this.state = 137;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unsignedProp() {
	    let localctx = new UnsignedPropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ModalityParser.RULE_unsignedProp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        localctx.theProp = this.prop();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signedProp() {
	    let localctx = new SignedPropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ModalityParser.RULE_signedProp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 140;
	        localctx.theSign = this.sign();
	        this.state = 144;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModalityParser.WS) {
	            this.state = 141;
	            this.match(ModalityParser.WS);
	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 147;
	        localctx.theProp = this.prop();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sign() {
	    let localctx = new SignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ModalityParser.RULE_sign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModalityParser.PLUS) | (1 << ModalityParser.MINUS) | (1 << ModalityParser.QMARK))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prop() {
	    let localctx = new PropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ModalityParser.RULE_prop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModalityParser.TRUE) | (1 << ModalityParser.FALSE) | (1 << ModalityParser.NAME))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ModalityParser.RULE_arg);
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ModalityParser.TRUE:
	            localctx = new TrueArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.match(ModalityParser.TRUE);
	            break;
	        case ModalityParser.FALSE:
	            localctx = new FalseArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.match(ModalityParser.FALSE);
	            break;
	        case ModalityParser.STRING:
	            localctx = new StringArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
	            this.match(ModalityParser.STRING);
	            break;
	        case ModalityParser.NUMBER:
	            localctx = new NumberArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 156;
	            this.match(ModalityParser.NUMBER);
	            break;
	        case ModalityParser.PATH:
	            localctx = new PathArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 157;
	            this.match(ModalityParser.PATH);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ModalityParser.EOF = antlr4.Token.EOF;
ModalityParser.MUST = 1;
ModalityParser.CAN = 2;
ModalityParser.ALWAYS = 3;
ModalityParser.EVENTUALLY = 4;
ModalityParser.UNTIL = 5;
ModalityParser.TRUE = 6;
ModalityParser.FALSE = 7;
ModalityParser.AND = 8;
ModalityParser.OR = 9;
ModalityParser.NOT = 10;
ModalityParser.WHEN = 11;
ModalityParser.ALSO = 12;
ModalityParser.NEXT = 13;
ModalityParser.LBOX = 14;
ModalityParser.RBOX = 15;
ModalityParser.LDIA = 16;
ModalityParser.RDIA = 17;
ModalityParser.LPAREN = 18;
ModalityParser.RPAREN = 19;
ModalityParser.STAR = 20;
ModalityParser.COMMA = 21;
ModalityParser.PLUS = 22;
ModalityParser.MINUS = 23;
ModalityParser.QMARK = 24;
ModalityParser.LFP = 25;
ModalityParser.GFP = 26;
ModalityParser.NAME = 27;
ModalityParser.STRING = 28;
ModalityParser.NUMBER = 29;
ModalityParser.STATE_SET_VARIABLE = 30;
ModalityParser.PATH = 31;
ModalityParser.WS = 32;
ModalityParser.LINE_COMMENT = 33;

ModalityParser.RULE_expression = 0;
ModalityParser.RULE_formula = 1;
ModalityParser.RULE_unsignedProp = 2;
ModalityParser.RULE_signedProp = 3;
ModalityParser.RULE_sign = 4;
ModalityParser.RULE_prop = 5;
ModalityParser.RULE_arg = 6;

class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModalityParser.RULE_expression;
        this.f = null; // FormulaContext
    }

	EOF() {
	    return this.getToken(ModalityParser.EOF, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModalityParser.RULE_formula;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class WhenAlsoFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.when_formula = null; // FormulaContext;
        this.also_formula = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	WHEN() {
	    return this.getToken(ModalityParser.WHEN, 0);
	};

	ALSO() {
	    return this.getToken(ModalityParser.ALSO, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterWhenAlsoFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitWhenAlsoFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitWhenAlsoFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.WhenAlsoFormulaContext = WhenAlsoFormulaContext;

class AlwaysMacroContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner_formula = null; // FormulaContext;
        this.until_formula = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	ALWAYS() {
	    return this.getToken(ModalityParser.ALWAYS, 0);
	};

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ModalityParser.LPAREN);
	    } else {
	        return this.getToken(ModalityParser.LPAREN, i);
	    }
	};


	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ModalityParser.RPAREN);
	    } else {
	        return this.getToken(ModalityParser.RPAREN, i);
	    }
	};


	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	UNTIL() {
	    return this.getToken(ModalityParser.UNTIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterAlwaysMacro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitAlwaysMacro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitAlwaysMacro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.AlwaysMacroContext = AlwaysMacroContext;

class EmptyBoxFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.outer = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	LBOX() {
	    return this.getToken(ModalityParser.LBOX, 0);
	};

	RBOX() {
	    return this.getToken(ModalityParser.RBOX, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterEmptyBoxFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitEmptyBoxFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitEmptyBoxFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.EmptyBoxFormulaContext = EmptyBoxFormulaContext;

class WhenNextFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.when_formula = null; // FormulaContext;
        this.next_formula = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	WHEN() {
	    return this.getToken(ModalityParser.WHEN, 0);
	};

	NEXT() {
	    return this.getToken(ModalityParser.NEXT, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterWhenNextFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitWhenNextFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitWhenNextFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.WhenNextFormulaContext = WhenNextFormulaContext;

class EmptyDiamondFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.outer = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	LDIA() {
	    return this.getToken(ModalityParser.LDIA, 0);
	};

	RDIA() {
	    return this.getToken(ModalityParser.RDIA, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterEmptyDiamondFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitEmptyDiamondFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitEmptyDiamondFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.EmptyDiamondFormulaContext = EmptyDiamondFormulaContext;

class AndFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FormulaContext;
        this.right = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	AND() {
	    return this.getToken(ModalityParser.AND, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterAndFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitAndFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitAndFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.AndFormulaContext = AndFormulaContext;

class FunctionAtomContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.name = null; // Token;
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ModalityParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ModalityParser.RPAREN, 0);
	};

	NAME() {
	    return this.getToken(ModalityParser.NAME, 0);
	};

	arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgContext);
	    } else {
	        return this.getTypedRuleContext(ArgContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ModalityParser.COMMA);
	    } else {
	        return this.getToken(ModalityParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterFunctionAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitFunctionAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitFunctionAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.FunctionAtomContext = FunctionAtomContext;

class NotFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(ModalityParser.NOT, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterNotFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitNotFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitNotFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.NotFormulaContext = NotFormulaContext;

class OrFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FormulaContext;
        this.right = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	OR() {
	    return this.getToken(ModalityParser.OR, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterOrFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitOrFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitOrFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.OrFormulaContext = OrFormulaContext;

class LfpFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.stateSetVariable = null; // FormulaContext;
        this.inner = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	LFP() {
	    return this.getToken(ModalityParser.LFP, 0);
	};

	LPAREN() {
	    return this.getToken(ModalityParser.LPAREN, 0);
	};

	COMMA() {
	    return this.getToken(ModalityParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(ModalityParser.RPAREN, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterLfpFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitLfpFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitLfpFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.LfpFormulaContext = LfpFormulaContext;

class CanMacroContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	CAN() {
	    return this.getToken(ModalityParser.CAN, 0);
	};

	LPAREN() {
	    return this.getToken(ModalityParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(ModalityParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterCanMacro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitCanMacro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitCanMacro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.CanMacroContext = CanMacroContext;

class EventuallyMacroContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner_formula = null; // FormulaContext;
        this.until_formula = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	EVENTUALLY() {
	    return this.getToken(ModalityParser.EVENTUALLY, 0);
	};

	LPAREN() {
	    return this.getToken(ModalityParser.LPAREN, 0);
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ModalityParser.RPAREN);
	    } else {
	        return this.getToken(ModalityParser.RPAREN, i);
	    }
	};


	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	UNTIL() {
	    return this.getToken(ModalityParser.UNTIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterEventuallyMacro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitEventuallyMacro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitEventuallyMacro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.EventuallyMacroContext = EventuallyMacroContext;

class DiamondFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // FormulaContext;
        this.outer = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	LDIA() {
	    return this.getToken(ModalityParser.LDIA, 0);
	};

	RDIA() {
	    return this.getToken(ModalityParser.RDIA, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterDiamondFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitDiamondFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitDiamondFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.DiamondFormulaContext = DiamondFormulaContext;

class ParenFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ModalityParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ModalityParser.RPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterParenFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitParenFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitParenFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.ParenFormulaContext = ParenFormulaContext;

class MustMacroContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MUST() {
	    return this.getToken(ModalityParser.MUST, 0);
	};

	LPAREN() {
	    return this.getToken(ModalityParser.LPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	RPAREN() {
	    return this.getToken(ModalityParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterMustMacro(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitMustMacro(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitMustMacro(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.MustMacroContext = MustMacroContext;

class BoxFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // FormulaContext;
        this.outer = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	LBOX() {
	    return this.getToken(ModalityParser.LBOX, 0);
	};

	RBOX() {
	    return this.getToken(ModalityParser.RBOX, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterBoxFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitBoxFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitBoxFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.BoxFormulaContext = BoxFormulaContext;

class FalseAtomContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(ModalityParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterFalseAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitFalseAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitFalseAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.FalseAtomContext = FalseAtomContext;

class GfpFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.stateSetVariable = null; // FormulaContext;
        this.inner = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	GFP() {
	    return this.getToken(ModalityParser.GFP, 0);
	};

	LPAREN() {
	    return this.getToken(ModalityParser.LPAREN, 0);
	};

	COMMA() {
	    return this.getToken(ModalityParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(ModalityParser.RPAREN, 0);
	};

	formula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormulaContext);
	    } else {
	        return this.getTypedRuleContext(FormulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterGfpFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitGfpFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitGfpFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.GfpFormulaContext = GfpFormulaContext;

class TrueAtomContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(ModalityParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterTrueAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitTrueAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitTrueAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.TrueAtomContext = TrueAtomContext;

class PropsAtomContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	unsignedProp() {
	    return this.getTypedRuleContext(UnsignedPropContext,0);
	};

	signedProp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SignedPropContext);
	    } else {
	        return this.getTypedRuleContext(SignedPropContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterPropsAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitPropsAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitPropsAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.PropsAtomContext = PropsAtomContext;

class StateSetVariableContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STATE_SET_VARIABLE() {
	    return this.getToken(ModalityParser.STATE_SET_VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterStateSetVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitStateSetVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitStateSetVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.StateSetVariableContext = StateSetVariableContext;

class UnsignedPropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModalityParser.RULE_unsignedProp;
        this.theProp = null; // PropContext
    }

	prop() {
	    return this.getTypedRuleContext(PropContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterUnsignedProp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitUnsignedProp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitUnsignedProp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SignedPropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModalityParser.RULE_signedProp;
        this.theSign = null; // SignContext
        this.theProp = null; // PropContext
    }

	prop() {
	    return this.getTypedRuleContext(PropContext,0);
	};

	sign() {
	    return this.getTypedRuleContext(SignContext,0);
	};

	WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ModalityParser.WS);
	    } else {
	        return this.getToken(ModalityParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterSignedProp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitSignedProp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitSignedProp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModalityParser.RULE_sign;
    }

	PLUS() {
	    return this.getToken(ModalityParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(ModalityParser.MINUS, 0);
	};

	QMARK() {
	    return this.getToken(ModalityParser.QMARK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitSign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitSign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModalityParser.RULE_prop;
    }

	TRUE() {
	    return this.getToken(ModalityParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(ModalityParser.FALSE, 0);
	};

	NAME() {
	    return this.getToken(ModalityParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterProp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitProp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitProp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModalityParser.RULE_arg;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FalseArgContext extends ArgContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(ModalityParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterFalseArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitFalseArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitFalseArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.FalseArgContext = FalseArgContext;

class TrueArgContext extends ArgContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(ModalityParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterTrueArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitTrueArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitTrueArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.TrueArgContext = TrueArgContext;

class StringArgContext extends ArgContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(ModalityParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterStringArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitStringArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitStringArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.StringArgContext = StringArgContext;

class PathArgContext extends ArgContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PATH() {
	    return this.getToken(ModalityParser.PATH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterPathArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitPathArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitPathArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.PathArgContext = PathArgContext;

class NumberArgContext extends ArgContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(ModalityParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterNumberArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitNumberArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitNumberArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.NumberArgContext = NumberArgContext;


ModalityParser.ExpressionContext = ExpressionContext; 
ModalityParser.FormulaContext = FormulaContext; 
ModalityParser.UnsignedPropContext = UnsignedPropContext; 
ModalityParser.SignedPropContext = SignedPropContext; 
ModalityParser.SignContext = SignContext; 
ModalityParser.PropContext = PropContext; 
ModalityParser.ArgContext = ArgContext; 
