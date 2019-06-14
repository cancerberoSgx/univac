// @ts-nocheck
// Generated from sexpression.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sexpressionListener = require('./sexpressionListener').sexpressionListener;
var grammarFileName = "sexpression.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t(\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0007\u0002\f\n\u0002\f\u0002\u000e",
    "\u0002\u000f\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u001b\n\u0003\u0003\u0004\u0003\u0004\u0007\u0004\u001f",
    "\n\u0004\f\u0004\u000e\u0004\"\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b",
    "\u0002\u0003\u0005\u0002\u0003\u0003\u0005\u0006\t\t\u0002\'\u0002\r",
    "\u0003\u0002\u0002\u0002\u0004\u001a\u0003\u0002\u0002\u0002\u0006\u001c",
    "\u0003\u0002\u0002\u0002\b%\u0003\u0002\u0002\u0002\n\f\u0005\u0004",
    "\u0003\u0002\u000b\n\u0003\u0002\u0002\u0002\f\u000f\u0003\u0002\u0002",
    "\u0002\r\u000b\u0003\u0002\u0002\u0002\r\u000e\u0003\u0002\u0002\u0002",
    "\u000e\u0010\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002",
    "\u0010\u0011\u0007\u0002\u0002\u0003\u0011\u0003\u0003\u0002\u0002\u0002",
    "\u0012\u001b\u0005\b\u0005\u0002\u0013\u001b\u0005\u0006\u0004\u0002",
    "\u0014\u0015\u0007\u0007\u0002\u0002\u0015\u0016\u0005\u0004\u0003\u0002",
    "\u0016\u0017\u0007\t\u0002\u0002\u0017\u0018\u0005\u0004\u0003\u0002",
    "\u0018\u0019\u0007\b\u0002\u0002\u0019\u001b\u0003\u0002\u0002\u0002",
    "\u001a\u0012\u0003\u0002\u0002\u0002\u001a\u0013\u0003\u0002\u0002\u0002",
    "\u001a\u0014\u0003\u0002\u0002\u0002\u001b\u0005\u0003\u0002\u0002\u0002",
    "\u001c \u0007\u0007\u0002\u0002\u001d\u001f\u0005\u0004\u0003\u0002",
    "\u001e\u001d\u0003\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002\u0002",
    " \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002\u0002\u0002!#\u0003\u0002",
    "\u0002\u0002\" \u0003\u0002\u0002\u0002#$\u0007\b\u0002\u0002$\u0007",
    "\u0003\u0002\u0002\u0002%&\t\u0002\u0002\u0002&\t\u0003\u0002\u0002",
    "\u0002\u0005\r\u001a "].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, "'('", "')'", "'.'" ];

var symbolicNames = [ null, "STRING", "WHITESPACE", "NUMBER", "SYMBOL", 
                      "LPAREN", "RPAREN", "DOT" ];

var ruleNames =  [ "sexpr", "item", "list", "atom" ];

function sexpressionParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sexpressionParser.prototype = Object.create(antlr4.Parser.prototype);
sexpressionParser.prototype.constructor = sexpressionParser;

Object.defineProperty(sexpressionParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sexpressionParser.EOF = antlr4.Token.EOF;
sexpressionParser.STRING = 1;
sexpressionParser.WHITESPACE = 2;
sexpressionParser.NUMBER = 3;
sexpressionParser.SYMBOL = 4;
sexpressionParser.LPAREN = 5;
sexpressionParser.RPAREN = 6;
sexpressionParser.DOT = 7;

sexpressionParser.RULE_sexpr = 0;
sexpressionParser.RULE_item = 1;
sexpressionParser.RULE_list = 2;
sexpressionParser.RULE_atom = 3;


function SexprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sexpressionParser.RULE_sexpr;
    return this;
}

SexprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SexprContext.prototype.constructor = SexprContext;

SexprContext.prototype.EOF = function() {
    return this.getToken(sexpressionParser.EOF, 0);
};

SexprContext.prototype.item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ItemContext);
    } else {
        return this.getTypedRuleContext(ItemContext,i);
    }
};

