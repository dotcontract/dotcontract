// Generated from ModalFormula.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import ModalFormulaListener from './ModalFormulaListener.js';
import ModalFormulaVisitor from './ModalFormulaVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0017^\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0018\n\u0003\f\u0003",
    "\u000e\u0003\u001b\u000b\u0003\u0003\u0003\u0006\u0003\u001e\n\u0003",
    "\r\u0003\u000e\u0003\u001f\u0005\u0003\"\n\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003B\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0007\u0003J\n\u0003\f\u0003\u000e\u0003M\u000b\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0007\u0005S\n\u0005\f\u0005\u000e\u0005",
    "V\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0002\u0003\u0004\b\u0002\u0004\u0006",
    "\b\n\f\u0002\u0004\u0003\u0002\n\u000b\u0005\u0002\u0003\u0004\b\b\u0014",
    "\u0014\u0002f\u0002\u000e\u0003\u0002\u0002\u0002\u0004A\u0003\u0002",
    "\u0002\u0002\u0006N\u0003\u0002\u0002\u0002\bP\u0003\u0002\u0002\u0002",
    "\nY\u0003\u0002\u0002\u0002\f[\u0003\u0002\u0002\u0002\u000e\u000f\u0005",
    "\u0004\u0003\u0002\u000f\u0010\u0007\u0002\u0002\u0003\u0010\u0003\u0003",
    "\u0002\u0002\u0002\u0011\u0012\b\u0003\u0001\u0002\u0012B\u0007\u0003",
    "\u0002\u0002\u0013B\u0007\u0004\u0002\u0002\u0014B\u0007\u0015\u0002",
    "\u0002\u0015\u0019\u0005\u0006\u0004\u0002\u0016\u0018\u0005\b\u0005",
    "\u0002\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002",
    "\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002",
    "\u0002\u001a\"\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002",
    "\u0002\u001c\u001e\u0005\b\u0005\u0002\u001d\u001c\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002",
    "\u0002\u001f \u0003\u0002\u0002\u0002 \"\u0003\u0002\u0002\u0002!\u0015",
    "\u0003\u0002\u0002\u0002!\u001d\u0003\u0002\u0002\u0002\"B\u0003\u0002",
    "\u0002\u0002#$\u0007\f\u0002\u0002$%\u0005\u0004\u0003\u0002%&\u0007",
    "\r\u0002\u0002&\'\u0005\u0004\u0003\n\'B\u0003\u0002\u0002\u0002()\u0007",
    "\u000e\u0002\u0002)*\u0005\u0004\u0003\u0002*+\u0007\u000f\u0002\u0002",
    "+,\u0005\u0004\u0003\t,B\u0003\u0002\u0002\u0002-.\u0007\u0012\u0002",
    "\u0002./\u0007\u0010\u0002\u0002/0\u0005\u0004\u0003\u000201\u0007\t",
    "\u0002\u000212\u0005\u0004\u0003\u000223\u0007\u0011\u0002\u00023B\u0003",
    "\u0002\u0002\u000245\u0007\u0013\u0002\u000256\u0007\u0010\u0002\u0002",
    "67\u0005\u0004\u0003\u000278\u0007\t\u0002\u000289\u0005\u0004\u0003",
    "\u00029:\u0007\u0011\u0002\u0002:B\u0003\u0002\u0002\u0002;<\u0007\u0007",
    "\u0002\u0002<B\u0005\u0004\u0003\u0004=>\u0007\u0010\u0002\u0002>?\u0005",
    "\u0004\u0003\u0002?@\u0007\u0011\u0002\u0002@B\u0003\u0002\u0002\u0002",
    "A\u0011\u0003\u0002\u0002\u0002A\u0013\u0003\u0002\u0002\u0002A\u0014",
    "\u0003\u0002\u0002\u0002A!\u0003\u0002\u0002\u0002A#\u0003\u0002\u0002",
    "\u0002A(\u0003\u0002\u0002\u0002A-\u0003\u0002\u0002\u0002A4\u0003\u0002",
    "\u0002\u0002A;\u0003\u0002\u0002\u0002A=\u0003\u0002\u0002\u0002BK\u0003",
    "\u0002\u0002\u0002CD\f\u0006\u0002\u0002DE\u0007\u0006\u0002\u0002E",
    "J\u0005\u0004\u0003\u0007FG\f\u0005\u0002\u0002GH\u0007\u0005\u0002",
    "\u0002HJ\u0005\u0004\u0003\u0006IC\u0003\u0002\u0002\u0002IF\u0003\u0002",
    "\u0002\u0002JM\u0003\u0002\u0002\u0002KI\u0003\u0002\u0002\u0002KL\u0003",
    "\u0002\u0002\u0002L\u0005\u0003\u0002\u0002\u0002MK\u0003\u0002\u0002",
    "\u0002NO\u0005\f\u0007\u0002O\u0007\u0003\u0002\u0002\u0002PT\u0005",
    "\n\u0006\u0002QS\u0007\u0016\u0002\u0002RQ\u0003\u0002\u0002\u0002S",
    "V\u0003\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002",
    "\u0002UW\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002WX\u0005\f",
    "\u0007\u0002X\t\u0003\u0002\u0002\u0002YZ\t\u0002\u0002\u0002Z\u000b",
    "\u0003\u0002\u0002\u0002[\\\t\u0003\u0002\u0002\\\r\u0003\u0002\u0002",
    "\u0002\t\u0019\u001f!AIKT"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ModalFormulaParser extends antlr4.Parser {

    static grammarFileName = "ModalFormula.g4";
    static literalNames = [ null, "'true'", "'false'", "'and'", "'or'", 
                            "'not'", "'*'", "','", "'+'", "'-'", "'['", 
                            "']'", "'<'", "'>'", "'('", "')'", "'lfp'", 
                            "'gfp'" ];
    static symbolicNames = [ null, "TRUE", "FALSE", "AND", "OR", "NOT", 
                             "STAR", "COMMA", "PLUS", "MINUS", "LBOX", "RBOX", 
                             "LDIA", "RDIA", "LPAREN", "RPAREN", "LFP", 
                             "GFP", "NAME", "BOUND_VAR", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "formula", "subformula", "unsignedProp", "signedProp", 
                         "sign", "prop" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ModalFormulaParser.ruleNames;
        this.literalNames = ModalFormulaParser.literalNames;
        this.symbolicNames = ModalFormulaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.subformula_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    subformula_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ModalFormulaParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        localctx.f = this.subformula(0);
	        this.state = 13;
	        this.match(ModalFormulaParser.EOF);
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


	subformula(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SubformulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, ModalFormulaParser.RULE_subformula, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TrueAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 16;
	            this.match(ModalFormulaParser.TRUE);
	            break;

	        case 2:
	            localctx = new FalseAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 17;
	            this.match(ModalFormulaParser.FALSE);
	            break;

	        case 3:
	            localctx = new BoundVarContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 18;
	            this.match(ModalFormulaParser.BOUND_VAR);
	            break;

	        case 4:
	            localctx = new PropsAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 31;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case ModalFormulaParser.TRUE:
	            case ModalFormulaParser.FALSE:
	            case ModalFormulaParser.STAR:
	            case ModalFormulaParser.NAME:
	                this.state = 19;
	                this.unsignedProp();
	                this.state = 23;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 20;
	                        this.signedProp(); 
	                    }
	                    this.state = 25;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	                }

	                break;
	            case ModalFormulaParser.PLUS:
	            case ModalFormulaParser.MINUS:
	                this.state = 27; 
	                this._errHandler.sync(this);
	                var _alt = 1;
	                do {
	                	switch (_alt) {
	                	case 1:
	                		this.state = 26;
	                		this.signedProp();
	                		break;
	                	default:
	                		throw new antlr4.error.NoViableAltException(this);
	                	}
	                	this.state = 29; 
	                	this._errHandler.sync(this);
	                	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	                } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 5:
	            localctx = new BoxFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 33;
	            this.match(ModalFormulaParser.LBOX);
	            this.state = 34;
	            localctx.inner = this.subformula(0);
	            this.state = 35;
	            this.match(ModalFormulaParser.RBOX);
	            this.state = 36;
	            localctx.outer = this.subformula(8);
	            break;

	        case 6:
	            localctx = new DiamondFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 38;
	            this.match(ModalFormulaParser.LDIA);
	            this.state = 39;
	            localctx.inner = this.subformula(0);
	            this.state = 40;
	            this.match(ModalFormulaParser.RDIA);
	            this.state = 41;
	            localctx.outer = this.subformula(7);
	            break;

	        case 7:
	            localctx = new LfpFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 43;
	            this.match(ModalFormulaParser.LFP);
	            this.state = 44;
	            this.match(ModalFormulaParser.LPAREN);
	            this.state = 45;
	            localctx.boundVar = this.subformula(0);
	            this.state = 46;
	            this.match(ModalFormulaParser.COMMA);
	            this.state = 47;
	            localctx.inner = this.subformula(0);
	            this.state = 48;
	            this.match(ModalFormulaParser.RPAREN);
	            break;

	        case 8:
	            localctx = new GfpFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 50;
	            this.match(ModalFormulaParser.GFP);
	            this.state = 51;
	            this.match(ModalFormulaParser.LPAREN);
	            this.state = 52;
	            localctx.boundVar = this.subformula(0);
	            this.state = 53;
	            this.match(ModalFormulaParser.COMMA);
	            this.state = 54;
	            localctx.inner = this.subformula(0);
	            this.state = 55;
	            this.match(ModalFormulaParser.RPAREN);
	            break;

	        case 9:
	            localctx = new NotFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 57;
	            this.match(ModalFormulaParser.NOT);
	            this.state = 58;
	            localctx.inner = this.subformula(2);
	            break;

	        case 10:
	            localctx = new ParenFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 59;
	            this.match(ModalFormulaParser.LPAREN);
	            this.state = 60;
	            localctx.inner = this.subformula(0);
	            this.state = 61;
	            this.match(ModalFormulaParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 73;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 71;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new OrFormulaContext(this, new SubformulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ModalFormulaParser.RULE_subformula);
	                    this.state = 65;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 66;
	                    this.match(ModalFormulaParser.OR);
	                    this.state = 67;
	                    localctx.right = this.subformula(5);
	                    break;

	                case 2:
	                    localctx = new AndFormulaContext(this, new SubformulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ModalFormulaParser.RULE_subformula);
	                    this.state = 68;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 69;
	                    this.match(ModalFormulaParser.AND);
	                    this.state = 70;
	                    localctx.right = this.subformula(4);
	                    break;

	                } 
	            }
	            this.state = 75;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
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
	    this.enterRule(localctx, 4, ModalFormulaParser.RULE_unsignedProp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
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
	    this.enterRule(localctx, 6, ModalFormulaParser.RULE_signedProp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        localctx.theSign = this.sign();
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ModalFormulaParser.WS) {
	            this.state = 79;
	            this.match(ModalFormulaParser.WS);
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
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
	    this.enterRule(localctx, 8, ModalFormulaParser.RULE_sign);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        _la = this._input.LA(1);
	        if(!(_la===ModalFormulaParser.PLUS || _la===ModalFormulaParser.MINUS)) {
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
	    this.enterRule(localctx, 10, ModalFormulaParser.RULE_prop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModalFormulaParser.TRUE) | (1 << ModalFormulaParser.FALSE) | (1 << ModalFormulaParser.STAR) | (1 << ModalFormulaParser.NAME))) !== 0))) {
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


}

