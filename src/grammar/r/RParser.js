// @ts-nocheck
// Generated from R.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var RListener = require('./RListener').RListener;
var grammarFileName = "R.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003B\u00d9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0003\u0002\u0003\u0002\u0007\u0002\u0013\n\u0002\f\u0002\u000e",
    "\u0002\u0016\u000b\u0002\u0003\u0002\u0007\u0002\u0019\n\u0002\f\u0002",
    "\u000e\u0002\u001c\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0005\u0003*\n\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u0003d\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0007\u0003\u009a\n\u0003\f\u0003\u000e\u0003\u009d\u000b\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u00a2\n\u0004\u0007",
    "\u0004\u00a4\n\u0004\f\u0004\u000e\u0004\u00a7\u000b\u0004\u0003\u0004",
    "\u0005\u0004\u00aa\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005\u00af\n\u0005\f\u0005\u000e\u0005\u00b2\u000b\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "\u00ba\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007\u00bf",
    "\n\u0007\f\u0007\u000e\u0007\u00c2\u000b\u0007\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u00d7",
    "\n\b\u0003\b\u0002\u0003\u0004\t\u0002\u0004\u0006\b\n\f\u000e\u0002",
    "\u000b\u0004\u0002\u0003\u0003AA\u0003\u0002\f\r\u0003\u0002\u0007\b",
    "\u0003\u0002\t\n\u0003\u0002\u000f\u0010\u0003\u0002\u0011\u0016\u0003",
    "\u0002\u0018\u0019\u0003\u0002\u001a\u001b\u0003\u0002\u001d\"\u0002",
    "\u010e\u0002\u001a\u0003\u0002\u0002\u0002\u0004c\u0003\u0002\u0002",
    "\u0002\u0006\u00a9\u0003\u0002\u0002\u0002\b\u00ab\u0003\u0002\u0002",
    "\u0002\n\u00b9\u0003\u0002\u0002\u0002\f\u00bb\u0003\u0002\u0002\u0002",
    "\u000e\u00d6\u0003\u0002\u0002\u0002\u0010\u0014\u0005\u0004\u0003\u0002",
    "\u0011\u0013\t\u0002\u0002\u0002\u0012\u0011\u0003\u0002\u0002\u0002",
    "\u0013\u0016\u0003\u0002\u0002\u0002\u0014\u0012\u0003\u0002\u0002\u0002",
    "\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0019\u0003\u0002\u0002\u0002",
    "\u0016\u0014\u0003\u0002\u0002\u0002\u0017\u0019\u0007A\u0002\u0002",
    "\u0018\u0010\u0003\u0002\u0002\u0002\u0018\u0017\u0003\u0002\u0002\u0002",
    "\u0019\u001c\u0003\u0002\u0002\u0002\u001a\u0018\u0003\u0002\u0002\u0002",
    "\u001a\u001b\u0003\u0002\u0002\u0002\u001b\u001d\u0003\u0002\u0002\u0002",
    "\u001c\u001a\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u0002\u0002\u0003",
    "\u001e\u0003\u0003\u0002\u0002\u0002\u001f \b\u0003\u0001\u0002 !\t",
    "\u0003\u0002\u0002!d\u0005\u0004\u0003&\"#\u0007\u0017\u0002\u0002#",
    "d\u0005\u0004\u0003 $%\u0007\u001c\u0002\u0002%d\u0005\u0004\u0003\u001d",
    "&\'\u0007#\u0002\u0002\')\u0007$\u0002\u0002(*\u0005\b\u0005\u0002)",
    "(\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+,\u0007%\u0002\u0002,d\u0005\u0004\u0003\u001a-.\u0007&\u0002",
    "\u0002./\u0005\u0006\u0004\u0002/0\u0007\'\u0002\u00020d\u0003\u0002",
    "\u0002\u000212\u0007(\u0002\u000223\u0007$\u0002\u000234\u0005\u0004",
    "\u0003\u000245\u0007%\u0002\u000256\u0005\u0004\u0003\u00176d\u0003",
    "\u0002\u0002\u000278\u0007(\u0002\u000289\u0007$\u0002\u00029:\u0005",
    "\u0004\u0003\u0002:;\u0007%\u0002\u0002;<\u0005\u0004\u0003\u0002<=",
    "\u0007)\u0002\u0002=>\u0005\u0004\u0003\u0016>d\u0003\u0002\u0002\u0002",
    "?@\u0007*\u0002\u0002@A\u0007$\u0002\u0002AB\u0007?\u0002\u0002BC\u0007",
    "+\u0002\u0002CD\u0005\u0004\u0003\u0002DE\u0007%\u0002\u0002EF\u0005",
    "\u0004\u0003\u0015Fd\u0003\u0002\u0002\u0002GH\u0007,\u0002\u0002HI",
    "\u0007$\u0002\u0002IJ\u0005\u0004\u0003\u0002JK\u0007%\u0002\u0002K",
    "L\u0005\u0004\u0003\u0014Ld\u0003\u0002\u0002\u0002MN\u0007-\u0002\u0002",
    "Nd\u0005\u0004\u0003\u0013OP\u0007.\u0002\u0002Pd\u0005\u0004\u0003",
    "\u0012Qd\u0007/\u0002\u0002Rd\u00070\u0002\u0002ST\u0007$\u0002\u0002",
    "TU\u0005\u0004\u0003\u0002UV\u0007%\u0002\u0002Vd\u0003\u0002\u0002",
    "\u0002Wd\u0007?\u0002\u0002Xd\u0007>\u0002\u0002Yd\u0007:\u0002\u0002",
    "Zd\u0007;\u0002\u0002[d\u0007<\u0002\u0002\\d\u0007=\u0002\u0002]d\u0007",
    "1\u0002\u0002^d\u00072\u0002\u0002_d\u00073\u0002\u0002`d\u00074\u0002",
    "\u0002ad\u00075\u0002\u0002bd\u00076\u0002\u0002c\u001f\u0003\u0002",
    "\u0002\u0002c\"\u0003\u0002\u0002\u0002c$\u0003\u0002\u0002\u0002c&",
    "\u0003\u0002\u0002\u0002c-\u0003\u0002\u0002\u0002c1\u0003\u0002\u0002",
    "\u0002c7\u0003\u0002\u0002\u0002c?\u0003\u0002\u0002\u0002cG\u0003\u0002",
    "\u0002\u0002cM\u0003\u0002\u0002\u0002cO\u0003\u0002\u0002\u0002cQ\u0003",
    "\u0002\u0002\u0002cR\u0003\u0002\u0002\u0002cS\u0003\u0002\u0002\u0002",
    "cW\u0003\u0002\u0002\u0002cX\u0003\u0002\u0002\u0002cY\u0003\u0002\u0002",
    "\u0002cZ\u0003\u0002\u0002\u0002c[\u0003\u0002\u0002\u0002c\\\u0003",
    "\u0002\u0002\u0002c]\u0003\u0002\u0002\u0002c^\u0003\u0002\u0002\u0002",
    "c_\u0003\u0002\u0002\u0002c`\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002",
    "\u0002cb\u0003\u0002\u0002\u0002d\u009b\u0003\u0002\u0002\u0002ef\f",
    ")\u0002\u0002fg\t\u0004\u0002\u0002g\u009a\u0005\u0004\u0003*hi\f(\u0002",
    "\u0002ij\t\u0005\u0002\u0002j\u009a\u0005\u0004\u0003)kl\f\'\u0002\u0002",
    "lm\u0007\u000b\u0002\u0002m\u009a\u0005\u0004\u0003\'no\f%\u0002\u0002",
    "op\u0007\u000e\u0002\u0002p\u009a\u0005\u0004\u0003&qr\f$\u0002\u0002",
    "rs\u0007@\u0002\u0002s\u009a\u0005\u0004\u0003%tu\f#\u0002\u0002uv\t",
    "\u0006\u0002\u0002v\u009a\u0005\u0004\u0003$wx\f\"\u0002\u0002xy\t\u0003",
    "\u0002\u0002y\u009a\u0005\u0004\u0003#z{\f!\u0002\u0002{|\t\u0007\u0002",
    "\u0002|\u009a\u0005\u0004\u0003\"}~\f\u001f\u0002\u0002~\u007f\t\b\u0002",
    "\u0002\u007f\u009a\u0005\u0004\u0003 \u0080\u0081\f\u001e\u0002\u0002",
    "\u0081\u0082\t\t\u0002\u0002\u0082\u009a\u0005\u0004\u0003\u001f\u0083",
    "\u0084\f\u001c\u0002\u0002\u0084\u0085\u0007\u001c\u0002\u0002\u0085",
    "\u009a\u0005\u0004\u0003\u001d\u0086\u0087\f\u001b\u0002\u0002\u0087",
    "\u0088\t\n\u0002\u0002\u0088\u009a\u0005\u0004\u0003\u001c\u0089\u008a",
    "\f+\u0002\u0002\u008a\u008b\u0007\u0004\u0002\u0002\u008b\u008c\u0005",
    "\f\u0007\u0002\u008c\u008d\u0007\u0005\u0002\u0002\u008d\u008e\u0007",
    "\u0005\u0002\u0002\u008e\u009a\u0003\u0002\u0002\u0002\u008f\u0090\f",
    "*\u0002\u0002\u0090\u0091\u0007\u0006\u0002\u0002\u0091\u0092\u0005",
    "\f\u0007\u0002\u0092\u0093\u0007\u0005\u0002\u0002\u0093\u009a\u0003",
    "\u0002\u0002\u0002\u0094\u0095\f\u0019\u0002\u0002\u0095\u0096\u0007",
    "$\u0002\u0002\u0096\u0097\u0005\f\u0007\u0002\u0097\u0098\u0007%\u0002",
    "\u0002\u0098\u009a\u0003\u0002\u0002\u0002\u0099e\u0003\u0002\u0002",
    "\u0002\u0099h\u0003\u0002\u0002\u0002\u0099k\u0003\u0002\u0002\u0002",
    "\u0099n\u0003\u0002\u0002\u0002\u0099q\u0003\u0002\u0002\u0002\u0099",
    "t\u0003\u0002\u0002\u0002\u0099w\u0003\u0002\u0002\u0002\u0099z\u0003",
    "\u0002\u0002\u0002\u0099}\u0003\u0002\u0002\u0002\u0099\u0080\u0003",
    "\u0002\u0002\u0002\u0099\u0083\u0003\u0002\u0002\u0002\u0099\u0086\u0003",
    "\u0002\u0002\u0002\u0099\u0089\u0003\u0002\u0002\u0002\u0099\u008f\u0003",
    "\u0002\u0002\u0002\u0099\u0094\u0003\u0002\u0002\u0002\u009a\u009d\u0003",
    "\u0002\u0002\u0002\u009b\u0099\u0003\u0002\u0002\u0002\u009b\u009c\u0003",
    "\u0002\u0002\u0002\u009c\u0005\u0003\u0002\u0002\u0002\u009d\u009b\u0003",
    "\u0002\u0002\u0002\u009e\u00a5\u0005\u0004\u0003\u0002\u009f\u00a1\t",
    "\u0002\u0002\u0002\u00a0\u00a2\u0005\u0004\u0003\u0002\u00a1\u00a0\u0003",
    "\u0002\u0002\u0002\u00a1\u00a2\u0003\u0002\u0002\u0002\u00a2\u00a4\u0003",
    "\u0002\u0002\u0002\u00a3\u009f\u0003\u0002\u0002\u0002\u00a4\u00a7\u0003",
    "\u0002\u0002\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003",
    "\u0002\u0002\u0002\u00a6\u00aa\u0003\u0002\u0002\u0002\u00a7\u00a5\u0003",
    "\u0002\u0002\u0002\u00a8\u00aa\u0003\u0002\u0002\u0002\u00a9\u009e\u0003",
    "\u0002\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002\u00aa\u0007\u0003",
    "\u0002\u0002\u0002\u00ab\u00b0\u0005\n\u0006\u0002\u00ac\u00ad\u0007",
    "7\u0002\u0002\u00ad\u00af\u0005\n\u0006\u0002\u00ae\u00ac\u0003\u0002",
    "\u0002\u0002\u00af\u00b2\u0003\u0002\u0002\u0002\u00b0\u00ae\u0003\u0002",
    "\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\t\u0003\u0002",
    "\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b3\u00ba\u0007?",
    "\u0002\u0002\u00b4\u00b5\u0007?\u0002\u0002\u00b5\u00b6\u0007\u001f",
    "\u0002\u0002\u00b6\u00ba\u0005\u0004\u0003\u0002\u00b7\u00ba\u00078",
    "\u0002\u0002\u00b8\u00ba\u00079\u0002\u0002\u00b9\u00b3\u0003\u0002",
    "\u0002\u0002\u00b9\u00b4\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002",
    "\u0002\u0002\u00b9\u00b8\u0003\u0002\u0002\u0002\u00ba\u000b\u0003\u0002",
    "\u0002\u0002\u00bb\u00c0\u0005\u000e\b\u0002\u00bc\u00bd\u00077\u0002",
    "\u0002\u00bd\u00bf\u0005\u000e\b\u0002\u00be\u00bc\u0003\u0002\u0002",
    "\u0002\u00bf\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002",
    "\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\r\u0003\u0002\u0002",
    "\u0002\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00d7\u0005\u0004\u0003",
    "\u0002\u00c4\u00c5\u0007?\u0002\u0002\u00c5\u00d7\u0007\u001f\u0002",
    "\u0002\u00c6\u00c7\u0007?\u0002\u0002\u00c7\u00c8\u0007\u001f\u0002",
    "\u0002\u00c8\u00d7\u0005\u0004\u0003\u0002\u00c9\u00ca\u0007>\u0002",
    "\u0002\u00ca\u00d7\u0007\u001f\u0002\u0002\u00cb\u00cc\u0007>\u0002",
    "\u0002\u00cc\u00cd\u0007\u001f\u0002\u0002\u00cd\u00d7\u0005\u0004\u0003",
    "\u0002\u00ce\u00cf\u00071\u0002\u0002\u00cf\u00d7\u0007\u001f\u0002",
    "\u0002\u00d0\u00d1\u00071\u0002\u0002\u00d1\u00d2\u0007\u001f\u0002",
    "\u0002\u00d2\u00d7\u0005\u0004\u0003\u0002\u00d3\u00d7\u00078\u0002",
    "\u0002\u00d4\u00d7\u00079\u0002\u0002\u00d5\u00d7\u0003\u0002\u0002",
    "\u0002\u00d6\u00c3\u0003\u0002\u0002\u0002\u00d6\u00c4\u0003\u0002\u0002",
    "\u0002\u00d6\u00c6\u0003\u0002\u0002\u0002\u00d6\u00c9\u0003\u0002\u0002",
    "\u0002\u00d6\u00cb\u0003\u0002\u0002\u0002\u00d6\u00ce\u0003\u0002\u0002",
    "\u0002\u00d6\u00d0\u0003\u0002\u0002\u0002\u00d6\u00d3\u0003\u0002\u0002",
    "\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d6\u00d5\u0003\u0002\u0002",
    "\u0002\u00d7\u000f\u0003\u0002\u0002\u0002\u0010\u0014\u0018\u001a)",
    "c\u0099\u009b\u00a1\u00a5\u00a9\u00b0\u00b9\u00c0\u00d6"].join("");


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

