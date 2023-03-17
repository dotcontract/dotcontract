// Generated from Modality.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import ModalityListener from './ModalityListener.js';
import ModalityVisitor from './ModalityVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0014P\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "\u0019\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003#\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003*",
    "\n\u0003\f\u0003\u000e\u0003-\u000b\u0003\u0005\u0003/\n\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003=\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u0003E\n\u0003\f\u0003\u000e\u0003H\u000b\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004N\n\u0004",
    "\u0003\u0004\u0002\u0003\u0004\u0005\u0002\u0004\u0006\u0002\u0002\u0002",
    "]\u0002\b\u0003\u0002\u0002\u0002\u0004<\u0003\u0002\u0002\u0002\u0006",
    "M\u0003\u0002\u0002\u0002\b\t\u0005\u0004\u0003\u0002\t\n\u0007\u0002",
    "\u0002\u0003\n\u0003\u0003\u0002\u0002\u0002\u000b\f\b\u0003\u0001\u0002",
    "\f=\u0007\t\u0002\u0002\r=\u0007\n\u0002\u0002\u000e=\u0007\u0010\u0002",
    "\u0002\u000f\u0010\u0007\u0004\u0002\u0002\u0010\u0011\u0007\u0007\u0002",
    "\u0002\u0011\u0012\u0005\u0004\u0003\u0002\u0012\u0018\u0007\b\u0002",
    "\u0002\u0013\u0014\u0007\u0006\u0002\u0002\u0014\u0015\u0007\u0007\u0002",
    "\u0002\u0015\u0016\u0005\u0004\u0003\u0002\u0016\u0017\u0007\b\u0002",
    "\u0002\u0017\u0019\u0003\u0002\u0002\u0002\u0018\u0013\u0003\u0002\u0002",
    "\u0002\u0018\u0019\u0003\u0002\u0002\u0002\u0019=\u0003\u0002\u0002",
    "\u0002\u001a\u001b\u0007\u0005\u0002\u0002\u001b\u001c\u0007\u0007\u0002",
    "\u0002\u001c\u001d\u0005\u0004\u0003\u0002\u001d\"\u0007\b\u0002\u0002",
    "\u001e\u001f\u0007\u0006\u0002\u0002\u001f \u0005\u0004\u0003\u0002",
    " !\u0007\b\u0002\u0002!#\u0003\u0002\u0002\u0002\"\u001e\u0003\u0002",
    "\u0002\u0002\"#\u0003\u0002\u0002\u0002#=\u0003\u0002\u0002\u0002$%",
    "\u0007\u0010\u0002\u0002%.\u0007\u0007\u0002\u0002&+\u0005\u0006\u0004",
    "\u0002\'(\u0007\u0003\u0002\u0002(*\u0005\u0006\u0004\u0002)\'\u0003",
    "\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002+)\u0003\u0002\u0002\u0002",
    "+,\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002",
    "\u0002.&\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/0\u0003\u0002",
    "\u0002\u00020=\u0007\b\u0002\u000212\u0007\u000e\u0002\u000223\u0005",
    "\u0004\u0003\u000234\u0007\u000f\u0002\u000245\u0005\u0004\u0003\u0005",
    "5=\u0003\u0002\u0002\u000267\u0007\r\u0002\u00027=\u0005\u0004\u0003",
    "\u000489\u0007\u0007\u0002\u00029:\u0005\u0004\u0003\u0002:;\u0007\b",
    "\u0002\u0002;=\u0003\u0002\u0002\u0002<\u000b\u0003\u0002\u0002\u0002",
    "<\r\u0003\u0002\u0002\u0002<\u000e\u0003\u0002\u0002\u0002<\u000f\u0003",
    "\u0002\u0002\u0002<\u001a\u0003\u0002\u0002\u0002<$\u0003\u0002\u0002",
    "\u0002<1\u0003\u0002\u0002\u0002<6\u0003\u0002\u0002\u0002<8\u0003\u0002",
    "\u0002\u0002=F\u0003\u0002\u0002\u0002>?\f\u0007\u0002\u0002?@\u0007",
    "\f\u0002\u0002@E\u0005\u0004\u0003\bAB\f\u0006\u0002\u0002BC\u0007\u000b",
    "\u0002\u0002CE\u0005\u0004\u0003\u0007D>\u0003\u0002\u0002\u0002DA\u0003",
    "\u0002\u0002\u0002EH\u0003\u0002\u0002\u0002FD\u0003\u0002\u0002\u0002",
    "FG\u0003\u0002\u0002\u0002G\u0005\u0003\u0002\u0002\u0002HF\u0003\u0002",
    "\u0002\u0002IN\u0007\t\u0002\u0002JN\u0007\n\u0002\u0002KN\u0007\u0011",
    "\u0002\u0002LN\u0007\u0012\u0002\u0002MI\u0003\u0002\u0002\u0002MJ\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002ML\u0003\u0002\u0002\u0002",
    "N\u0007\u0003\u0002\u0002\u0002\n\u0018\"+.<DFM"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ModalityParser extends antlr4.Parser {

    static grammarFileName = "Modality.g4";
    static literalNames = [ null, "','", "'henceforth_must'", "'henceforth_can'", 
                            "'until'", "'('", "')'", "'true'", "'false'", 
                            "'and'", "'or'", "'not'", "'when'", "'also'" ];
    static symbolicNames = [ null, null, "HENCEFORTH_MUST", "HENCEFORTH_CAN", 
                             "UNTIL", "LPAREN", "RPAREN", "TRUE", "FALSE", 
                             "AND", "OR", "NOT", "WHEN", "ALSO", "NAME", 
                             "STRING", "NUMBER", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "expression", "formula", "arg" ];

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
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ModalityParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 6;
	        localctx.f = this.formula(0);
	        this.state = 7;
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
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new TrueAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 10;
	            this.match(ModalityParser.TRUE);
	            break;

	        case 2:
	            localctx = new FalseAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 11;
	            this.match(ModalityParser.FALSE);
	            break;

	        case 3:
	            localctx = new PropAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 12;
	            localctx.prop = this.match(ModalityParser.NAME);
	            break;

	        case 4:
	            localctx = new HenceforthMustFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 13;
	            this.match(ModalityParser.HENCEFORTH_MUST);
	            this.state = 14;
	            this.match(ModalityParser.LPAREN);
	            this.state = 15;
	            localctx.inner_formula = this.formula(0);
	            this.state = 16;
	            this.match(ModalityParser.RPAREN);
	            this.state = 22;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            if(la_===1) {
	                this.state = 17;
	                this.match(ModalityParser.UNTIL);
	                this.state = 18;
	                this.match(ModalityParser.LPAREN);
	                this.state = 19;
	                localctx.until_formula = this.formula(0);
	                this.state = 20;
	                this.match(ModalityParser.RPAREN);

	            }
	            break;

	        case 5:
	            localctx = new HenceforthCanFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 24;
	            this.match(ModalityParser.HENCEFORTH_CAN);
	            this.state = 25;
	            this.match(ModalityParser.LPAREN);
	            this.state = 26;
	            localctx.inner_formula = this.formula(0);
	            this.state = 27;
	            this.match(ModalityParser.RPAREN);
	            this.state = 32;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 28;
	                this.match(ModalityParser.UNTIL);
	                this.state = 29;
	                localctx.until_formula = this.formula(0);
	                this.state = 30;
	                this.match(ModalityParser.RPAREN);

	            }
	            break;

	        case 6:
	            localctx = new FunctionAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 34;
	            localctx.name = this.match(ModalityParser.NAME);
	            this.state = 35;
	            this.match(ModalityParser.LPAREN);
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ModalityParser.TRUE) | (1 << ModalityParser.FALSE) | (1 << ModalityParser.STRING) | (1 << ModalityParser.NUMBER))) !== 0)) {
	                this.state = 36;
	                this.arg();
	                this.state = 41;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===ModalityParser.T__0) {
	                    this.state = 37;
	                    this.match(ModalityParser.T__0);
	                    this.state = 38;
	                    this.arg();
	                    this.state = 43;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 46;
	            this.match(ModalityParser.RPAREN);
	            break;

	        case 7:
	            localctx = new WhenAlsoFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 47;
	            this.match(ModalityParser.WHEN);
	            this.state = 48;
	            localctx.when_formula = this.formula(0);
	            this.state = 49;
	            this.match(ModalityParser.ALSO);
	            this.state = 50;
	            localctx.also_formula = this.formula(3);
	            break;

	        case 8:
	            localctx = new NotFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 52;
	            this.match(ModalityParser.NOT);
	            this.state = 53;
	            localctx.inner = this.formula(2);
	            break;

	        case 9:
	            localctx = new ParenFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 54;
	            this.match(ModalityParser.LPAREN);
	            this.state = 55;
	            localctx.inner = this.formula(0);
	            this.state = 56;
	            this.match(ModalityParser.RPAREN);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 66;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new OrFormulaContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ModalityParser.RULE_formula);
	                    this.state = 60;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 61;
	                    this.match(ModalityParser.OR);
	                    this.state = 62;
	                    localctx.right = this.formula(6);
	                    break;

	                case 2:
	                    localctx = new AndFormulaContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, ModalityParser.RULE_formula);
	                    this.state = 63;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 64;
	                    this.match(ModalityParser.AND);
	                    this.state = 65;
	                    localctx.right = this.formula(5);
	                    break;

	                } 
	            }
	            this.state = 70;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	arg() {
	    let localctx = new ArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ModalityParser.RULE_arg);
	    try {
	        this.state = 75;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ModalityParser.TRUE:
	            localctx = new TrueArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 71;
	            this.match(ModalityParser.TRUE);
	            break;
	        case ModalityParser.FALSE:
	            localctx = new FalseArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 72;
	            this.match(ModalityParser.FALSE);
	            break;
	        case ModalityParser.STRING:
	            localctx = new StringArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.match(ModalityParser.STRING);
	            break;
	        case ModalityParser.NUMBER:
	            localctx = new NumberArgContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 74;
	            this.match(ModalityParser.NUMBER);
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
ModalityParser.T__0 = 1;
ModalityParser.HENCEFORTH_MUST = 2;
ModalityParser.HENCEFORTH_CAN = 3;
ModalityParser.UNTIL = 4;
ModalityParser.LPAREN = 5;
ModalityParser.RPAREN = 6;
ModalityParser.TRUE = 7;
ModalityParser.FALSE = 8;
ModalityParser.AND = 9;
ModalityParser.OR = 10;
ModalityParser.NOT = 11;
ModalityParser.WHEN = 12;
ModalityParser.ALSO = 13;
ModalityParser.NAME = 14;
ModalityParser.STRING = 15;
ModalityParser.NUMBER = 16;
ModalityParser.WS = 17;
ModalityParser.LINE_COMMENT = 18;

ModalityParser.RULE_expression = 0;
ModalityParser.RULE_formula = 1;
ModalityParser.RULE_arg = 2;

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

class PropAtomContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.prop = null; // Token;
        super.copyFrom(ctx);
    }

	NAME() {
	    return this.getToken(ModalityParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.enterPropAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ModalityListener ) {
	        listener.exitPropAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ModalityVisitor ) {
	        return visitor.visitPropAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

ModalityParser.PropAtomContext = PropAtomContext;

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
ModalityParser.ArgContext = ArgContext; 