ModalFormulaParser.EOF = antlr4.Token.EOF;
ModalFormulaParser.TRUE = 1;
ModalFormulaParser.FALSE = 2;
ModalFormulaParser.AND = 3;
ModalFormulaParser.OR = 4;
ModalFormulaParser.NOT = 5;
ModalFormulaParser.STAR = 6;
ModalFormulaParser.COMMA = 7;
ModalFormulaParser.PLUS = 8;
ModalFormulaParser.MINUS = 9;
ModalFormulaParser.LBOX = 10;
ModalFormulaParser.RBOX = 11;
ModalFormulaParser.LDIA = 12;
ModalFormulaParser.RDIA = 13;
ModalFormulaParser.LPAREN = 14;
ModalFormulaParser.RPAREN = 15;
ModalFormulaParser.LFP = 16;
ModalFormulaParser.GFP = 17;
ModalFormulaParser.NAME = 18;
ModalFormulaParser.BOUND_VAR = 19;
ModalFormulaParser.WS = 20;
ModalFormulaParser.LINE_COMMENT = 21;

ModalFormulaParser.RULE_formula = 0;
ModalFormulaParser.RULE_subformula = 1;
ModalFormulaParser.RULE_unsignedProp = 2;
ModalFormulaParser.RULE_signedProp = 3;
ModalFormulaParser.RULE_sign = 4;
ModalFormulaParser.RULE_prop = 5;

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
        this.ruleIndex = ModalFormulaParser.RULE_formula;
        this.f = null; // SubformulaContext
    }

	EOF() {
	    return this.getToken(ModalFormulaParser.EOF, 0);
	};

	subformula() {
	    return this.getTypedRuleContext(SubformulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SubformulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ModalFormulaParser.RULE_subformula;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParenFormulaContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // SubformulaContext;
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(ModalFormulaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ModalFormulaParser.RPAREN, 0);
	};

	subformula() {
	    return this.getTypedRuleContext(SubformulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterParenFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitParenFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitParenFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.ParenFormulaContext = ParenFormulaContext;

class BoundVarContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	BOUND_VAR() {
	    return this.getToken(ModalFormulaParser.BOUND_VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterBoundVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitBoundVar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitBoundVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.BoundVarContext = BoundVarContext;

class BoxFormulaContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // SubformulaContext;
        this.outer = null; // SubformulaContext;
        super.copyFrom(ctx);
    }

	LBOX() {
	    return this.getToken(ModalFormulaParser.LBOX, 0);
	};

	RBOX() {
	    return this.getToken(ModalFormulaParser.RBOX, 0);
	};

	subformula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubformulaContext);
	    } else {
	        return this.getTypedRuleContext(SubformulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterBoxFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitBoxFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitBoxFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.BoxFormulaContext = BoxFormulaContext;

class FalseAtomContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(ModalFormulaParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterFalseAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitFalseAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitFalseAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.FalseAtomContext = FalseAtomContext;

class AndFormulaContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // SubformulaContext;
        this.right = null; // SubformulaContext;
        super.copyFrom(ctx);
    }

	AND() {
	    return this.getToken(ModalFormulaParser.AND, 0);
	};

	subformula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubformulaContext);
	    } else {
	        return this.getTypedRuleContext(SubformulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterAndFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitAndFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitAndFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.AndFormulaContext = AndFormulaContext;

class GfpFormulaContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.boundVar = null; // SubformulaContext;
        this.inner = null; // SubformulaContext;
        super.copyFrom(ctx);
    }

	GFP() {
	    return this.getToken(ModalFormulaParser.GFP, 0);
	};

	LPAREN() {
	    return this.getToken(ModalFormulaParser.LPAREN, 0);
	};

	COMMA() {
	    return this.getToken(ModalFormulaParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(ModalFormulaParser.RPAREN, 0);
	};

	subformula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubformulaContext);
	    } else {
	        return this.getTypedRuleContext(SubformulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterGfpFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitGfpFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitGfpFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.GfpFormulaContext = GfpFormulaContext;

class NotFormulaContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // SubformulaContext;
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(ModalFormulaParser.NOT, 0);
	};

	subformula() {
	    return this.getTypedRuleContext(SubformulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterNotFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitNotFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitNotFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.NotFormulaContext = NotFormulaContext;

class OrFormulaContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // SubformulaContext;
        this.right = null; // SubformulaContext;
        super.copyFrom(ctx);
    }

	OR() {
	    return this.getToken(ModalFormulaParser.OR, 0);
	};

	subformula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubformulaContext);
	    } else {
	        return this.getTypedRuleContext(SubformulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterOrFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitOrFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitOrFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.OrFormulaContext = OrFormulaContext;

class TrueAtomContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(ModalFormulaParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterTrueAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitTrueAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitTrueAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.TrueAtomContext = TrueAtomContext;

class LfpFormulaContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.boundVar = null; // SubformulaContext;
        this.inner = null; // SubformulaContext;
        super.copyFrom(ctx);
    }

	LFP() {
	    return this.getToken(ModalFormulaParser.LFP, 0);
	};

	LPAREN() {
	    return this.getToken(ModalFormulaParser.LPAREN, 0);
	};

	COMMA() {
	    return this.getToken(ModalFormulaParser.COMMA, 0);
	};

	RPAREN() {
	    return this.getToken(ModalFormulaParser.RPAREN, 0);
	};

	subformula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubformulaContext);
	    } else {
	        return this.getTypedRuleContext(SubformulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterLfpFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitLfpFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitLfpFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.LfpFormulaContext = LfpFormulaContext;

class PropsAtomContext extends SubformulaContext {

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
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterPropsAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitPropsAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitPropsAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.PropsAtomContext = PropsAtomContext;

class DiamondFormulaContext extends SubformulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // SubformulaContext;
        this.outer = null; // SubformulaContext;
        super.copyFrom(ctx);
    }

	LDIA() {
	    return this.getToken(ModalFormulaParser.LDIA, 0);
	};

	RDIA() {
	    return this.getToken(ModalFormulaParser.RDIA, 0);
	};

	subformula = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubformulaContext);
	    } else {
	        return this.getTypedRuleContext(SubformulaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterDiamondFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitDiamondFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitDiamondFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalFormulaParser.DiamondFormulaContext = DiamondFormulaContext;

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
        this.ruleIndex = ModalFormulaParser.RULE_unsignedProp;
        this.theProp = null; // PropContext
    }

	prop() {
	    return this.getTypedRuleContext(PropContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterUnsignedProp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitUnsignedProp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
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
        this.ruleIndex = ModalFormulaParser.RULE_signedProp;
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
	        return this.getTokens(ModalFormulaParser.WS);
	    } else {
	        return this.getToken(ModalFormulaParser.WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterSignedProp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitSignedProp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
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
        this.ruleIndex = ModalFormulaParser.RULE_sign;
    }

	PLUS() {
	    return this.getToken(ModalFormulaParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(ModalFormulaParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitSign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
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
        this.ruleIndex = ModalFormulaParser.RULE_prop;
    }

	TRUE() {
	    return this.getToken(ModalFormulaParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(ModalFormulaParser.FALSE, 0);
	};

	STAR() {
	    return this.getToken(ModalFormulaParser.STAR, 0);
	};

	NAME() {
	    return this.getToken(ModalFormulaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.enterProp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalFormulaListener ) {
	        listener.exitProp(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalFormulaVisitor ) {
	        return visitor.visitProp(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ModalFormulaParser.FormulaContext = FormulaContext; 
ModalFormulaParser.SubformulaContext = SubformulaContext; 
ModalFormulaParser.UnsignedPropContext = UnsignedPropContext; 
ModalFormulaParser.SignedPropContext = SignedPropContext; 
ModalFormulaParser.SignContext = SignContext; 
ModalFormulaParser.PropContext = PropContext; 