var ruleNames =  [ "prog", "expr", "exprlist", "formlist", "form", "sublist", 
                   "sub" ];

function RParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RParser.prototype = Object.create(antlr4.Parser.prototype);
RParser.prototype.constructor = RParser;

Object.defineProperty(RParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RParser.EOF = antlr4.Token.EOF;
RParser.T__0 = 1;
RParser.T__1 = 2;
RParser.T__2 = 3;
RParser.T__3 = 4;
RParser.T__4 = 5;
RParser.T__5 = 6;
RParser.T__6 = 7;
RParser.T__7 = 8;
RParser.T__8 = 9;
RParser.T__9 = 10;
RParser.T__10 = 11;
RParser.T__11 = 12;
RParser.T__12 = 13;
RParser.T__13 = 14;
RParser.T__14 = 15;
RParser.T__15 = 16;
RParser.T__16 = 17;
RParser.T__17 = 18;
RParser.T__18 = 19;
RParser.T__19 = 20;
RParser.T__20 = 21;
RParser.T__21 = 22;
RParser.T__22 = 23;
RParser.T__23 = 24;
RParser.T__24 = 25;
RParser.T__25 = 26;
RParser.T__26 = 27;
RParser.T__27 = 28;
RParser.T__28 = 29;
RParser.T__29 = 30;
RParser.T__30 = 31;
RParser.T__31 = 32;
RParser.T__32 = 33;
RParser.T__33 = 34;
RParser.T__34 = 35;
RParser.T__35 = 36;
RParser.T__36 = 37;
RParser.T__37 = 38;
RParser.T__38 = 39;
RParser.T__39 = 40;
RParser.T__40 = 41;
RParser.T__41 = 42;
RParser.T__42 = 43;
RParser.T__43 = 44;
RParser.T__44 = 45;
RParser.T__45 = 46;
RParser.T__46 = 47;
RParser.T__47 = 48;
RParser.T__48 = 49;
RParser.T__49 = 50;
RParser.T__50 = 51;
RParser.T__51 = 52;
RParser.T__52 = 53;
RParser.T__53 = 54;
RParser.T__54 = 55;
RParser.HEX = 56;
RParser.INT = 57;
RParser.FLOAT = 58;
RParser.COMPLEX = 59;
RParser.STRING = 60;
RParser.ID = 61;
RParser.USER_OP = 62;
RParser.NL = 63;
RParser.WS = 64;

RParser.RULE_prog = 0;
RParser.RULE_expr = 1;
RParser.RULE_exprlist = 2;
RParser.RULE_formlist = 3;
RParser.RULE_form = 4;
RParser.RULE_sublist = 5;
RParser.RULE_sub = 6;


function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(RParser.EOF, 0);
};

ProgContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ProgContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RParser.NL);
    } else {
        return this.getToken(RParser.NL, i);
    }
};


ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.exitProg(this);
	}
};




RParser.ProgContext = ProgContext;

RParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RParser.T__9) | (1 << RParser.T__10) | (1 << RParser.T__20) | (1 << RParser.T__25))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RParser.T__32 - 33)) | (1 << (RParser.T__33 - 33)) | (1 << (RParser.T__35 - 33)) | (1 << (RParser.T__37 - 33)) | (1 << (RParser.T__39 - 33)) | (1 << (RParser.T__41 - 33)) | (1 << (RParser.T__42 - 33)) | (1 << (RParser.T__43 - 33)) | (1 << (RParser.T__44 - 33)) | (1 << (RParser.T__45 - 33)) | (1 << (RParser.T__46 - 33)) | (1 << (RParser.T__47 - 33)) | (1 << (RParser.T__48 - 33)) | (1 << (RParser.T__49 - 33)) | (1 << (RParser.T__50 - 33)) | (1 << (RParser.T__51 - 33)) | (1 << (RParser.HEX - 33)) | (1 << (RParser.INT - 33)) | (1 << (RParser.FLOAT - 33)) | (1 << (RParser.COMPLEX - 33)) | (1 << (RParser.STRING - 33)) | (1 << (RParser.ID - 33)) | (1 << (RParser.NL - 33)))) !== 0)) {
            this.state = 22;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case RParser.T__9:
            case RParser.T__10:
            case RParser.T__20:
            case RParser.T__25:
            case RParser.T__32:
            case RParser.T__33:
            case RParser.T__35:
            case RParser.T__37:
            case RParser.T__39:
            case RParser.T__41:
            case RParser.T__42:
            case RParser.T__43:
            case RParser.T__44:
            case RParser.T__45:
            case RParser.T__46:
            case RParser.T__47:
            case RParser.T__48:
            case RParser.T__49:
            case RParser.T__50:
            case RParser.T__51:
            case RParser.HEX:
            case RParser.INT:
            case RParser.FLOAT:
            case RParser.COMPLEX:
            case RParser.STRING:
            case RParser.ID:
                this.state = 14;
                this.expr(0);
                this.state = 18;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 15;
                        _la = this._input.LA(1);
                        if(!(_la===RParser.T__0 || _la===RParser.NL)) {
                        this._errHandler.recoverInline(this);
                        }
                        else {
                        	this._errHandler.reportMatch(this);
                            this.consume();
                        } 
                    }
                    this.state = 20;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
                }

                break;
            case RParser.NL:
                this.state = 21;
                this.match(RParser.NL);
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 26;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 27;
        this.match(RParser.EOF);
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


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprContext.prototype.formlist = function() {
    return this.getTypedRuleContext(FormlistContext,0);
};

