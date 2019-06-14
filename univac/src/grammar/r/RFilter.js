// @ts-nocheck
// Generated from RFilter.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RFilterListener = require('./RFilterListener').RFilterListener;
var grammarFileName = "RFilter.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003B\u0095\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003\u0019",
    "\n\u0003\r\u0003\u000e\u0003\u001a\u0003\u0004\u0003\u0004\u0005\u0004",
    "\u001f\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004$\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004*\n\u0004",
    "\f\u0004\u000e\u0004-\u000b\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u00044\n\u0004\f\u0004\u000e\u00047\u000b",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004=",
    "\n\u0004\f\u0004\u000e\u0004@\u000b\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004F\n\u0004\f\u0004\u000e\u0004I\u000b\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004O\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004T\n\u0004\f\u0004\u000e",
    "\u0004W\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004[\n\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004_\n\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0007\u0004d\n\u0004\f\u0004\u000e\u0004g\u000b\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004k\n\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "o\n\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004t\n\u0004\f",
    "\u0004\u000e\u0004w\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "{\n\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u007f\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004\u0084\n\u0004\f\u0004\u000e\u0004",
    "\u0087\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u008b\n\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004\u008f\n\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004",
    "\u0006\b\n\u0002\u0004\u0004\u0002/6:?\b\u0002\u0007\u001d\u001f ++",
    "-.78@@\u0002\u00b8\u0002\u0011\u0003\u0002\u0002\u0002\u0004\u0018\u0003",
    "\u0002\u0002\u0002\u0006\u008e\u0003\u0002\u0002\u0002\b\u0090\u0003",
    "\u0002\u0002\u0002\n\u0092\u0003\u0002\u0002\u0002\f\u0010\u0005\u0006",
    "\u0004\u0002\r\u0010\u0007A\u0002\u0002\u000e\u0010\u0007\u0003\u0002",
    "\u0002\u000f\f\u0003\u0002\u0002\u0002\u000f\r\u0003\u0002\u0002\u0002",
    "\u000f\u000e\u0003\u0002\u0002\u0002\u0010\u0013\u0003\u0002\u0002\u0002",
    "\u0011\u000f\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002\u0002",
    "\u0012\u0014\u0003\u0002\u0002\u0002\u0013\u0011\u0003\u0002\u0002\u0002",
    "\u0014\u0015\u0007\u0002\u0002\u0003\u0015\u0003\u0003\u0002\u0002\u0002",
    "\u0016\u0017\u0007A\u0002\u0002\u0017\u0019\b\u0003\u0001\u0002\u0018",
    "\u0016\u0003\u0002\u0002\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a",
    "\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003\u0002\u0002\u0002\u001b",
    "\u0005\u0003\u0002\u0002\u0002\u001c\u001e\u0005\n\u0006\u0002\u001d",
    "\u001f\u0005\u0004\u0003\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0003\u0002\u0002\u0002\u001f\u008f\u0003\u0002\u0002\u0002 ",
    "\u008f\u0005\b\u0005\u0002!#\u0007&\u0002\u0002\"$\u0005\u0004\u0003",
    "\u0002#\"\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0003",
    "\u0002\u0002\u0002%+\b\u0004\u0001\u0002&*\u0005\u0006\u0004\u0002\'",
    "*\u0007A\u0002\u0002(*\u0007\u0003\u0002\u0002)&\u0003\u0002\u0002\u0002",
    ")\'\u0003\u0002\u0002\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002",
    "\u0002\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,.\u0003",
    "\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002./\b\u0004\u0001\u0002/",
    "\u008f\u0007\'\u0002\u000205\u0007$\u0002\u000214\u0005\u0006\u0004",
    "\u000224\u0005\u0004\u0003\u000231\u0003\u0002\u0002\u000232\u0003\u0002",
    "\u0002\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003",
    "\u0002\u0002\u000268\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u0002",
    "8\u008f\u0007%\u0002\u00029>\u0007\u0006\u0002\u0002:=\u0005\u0006\u0004",
    "\u0002;=\u0005\u0004\u0003\u0002<:\u0003\u0002\u0002\u0002<;\u0003\u0002",
    "\u0002\u0002=@\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003",
    "\u0002\u0002\u0002?A\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002",
    "A\u008f\u0007\u0005\u0002\u0002BG\u0007\u0004\u0002\u0002CF\u0005\u0006",
    "\u0004\u0002DF\u0005\u0004\u0003\u0002EC\u0003\u0002\u0002\u0002ED\u0003",
    "\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003\u0002\u0002\u0002",
    "GH\u0003\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002",
    "\u0002JK\u0007\u0005\u0002\u0002K\u008f\u0007\u0005\u0002\u0002LN\u0007",
    "#\u0002\u0002MO\u0005\u0004\u0003\u0002NM\u0003\u0002\u0002\u0002NO",
    "\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PU\u0007$\u0002\u0002",
    "QT\u0005\u0006\u0004\u0002RT\u0005\u0004\u0003\u0002SQ\u0003\u0002\u0002",
    "\u0002SR\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003\u0002",
    "\u0002\u0002UV\u0003\u0002\u0002\u0002VX\u0003\u0002\u0002\u0002WU\u0003",
    "\u0002\u0002\u0002XZ\u0007%\u0002\u0002Y[\u0005\u0004\u0003\u0002ZY",
    "\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002\u0002[\u008f\u0003\u0002",
    "\u0002\u0002\\^\u0007*\u0002\u0002]_\u0005\u0004\u0003\u0002^]\u0003",
    "\u0002\u0002\u0002^_\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002\u0002",
    "`e\u0007$\u0002\u0002ad\u0005\u0006\u0004\u0002bd\u0005\u0004\u0003",
    "\u0002ca\u0003\u0002\u0002\u0002cb\u0003\u0002\u0002\u0002dg\u0003\u0002",
    "\u0002\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002\u0002\u0002fh\u0003",
    "\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002hj\u0007%\u0002\u0002ik",
    "\u0005\u0004\u0003\u0002ji\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002",
    "\u0002k\u008f\u0003\u0002\u0002\u0002ln\u0007,\u0002\u0002mo\u0005\u0004",
    "\u0003\u0002nm\u0003\u0002\u0002\u0002no\u0003\u0002\u0002\u0002op\u0003",
    "\u0002\u0002\u0002pu\u0007$\u0002\u0002qt\u0005\u0006\u0004\u0002rt",
    "\u0005\u0004\u0003\u0002sq\u0003\u0002\u0002\u0002sr\u0003\u0002\u0002",
    "\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002uv\u0003\u0002",
    "\u0002\u0002vx\u0003\u0002\u0002\u0002wu\u0003\u0002\u0002\u0002xz\u0007",
    "%\u0002\u0002y{\u0005\u0004\u0003\u0002zy\u0003\u0002\u0002\u0002z{",
    "\u0003\u0002\u0002\u0002{\u008f\u0003\u0002\u0002\u0002|~\u0007(\u0002",
    "\u0002}\u007f\u0005\u0004\u0003\u0002~}\u0003\u0002\u0002\u0002~\u007f",
    "\u0003\u0002\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0085",
    "\u0007$\u0002\u0002\u0081\u0084\u0005\u0006\u0004\u0002\u0082\u0084",
    "\u0005\u0004\u0003\u0002\u0083\u0081\u0003\u0002\u0002\u0002\u0083\u0082",
    "\u0003\u0002\u0002\u0002\u0084\u0087\u0003\u0002\u0002\u0002\u0085\u0083",
    "\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002\u0086\u0088",
    "\u0003\u0002\u0002\u0002\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u008a",
    "\u0007%\u0002\u0002\u0089\u008b\u0005\u0004\u0003\u0002\u008a\u0089",
    "\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008f",
    "\u0003\u0002\u0002\u0002\u008c\u008d\u0007)\u0002\u0002\u008d\u008f",
    "\b\u0004\u0001\u0002\u008e\u001c\u0003\u0002\u0002\u0002\u008e \u0003",
    "\u0002\u0002\u0002\u008e!\u0003\u0002\u0002\u0002\u008e0\u0003\u0002",
    "\u0002\u0002\u008e9\u0003\u0002\u0002\u0002\u008eB\u0003\u0002\u0002",
    "\u0002\u008eL\u0003\u0002\u0002\u0002\u008e\\\u0003\u0002\u0002\u0002",
    "\u008el\u0003\u0002\u0002\u0002\u008e|\u0003\u0002\u0002\u0002\u008e",
    "\u008c\u0003\u0002\u0002\u0002\u008f\u0007\u0003\u0002\u0002\u0002\u0090",
    "\u0091\t\u0002\u0002\u0002\u0091\t\u0003\u0002\u0002\u0002\u0092\u0093",
    "\t\u0003\u0002\u0002\u0093\u000b\u0003\u0002\u0002\u0002 \u000f\u0011",
    "\u001a\u001e#)+35<>EGNSUZ^cejnsuz~\u0083\u0085\u008a\u008e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'[['", "']'", "'['", "'::'", "':::'", 
                     "'$'", "'@'", "'^'", "'-'", "'+'", "':'", "'*'", "'/'", 
                     "'>'", "'>='", "'<'", "'<='", "'=='", "'!='", "'!'", 
                     "'&'", "'&&'", "'|'", "'||'", "'~'", "'<-'", "'<<-'", 
                     "'='", "'->'", "'->>'", "':='", "'function'", "'('", 
                     "')'", "'{'", "'}'", "'if'", "'else'", "'for'", "'in'", 
                     "'while'", "'repeat'", "'?'", "'next'", "'break'", 
                     "'NULL'", "'NA'", "'Inf'", "'NaN'", "'TRUE'", "'FALSE'", 
                     "','", "'...'", "'.'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, "HEX", "INT", "FLOAT", "COMPLEX", "STRING", 
                      "ID", "USER_OP", "NL", "WS" ];

