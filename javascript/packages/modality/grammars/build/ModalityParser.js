// Generated from Modality.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import ModalityListener from './ModalityListener.js';
import ModalityVisitor from './ModalityVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003 \u0092\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0019\n\u0003\f\u0003",
    "\u000e\u0003\u001c\u000b\u0003\u0003\u0003\u0006\u0003\u001f\n\u0003",
    "\r\u0003\u000e\u0003 \u0005\u0003#\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003.\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u00038",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003?\n\u0003\f\u0003\u000e\u0003B\u000b\u0003\u0005\u0003D",
    "\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003o\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0007\u0003w\n\u0003\f\u0003\u000e\u0003z\u000b",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0007\u0005\u0080",
    "\n\u0005\f\u0005\u000e\u0005\u0083\u000b\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u0090\n\b\u0003\b\u0002\u0003\u0004\t\u0002",
    "\u0004\u0006\b\n\f\u000e\u0002\u0004\u0003\u0002\u0016\u0017\u0005\u0002",
    "\u0006\u0007\u0014\u0014\u001a\u001a\u0002\u00a5\u0002\u0010\u0003\u0002",
    "\u0002\u0002\u0004n\u0003\u0002\u0002\u0002\u0006{\u0003\u0002\u0002",
    "\u0002\b}\u0003\u0002\u0002\u0002\n\u0086\u0003\u0002\u0002\u0002\f",
    "\u0088\u0003\u0002\u0002\u0002\u000e\u008f\u0003\u0002\u0002\u0002\u0010",
    "\u0011\u0005\u0004\u0003\u0002\u0011\u0012\u0007\u0002\u0002\u0003\u0012",
    "\u0003\u0003\u0002\u0002\u0002\u0013\u0014\b\u0003\u0001\u0002\u0014",
    "o\u0007\u0006\u0002\u0002\u0015o\u0007\u0007\u0002\u0002\u0016\u001a",
    "\u0005\u0006\u0004\u0002\u0017\u0019\u0005\b\u0005\u0002\u0018\u0017",
    "\u0003\u0002\u0002\u0002\u0019\u001c\u0003\u0002\u0002\u0002\u001a\u0018",
    "\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b#",
    "\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001d\u001f",
    "\u0005\b\u0005\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f \u0003",
    "\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002",
    "\u0002!#\u0003\u0002\u0002\u0002\"\u0016\u0003\u0002\u0002\u0002\"\u001e",
    "\u0003\u0002\u0002\u0002#o\u0003\u0002\u0002\u0002$%\u0007\u0003\u0002",
    "\u0002%&\u0007\u0012\u0002\u0002&\'\u0005\u0004\u0003\u0002\'-\u0007",
    "\u0013\u0002\u0002()\u0007\u0005\u0002\u0002)*\u0007\u0012\u0002\u0002",
    "*+\u0005\u0004\u0003\u0002+,\u0007\u0013\u0002\u0002,.\u0003\u0002\u0002",
    "\u0002-(\u0003\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.o\u0003\u0002",
    "\u0002\u0002/0\u0007\u0004\u0002\u000201\u0007\u0012\u0002\u000212\u0005",
    "\u0004\u0003\u000227\u0007\u0013\u0002\u000234\u0007\u0005\u0002\u0002",
    "45\u0005\u0004\u0003\u000256\u0007\u0013\u0002\u000268\u0003\u0002\u0002",
    "\u000273\u0003\u0002\u0002\u000278\u0003\u0002\u0002\u00028o\u0003\u0002",
    "\u0002\u00029:\u0007\u001a\u0002\u0002:C\u0007\u0012\u0002\u0002;@\u0005",
    "\u000e\b\u0002<=\u0007\u0015\u0002\u0002=?\u0005\u000e\b\u0002><\u0003",
    "\u0002\u0002\u0002?B\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002",
    "@A\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002",
    "\u0002C;\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002\u0002DE\u0003\u0002",
    "\u0002\u0002Eo\u0007\u0013\u0002\u0002FG\u0007\u000e\u0002\u0002GH\u0005",
    "\u0004\u0003\u0002HI\u0007\u000f\u0002\u0002IJ\u0005\u0004\u0003\fJ",
    "o\u0003\u0002\u0002\u0002KL\u0007\u0010\u0002\u0002LM\u0005\u0004\u0003",
    "\u0002MN\u0007\u0011\u0002\u0002NO\u0005\u0004\u0003\u000bOo\u0003\u0002",
    "\u0002\u0002PQ\u0007\u0018\u0002\u0002QR\u0007\u0012\u0002\u0002RS\u0005",
    "\u0004\u0003\u0002ST\u0007\u0015\u0002\u0002TU\u0005\u0004\u0003\u0002",
    "UV\u0007\u0013\u0002\u0002Vo\u0003\u0002\u0002\u0002WX\u0007\u0019\u0002",
    "\u0002XY\u0007\u0012\u0002\u0002YZ\u0005\u0004\u0003\u0002Z[\u0007\u0015",
    "\u0002\u0002[\\\u0005\u0004\u0003\u0002\\]\u0007\u0013\u0002\u0002]",
    "o\u0003\u0002\u0002\u0002^_\u0007\u000b\u0002\u0002_`\u0005\u0004\u0003",
    "\u0002`a\u0007\f\u0002\u0002ab\u0005\u0004\u0003\u0006bo\u0003\u0002",
    "\u0002\u0002cd\u0007\u000b\u0002\u0002de\u0005\u0004\u0003\u0002ef\u0007",
    "\r\u0002\u0002fg\u0005\u0004\u0003\u0005go\u0003\u0002\u0002\u0002h",
    "i\u0007\n\u0002\u0002io\u0005\u0004\u0003\u0004jk\u0007\u0012\u0002",
    "\u0002kl\u0005\u0004\u0003\u0002lm\u0007\u0013\u0002\u0002mo\u0003\u0002",
    "\u0002\u0002n\u0013\u0003\u0002\u0002\u0002n\u0015\u0003\u0002\u0002",
    "\u0002n\"\u0003\u0002\u0002\u0002n$\u0003\u0002\u0002\u0002n/\u0003",
    "\u0002\u0002\u0002n9\u0003\u0002\u0002\u0002nF\u0003\u0002\u0002\u0002",
    "nK\u0003\u0002\u0002\u0002nP\u0003\u0002\u0002\u0002nW\u0003\u0002\u0002",
    "\u0002n^\u0003\u0002\u0002\u0002nc\u0003\u0002\u0002\u0002nh\u0003\u0002",
    "\u0002\u0002nj\u0003\u0002\u0002\u0002ox\u0003\u0002\u0002\u0002pq\f",
    "\b\u0002\u0002qr\u0007\t\u0002\u0002rw\u0005\u0004\u0003\tst\f\u0007",
    "\u0002\u0002tu\u0007\b\u0002\u0002uw\u0005\u0004\u0003\bvp\u0003\u0002",
    "\u0002\u0002vs\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002\u0002xv\u0003",
    "\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y\u0005\u0003\u0002\u0002",
    "\u0002zx\u0003\u0002\u0002\u0002{|\u0005\f\u0007\u0002|\u0007\u0003",
    "\u0002\u0002\u0002}\u0081\u0005\n\u0006\u0002~\u0080\u0007\u001f\u0002",
    "\u0002\u007f~\u0003\u0002\u0002\u0002\u0080\u0083\u0003\u0002\u0002",
    "\u0002\u0081\u007f\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002",
    "\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083\u0081\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u0005\f\u0007\u0002\u0085\t\u0003\u0002\u0002\u0002",
    "\u0086\u0087\t\u0002\u0002\u0002\u0087\u000b\u0003\u0002\u0002\u0002",
    "\u0088\u0089\t\u0003\u0002\u0002\u0089\r\u0003\u0002\u0002\u0002\u008a",
    "\u0090\u0007\u0006\u0002\u0002\u008b\u0090\u0007\u0007\u0002\u0002\u008c",
    "\u0090\u0007\u001b\u0002\u0002\u008d\u0090\u0007\u001c\u0002\u0002\u008e",
    "\u0090\u0007\u001e\u0002\u0002\u008f\u008a\u0003\u0002\u0002\u0002\u008f",
    "\u008b\u0003\u0002\u0002\u0002\u008f\u008c\u0003\u0002\u0002\u0002\u008f",
    "\u008d\u0003\u0002\u0002\u0002\u008f\u008e\u0003\u0002\u0002\u0002\u0090",
    "\u000f\u0003\u0002\u0002\u0002\u000e\u001a \"-7@Cnvx\u0081\u008f"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ModalityParser extends antlr4.Parser {

    static grammarFileName = "Modality.g4";
    static literalNames = [ null, "'henceforth_must'", "'henceforth_can'", 
                            "'until'", "'true'", "'false'", "'and'", "'or'", 
                            "'not'", "'when'", "'also'", "'next'", "'['", 
                            "']'", "'<'", "'>'", "'('", "')'", "'*'", "','", 
                            "'+'", "'-'", "'lfp'", "'gfp'" ];
    static symbolicNames = [ null, "HENCEFORTH_MUST", "HENCEFORTH_CAN", 
                             "UNTIL", "TRUE", "FALSE", "AND", "OR", "NOT", 
                             "WHEN", "ALSO", "NEXT", "LBOX", "RBOX", "LDIA", 
                             "RDIA", "LPAREN", "RPAREN", "STAR", "COMMA", 
                             "PLUS", "MINUS", "LFP", "GFP", "NAME", "STRING", 
                             "NUMBER", "BOUND_VAR", "PATH", "WS", "LINE_COMMENT" ];
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
	        this.state = 108;
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
	            localctx = new PropsAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 32;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case ModalityParser.TRUE:
	            case ModalityParser.FALSE:
	            case ModalityParser.STAR:
	            case ModalityParser.NAME:
	                this.state = 20;
	                this.unsignedProp();
	                this.state = 24;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 21;
	                        this.signedProp(); 
	                    }
	                    this.state = 26;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	                }

	                break;
	            case ModalityParser.PLUS:
	            case ModalityParser.MINUS:
	                this.state = 28; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 27;
	                		this.signedProp();
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 30; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 4:
	            localctx = new HenceforthMustFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 34;
	            this.match(ModalityParser.HENCEFORTH_MUST);
	            this.state = 35;
	            this.match(ModalityParser.LPAREN);
	            this.state = 36;
	            localctx.inner_formula = this.formula(0);
	            this.state = 37;
	            this.match(ModalityParser.RPAREN);
	            this.state = 43;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	            if(la_===1) {
	                this.state = 38;
	                this.match(ModalityParser.UNTIL);
	                this.state = 39;
	                this.match(ModalityParser.LPAREN);
	                this.state = 40;
	                localctx.until_formula = this.formula(0);
	                this.state = 41;
	                this.match(ModalityParser.RPAREN);

	            }
	            break;

	        case 5:
	            localctx = new HenceforthCanFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 45;
	            this.match(ModalityParser.HENCEFORTH_CAN);
	            this.state = 46;
	            this.match(ModalityParser.LPAREN);
	            this.state = 47;
	            localctx.inner_formula = this.formula(0);
	            this.state = 48;
	            this.match(ModalityParser.RPAREN);
	            this.state = 53;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 49;
	                this.match(ModalityParser.UNTIL);
	                this.state = 50;
	                localctx.until_formula = this.formula(0);
	                this.state = 51;
	                this.match(ModalityParser.RPAREN);

	            }
	            break;

	        case 6:
	            localctx = new FunctionAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 55;
	            localctx.name = this.match(ModalityParser.NAME);
	            this.state = 56;
	            this.match(ModalityParser.LPAREN);
	            this.state = 65;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModalityParser.TRUE) | (1 << ModalityParser.FALSE) | (1 << ModalityParser.STRING) | (1 << ModalityParser.NUMBER) | (1 << ModalityParser.PATH))) !== 0)) {
	                this.state = 57;
	                this.arg();
	                this.state = 62;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===ModalityParser.COMMA) {
	                    this.state = 58;
	                    this.match(ModalityParser.COMMA);
	                    this.state = 59;
	                    this.arg();
	                    this.state = 64;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 67;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 7:
	            localctx = new BoxFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 68;
	            this.match(ModalityParser.LBOX);
	            this.state = 69;
	            localctx.inner = this.formula(0);
	            this.state = 70;
	            this.match(ModalityParser.RBOX);
	            this.state = 71;
	            localctx.outer = this.formula(10);
	            break;

	        case 8:
	            localctx = new DiamondFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 73;
	            this.match(ModalityParser.LDIA);
	            this.state = 74;
	            localctx.inner = this.formula(0);
	            this.state = 75;
	            this.match(ModalityParser.RDIA);
	            this.state = 76;
	            localctx.outer = this.formula(9);
	            break;

	        case 9:
	            localctx = new LfpFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 78;
	            this.match(ModalityParser.LFP);
	            this.state = 79;
	            this.match(ModalityParser.LPAREN);
	            this.state = 80;
	            localctx.boundVar = this.formula(0);
	            this.state = 81;
	            this.match(ModalityParser.COMMA);
	            this.state = 82;
	            localctx.inner = this.formula(0);
	            this.state = 83;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 10:
	            localctx = new GfpFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 85;
	            this.match(ModalityParser.GFP);
	            this.state = 86;
	            this.match(ModalityParser.LPAREN);
	            this.state = 87;
	            localctx.boundVar = this.formula(0);
	            this.state = 88;
	            this.match(ModalityParser.COMMA);
	            this.state = 89;
	            localctx.inner = this.formula(0);
	            this.state = 90;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 11:
	            localctx = new WhenAlsoFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 92;
	            this.match(ModalityParser.WHEN);
	            this.state = 93;
	            localctx.when_formula = this.formula(0);
	            this.state = 94;
	            this.match(ModalityParser.ALSO);
	            this.state = 95;
	            localctx.also_formula = this.formula(4);
	            break;

	        case 12:
	            localctx = new WhenNextFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 97;
	            this.match(ModalityParser.WHEN);
	            this.state = 98;
	            localctx.when_formula = this.formula(0);
	            this.state = 99;
	            this.match(ModalityParser.NEXT);
	            this.state = 100;
	            localctx.next_formula = this.formula(3);
	            break;

	        case 13:
	            localctx = new NotFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 102;
	            this.match(ModalityParser.NOT);
	            this.state = 103;
	            localctx.inner = this.formula(2);
	            break;

	        case 14:
	            localctx = new ParenFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 104;
	            this.match(ModalityParser.LPAREN);
	            this.state = 105;
	            localctx.inner = this.formula(0);
	            this.state = 106;
	            this.match(ModalityParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 118;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 116;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new OrFormulaContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ModalityParser.RULE_formula);
	                    this.state = 110;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 111;
	                    this.match(ModalityParser.OR);
	                    this.state = 112;
	                    localctx.right = this.formula(7);
	                    break;

	                case 2:
	                    localctx = new AndFormulaContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ModalityParser.RULE_formula);
	                    this.state = 113;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 114;
	                    this.match(ModalityParser.AND);
	                    this.state = 115;
	                    localctx.right = this.formula(6);
	                    break;

	                } 
	            }
	            this.state = 120;
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
	        this.state = 121;
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
	        this.state = 123;
	        localctx.theSign = this.sign();
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModalityParser.WS) {
	            this.state = 124;
	            this.match(ModalityParser.WS);
	            this.state = 129;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 130;
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
	        this.state = 132;
	        _la = this._input.LA(1);
	        if(!(_la===ModalityParser.PLUS || _la===ModalityParser.MINUS)) {
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
	        this.state = 134;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModalityParser.TRUE) | (1 << ModalityParser.FALSE) | (1 << ModalityParser.STAR) | (1 << ModalityParser.NAME))) !== 0))) {
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
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ModalityParser.TRUE:
	            localctx = new TrueArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.match(ModalityParser.TRUE);
	            break;
	        case ModalityParser.FALSE:
	            localctx = new FalseArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 137;
	            this.match(ModalityParser.FALSE);
	            break;
	        case ModalityParser.STRING:
	            localctx = new StringArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 138;
	            this.match(ModalityParser.STRING);
	            break;
	        case ModalityParser.NUMBER:
	            localctx = new NumberArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 139;
	            this.match(ModalityParser.NUMBER);
	            break;
	        case ModalityParser.PATH:
	            localctx = new PathArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 140;
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
ModalityParser.HENCEFORTH_MUST = 1;
ModalityParser.HENCEFORTH_CAN = 2;
ModalityParser.UNTIL = 3;
ModalityParser.TRUE = 4;
ModalityParser.FALSE = 5;
ModalityParser.AND = 6;
ModalityParser.OR = 7;
ModalityParser.NOT = 8;
ModalityParser.WHEN = 9;
ModalityParser.ALSO = 10;
ModalityParser.NEXT = 11;
ModalityParser.LBOX = 12;
ModalityParser.RBOX = 13;
ModalityParser.LDIA = 14;
ModalityParser.RDIA = 15;
ModalityParser.LPAREN = 16;
ModalityParser.RPAREN = 17;
ModalityParser.STAR = 18;
ModalityParser.COMMA = 19;
ModalityParser.PLUS = 20;
ModalityParser.MINUS = 21;
ModalityParser.LFP = 22;
ModalityParser.GFP = 23;
ModalityParser.NAME = 24;
ModalityParser.STRING = 25;
ModalityParser.NUMBER = 26;
ModalityParser.BOUND_VAR = 27;
ModalityParser.PATH = 28;
ModalityParser.WS = 29;
ModalityParser.LINE_COMMENT = 30;

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
        this.boundVar = null; // FormulaContext;
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

class HenceforthMustFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner_formula = null; // FormulaContext;
        this.until_formula = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	HENCEFORTH_MUST() {
	    return this.getToken(ModalityParser.HENCEFORTH_MUST, 0);
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
	        listener.enterHenceforthMustFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitHenceforthMustFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitHenceforthMustFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.HenceforthMustFormulaContext = HenceforthMustFormulaContext;

class GfpFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.boundVar = null; // FormulaContext;
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

class HenceforthCanFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner_formula = null; // FormulaContext;
        this.until_formula = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	HENCEFORTH_CAN() {
	    return this.getToken(ModalityParser.HENCEFORTH_CAN, 0);
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
	        listener.enterHenceforthCanFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitHenceforthCanFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitHenceforthCanFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.HenceforthCanFormulaContext = HenceforthCanFormulaContext;

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

	STAR() {
	    return this.getToken(ModalityParser.STAR, 0);
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