ExprContext.prototype.exprlist = function() {
    return this.getTypedRuleContext(ExprlistContext,0);
};

ExprContext.prototype.ID = function() {
    return this.getToken(RParser.ID, 0);
};

ExprContext.prototype.STRING = function() {
    return this.getToken(RParser.STRING, 0);
};

ExprContext.prototype.HEX = function() {
    return this.getToken(RParser.HEX, 0);
};

ExprContext.prototype.INT = function() {
    return this.getToken(RParser.INT, 0);
};

ExprContext.prototype.FLOAT = function() {
    return this.getToken(RParser.FLOAT, 0);
};

ExprContext.prototype.COMPLEX = function() {
    return this.getToken(RParser.COMPLEX, 0);
};

ExprContext.prototype.USER_OP = function() {
    return this.getToken(RParser.USER_OP, 0);
};

ExprContext.prototype.sublist = function() {
    return this.getTypedRuleContext(SublistContext,0);
};

ExprContext.prototype.enterRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.enterExpr(this);
	}
};

ExprContext.prototype.exitRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.exitExpr(this);
	}
};



RParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, RParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
        switch(la_) {
        case 1:
            this.state = 30;
            _la = this._input.LA(1);
            if(!(_la===RParser.T__9 || _la===RParser.T__10)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 31;
            this.expr(36);
            break;

        case 2:
            this.state = 32;
            this.match(RParser.T__20);
            this.state = 33;
            this.expr(30);
            break;

        case 3:
            this.state = 34;
            this.match(RParser.T__25);
            this.state = 35;
            this.expr(27);
            break;

        case 4:
            this.state = 36;
            this.match(RParser.T__32);
            this.state = 37;
            this.match(RParser.T__33);
            this.state = 39;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 54)) & ~0x1f) == 0 && ((1 << (_la - 54)) & ((1 << (RParser.T__53 - 54)) | (1 << (RParser.T__54 - 54)) | (1 << (RParser.ID - 54)))) !== 0)) {
                this.state = 38;
                this.formlist();
            }

            this.state = 41;
            this.match(RParser.T__34);
            this.state = 42;
            this.expr(24);
            break;

        case 5:
            this.state = 43;
            this.match(RParser.T__35);
            this.state = 44;
            this.exprlist();
            this.state = 45;
            this.match(RParser.T__36);
            break;

        case 6:
            this.state = 47;
            this.match(RParser.T__37);
            this.state = 48;
            this.match(RParser.T__33);
            this.state = 49;
            this.expr(0);
            this.state = 50;
            this.match(RParser.T__34);
            this.state = 51;
            this.expr(21);
            break;

        case 7:
            this.state = 53;
            this.match(RParser.T__37);
            this.state = 54;
            this.match(RParser.T__33);
            this.state = 55;
            this.expr(0);
            this.state = 56;
            this.match(RParser.T__34);
            this.state = 57;
            this.expr(0);
            this.state = 58;
            this.match(RParser.T__38);
            this.state = 59;
            this.expr(20);
            break;

        case 8:
            this.state = 61;
            this.match(RParser.T__39);
            this.state = 62;
            this.match(RParser.T__33);
            this.state = 63;
            this.match(RParser.ID);
            this.state = 64;
            this.match(RParser.T__40);
            this.state = 65;
            this.expr(0);
            this.state = 66;
            this.match(RParser.T__34);
            this.state = 67;
            this.expr(19);
            break;

        case 9:
            this.state = 69;
            this.match(RParser.T__41);
            this.state = 70;
            this.match(RParser.T__33);
            this.state = 71;
            this.expr(0);
            this.state = 72;
            this.match(RParser.T__34);
            this.state = 73;
            this.expr(18);
            break;

        case 10:
            this.state = 75;
            this.match(RParser.T__42);
            this.state = 76;
            this.expr(17);
            break;

        case 11:
            this.state = 77;
            this.match(RParser.T__43);
            this.state = 78;
            this.expr(16);
            break;

        case 12:
            this.state = 79;
            this.match(RParser.T__44);
            break;

        case 13:
            this.state = 80;
            this.match(RParser.T__45);
            break;

        case 14:
            this.state = 81;
            this.match(RParser.T__33);
            this.state = 82;
            this.expr(0);
            this.state = 83;
            this.match(RParser.T__34);
            break;

        case 15:
            this.state = 85;
            this.match(RParser.ID);
            break;

        case 16:
            this.state = 86;
            this.match(RParser.STRING);
            break;

        case 17:
            this.state = 87;
            this.match(RParser.HEX);
            break;

        case 18:
            this.state = 88;
            this.match(RParser.INT);
            break;

        case 19:
            this.state = 89;
            this.match(RParser.FLOAT);
            break;

        case 20:
            this.state = 90;
            this.match(RParser.COMPLEX);
            break;

        case 21:
            this.state = 91;
            this.match(RParser.T__46);
            break;

        case 22:
            this.state = 92;
            this.match(RParser.T__47);
            break;

        case 23:
            this.state = 93;
            this.match(RParser.T__48);
            break;

        case 24:
            this.state = 94;
            this.match(RParser.T__49);
            break;

        case 25:
            this.state = 95;
            this.match(RParser.T__50);
            break;

        case 26:
            this.state = 96;
            this.match(RParser.T__51);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 153;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 151;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 99;
                    if (!( this.precpred(this._ctx, 39))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 39)");
                    }
                    this.state = 100;
                    _la = this._input.LA(1);
                    if(!(_la===RParser.T__4 || _la===RParser.T__5)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 101;
                    this.expr(40);
                    break;

                case 2:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 102;
                    if (!( this.precpred(this._ctx, 38))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 38)");
                    }
                    this.state = 103;
                    _la = this._input.LA(1);
                    if(!(_la===RParser.T__6 || _la===RParser.T__7)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 104;
                    this.expr(39);
                    break;

                case 3:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 105;
                    if (!( this.precpred(this._ctx, 37))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 37)");
                    }
                    this.state = 106;
                    this.match(RParser.T__8);
                    this.state = 107;
                    this.expr(37);
                    break;

                case 4:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 108;
                    if (!( this.precpred(this._ctx, 35))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 35)");
                    }
                    this.state = 109;
                    this.match(RParser.T__11);
                    this.state = 110;
                    this.expr(36);
                    break;

                case 5:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 111;
                    if (!( this.precpred(this._ctx, 34))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 34)");
                    }
                    this.state = 112;
                    this.match(RParser.USER_OP);
                    this.state = 113;
                    this.expr(35);
                    break;

                case 6:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 114;
                    if (!( this.precpred(this._ctx, 33))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 33)");
                    }
                    this.state = 115;
                    _la = this._input.LA(1);
                    if(!(_la===RParser.T__12 || _la===RParser.T__13)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 116;
                    this.expr(34);
                    break;

                case 7:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 117;
                    if (!( this.precpred(this._ctx, 32))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 32)");
                    }
                    this.state = 118;
                    _la = this._input.LA(1);
                    if(!(_la===RParser.T__9 || _la===RParser.T__10)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 119;
                    this.expr(33);
                    break;

                case 8:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 120;
                    if (!( this.precpred(this._ctx, 31))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 31)");
                    }
                    this.state = 121;
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RParser.T__14) | (1 << RParser.T__15) | (1 << RParser.T__16) | (1 << RParser.T__17) | (1 << RParser.T__18) | (1 << RParser.T__19))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 122;
                    this.expr(32);
                    break;

                case 9:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 123;
                    if (!( this.precpred(this._ctx, 29))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 29)");
                    }
                    this.state = 124;
                    _la = this._input.LA(1);
                    if(!(_la===RParser.T__21 || _la===RParser.T__22)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 125;
                    this.expr(30);
                    break;

                case 10:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 126;
                    if (!( this.precpred(this._ctx, 28))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
                    }
                    this.state = 127;
                    _la = this._input.LA(1);
                    if(!(_la===RParser.T__23 || _la===RParser.T__24)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 128;
                    this.expr(29);
                    break;

                case 11:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 129;
                    if (!( this.precpred(this._ctx, 26))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
                    }
                    this.state = 130;
                    this.match(RParser.T__25);
                    this.state = 131;
                    this.expr(27);
                    break;

                case 12:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 132;
                    if (!( this.precpred(this._ctx, 25))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
                    }
                    this.state = 133;
                    _la = this._input.LA(1);
                    if(!(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (RParser.T__26 - 27)) | (1 << (RParser.T__27 - 27)) | (1 << (RParser.T__28 - 27)) | (1 << (RParser.T__29 - 27)) | (1 << (RParser.T__30 - 27)) | (1 << (RParser.T__31 - 27)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 134;
                    this.expr(26);
                    break;

                case 13:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 135;
                    if (!( this.precpred(this._ctx, 41))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 41)");
                    }
                    this.state = 136;
                    this.match(RParser.T__1);
                    this.state = 137;
                    this.sublist();
                    this.state = 138;
                    this.match(RParser.T__2);
                    this.state = 139;
                    this.match(RParser.T__2);
                    break;

                case 14:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 141;
                    if (!( this.precpred(this._ctx, 40))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 40)");
                    }
                    this.state = 142;
                    this.match(RParser.T__3);
                    this.state = 143;
                    this.sublist();
                    this.state = 144;
                    this.match(RParser.T__2);
                    break;

                case 15:
                    localctx = new ExprContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, RParser.RULE_expr);
                    this.state = 146;
                    if (!( this.precpred(this._ctx, 23))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
                    }
                    this.state = 147;
                    this.match(RParser.T__33);
                    this.state = 148;
                    this.sublist();
                    this.state = 149;
                    this.match(RParser.T__34);
                    break;

                } 
            }
            this.state = 155;
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
};


function ExprlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RParser.RULE_exprlist;
    return this;
}

ExprlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprlistContext.prototype.constructor = ExprlistContext;

ExprlistContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ExprlistContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RParser.NL);
    } else {
        return this.getToken(RParser.NL, i);
    }
};


ExprlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.enterExprlist(this);
	}
};

ExprlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.exitExprlist(this);
	}
};




RParser.ExprlistContext = ExprlistContext;

RParser.prototype.exprlist = function() {

    var localctx = new ExprlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RParser.RULE_exprlist);
    var _la = 0; // Token type
    try {
        this.state = 167;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RParser.T__9:
        case RParser.T__10:
        case RParser.T__20:
        case RParser.T__25:
        case RParser.T__32:
        case RParser.T__33:
        case RParser.T__35:
        case RParser.T__37:
        case RParser.T__39:
        case RParser.T__41:
        case RParser.T__42:
        case RParser.T__43:
        case RParser.T__44:
        case RParser.T__45:
        case RParser.T__46:
        case RParser.T__47:
        case RParser.T__48:
        case RParser.T__49:
        case RParser.T__50:
        case RParser.T__51:
        case RParser.HEX:
        case RParser.INT:
        case RParser.FLOAT:
        case RParser.COMPLEX:
        case RParser.STRING:
        case RParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 156;
            this.expr(0);
            this.state = 163;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RParser.T__0 || _la===RParser.NL) {
                this.state = 157;
                _la = this._input.LA(1);
                if(!(_la===RParser.T__0 || _la===RParser.NL)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 159;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RParser.T__9) | (1 << RParser.T__10) | (1 << RParser.T__20) | (1 << RParser.T__25))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (RParser.T__32 - 33)) | (1 << (RParser.T__33 - 33)) | (1 << (RParser.T__35 - 33)) | (1 << (RParser.T__37 - 33)) | (1 << (RParser.T__39 - 33)) | (1 << (RParser.T__41 - 33)) | (1 << (RParser.T__42 - 33)) | (1 << (RParser.T__43 - 33)) | (1 << (RParser.T__44 - 33)) | (1 << (RParser.T__45 - 33)) | (1 << (RParser.T__46 - 33)) | (1 << (RParser.T__47 - 33)) | (1 << (RParser.T__48 - 33)) | (1 << (RParser.T__49 - 33)) | (1 << (RParser.T__50 - 33)) | (1 << (RParser.T__51 - 33)) | (1 << (RParser.HEX - 33)) | (1 << (RParser.INT - 33)) | (1 << (RParser.FLOAT - 33)) | (1 << (RParser.COMPLEX - 33)) | (1 << (RParser.STRING - 33)) | (1 << (RParser.ID - 33)))) !== 0)) {
                    this.state = 158;
                    this.expr(0);
                }

                this.state = 165;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case RParser.T__36:
            this.enterOuterAlt(localctx, 2);

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


function FormlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RParser.RULE_formlist;
    return this;
}

FormlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormlistContext.prototype.constructor = FormlistContext;

FormlistContext.prototype.form = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FormContext);
    } else {
        return this.getTypedRuleContext(FormContext,i);
    }
};

FormlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.enterFormlist(this);
	}
};

FormlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.exitFormlist(this);
	}
};




RParser.FormlistContext = FormlistContext;

RParser.prototype.formlist = function() {

    var localctx = new FormlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RParser.RULE_formlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 169;
        this.form();
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RParser.T__52) {
            this.state = 170;
            this.match(RParser.T__52);
            this.state = 171;
            this.form();
            this.state = 176;
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


function FormContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RParser.RULE_form;
    return this;
}

FormContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FormContext.prototype.constructor = FormContext;

FormContext.prototype.ID = function() {
    return this.getToken(RParser.ID, 0);
};

FormContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

FormContext.prototype.enterRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.enterForm(this);
	}
};

FormContext.prototype.exitRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.exitForm(this);
	}
};




RParser.FormContext = FormContext;

RParser.prototype.form = function() {

    var localctx = new FormContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RParser.RULE_form);
    try {
        this.state = 183;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 177;
            this.match(RParser.ID);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 178;
            this.match(RParser.ID);
            this.state = 179;
            this.match(RParser.T__28);
            this.state = 180;
            this.expr(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 181;
            this.match(RParser.T__53);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 182;
            this.match(RParser.T__54);
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


function SublistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RParser.RULE_sublist;
    return this;
}

SublistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SublistContext.prototype.constructor = SublistContext;

SublistContext.prototype.sub = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SubContext);
    } else {
        return this.getTypedRuleContext(SubContext,i);
    }
};