var ruleNames =  [ "stream", "eat", "elem", "atom", "op" ];

function RFilter (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;

	  this.curlies = 0;

    return this;
}

RFilter.prototype = Object.create(antlr4.Parser.prototype);
RFilter.prototype.constructor = RFilter;

Object.defineProperty(RFilter.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RFilter.EOF = antlr4.Token.EOF;
RFilter.T__0 = 1;
RFilter.T__1 = 2;
RFilter.T__2 = 3;
RFilter.T__3 = 4;
RFilter.T__4 = 5;
RFilter.T__5 = 6;
RFilter.T__6 = 7;
RFilter.T__7 = 8;
RFilter.T__8 = 9;
RFilter.T__9 = 10;
RFilter.T__10 = 11;
RFilter.T__11 = 12;
RFilter.T__12 = 13;
RFilter.T__13 = 14;
RFilter.T__14 = 15;
RFilter.T__15 = 16;
RFilter.T__16 = 17;
RFilter.T__17 = 18;
RFilter.T__18 = 19;
RFilter.T__19 = 20;
RFilter.T__20 = 21;
RFilter.T__21 = 22;
RFilter.T__22 = 23;
RFilter.T__23 = 24;
RFilter.T__24 = 25;
RFilter.T__25 = 26;
RFilter.T__26 = 27;
RFilter.T__27 = 28;
RFilter.T__28 = 29;
RFilter.T__29 = 30;
RFilter.T__30 = 31;
RFilter.T__31 = 32;
RFilter.T__32 = 33;
RFilter.T__33 = 34;
RFilter.T__34 = 35;
RFilter.T__35 = 36;
RFilter.T__36 = 37;
RFilter.T__37 = 38;
RFilter.T__38 = 39;
RFilter.T__39 = 40;
RFilter.T__40 = 41;
RFilter.T__41 = 42;
RFilter.T__42 = 43;
RFilter.T__43 = 44;
RFilter.T__44 = 45;
RFilter.T__45 = 46;
RFilter.T__46 = 47;
RFilter.T__47 = 48;
RFilter.T__48 = 49;
RFilter.T__49 = 50;
RFilter.T__50 = 51;
RFilter.T__51 = 52;
RFilter.T__52 = 53;
RFilter.T__53 = 54;
RFilter.T__54 = 55;
RFilter.HEX = 56;
RFilter.INT = 57;
RFilter.FLOAT = 58;
RFilter.COMPLEX = 59;
RFilter.STRING = 60;
RFilter.ID = 61;
RFilter.USER_OP = 62;
RFilter.NL = 63;
RFilter.WS = 64;

RFilter.RULE_stream = 0;
RFilter.RULE_eat = 1;
RFilter.RULE_elem = 2;
RFilter.RULE_atom = 3;
RFilter.RULE_op = 4;


function StreamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RFilter.RULE_stream;
    return this;
}

StreamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StreamContext.prototype.constructor = StreamContext;

StreamContext.prototype.EOF = function() {
    return this.getToken(RFilter.EOF, 0);
};

StreamContext.prototype.elem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElemContext);
    } else {
        return this.getTypedRuleContext(ElemContext,i);
    }
};

StreamContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RFilter.NL);
    } else {
        return this.getToken(RFilter.NL, i);
    }
};


StreamContext.prototype.enterRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.enterStream(this);
	}
};

StreamContext.prototype.exitRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.exitStream(this);
	}
};




RFilter.StreamContext = StreamContext;

RFilter.prototype.stream = function() {

    var localctx = new StreamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RFilter.RULE_stream);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 15;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__0) | (1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
            this.state = 13;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RFilter.T__1:
            case RFilter.T__3:
            case RFilter.T__4:
            case RFilter.T__5:
            case RFilter.T__6:
            case RFilter.T__7:
            case RFilter.T__8:
            case RFilter.T__9:
            case RFilter.T__10:
            case RFilter.T__11:
            case RFilter.T__12:
            case RFilter.T__13:
            case RFilter.T__14:
            case RFilter.T__15:
            case RFilter.T__16:
            case RFilter.T__17:
            case RFilter.T__18:
            case RFilter.T__19:
            case RFilter.T__20:
            case RFilter.T__21:
            case RFilter.T__22:
            case RFilter.T__23:
            case RFilter.T__24:
            case RFilter.T__25:
            case RFilter.T__26:
            case RFilter.T__28:
            case RFilter.T__29:
            case RFilter.T__32:
            case RFilter.T__33:
            case RFilter.T__35:
            case RFilter.T__37:
            case RFilter.T__38:
            case RFilter.T__39:
            case RFilter.T__40:
            case RFilter.T__41:
            case RFilter.T__42:
            case RFilter.T__43:
            case RFilter.T__44:
            case RFilter.T__45:
            case RFilter.T__46:
            case RFilter.T__47:
            case RFilter.T__48:
            case RFilter.T__49:
            case RFilter.T__50:
            case RFilter.T__51:
            case RFilter.T__52:
            case RFilter.T__53:
            case RFilter.HEX:
            case RFilter.INT:
            case RFilter.FLOAT:
            case RFilter.COMPLEX:
            case RFilter.STRING:
            case RFilter.ID:
            case RFilter.USER_OP:
                this.state = 10;
                this.elem();
                break;
            case RFilter.NL:
                this.state = 11;
                this.match(RFilter.NL);
                break;
            case RFilter.T__0:
                this.state = 12;
                this.match(RFilter.T__0);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 17;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 18;
        this.match(RFilter.EOF);
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


function EatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RFilter.RULE_eat;
    this._NL = null; // Token
    return this;
}

EatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EatContext.prototype.constructor = EatContext;

EatContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RFilter.NL);
    } else {
        return this.getToken(RFilter.NL, i);
    }
};


EatContext.prototype.enterRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.enterEat(this);
	}
};

EatContext.prototype.exitRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.exitEat(this);
	}
};




RFilter.EatContext = EatContext;

