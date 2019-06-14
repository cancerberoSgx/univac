// @ts-nocheck
// Generated from sexpression.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\tJ\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0007\u0002\u001a\n\u0002\f\u0002\u000e\u0002\u001d\u000b",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0006\u0003\"\n\u0003\r\u0003",
    "\u000e\u0003#\u0003\u0003\u0003\u0003\u0003\u0004\u0005\u0004)\n\u0004",
    "\u0003\u0004\u0006\u0004,\n\u0004\r\u0004\u000e\u0004-\u0003\u0004\u0003",
    "\u0004\u0006\u00042\n\u0004\r\u0004\u000e\u00043\u0005\u00046\n\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005;\n\u0005\f\u0005\u000e",
    "\u0005>\u000b\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\b\u0003\b\u0003\t\u0005\tG\n\t\u0003\n\u0003\n\u0002\u0002\u000b",
    "\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t",
    "\u0011\u0002\u0013\u0002\u0003\u0002\u0006\u0004\u0002$$^^\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0004\u0002--//\u0007\u0002,-/1C\\aac|\u0002",
    "P\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002",
    "\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002",
    "\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u0015\u0003\u0002\u0002",
    "\u0002\u0005!\u0003\u0002\u0002\u0002\u0007(\u0003\u0002\u0002\u0002",
    "\t7\u0003\u0002\u0002\u0002\u000b?\u0003\u0002\u0002\u0002\rA\u0003",
    "\u0002\u0002\u0002\u000fC\u0003\u0002\u0002\u0002\u0011F\u0003\u0002",
    "\u0002\u0002\u0013H\u0003\u0002\u0002\u0002\u0015\u001b\u0007$\u0002",
    "\u0002\u0016\u0017\u0007^\u0002\u0002\u0017\u001a\u000b\u0002\u0002",
    "\u0002\u0018\u001a\n\u0002\u0002\u0002\u0019\u0016\u0003\u0002\u0002",
    "\u0002\u0019\u0018\u0003\u0002\u0002\u0002\u001a\u001d\u0003\u0002\u0002",
    "\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002",
    "\u0002\u001c\u001e\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0007$\u0002\u0002\u001f\u0004\u0003\u0002\u0002",
    "\u0002 \"\t\u0003\u0002\u0002! \u0003\u0002\u0002\u0002\"#\u0003\u0002",
    "\u0002\u0002#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$%\u0003",
    "\u0002\u0002\u0002%&\b\u0003\u0002\u0002&\u0006\u0003\u0002\u0002\u0002",
    "\')\t\u0004\u0002\u0002(\'\u0003\u0002\u0002\u0002()\u0003\u0002\u0002",
    "\u0002)+\u0003\u0002\u0002\u0002*,\u0005\u0013\n\u0002+*\u0003\u0002",
    "\u0002\u0002,-\u0003\u0002\u0002\u0002-+\u0003\u0002\u0002\u0002-.\u0003",
    "\u0002\u0002\u0002.5\u0003\u0002\u0002\u0002/1\u00070\u0002\u000202",
    "\u0005\u0013\n\u000210\u0003\u0002\u0002\u000223\u0003\u0002\u0002\u0002",
    "31\u0003\u0002\u0002\u000234\u0003\u0002\u0002\u000246\u0003\u0002\u0002",
    "\u00025/\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026\b\u0003",
    "\u0002\u0002\u00027<\u0005\u0011\t\u00028;\u0005\u0011\t\u00029;\u0005",
    "\u0013\n\u0002:8\u0003\u0002\u0002\u0002:9\u0003\u0002\u0002\u0002;",
    ">\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002",
    "\u0002=\n\u0003\u0002\u0002\u0002><\u0003\u0002\u0002\u0002?@\u0007",
    "*\u0002\u0002@\f\u0003\u0002\u0002\u0002AB\u0007+\u0002\u0002B\u000e",
    "\u0003\u0002\u0002\u0002CD\u00070\u0002\u0002D\u0010\u0003\u0002\u0002",
    "\u0002EG\t\u0005\u0002\u0002FE\u0003\u0002\u0002\u0002G\u0012\u0003",
    "\u0002\u0002\u0002HI\u00042;\u0002I\u0014\u0003\u0002\u0002\u0002\r",
    "\u0002\u0019\u001b#(-35:<F\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function sexpressionLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

sexpressionLexer.prototype = Object.create(antlr4.Lexer.prototype);
sexpressionLexer.prototype.constructor = sexpressionLexer;

Object.defineProperty(sexpressionLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

sexpressionLexer.EOF = antlr4.Token.EOF;
sexpressionLexer.STRING = 1;
sexpressionLexer.WHITESPACE = 2;
sexpressionLexer.NUMBER = 3;
sexpressionLexer.SYMBOL = 4;
sexpressionLexer.LPAREN = 5;
sexpressionLexer.RPAREN = 6;
sexpressionLexer.DOT = 7;

sexpressionLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

sexpressionLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

sexpressionLexer.prototype.literalNames = [ null, null, null, null, null, 
                                            "'('", "')'", "'.'" ];

sexpressionLexer.prototype.symbolicNames = [ null, "STRING", "WHITESPACE", 
                                             "NUMBER", "SYMBOL", "LPAREN", 
                                             "RPAREN", "DOT" ];

sexpressionLexer.prototype.ruleNames = [ "STRING", "WHITESPACE", "NUMBER", 
                                         "SYMBOL", "LPAREN", "RPAREN", "DOT", 
                                         "SYMBOL_START", "DIGIT" ];

sexpressionLexer.prototype.grammarFileName = "sexpression.g4";



exports.sexpressionLexer = sexpressionLexer;

