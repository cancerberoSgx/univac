// @ts-nocheck
// Generated from Abnf.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var AbnfListener = require('./AbnfListener').AbnfListener;
var grammarFileName = "Abnf.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010T\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0007",
    "\u0002\u0018\n\u0002\f\u0002\u000e\u0002\u001b\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003\"\n\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005+\n\u0005\f\u0005\u000e\u0005.\u000b\u0005\u0003",
    "\u0006\u0006\u00061\n\u0006\r\u0006\u000e\u00062\u0003\u0007\u0005\u0007",
    "6\n\u0007\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0005\b<\n\b\u0003",
    "\b\u0003\b\u0005\b@\n\b\u0005\bB\n\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0005\tJ\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0002\u0002\f",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0002\u0002\u0002V",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0004\u001e\u0003\u0002\u0002\u0002",
    "\u0006%\u0003\u0002\u0002\u0002\b\'\u0003\u0002\u0002\u0002\n0\u0003",
    "\u0002\u0002\u0002\f5\u0003\u0002\u0002\u0002\u000eA\u0003\u0002\u0002",
    "\u0002\u0010I\u0003\u0002\u0002\u0002\u0012K\u0003\u0002\u0002\u0002",
    "\u0014O\u0003\u0002\u0002\u0002\u0016\u0018\u0005\u0004\u0003\u0002",
    "\u0017\u0016\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002",
    "\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002",
    "\u001a\u001c\u0003\u0002\u0002\u0002\u001b\u0019\u0003\u0002\u0002\u0002",
    "\u001c\u001d\u0007\u0002\u0002\u0003\u001d\u0003\u0003\u0002\u0002\u0002",
    "\u001e\u001f\u0007\f\u0002\u0002\u001f!\u0007\u0003\u0002\u0002 \"\u0007",
    "\u0004\u0002\u0002! \u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002",
    "\"#\u0003\u0002\u0002\u0002#$\u0005\u0006\u0004\u0002$\u0005\u0003\u0002",
    "\u0002\u0002%&\u0005\b\u0005\u0002&\u0007\u0003\u0002\u0002\u0002\'",
    ",\u0005\n\u0006\u0002()\u0007\u0004\u0002\u0002)+\u0005\n\u0006\u0002",
    "*(\u0003\u0002\u0002\u0002+.\u0003\u0002\u0002\u0002,*\u0003\u0002\u0002",
    "\u0002,-\u0003\u0002\u0002\u0002-\t\u0003\u0002\u0002\u0002.,\u0003",
    "\u0002\u0002\u0002/1\u0005\f\u0007\u00020/\u0003\u0002\u0002\u00021",
    "2\u0003\u0002\u0002\u000220\u0003\u0002\u0002\u000223\u0003\u0002\u0002",
    "\u00023\u000b\u0003\u0002\u0002\u000246\u0005\u000e\b\u000254\u0003",
    "\u0002\u0002\u000256\u0003\u0002\u0002\u000267\u0003\u0002\u0002\u0002",
    "78\u0005\u0010\t\u00028\r\u0003\u0002\u0002\u00029B\u0007\r\u0002\u0002",
    ":<\u0007\r\u0002\u0002;:\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002",
    "\u0002<=\u0003\u0002\u0002\u0002=?\u0007\u0005\u0002\u0002>@\u0007\r",
    "\u0002\u0002?>\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@B\u0003",
    "\u0002\u0002\u0002A9\u0003\u0002\u0002\u0002A;\u0003\u0002\u0002\u0002",
    "B\u000f\u0003\u0002\u0002\u0002CJ\u0007\f\u0002\u0002DJ\u0005\u0012",
    "\n\u0002EJ\u0005\u0014\u000b\u0002FJ\u0007\u0010\u0002\u0002GJ\u0007",
    "\n\u0002\u0002HJ\u0007\u000b\u0002\u0002IC\u0003\u0002\u0002\u0002I",
    "D\u0003\u0002\u0002\u0002IE\u0003\u0002\u0002\u0002IF\u0003\u0002\u0002",
    "\u0002IG\u0003\u0002\u0002\u0002IH\u0003\u0002\u0002\u0002J\u0011\u0003",
    "\u0002\u0002\u0002KL\u0007\u0006\u0002\u0002LM\u0005\b\u0005\u0002M",
    "N\u0007\u0007\u0002\u0002N\u0013\u0003\u0002\u0002\u0002OP\u0007\b\u0002",
    "\u0002PQ\u0005\b\u0005\u0002QR\u0007\t\u0002\u0002R\u0015\u0003\u0002",
    "\u0002\u0002\u000b\u0019!,25;?AI"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'='", "'/'", "'*'", "'('", "')'", "'['", "']'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, "NumberValue", 
                      "ProseValue", "ID", "INT", "COMMENT", "WS", "STRING" ];