RFilter.prototype.eat = function() {

    var localctx = new EatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RFilter.RULE_eat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 20;
        		localctx._NL = this.match(RFilter.NL);

        		if(!localctx._NL.setChannel){
        		  // console.log(localctx._NL);
        		  localctx._NL.channel = antlr4.Token.HIDDEN_CHANNEL
        		}
        		else {
        		    localctx._NL.setChannel(antlr4.Token.HIDDEN_CHANNEL);
        		}
        		  // this.localctx._NL.setChannel(antlr4.Token.HIDDEN_CHANNEL);
        		  
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 24; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
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


function ElemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RFilter.RULE_elem;
    return this;
}

ElemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElemContext.prototype.constructor = ElemContext;

ElemContext.prototype.op = function() {
    return this.getTypedRuleContext(OpContext,0);
};

ElemContext.prototype.eat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EatContext);
    } else {
        return this.getTypedRuleContext(EatContext,i);
    }
};

ElemContext.prototype.atom = function() {
    return this.getTypedRuleContext(AtomContext,0);
};

ElemContext.prototype.elem = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElemContext);
    } else {
        return this.getTypedRuleContext(ElemContext,i);
    }
};

ElemContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RFilter.NL);
    } else {
        return this.getToken(RFilter.NL, i);
    }
};


ElemContext.prototype.enterRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.enterElem(this);
	}
};

ElemContext.prototype.exitRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.exitElem(this);
	}
};




RFilter.ElemContext = ElemContext;