SublistContext.prototype.enterRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.enterSublist(this);
	}
};

SublistContext.prototype.exitRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.exitSublist(this);
	}
};




RParser.SublistContext = SublistContext;

RParser.prototype.sublist = function() {

    var localctx = new SublistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RParser.RULE_sublist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.sub();
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RParser.T__52) {
            this.state = 186;
            this.match(RParser.T__52);
            this.state = 187;
            this.sub();
            this.state = 192;
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


function SubContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RParser.RULE_sub;
    return this;
}

SubContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubContext.prototype.constructor = SubContext;

SubContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

SubContext.prototype.ID = function() {
    return this.getToken(RParser.ID, 0);
};

SubContext.prototype.STRING = function() {
    return this.getToken(RParser.STRING, 0);
};

SubContext.prototype.enterRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.enterSub(this);
	}
};

SubContext.prototype.exitRule = function(listener) {
    if(listener instanceof RListener ) {
        listener.exitSub(this);
	}
};




RParser.SubContext = SubContext;

RParser.prototype.sub = function() {

    var localctx = new SubContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RParser.RULE_sub);
    try {
        this.state = 212;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.expr(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
            this.match(RParser.ID);
            this.state = 195;
            this.match(RParser.T__28);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 196;
            this.match(RParser.ID);
            this.state = 197;
            this.match(RParser.T__28);
            this.state = 198;
            this.expr(0);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 199;
            this.match(RParser.STRING);
            this.state = 200;
            this.match(RParser.T__28);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 201;
            this.match(RParser.STRING);
            this.state = 202;
            this.match(RParser.T__28);
            this.state = 203;
            this.expr(0);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 204;
            this.match(RParser.T__46);
            this.state = 205;
            this.match(RParser.T__28);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 206;
            this.match(RParser.T__46);
            this.state = 207;
            this.match(RParser.T__28);
            this.state = 208;
            this.expr(0);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 209;
            this.match(RParser.T__53);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 210;
            this.match(RParser.T__54);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);

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


RParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

RParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 39);
		case 1:
			return this.precpred(this._ctx, 38);
		case 2:
			return this.precpred(this._ctx, 37);
		case 3:
			return this.precpred(this._ctx, 35);
		case 4:
			return this.precpred(this._ctx, 34);
		case 5:
			return this.precpred(this._ctx, 33);
		case 6:
			return this.precpred(this._ctx, 32);
		case 7:
			return this.precpred(this._ctx, 31);
		case 8:
			return this.precpred(this._ctx, 29);
		case 9:
			return this.precpred(this._ctx, 28);
		case 10:
			return this.precpred(this._ctx, 26);
		case 11:
			return this.precpred(this._ctx, 25);
		case 12:
			return this.precpred(this._ctx, 41);
		case 13:
			return this.precpred(this._ctx, 40);
		case 14:
			return this.precpred(this._ctx, 23);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.RParser = RParser;