var ruleNames =  [ "rulelist", "rule_", "elements", "alternation", "concatenation", 
                   "repetition", "repeat", "element", "group", "option" ];

function AbnfParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

AbnfParser.prototype = Object.create(antlr4.Parser.prototype);
AbnfParser.prototype.constructor = AbnfParser;

Object.defineProperty(AbnfParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

AbnfParser.EOF = antlr4.Token.EOF;
AbnfParser.T__0 = 1;
AbnfParser.T__1 = 2;
AbnfParser.T__2 = 3;
AbnfParser.T__3 = 4;
AbnfParser.T__4 = 5;
AbnfParser.T__5 = 6;
AbnfParser.T__6 = 7;
AbnfParser.NumberValue = 8;
AbnfParser.ProseValue = 9;
AbnfParser.ID = 10;
AbnfParser.INT = 11;
AbnfParser.COMMENT = 12;
AbnfParser.WS = 13;
AbnfParser.STRING = 14;

AbnfParser.RULE_rulelist = 0;
AbnfParser.RULE_rule_ = 1;
AbnfParser.RULE_elements = 2;
AbnfParser.RULE_alternation = 3;
AbnfParser.RULE_concatenation = 4;
AbnfParser.RULE_repetition = 5;
AbnfParser.RULE_repeat = 6;
AbnfParser.RULE_element = 7;
AbnfParser.RULE_group = 8;
AbnfParser.RULE_option = 9;


function RulelistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_rulelist;
    return this;
}

RulelistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RulelistContext.prototype.constructor = RulelistContext;

RulelistContext.prototype.EOF = function() {
    return this.getToken(AbnfParser.EOF, 0);
};

RulelistContext.prototype.rule_ = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Rule_Context);
    } else {
        return this.getTypedRuleContext(Rule_Context,i);
    }
};

RulelistContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterRulelist(this);
	}
};

RulelistContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitRulelist(this);
	}
};




AbnfParser.RulelistContext = RulelistContext;

AbnfParser.prototype.rulelist = function() {

    var localctx = new RulelistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, AbnfParser.RULE_rulelist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AbnfParser.ID) {
            this.state = 20;
            this.rule_();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 26;
        this.match(AbnfParser.EOF);
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
};


function Rule_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_rule_;
    return this;
}

Rule_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Rule_Context.prototype.constructor = Rule_Context;

Rule_Context.prototype.ID = function() {
    return this.getToken(AbnfParser.ID, 0);
};

Rule_Context.prototype.elements = function() {
    return this.getTypedRuleContext(ElementsContext,0);
};

Rule_Context.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterRule_(this);
	}
};

Rule_Context.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitRule_(this);
	}
};




AbnfParser.Rule_Context = Rule_Context;

AbnfParser.prototype.rule_ = function() {

    var localctx = new Rule_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 2, AbnfParser.RULE_rule_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(AbnfParser.ID);
        this.state = 29;
        this.match(AbnfParser.T__0);
        this.state = 31;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AbnfParser.T__1) {
            this.state = 30;
            this.match(AbnfParser.T__1);
        }

        this.state = 33;
        this.elements();
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
};


function ElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_elements;
    return this;
}

ElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementsContext.prototype.constructor = ElementsContext;

ElementsContext.prototype.alternation = function() {
    return this.getTypedRuleContext(AlternationContext,0);
};

ElementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterElements(this);
	}
};

ElementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitElements(this);
	}
};




AbnfParser.ElementsContext = ElementsContext;

AbnfParser.prototype.elements = function() {

    var localctx = new ElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, AbnfParser.RULE_elements);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this.alternation();
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
};


function AlternationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_alternation;
    return this;
}

AlternationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlternationContext.prototype.constructor = AlternationContext;

AlternationContext.prototype.concatenation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConcatenationContext);
    } else {
        return this.getTypedRuleContext(ConcatenationContext,i);
    }
};

AlternationContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterAlternation(this);
	}
};

AlternationContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitAlternation(this);
	}
};




AbnfParser.AlternationContext = AlternationContext;

AbnfParser.prototype.alternation = function() {

    var localctx = new AlternationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, AbnfParser.RULE_alternation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.concatenation();
        this.state = 42;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===AbnfParser.T__1) {
            this.state = 38;
            this.match(AbnfParser.T__1);
            this.state = 39;
            this.concatenation();
            this.state = 44;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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
};


function ConcatenationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_concatenation;
    return this;
}

ConcatenationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConcatenationContext.prototype.constructor = ConcatenationContext;

ConcatenationContext.prototype.repetition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RepetitionContext);
    } else {
        return this.getTypedRuleContext(RepetitionContext,i);
    }
};

ConcatenationContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterConcatenation(this);
	}
};

ConcatenationContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitConcatenation(this);
	}
};




AbnfParser.ConcatenationContext = ConcatenationContext;