SexprContext.prototype.enterRule = function(listener) {
    if(listener instanceof sexpressionListener ) {
        listener.enterSexpr(this);
	}
};

SexprContext.prototype.exitRule = function(listener) {
    if(listener instanceof sexpressionListener ) {
        listener.exitSexpr(this);
	}
};




sexpressionParser.SexprContext = SexprContext;

sexpressionParser.prototype.sexpr = function() {

    var localctx = new SexprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sexpressionParser.RULE_sexpr);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.LPAREN) | (1 << sexpressionParser.DOT))) !== 0)) {
            this.state = 8;
            this.item();
            this.state = 13;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 14;
        this.match(sexpressionParser.EOF);
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


function ItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sexpressionParser.RULE_item;
    return this;
}

ItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ItemContext.prototype.constructor = ItemContext;

ItemContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ItemContext.prototype.list = function() {
    return this.getTypedRuleContext(ListContext,0);
};

ItemContext.prototype.LPAREN = function() {
    return this.getToken(sexpressionParser.LPAREN, 0);
};

ItemContext.prototype.item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ItemContext);
    } else {
        return this.getTypedRuleContext(ItemContext,i);
    }
};

ItemContext.prototype.DOT = function() {
    return this.getToken(sexpressionParser.DOT, 0);
};

ItemContext.prototype.RPAREN = function() {
    return this.getToken(sexpressionParser.RPAREN, 0);
};

ItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof sexpressionListener ) {
        listener.enterItem(this);
	}
};

ItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof sexpressionListener ) {
        listener.exitItem(this);
	}
};




sexpressionParser.ItemContext = ItemContext;

sexpressionParser.prototype.item = function() {

    var localctx = new ItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sexpressionParser.RULE_item);
    try {
        this.state = 24;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 16;
            this.atom();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 17;
            this.list();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 18;
            this.match(sexpressionParser.LPAREN);
            this.state = 19;
            this.item();
            this.state = 20;
            this.match(sexpressionParser.DOT);
            this.state = 21;
            this.item();
            this.state = 22;
            this.match(sexpressionParser.RPAREN);
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


function ListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sexpressionParser.RULE_list;
    return this;
}

ListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListContext.prototype.constructor = ListContext;

ListContext.prototype.LPAREN = function() {
    return this.getToken(sexpressionParser.LPAREN, 0);
};

ListContext.prototype.RPAREN = function() {
    return this.getToken(sexpressionParser.RPAREN, 0);
};

ListContext.prototype.item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ItemContext);
    } else {
        return this.getTypedRuleContext(ItemContext,i);
    }
};

ListContext.prototype.enterRule = function(listener) {
    if(listener instanceof sexpressionListener ) {
        listener.enterList(this);
	}
};

ListContext.prototype.exitRule = function(listener) {
    if(listener instanceof sexpressionListener ) {
        listener.exitList(this);
	}
};




sexpressionParser.ListContext = ListContext;

sexpressionParser.prototype.list = function() {

    var localctx = new ListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sexpressionParser.RULE_list);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(sexpressionParser.LPAREN);
        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.LPAREN) | (1 << sexpressionParser.DOT))) !== 0)) {
            this.state = 27;
            this.item();
            this.state = 32;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 33;
        this.match(sexpressionParser.RPAREN);
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


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sexpressionParser.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.STRING = function() {
    return this.getToken(sexpressionParser.STRING, 0);
};

AtomContext.prototype.SYMBOL = function() {
    return this.getToken(sexpressionParser.SYMBOL, 0);
};

AtomContext.prototype.NUMBER = function() {
    return this.getToken(sexpressionParser.NUMBER, 0);
};

AtomContext.prototype.DOT = function() {
    return this.getToken(sexpressionParser.DOT, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof sexpressionListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof sexpressionListener ) {
        listener.exitAtom(this);
	}
};




sexpressionParser.AtomContext = AtomContext;

sexpressionParser.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sexpressionParser.RULE_atom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << sexpressionParser.STRING) | (1 << sexpressionParser.NUMBER) | (1 << sexpressionParser.SYMBOL) | (1 << sexpressionParser.DOT))) !== 0))) {
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
};


exports.sexpressionParser = sexpressionParser;