RFilter.prototype.elem = function() {

    var localctx = new ElemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RFilter.RULE_elem);
    var _la = 0; // Token type
    try {
        this.state = 140;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RFilter.T__4:
        case RFilter.T__5:
        case RFilter.T__6:
        case RFilter.T__7:
        case RFilter.T__8:
        case RFilter.T__9:
        case RFilter.T__10:
        case RFilter.T__11:
        case RFilter.T__12:
        case RFilter.T__13:
        case RFilter.T__14:
        case RFilter.T__15:
        case RFilter.T__16:
        case RFilter.T__17:
        case RFilter.T__18:
        case RFilter.T__19:
        case RFilter.T__20:
        case RFilter.T__21:
        case RFilter.T__22:
        case RFilter.T__23:
        case RFilter.T__24:
        case RFilter.T__25:
        case RFilter.T__26:
        case RFilter.T__28:
        case RFilter.T__29:
        case RFilter.T__40:
        case RFilter.T__42:
        case RFilter.T__43:
        case RFilter.T__52:
        case RFilter.T__53:
        case RFilter.USER_OP:
            this.enterOuterAlt(localctx, 1);
            this.state = 26;
            this.op();
            this.state = 28;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
            if(la_===1) {
                this.state = 27;
                this.eat();

            }
            break;
        case RFilter.T__44:
        case RFilter.T__45:
        case RFilter.T__46:
        case RFilter.T__47:
        case RFilter.T__48:
        case RFilter.T__49:
        case RFilter.T__50:
        case RFilter.T__51:
        case RFilter.HEX:
        case RFilter.INT:
        case RFilter.FLOAT:
        case RFilter.COMPLEX:
        case RFilter.STRING:
        case RFilter.ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 30;
            this.atom();
            break;
        case RFilter.T__35:
            this.enterOuterAlt(localctx, 3);
            this.state = 31;
            this.match(RFilter.T__35);
            this.state = 33;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
            if(la_===1) {
                this.state = 32;
                this.eat();

            }
            this.curlies++;
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__0) | (1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
                this.state = 39;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RFilter.T__1:
                case RFilter.T__3:
                case RFilter.T__4:
                case RFilter.T__5:
                case RFilter.T__6:
                case RFilter.T__7:
                case RFilter.T__8:
                case RFilter.T__9:
                case RFilter.T__10:
                case RFilter.T__11:
                case RFilter.T__12:
                case RFilter.T__13:
                case RFilter.T__14:
                case RFilter.T__15:
                case RFilter.T__16:
                case RFilter.T__17:
                case RFilter.T__18:
                case RFilter.T__19:
                case RFilter.T__20:
                case RFilter.T__21:
                case RFilter.T__22:
                case RFilter.T__23:
                case RFilter.T__24:
                case RFilter.T__25:
                case RFilter.T__26:
                case RFilter.T__28:
                case RFilter.T__29:
                case RFilter.T__32:
                case RFilter.T__33:
                case RFilter.T__35:
                case RFilter.T__37:
                case RFilter.T__38:
                case RFilter.T__39:
                case RFilter.T__40:
                case RFilter.T__41:
                case RFilter.T__42:
                case RFilter.T__43:
                case RFilter.T__44:
                case RFilter.T__45:
                case RFilter.T__46:
                case RFilter.T__47:
                case RFilter.T__48:
                case RFilter.T__49:
                case RFilter.T__50:
                case RFilter.T__51:
                case RFilter.T__52:
                case RFilter.T__53:
                case RFilter.HEX:
                case RFilter.INT:
                case RFilter.FLOAT:
                case RFilter.COMPLEX:
                case RFilter.STRING:
                case RFilter.ID:
                case RFilter.USER_OP:
                    this.state = 36;
                    this.elem();
                    break;
                case RFilter.NL:
                    this.state = 37;
                    this.match(RFilter.NL);
                    break;
                case RFilter.T__0:
                    this.state = 38;
                    this.match(RFilter.T__0);
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.curlies--;
            this.state = 45;
            this.match(RFilter.T__36);
            break;
        case RFilter.T__33:
            this.enterOuterAlt(localctx, 4);
            this.state = 46;
            this.match(RFilter.T__33);
            this.state = 51;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
                this.state = 49;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RFilter.T__1:
                case RFilter.T__3:
                case RFilter.T__4:
                case RFilter.T__5:
                case RFilter.T__6:
                case RFilter.T__7:
                case RFilter.T__8:
                case RFilter.T__9:
                case RFilter.T__10:
                case RFilter.T__11:
                case RFilter.T__12:
                case RFilter.T__13:
                case RFilter.T__14:
                case RFilter.T__15:
                case RFilter.T__16:
                case RFilter.T__17:
                case RFilter.T__18:
                case RFilter.T__19:
                case RFilter.T__20:
                case RFilter.T__21:
                case RFilter.T__22:
                case RFilter.T__23:
                case RFilter.T__24:
                case RFilter.T__25:
                case RFilter.T__26:
                case RFilter.T__28:
                case RFilter.T__29:
                case RFilter.T__32:
                case RFilter.T__33:
                case RFilter.T__35:
                case RFilter.T__37:
                case RFilter.T__38:
                case RFilter.T__39:
                case RFilter.T__40:
                case RFilter.T__41:
                case RFilter.T__42:
                case RFilter.T__43:
                case RFilter.T__44:
                case RFilter.T__45:
                case RFilter.T__46:
                case RFilter.T__47:
                case RFilter.T__48:
                case RFilter.T__49:
                case RFilter.T__50:
                case RFilter.T__51:
                case RFilter.T__52:
                case RFilter.T__53:
                case RFilter.HEX:
                case RFilter.INT:
                case RFilter.FLOAT:
                case RFilter.COMPLEX:
                case RFilter.STRING:
                case RFilter.ID:
                case RFilter.USER_OP:
                    this.state = 47;
                    this.elem();
                    break;
                case RFilter.NL:
                    this.state = 48;
                    this.eat();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 53;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 54;
            this.match(RFilter.T__34);
            break;
        case RFilter.T__3:
            this.enterOuterAlt(localctx, 5);
            this.state = 55;
            this.match(RFilter.T__3);
            this.state = 60;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
                this.state = 58;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RFilter.T__1:
                case RFilter.T__3:
                case RFilter.T__4:
                case RFilter.T__5:
                case RFilter.T__6:
                case RFilter.T__7:
                case RFilter.T__8:
                case RFilter.T__9:
                case RFilter.T__10:
                case RFilter.T__11:
                case RFilter.T__12:
                case RFilter.T__13:
                case RFilter.T__14:
                case RFilter.T__15:
                case RFilter.T__16:
                case RFilter.T__17:
                case RFilter.T__18:
                case RFilter.T__19:
                case RFilter.T__20:
                case RFilter.T__21:
                case RFilter.T__22:
                case RFilter.T__23:
                case RFilter.T__24:
                case RFilter.T__25:
                case RFilter.T__26:
                case RFilter.T__28:
                case RFilter.T__29:
                case RFilter.T__32:
                case RFilter.T__33:
                case RFilter.T__35:
                case RFilter.T__37:
                case RFilter.T__38:
                case RFilter.T__39:
                case RFilter.T__40:
                case RFilter.T__41:
                case RFilter.T__42:
                case RFilter.T__43:
                case RFilter.T__44:
                case RFilter.T__45:
                case RFilter.T__46:
                case RFilter.T__47:
                case RFilter.T__48:
                case RFilter.T__49:
                case RFilter.T__50:
                case RFilter.T__51:
                case RFilter.T__52:
                case RFilter.T__53:
                case RFilter.HEX:
                case RFilter.INT:
                case RFilter.FLOAT:
                case RFilter.COMPLEX:
                case RFilter.STRING:
                case RFilter.ID:
                case RFilter.USER_OP:
                    this.state = 56;
                    this.elem();
                    break;
                case RFilter.NL:
                    this.state = 57;
                    this.eat();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 62;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 63;
            this.match(RFilter.T__2);
            break;
        case RFilter.T__1:
            this.enterOuterAlt(localctx, 6);
            this.state = 64;
            this.match(RFilter.T__1);
            this.state = 69;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
                this.state = 67;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RFilter.T__1:
                case RFilter.T__3:
                case RFilter.T__4:
                case RFilter.T__5:
                case RFilter.T__6:
                case RFilter.T__7:
                case RFilter.T__8:
                case RFilter.T__9:
                case RFilter.T__10:
                case RFilter.T__11:
                case RFilter.T__12:
                case RFilter.T__13:
                case RFilter.T__14:
                case RFilter.T__15:
                case RFilter.T__16:
                case RFilter.T__17:
                case RFilter.T__18:
                case RFilter.T__19:
                case RFilter.T__20:
                case RFilter.T__21:
                case RFilter.T__22:
                case RFilter.T__23:
                case RFilter.T__24:
                case RFilter.T__25:
                case RFilter.T__26:
                case RFilter.T__28:
                case RFilter.T__29:
                case RFilter.T__32:
                case RFilter.T__33:
                case RFilter.T__35:
                case RFilter.T__37:
                case RFilter.T__38:
                case RFilter.T__39:
                case RFilter.T__40:
                case RFilter.T__41:
                case RFilter.T__42:
                case RFilter.T__43:
                case RFilter.T__44:
                case RFilter.T__45:
                case RFilter.T__46:
                case RFilter.T__47:
                case RFilter.T__48:
                case RFilter.T__49:
                case RFilter.T__50:
                case RFilter.T__51:
                case RFilter.T__52:
                case RFilter.T__53:
                case RFilter.HEX:
                case RFilter.INT:
                case RFilter.FLOAT:
                case RFilter.COMPLEX:
                case RFilter.STRING:
                case RFilter.ID:
                case RFilter.USER_OP:
                    this.state = 65;
                    this.elem();
                    break;
                case RFilter.NL:
                    this.state = 66;
                    this.eat();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 71;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 72;
            this.match(RFilter.T__2);
            this.state = 73;
            this.match(RFilter.T__2);
            break;
        case RFilter.T__32:
            this.enterOuterAlt(localctx, 7);
            this.state = 74;
            this.match(RFilter.T__32);
            this.state = 76;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RFilter.NL) {
                this.state = 75;
                this.eat();
            }

            this.state = 78;
            this.match(RFilter.T__33);
            this.state = 83;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
                this.state = 81;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RFilter.T__1:
                case RFilter.T__3:
                case RFilter.T__4:
                case RFilter.T__5:
                case RFilter.T__6:
                case RFilter.T__7:
                case RFilter.T__8:
                case RFilter.T__9:
                case RFilter.T__10:
                case RFilter.T__11:
                case RFilter.T__12:
                case RFilter.T__13:
                case RFilter.T__14:
                case RFilter.T__15:
                case RFilter.T__16:
                case RFilter.T__17:
                case RFilter.T__18:
                case RFilter.T__19:
                case RFilter.T__20:
                case RFilter.T__21:
                case RFilter.T__22:
                case RFilter.T__23:
                case RFilter.T__24:
                case RFilter.T__25:
                case RFilter.T__26:
                case RFilter.T__28:
                case RFilter.T__29:
                case RFilter.T__32:
                case RFilter.T__33:
                case RFilter.T__35:
                case RFilter.T__37:
                case RFilter.T__38:
                case RFilter.T__39:
                case RFilter.T__40:
                case RFilter.T__41:
                case RFilter.T__42:
                case RFilter.T__43:
                case RFilter.T__44:
                case RFilter.T__45:
                case RFilter.T__46:
                case RFilter.T__47:
                case RFilter.T__48:
                case RFilter.T__49:
                case RFilter.T__50:
                case RFilter.T__51:
                case RFilter.T__52:
                case RFilter.T__53:
                case RFilter.HEX:
                case RFilter.INT:
                case RFilter.FLOAT:
                case RFilter.COMPLEX:
                case RFilter.STRING:
                case RFilter.ID:
                case RFilter.USER_OP:
                    this.state = 79;
                    this.elem();
                    break;
                case RFilter.NL:
                    this.state = 80;
                    this.eat();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 85;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 86;
            this.match(RFilter.T__34);
            this.state = 88;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
            if(la_===1) {
                this.state = 87;
                this.eat();

            }
            break;
        case RFilter.T__39:
            this.enterOuterAlt(localctx, 8);
            this.state = 90;
            this.match(RFilter.T__39);
            this.state = 92;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RFilter.NL) {
                this.state = 91;
                this.eat();
            }

            this.state = 94;
            this.match(RFilter.T__33);
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
                this.state = 97;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RFilter.T__1:
                case RFilter.T__3:
                case RFilter.T__4:
                case RFilter.T__5:
                case RFilter.T__6:
                case RFilter.T__7:
                case RFilter.T__8:
                case RFilter.T__9:
                case RFilter.T__10:
                case RFilter.T__11:
                case RFilter.T__12:
                case RFilter.T__13:
                case RFilter.T__14:
                case RFilter.T__15:
                case RFilter.T__16:
                case RFilter.T__17:
                case RFilter.T__18:
                case RFilter.T__19:
                case RFilter.T__20:
                case RFilter.T__21:
                case RFilter.T__22:
                case RFilter.T__23:
                case RFilter.T__24:
                case RFilter.T__25:
                case RFilter.T__26:
                case RFilter.T__28:
                case RFilter.T__29:
                case RFilter.T__32:
                case RFilter.T__33:
                case RFilter.T__35:
                case RFilter.T__37:
                case RFilter.T__38:
                case RFilter.T__39:
                case RFilter.T__40:
                case RFilter.T__41:
                case RFilter.T__42:
                case RFilter.T__43:
                case RFilter.T__44:
                case RFilter.T__45:
                case RFilter.T__46:
                case RFilter.T__47:
                case RFilter.T__48:
                case RFilter.T__49:
                case RFilter.T__50:
                case RFilter.T__51:
                case RFilter.T__52:
                case RFilter.T__53:
                case RFilter.HEX:
                case RFilter.INT:
                case RFilter.FLOAT:
                case RFilter.COMPLEX:
                case RFilter.STRING:
                case RFilter.ID:
                case RFilter.USER_OP:
                    this.state = 95;
                    this.elem();
                    break;
                case RFilter.NL:
                    this.state = 96;
                    this.eat();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 101;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 102;
            this.match(RFilter.T__34);
            this.state = 104;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
            if(la_===1) {
                this.state = 103;
                this.eat();

            }
            break;
        case RFilter.T__41:
            this.enterOuterAlt(localctx, 9);
            this.state = 106;
            this.match(RFilter.T__41);
            this.state = 108;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RFilter.NL) {
                this.state = 107;
                this.eat();
            }

            this.state = 110;
            this.match(RFilter.T__33);
            this.state = 115;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
                this.state = 113;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RFilter.T__1:
                case RFilter.T__3:
                case RFilter.T__4:
                case RFilter.T__5:
                case RFilter.T__6:
                case RFilter.T__7:
                case RFilter.T__8:
                case RFilter.T__9:
                case RFilter.T__10:
                case RFilter.T__11:
                case RFilter.T__12:
                case RFilter.T__13:
                case RFilter.T__14:
                case RFilter.T__15:
                case RFilter.T__16:
                case RFilter.T__17:
                case RFilter.T__18:
                case RFilter.T__19:
                case RFilter.T__20:
                case RFilter.T__21:
                case RFilter.T__22:
                case RFilter.T__23:
                case RFilter.T__24:
                case RFilter.T__25:
                case RFilter.T__26:
                case RFilter.T__28:
                case RFilter.T__29:
                case RFilter.T__32:
                case RFilter.T__33:
                case RFilter.T__35:
                case RFilter.T__37:
                case RFilter.T__38:
                case RFilter.T__39:
                case RFilter.T__40:
                case RFilter.T__41:
                case RFilter.T__42:
                case RFilter.T__43:
                case RFilter.T__44:
                case RFilter.T__45:
                case RFilter.T__46:
                case RFilter.T__47:
                case RFilter.T__48:
                case RFilter.T__49:
                case RFilter.T__50:
                case RFilter.T__51:
                case RFilter.T__52:
                case RFilter.T__53:
                case RFilter.HEX:
                case RFilter.INT:
                case RFilter.FLOAT:
                case RFilter.COMPLEX:
                case RFilter.STRING:
                case RFilter.ID:
                case RFilter.USER_OP:
                    this.state = 111;
                    this.elem();
                    break;
                case RFilter.NL:
                    this.state = 112;
                    this.eat();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 118;
            this.match(RFilter.T__34);
            this.state = 120;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
            if(la_===1) {
                this.state = 119;
                this.eat();

            }
            break;
        case RFilter.T__37:
            this.enterOuterAlt(localctx, 10);
            this.state = 122;
            this.match(RFilter.T__37);
            this.state = 124;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===RFilter.NL) {
                this.state = 123;
                this.eat();
            }

            this.state = 126;
            this.match(RFilter.T__33);
            this.state = 131;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__1) | (1 << RFilter.T__3) | (1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RFilter.T__32 - 33)) | (1 << (RFilter.T__33 - 33)) | (1 << (RFilter.T__35 - 33)) | (1 << (RFilter.T__37 - 33)) | (1 << (RFilter.T__38 - 33)) | (1 << (RFilter.T__39 - 33)) | (1 << (RFilter.T__40 - 33)) | (1 << (RFilter.T__41 - 33)) | (1 << (RFilter.T__42 - 33)) | (1 << (RFilter.T__43 - 33)) | (1 << (RFilter.T__44 - 33)) | (1 << (RFilter.T__45 - 33)) | (1 << (RFilter.T__46 - 33)) | (1 << (RFilter.T__47 - 33)) | (1 << (RFilter.T__48 - 33)) | (1 << (RFilter.T__49 - 33)) | (1 << (RFilter.T__50 - 33)) | (1 << (RFilter.T__51 - 33)) | (1 << (RFilter.T__52 - 33)) | (1 << (RFilter.T__53 - 33)) | (1 << (RFilter.HEX - 33)) | (1 << (RFilter.INT - 33)) | (1 << (RFilter.FLOAT - 33)) | (1 << (RFilter.COMPLEX - 33)) | (1 << (RFilter.STRING - 33)) | (1 << (RFilter.ID - 33)) | (1 << (RFilter.USER_OP - 33)) | (1 << (RFilter.NL - 33)))) !== 0)) {
                this.state = 129;
                this._errHandler.sync(this);
                switch(this._input.LA(1)) {
                case RFilter.T__1:
                case RFilter.T__3:
                case RFilter.T__4:
                case RFilter.T__5:
                case RFilter.T__6:
                case RFilter.T__7:
                case RFilter.T__8:
                case RFilter.T__9:
                case RFilter.T__10:
                case RFilter.T__11:
                case RFilter.T__12:
                case RFilter.T__13:
                case RFilter.T__14:
                case RFilter.T__15:
                case RFilter.T__16:
                case RFilter.T__17:
                case RFilter.T__18:
                case RFilter.T__19:
                case RFilter.T__20:
                case RFilter.T__21:
                case RFilter.T__22:
                case RFilter.T__23:
                case RFilter.T__24:
                case RFilter.T__25:
                case RFilter.T__26:
                case RFilter.T__28:
                case RFilter.T__29:
                case RFilter.T__32:
                case RFilter.T__33:
                case RFilter.T__35:
                case RFilter.T__37:
                case RFilter.T__38:
                case RFilter.T__39:
                case RFilter.T__40:
                case RFilter.T__41:
                case RFilter.T__42:
                case RFilter.T__43:
                case RFilter.T__44:
                case RFilter.T__45:
                case RFilter.T__46:
                case RFilter.T__47:
                case RFilter.T__48:
                case RFilter.T__49:
                case RFilter.T__50:
                case RFilter.T__51:
                case RFilter.T__52:
                case RFilter.T__53:
                case RFilter.HEX:
                case RFilter.INT:
                case RFilter.FLOAT:
                case RFilter.COMPLEX:
                case RFilter.STRING:
                case RFilter.ID:
                case RFilter.USER_OP:
                    this.state = 127;
                    this.elem();
                    break;
                case RFilter.NL:
                    this.state = 128;
                    this.eat();
                    break;
                default:
                    throw new antlr4.error.NoViableAltException(this);
                }
                this.state = 133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 134;
            this.match(RFilter.T__34);
            this.state = 136;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
            if(la_===1) {
                this.state = 135;
                this.eat();

            }
            break;
        case RFilter.T__38:
            this.enterOuterAlt(localctx, 11);
            this.state = 138;
            this.match(RFilter.T__38);

                    // ``inside a compound expression, a newline before else is discarded,
                    // whereas at the outermost level, the newline terminates the if
                    // construction and a subsequent else causes a syntax error.''
                    /*
                    Works here
                        if (1==0) { print(1) } else { print(2) }

                    and correctly gets error here:

                        if (1==0) { print(1) }
                        else { print(2) }

                    this works too:

                        if (1==0) {
                          if (2==0) print(1)
                          else print(2)
                        }
                    */
                    let tok = this._input.LT(-2);
                    if (this.curlies>0&&tok.type===this.NL) {
                       if(!localctx._NL.setChannel){
                          localctx._NL.channel = antlr4.Token.HIDDEN_CHANNEL
                        }
                        else {
                           localctx._NL.setChannel(antlr4.Token.HIDDEN_CHANNEL);
                        }
                    // tok.setChannel(antlr4.Token.HIDDEN_CHANNEL);
                    }
                    
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


function AtomContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RFilter.RULE_atom;
    return this;
}

AtomContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AtomContext.prototype.constructor = AtomContext;

AtomContext.prototype.ID = function() {
    return this.getToken(RFilter.ID, 0);
};

AtomContext.prototype.STRING = function() {
    return this.getToken(RFilter.STRING, 0);
};

AtomContext.prototype.HEX = function() {
    return this.getToken(RFilter.HEX, 0);
};

AtomContext.prototype.INT = function() {
    return this.getToken(RFilter.INT, 0);
};

AtomContext.prototype.FLOAT = function() {
    return this.getToken(RFilter.FLOAT, 0);
};

AtomContext.prototype.COMPLEX = function() {
    return this.getToken(RFilter.COMPLEX, 0);
};

AtomContext.prototype.enterRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.enterAtom(this);
	}
};

AtomContext.prototype.exitRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.exitAtom(this);
	}
};




RFilter.AtomContext = AtomContext;

RFilter.prototype.atom = function() {

    var localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RFilter.RULE_atom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        _la = this._input.LA(1);
        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (RFilter.T__44 - 45)) | (1 << (RFilter.T__45 - 45)) | (1 << (RFilter.T__46 - 45)) | (1 << (RFilter.T__47 - 45)) | (1 << (RFilter.T__48 - 45)) | (1 << (RFilter.T__49 - 45)) | (1 << (RFilter.T__50 - 45)) | (1 << (RFilter.T__51 - 45)) | (1 << (RFilter.HEX - 45)) | (1 << (RFilter.INT - 45)) | (1 << (RFilter.FLOAT - 45)) | (1 << (RFilter.COMPLEX - 45)) | (1 << (RFilter.STRING - 45)) | (1 << (RFilter.ID - 45)))) !== 0))) {
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


function OpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RFilter.RULE_op;
    return this;
}

OpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OpContext.prototype.constructor = OpContext;

OpContext.prototype.USER_OP = function() {
    return this.getToken(RFilter.USER_OP, 0);
};

OpContext.prototype.enterRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.enterOp(this);
	}
};

OpContext.prototype.exitRule = function(listener) {
    if(listener instanceof RFilterListener ) {
        listener.exitOp(this);
	}
};




RFilter.OpContext = OpContext;

RFilter.prototype.op = function() {

    var localctx = new OpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RFilter.RULE_op);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RFilter.T__4) | (1 << RFilter.T__5) | (1 << RFilter.T__6) | (1 << RFilter.T__7) | (1 << RFilter.T__8) | (1 << RFilter.T__9) | (1 << RFilter.T__10) | (1 << RFilter.T__11) | (1 << RFilter.T__12) | (1 << RFilter.T__13) | (1 << RFilter.T__14) | (1 << RFilter.T__15) | (1 << RFilter.T__16) | (1 << RFilter.T__17) | (1 << RFilter.T__18) | (1 << RFilter.T__19) | (1 << RFilter.T__20) | (1 << RFilter.T__21) | (1 << RFilter.T__22) | (1 << RFilter.T__23) | (1 << RFilter.T__24) | (1 << RFilter.T__25) | (1 << RFilter.T__26) | (1 << RFilter.T__28) | (1 << RFilter.T__29))) !== 0) || ((((_la - 41)) & ~0x1f) == 0 && ((1 << (_la - 41)) & ((1 << (RFilter.T__40 - 41)) | (1 << (RFilter.T__42 - 41)) | (1 << (RFilter.T__43 - 41)) | (1 << (RFilter.T__52 - 41)) | (1 << (RFilter.T__53 - 41)) | (1 << (RFilter.USER_OP - 41)))) !== 0))) {
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


exports.RFilter = RFilter;