AbnfParser.prototype.concatenation = function() {

    var localctx = new ConcatenationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, AbnfParser.RULE_concatenation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 45;
        		this.repetition();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 48; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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
};


function RepetitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_repetition;
    return this;
}

RepetitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepetitionContext.prototype.constructor = RepetitionContext;

RepetitionContext.prototype.element = function() {
    return this.getTypedRuleContext(ElementContext,0);
};

RepetitionContext.prototype.repeat = function() {
    return this.getTypedRuleContext(RepeatContext,0);
};

RepetitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterRepetition(this);
	}
};

RepetitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitRepetition(this);
	}
};




AbnfParser.RepetitionContext = RepetitionContext;

AbnfParser.prototype.repetition = function() {

    var localctx = new RepetitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, AbnfParser.RULE_repetition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===AbnfParser.T__2 || _la===AbnfParser.INT) {
            this.state = 50;
            this.repeat();
        }

        this.state = 53;
        this.element();
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
};


function RepeatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_repeat;
    return this;
}

RepeatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeatContext.prototype.constructor = RepeatContext;

RepeatContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(AbnfParser.INT);
    } else {
        return this.getToken(AbnfParser.INT, i);
    }
};


RepeatContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterRepeat(this);
	}
};

RepeatContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitRepeat(this);
	}
};




AbnfParser.RepeatContext = RepeatContext;

AbnfParser.prototype.repeat = function() {

    var localctx = new RepeatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, AbnfParser.RULE_repeat);
    var _la = 0; // Token type
    try {
        this.state = 63;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 55;
            this.match(AbnfParser.INT);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===AbnfParser.INT) {
                this.state = 56;
                this.match(AbnfParser.INT);
            }

            this.state = 59;
            this.match(AbnfParser.T__2);
            this.state = 61;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===AbnfParser.INT) {
                this.state = 60;
                this.match(AbnfParser.INT);
            }

            break;

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
};


function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.ID = function() {
    return this.getToken(AbnfParser.ID, 0);
};

ElementContext.prototype.group = function() {
    return this.getTypedRuleContext(GroupContext,0);
};

ElementContext.prototype.option = function() {
    return this.getTypedRuleContext(OptionContext,0);
};

ElementContext.prototype.STRING = function() {
    return this.getToken(AbnfParser.STRING, 0);
};

ElementContext.prototype.NumberValue = function() {
    return this.getToken(AbnfParser.NumberValue, 0);
};

ElementContext.prototype.ProseValue = function() {
    return this.getToken(AbnfParser.ProseValue, 0);
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitElement(this);
	}
};




AbnfParser.ElementContext = ElementContext;

AbnfParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, AbnfParser.RULE_element);
    try {
        this.state = 71;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case AbnfParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 65;
            this.match(AbnfParser.ID);
            break;
        case AbnfParser.T__3:
            this.enterOuterAlt(localctx, 2);
            this.state = 66;
            this.group();
            break;
        case AbnfParser.T__5:
            this.enterOuterAlt(localctx, 3);
            this.state = 67;
            this.option();
            break;
        case AbnfParser.STRING:
            this.enterOuterAlt(localctx, 4);
            this.state = 68;
            this.match(AbnfParser.STRING);
            break;
        case AbnfParser.NumberValue:
            this.enterOuterAlt(localctx, 5);
            this.state = 69;
            this.match(AbnfParser.NumberValue);
            break;
        case AbnfParser.ProseValue:
            this.enterOuterAlt(localctx, 6);
            this.state = 70;
            this.match(AbnfParser.ProseValue);
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
};


function GroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_group;
    return this;
}

GroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
GroupContext.prototype.constructor = GroupContext;

GroupContext.prototype.alternation = function() {
    return this.getTypedRuleContext(AlternationContext,0);
};

GroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterGroup(this);
	}
};

GroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitGroup(this);
	}
};




AbnfParser.GroupContext = GroupContext;

AbnfParser.prototype.group = function() {

    var localctx = new GroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, AbnfParser.RULE_group);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(AbnfParser.T__3);
        this.state = 74;
        this.alternation();
        this.state = 75;
        this.match(AbnfParser.T__4);
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
};


function OptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = AbnfParser.RULE_option;
    return this;
}

OptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OptionContext.prototype.constructor = OptionContext;

OptionContext.prototype.alternation = function() {
    return this.getTypedRuleContext(AlternationContext,0);
};

OptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.enterOption(this);
	}
};

OptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof AbnfListener ) {
        listener.exitOption(this);
	}
};




AbnfParser.OptionContext = OptionContext;

AbnfParser.prototype.option = function() {

    var localctx = new OptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, AbnfParser.RULE_option);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(AbnfParser.T__5);
        this.state = 78;
        this.alternation();
        this.state = 79;
        this.match(AbnfParser.T__6);
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
};


exports.AbnfParser = AbnfParser;
