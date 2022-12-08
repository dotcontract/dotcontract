// Generated from PropositionalFormula.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import PropositionalFormulaListener from './PropositionalFormulaListener.js';
import PropositionalFormulaVisitor from './PropositionalFormulaVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\f\u001c\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0005\u0002\u000f\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002\u0017\n",
    "\u0002\f\u0002\u000e\u0002\u001a\u000b\u0002\u0003\u0002\u0002\u0003",
    "\u0002\u0003\u0002\u0002\u0002\u0002 \u0002\u000e\u0003\u0002\u0002",
    "\u0002\u0004\u0005\b\u0002\u0001\u0002\u0005\u000f\u0007\u0005\u0002",
    "\u0002\u0006\u000f\u0007\u0006\u0002\u0002\u0007\u000f\u0007\n\u0002",
    "\u0002\b\t\u0007\t\u0002\u0002\t\u000f\u0005\u0002\u0002\u0004\n\u000b",
    "\u0007\u0003\u0002\u0002\u000b\f\u0005\u0002\u0002\u0002\f\r\u0007\u0004",
    "\u0002\u0002\r\u000f\u0003\u0002\u0002\u0002\u000e\u0004\u0003\u0002",
    "\u0002\u0002\u000e\u0006\u0003\u0002\u0002\u0002\u000e\u0007\u0003\u0002",
    "\u0002\u0002\u000e\b\u0003\u0002\u0002\u0002\u000e\n\u0003\u0002\u0002",
    "\u0002\u000f\u0018\u0003\u0002\u0002\u0002\u0010\u0011\f\u0006\u0002",
    "\u0002\u0011\u0012\u0007\b\u0002\u0002\u0012\u0017\u0005\u0002\u0002",
    "\u0007\u0013\u0014\f\u0005\u0002\u0002\u0014\u0015\u0007\u0007\u0002",
    "\u0002\u0015\u0017\u0005\u0002\u0002\u0006\u0016\u0010\u0003\u0002\u0002",
    "\u0002\u0016\u0013\u0003\u0002\u0002\u0002\u0017\u001a\u0003\u0002\u0002",
    "\u0002\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002",
    "\u0002\u0019\u0003\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002",
    "\u0002\u0005\u000e\u0016\u0018"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class PropositionalFormulaParser extends antlr4.Parser {

    static grammarFileName = "PropositionalFormula.g4";
    static literalNames = [ null, "'('", "')'", "'true'", "'false'", "'and'", 
                            "'or'", "'not'" ];
    static symbolicNames = [ null, "LPAREN", "RPAREN", "TRUE", "FALSE", 
                             "AND", "OR", "NOT", "PROP", "WS", "LINE_COMMENT" ];
    static ruleNames = [ "formula" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PropositionalFormulaParser.ruleNames;
        this.literalNames = PropositionalFormulaParser.literalNames;
        this.symbolicNames = PropositionalFormulaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.formula_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    formula_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	formula(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FormulaContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, PropositionalFormulaParser.RULE_formula, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case PropositionalFormulaParser.TRUE:
	            localctx = new TrueAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 3;
	            this.match(PropositionalFormulaParser.TRUE);
	            break;
	        case PropositionalFormulaParser.FALSE:
	            localctx = new FalseAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 4;
	            this.match(PropositionalFormulaParser.FALSE);
	            break;
	        case PropositionalFormulaParser.PROP:
	            localctx = new PropAtomContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 5;
	            localctx.prop = this.match(PropositionalFormulaParser.PROP);
	            break;
	        case PropositionalFormulaParser.NOT:
	            localctx = new NotFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 6;
	            this.match(PropositionalFormulaParser.NOT);
	            this.state = 7;
	            localctx.inner = this.formula(2);
	            break;
	        case PropositionalFormulaParser.LPAREN:
	            localctx = new ParenFormulaContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 8;
	            this.match(PropositionalFormulaParser.LPAREN);
	            this.state = 9;
	            localctx.inner = this.formula(0);
	            this.state = 10;
	            this.match(PropositionalFormulaParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 22;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 20;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new OrFormulaContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PropositionalFormulaParser.RULE_formula);
	                    this.state = 14;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 15;
	                    this.match(PropositionalFormulaParser.OR);
	                    this.state = 16;
	                    localctx.right = this.formula(5);
	                    break;

	                case 2:
	                    localctx = new AndFormulaContext(this, new FormulaContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, PropositionalFormulaParser.RULE_formula);
	                    this.state = 17;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 18;
	                    this.match(PropositionalFormulaParser.AND);
	                    this.state = 19;
	                    localctx.right = this.formula(4);
	                    break;

	                } 
	            }
	            this.state = 24;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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


}

PropositionalFormulaParser.EOF = antlr4.Token.EOF;
PropositionalFormulaParser.LPAREN = 1;
PropositionalFormulaParser.RPAREN = 2;
PropositionalFormulaParser.TRUE = 3;
PropositionalFormulaParser.FALSE = 4;
PropositionalFormulaParser.AND = 5;
PropositionalFormulaParser.OR = 6;
PropositionalFormulaParser.NOT = 7;
PropositionalFormulaParser.PROP = 8;
PropositionalFormulaParser.WS = 9;
PropositionalFormulaParser.LINE_COMMENT = 10;

PropositionalFormulaParser.RULE_formula = 0;

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
        this.ruleIndex = PropositionalFormulaParser.RULE_formula;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParenFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(PropositionalFormulaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PropositionalFormulaParser.RPAREN, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.enterParenFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.exitParenFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropositionalFormulaVisitor ) {
	        return visitor.visitParenFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PropositionalFormulaParser.ParenFormulaContext = ParenFormulaContext;

class FalseAtomContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(PropositionalFormulaParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.enterFalseAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.exitFalseAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropositionalFormulaVisitor ) {
	        return visitor.visitFalseAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PropositionalFormulaParser.FalseAtomContext = FalseAtomContext;

class AndFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FormulaContext;
        this.right = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	AND() {
	    return this.getToken(PropositionalFormulaParser.AND, 0);
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
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.enterAndFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.exitAndFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropositionalFormulaVisitor ) {
	        return visitor.visitAndFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PropositionalFormulaParser.AndFormulaContext = AndFormulaContext;

class PropAtomContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.prop = null; // Token;
        super.copyFrom(ctx);
    }

	PROP() {
	    return this.getToken(PropositionalFormulaParser.PROP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.enterPropAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.exitPropAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropositionalFormulaVisitor ) {
	        return visitor.visitPropAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PropositionalFormulaParser.PropAtomContext = PropAtomContext;

class NotFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(PropositionalFormulaParser.NOT, 0);
	};

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.enterNotFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.exitNotFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropositionalFormulaVisitor ) {
	        return visitor.visitNotFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PropositionalFormulaParser.NotFormulaContext = NotFormulaContext;

class OrFormulaContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FormulaContext;
        this.right = null; // FormulaContext;
        super.copyFrom(ctx);
    }

	OR() {
	    return this.getToken(PropositionalFormulaParser.OR, 0);
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
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.enterOrFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.exitOrFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropositionalFormulaVisitor ) {
	        return visitor.visitOrFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PropositionalFormulaParser.OrFormulaContext = OrFormulaContext;

class TrueAtomContext extends FormulaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(PropositionalFormulaParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.enterTrueAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PropositionalFormulaListener ) {
	        listener.exitTrueAtom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof PropositionalFormulaVisitor ) {
	        return visitor.visitTrueAtom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

PropositionalFormulaParser.TrueAtomContext = TrueAtomContext;


PropositionalFormulaParser.FormulaContext = FormulaContext; 
