// @ts-nocheck
// Generated from ScssParser.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ScssParserListener = require('./ScssParserListener').ScssParserListener;
var grammarFileName = "ScssParser.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003?\u0209\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u0003\u0002\u0007\u0002l\n\u0002\f\u0002\u000e",
    "\u0002o\u000b\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003|\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004\u0081\n\u0004\f\u0004\u000e\u0004\u0084\u000b\u0004\u0003",
    "\u0004\u0005\u0004\u0087\n\u0004\u0003\u0005\u0003\u0005\u0005\u0005",
    "\u008b\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003",
    "\u0007\u0006\u0007\u0092\n\u0007\r\u0007\u000e\u0007\u0093\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u009a\n\b\u0003\b\u0005\b\u009d\n\b\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u00a6\n\t",
    "\u0003\t\u0003\t\u0005\t\u00aa\n\t\u0005\t\u00ac\n\t\u0003\t\u0005\t",
    "\u00af\n\t\u0005\t\u00b1\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n",
    "\u00b7\n\n\u0003\n\u0003\n\u0003\n\u0005\n\u00bc\n\n\u0003\n\u0003\n",
    "\u0003\u000b\u0007\u000b\u00c1\n\u000b\f\u000b\u000e\u000b\u00c4\u000b",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\r\u0003\r\u0003\r\u0003\r\u0005\r\u00d0\n\r\u0003\u000e\u0006\u000e",
    "\u00d3\n\u000e\r\u000e\u000e\u000e\u00d4\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0005\u000e\u00db\n\u000e\u0003\u000e\u0005\u000e",
    "\u00de\n\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00ed\n\u0011\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0007\u0012\u00f3\n\u0012\f\u0012",
    "\u000e\u0012\u00f6\u000b\u0012\u0003\u0012\u0005\u0012\u00f9\n\u0012",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u0106\n\u0015\u0003\u0015\u0005\u0015\u0109\n\u0015\u0003\u0016\u0003",
    "\u0016\u0003\u0016\u0005\u0016\u010e\n\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0005\u0016\u0114\n\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u011a\n\u0017\u0003\u0017",
    "\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u0132\n\u001c\f\u001c",
    "\u000e\u001c\u0135\u000b\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0007\u001d\u013e\n\u001d",
    "\f\u001d\u000e\u001d\u0141\u000b\u001d\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0007\u001d\u0146\n\u001d\f\u001d\u000e\u001d\u0149\u000b\u001d",
    "\u0005\u001d\u014b\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0007\u001e\u0151\n\u001e\f\u001e\u000e\u001e\u0154\u000b\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f",
    "\u015b\n\u001f\u0003 \u0003 \u0003 \u0005 \u0160\n \u0003 \u0003 \u0003",
    "!\u0003!\u0003!\u0003!\u0005!\u0168\n!\u0003\"\u0003\"\u0003\"\u0007",
    "\"\u016d\n\"\f\"\u000e\"\u0170\u000b\"\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003$\u0003$\u0007$\u017b\n$\f$\u000e$\u017e\u000b",
    "$\u0003$\u0007$\u0181\n$\f$\u000e$\u0184\u000b$\u0003%\u0003%\u0003",
    "%\u0003&\u0003&\u0003&\u0003&\u0003&\u0007&\u018e\n&\f&\u000e&\u0191",
    "\u000b&\u0003&\u0005&\u0194\n&\u0003&\u0003&\u0003\'\u0003\'\u0003\'",
    "\u0007\'\u019b\n\'\f\'\u000e\'\u019e\u000b\'\u0003(\u0006(\u01a1\n(",
    "\r(\u000e(\u01a2\u0003(\u0003(\u0003(\u0007(\u01a8\n(\f(\u000e(\u01ab",
    "\u000b(\u0003(\u0007(\u01ae\n(\f(\u000e(\u01b1\u000b(\u0003(\u0005(",
    "\u01b4\n(\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0005*\u01bf\n*\u0003+\u0003+\u0003+\u0003+\u0005+\u01c5\n+\u0003",
    ",\u0003,\u0003,\u0003,\u0003,\u0005,\u01cc\n,\u0003,\u0003,\u0003-\u0003",
    "-\u0003.\u0003.\u0007.\u01d4\n.\f.\u000e.\u01d7\u000b.\u0003.\u0003",
    ".\u0003.\u0003.\u0007.\u01dd\n.\f.\u000e.\u01e0\u000b.\u0005.\u01e2",
    "\n.\u0003/\u0003/\u0003/\u0003/\u0003/\u0005/\u01e9\n/\u00030\u0003",
    "0\u00030\u00031\u00031\u00031\u00031\u00032\u00032\u00032\u00072\u01f5",
    "\n2\f2\u000e2\u01f8\u000b2\u00033\u00033\u00033\u00033\u00034\u0003",
    "4\u00054\u0200\n4\u00035\u00035\u00035\u00055\u0205\n5\u00035\u0003",
    "5\u00035\u0002\u00026\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bd",
    "fh\u0002\n\u0003\u0002\u001b\u001f\u0005\u0002\u000f\u000f\u0011\u0011",
    "!\"\u0004\u0002\u0018\u001844\u0004\u0002\u000f\u0010\u001b\u001b\u0004",
    "\u0002\u0012\u0012\u001a\u001a\u0003\u000245\u0003\u0002#%\u0004\u0002",
    "44??\u0002\u021f\u0002m\u0003\u0002\u0002\u0002\u0004{\u0003\u0002\u0002",
    "\u0002\u0006}\u0003\u0002\u0002\u0002\b\u0088\u0003\u0002\u0002\u0002",
    "\n\u008c\u0003\u0002\u0002\u0002\f\u008f\u0003\u0002\u0002\u0002\u000e",
    "\u0095\u0003\u0002\u0002\u0002\u0010\u00a0\u0003\u0002\u0002\u0002\u0012",
    "\u00b2\u0003\u0002\u0002\u0002\u0014\u00c2\u0003\u0002\u0002\u0002\u0016",
    "\u00c7\u0003\u0002\u0002\u0002\u0018\u00cf\u0003\u0002\u0002\u0002\u001a",
    "\u00da\u0003\u0002\u0002\u0002\u001c\u00df\u0003\u0002\u0002\u0002\u001e",
    "\u00e1\u0003\u0002\u0002\u0002 \u00ec\u0003\u0002\u0002\u0002\"\u00ee",
    "\u0003\u0002\u0002\u0002$\u00fa\u0003\u0002\u0002\u0002&\u00ff\u0003",
    "\u0002\u0002\u0002(\u0108\u0003\u0002\u0002\u0002*\u0113\u0003\u0002",
    "\u0002\u0002,\u0115\u0003\u0002\u0002\u0002.\u011d\u0003\u0002\u0002",
    "\u00020\u0125\u0003\u0002\u0002\u00022\u0127\u0003\u0002\u0002\u0002",
    "4\u0129\u0003\u0002\u0002\u00026\u012d\u0003\u0002\u0002\u00028\u014a",
    "\u0003\u0002\u0002\u0002:\u014c\u0003\u0002\u0002\u0002<\u0157\u0003",
    "\u0002\u0002\u0002>\u015c\u0003\u0002\u0002\u0002@\u0167\u0003\u0002",
    "\u0002\u0002B\u0169\u0003\u0002\u0002\u0002D\u0171\u0003\u0002\u0002",
    "\u0002F\u0178\u0003\u0002\u0002\u0002H\u0185\u0003\u0002\u0002\u0002",
    "J\u0188\u0003\u0002\u0002\u0002L\u0197\u0003\u0002\u0002\u0002N\u01a0",
    "\u0003\u0002\u0002\u0002P\u01b5\u0003\u0002\u0002\u0002R\u01be\u0003",
    "\u0002\u0002\u0002T\u01c4\u0003\u0002\u0002\u0002V\u01c6\u0003\u0002",
    "\u0002\u0002X\u01cf\u0003\u0002\u0002\u0002Z\u01e1\u0003\u0002\u0002",
    "\u0002\\\u01e8\u0003\u0002\u0002\u0002^\u01ea\u0003\u0002\u0002\u0002",
    "`\u01ed\u0003\u0002\u0002\u0002b\u01f1\u0003\u0002\u0002\u0002d\u01f9",
    "\u0003\u0002\u0002\u0002f\u01fd\u0003\u0002\u0002\u0002h\u0201\u0003",
    "\u0002\u0002\u0002jl\u0005\u0004\u0003\u0002kj\u0003\u0002\u0002\u0002",
    "lo\u0003\u0002\u0002\u0002mk\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002",
    "\u0002n\u0003\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002p|\u0005",
    "> \u0002q|\u0005D#\u0002r|\u0005H%\u0002s|\u0005\u000e\b\u0002t|\u0005",
    "\u0012\n\u0002u|\u0005,\u0017\u0002v|\u0005\u0010\t\u0002w|\u0005\"",
    "\u0012\u0002x|\u0005.\u0018\u0002y|\u00054\u001b\u0002z|\u00056\u001c",
    "\u0002{p\u0003\u0002\u0002\u0002{q\u0003\u0002\u0002\u0002{r\u0003\u0002",
    "\u0002\u0002{s\u0003\u0002\u0002\u0002{t\u0003\u0002\u0002\u0002{u\u0003",
    "\u0002\u0002\u0002{v\u0003\u0002\u0002\u0002{w\u0003\u0002\u0002\u0002",
    "{x\u0003\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{z\u0003\u0002\u0002",
    "\u0002|\u0005\u0003\u0002\u0002\u0002}\u0082\u0005\b\u0005\u0002~\u007f",
    "\u0007\u0014\u0002\u0002\u007f\u0081\u0005\b\u0005\u0002\u0080~\u0003",
    "\u0002\u0002\u0002\u0081\u0084\u0003\u0002\u0002\u0002\u0082\u0080\u0003",
    "\u0002\u0002\u0002\u0082\u0083\u0003\u0002\u0002\u0002\u0083\u0086\u0003",
    "\u0002\u0002\u0002\u0084\u0082\u0003\u0002\u0002\u0002\u0085\u0087\u0007",
    "\u0007\u0002\u0002\u0086\u0085\u0003\u0002\u0002\u0002\u0086\u0087\u0003",
    "\u0002\u0002\u0002\u0087\u0007\u0003\u0002\u0002\u0002\u0088\u008a\u0005",
    "\n\u0006\u0002\u0089\u008b\u0005\f\u0007\u0002\u008a\u0089\u0003\u0002",
    "\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\t\u0003\u0002",
    "\u0002\u0002\u008c\u008d\u0007\u0016\u0002\u0002\u008d\u008e\u00074",
    "\u0002\u0002\u008e\u000b\u0003\u0002\u0002\u0002\u008f\u0091\u0007\u0012",
    "\u0002\u0002\u0090\u0092\u0005 \u0011\u0002\u0091\u0090\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002",
    "\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\r\u0003\u0002",
    "\u0002\u0002\u0095\u0096\u0007&\u0002\u0002\u0096\u009c\u00074\u0002",
    "\u0002\u0097\u0099\u0007\t\u0002\u0002\u0098\u009a\u0005\u0006\u0004",
    "\u0002\u0099\u0098\u0003\u0002\u0002\u0002\u0099\u009a\u0003\u0002\u0002",
    "\u0002\u009a\u009b\u0003\u0002\u0002\u0002\u009b\u009d\u0007\n\u0002",
    "\u0002\u009c\u0097\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002",
    "\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u009f\u0005J&\u0002",
    "\u009f\u000f\u0003\u0002\u0002\u0002\u00a0\u00a1\u0007.\u0002\u0002",
    "\u00a1\u00b0\u00074\u0002\u0002\u00a2\u00b1\u0007\u0013\u0002\u0002",
    "\u00a3\u00a5\u0007\t\u0002\u0002\u00a4\u00a6\u0005b2\u0002\u00a5\u00a4",
    "\u0003\u0002\u0002\u0002\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7",
    "\u0003\u0002\u0002\u0002\u00a7\u00a9\u0007\n\u0002\u0002\u00a8\u00aa",
    "\u0007\u0013\u0002\u0002\u00a9\u00a8\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0003\u0002\u0002\u0002\u00aa\u00ac\u0003\u0002\u0002\u0002\u00ab\u00a3",
    "\u0003\u0002\u0002\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ae",
    "\u0003\u0002\u0002\u0002\u00ad\u00af\u0005J&\u0002\u00ae\u00ad\u0003",
    "\u0002\u0002\u0002\u00ae\u00af\u0003\u0002\u0002\u0002\u00af\u00b1\u0003",
    "\u0002\u0002\u0002\u00b0\u00a2\u0003\u0002\u0002\u0002\u00b0\u00ab\u0003",
    "\u0002\u0002\u0002\u00b1\u0011\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007",
    "\'\u0002\u0002\u00b3\u00b4\u00074\u0002\u0002\u00b4\u00b6\u0007\t\u0002",
    "\u0002\u00b5\u00b7\u0005\u0006\u0004\u0002\u00b6\u00b5\u0003\u0002\u0002",
    "\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8\u00b9\u0007\n\u0002\u0002\u00b9\u00bb\u0007\u000b\u0002",
    "\u0002\u00ba\u00bc\u0005\u0014\u000b\u0002\u00bb\u00ba\u0003\u0002\u0002",
    "\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002",
    "\u0002\u00bd\u00be\u0007\f\u0002\u0002\u00be\u0013\u0003\u0002\u0002",
    "\u0002\u00bf\u00c1\u0005\u0018\r\u0002\u00c0\u00bf\u0003\u0002\u0002",
    "\u0002\u00c1\u00c4\u0003\u0002\u0002\u0002\u00c2\u00c0\u0003\u0002\u0002",
    "\u0002\u00c2\u00c3\u0003\u0002\u0002\u0002\u00c3\u00c5\u0003\u0002\u0002",
    "\u0002\u00c4\u00c2\u0003\u0002\u0002\u0002\u00c5\u00c6\u0005\u0016\f",
    "\u0002\u00c6\u0015\u0003\u0002\u0002\u0002\u00c7\u00c8\u00070\u0002",
    "\u0002\u00c8\u00c9\u0005\u001a\u000e\u0002\u00c9\u00ca\u0007\u0013\u0002",
    "\u0002\u00ca\u0017\u0003\u0002\u0002\u0002\u00cb\u00cc\u0005\u001a\u000e",
    "\u0002\u00cc\u00cd\u0007\u0013\u0002\u0002\u00cd\u00d0\u0003\u0002\u0002",
    "\u0002\u00ce\u00d0\u0005\u0004\u0003\u0002\u00cf\u00cb\u0003\u0002\u0002",
    "\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00d0\u0019\u0003\u0002\u0002",
    "\u0002\u00d1\u00d3\u0005 \u0011\u0002\u00d2\u00d1\u0003\u0002\u0002",
    "\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002",
    "\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00db\u0003\u0002\u0002",
    "\u0002\u00d6\u00d7\u0007\t\u0002\u0002\u00d7\u00d8\u0005\u001a\u000e",
    "\u0002\u00d8\u00d9\u0007\n\u0002\u0002\u00d9\u00db\u0003\u0002\u0002",
    "\u0002\u00da\u00d2\u0003\u0002\u0002\u0002\u00da\u00d6\u0003\u0002\u0002",
    "\u0002\u00db\u00dd\u0003\u0002\u0002\u0002\u00dc\u00de\u0005\u001e\u0010",
    "\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00dd\u00de\u0003\u0002\u0002",
    "\u0002\u00de\u001b\u0003\u0002\u0002\u0002\u00df\u00e0\t\u0002\u0002",
    "\u0002\u00e0\u001d\u0003\u0002\u0002\u0002\u00e1\u00e2\u0005\u001c\u000f",
    "\u0002\u00e2\u00e3\u0005\u001a\u000e\u0002\u00e3\u001f\u0003\u0002\u0002",
    "\u0002\u00e4\u00ed\u0005f4\u0002\u00e5\u00ed\u0005Z.\u0002\u00e6\u00ed",
    "\u00077\u0002\u0002\u00e7\u00ed\u00075\u0002\u0002\u00e8\u00ed\u0007",
    "\u0003\u0002\u0002\u00e9\u00ed\u0005d3\u0002\u00ea\u00ed\u0005\n\u0006",
    "\u0002\u00eb\u00ed\u0005h5\u0002\u00ec\u00e4\u0003\u0002\u0002\u0002",
    "\u00ec\u00e5\u0003\u0002\u0002\u0002\u00ec\u00e6\u0003\u0002\u0002\u0002",
    "\u00ec\u00e7\u0003\u0002\u0002\u0002\u00ec\u00e8\u0003\u0002\u0002\u0002",
    "\u00ec\u00e9\u0003\u0002\u0002\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002",
    "\u00ec\u00eb\u0003\u0002\u0002\u0002\u00ed!\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\u0007*\u0002\u0002\u00ef\u00f0\u0005(\u0015\u0002\u00f0",
    "\u00f4\u0005J&\u0002\u00f1\u00f3\u0005$\u0013\u0002\u00f2\u00f1\u0003",
    "\u0002\u0002\u0002\u00f3\u00f6\u0003\u0002\u0002\u0002\u00f4\u00f2\u0003",
    "\u0002\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f8\u0003",
    "\u0002\u0002\u0002\u00f6\u00f4\u0003\u0002\u0002\u0002\u00f7\u00f9\u0005",
    "&\u0014\u0002\u00f8\u00f7\u0003\u0002\u0002\u0002\u00f8\u00f9\u0003",
    "\u0002\u0002\u0002\u00f9#\u0003\u0002\u0002\u0002\u00fa\u00fb\u0007",
    "(\u0002\u0002\u00fb\u00fc\u0007)\u0002\u0002\u00fc\u00fd\u0005(\u0015",
    "\u0002\u00fd\u00fe\u0005J&\u0002\u00fe%\u0003\u0002\u0002\u0002\u00ff",
    "\u0100\u0007(\u0002\u0002\u0100\u0101\u0005J&\u0002\u0101\'\u0003\u0002",
    "\u0002\u0002\u0102\u0105\u0005*\u0016\u0002\u0103\u0104\u0007\u0006",
    "\u0002\u0002\u0104\u0106\u0005(\u0015\u0002\u0105\u0103\u0003\u0002",
    "\u0002\u0002\u0105\u0106\u0003\u0002\u0002\u0002\u0106\u0109\u0003\u0002",
    "\u0002\u0002\u0107\u0109\u0007\u0003\u0002\u0002\u0108\u0102\u0003\u0002",
    "\u0002\u0002\u0108\u0107\u0003\u0002\u0002\u0002\u0109)\u0003\u0002",
    "\u0002\u0002\u010a\u010d\u0005\u001a\u000e\u0002\u010b\u010c\t\u0003",
    "\u0002\u0002\u010c\u010e\u0005(\u0015\u0002\u010d\u010b\u0003\u0002",
    "\u0002\u0002\u010d\u010e\u0003\u0002\u0002\u0002\u010e\u0114\u0003\u0002",
    "\u0002\u0002\u010f\u0110\u0007\t\u0002\u0002\u0110\u0111\u0005(\u0015",
    "\u0002\u0111\u0112\u0007\n\u0002\u0002\u0112\u0114\u0003\u0002\u0002",
    "\u0002\u0113\u010a\u0003\u0002\u0002\u0002\u0113\u010f\u0003\u0002\u0002",
    "\u0002\u0114+\u0003\u0002\u0002\u0002\u0115\u0116\u0005\n\u0006\u0002",
    "\u0116\u0117\u0007\u0012\u0002\u0002\u0117\u0119\u0005b2\u0002\u0118",
    "\u011a\u00073\u0002\u0002\u0119\u0118\u0003\u0002\u0002\u0002\u0119",
    "\u011a\u0003\u0002\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b",
    "\u011c\u0007\u0013\u0002\u0002\u011c-\u0003\u0002\u0002\u0002\u011d",
    "\u011e\u0007+\u0002\u0002\u011e\u011f\u0005\n\u0006\u0002\u011f\u0120",
    "\u00071\u0002\u0002\u0120\u0121\u00050\u0019\u0002\u0121\u0122\u0007",
    "2\u0002\u0002\u0122\u0123\u00052\u001a\u0002\u0123\u0124\u0005J&\u0002",
    "\u0124/\u0003\u0002\u0002\u0002\u0125\u0126\u00076\u0002\u0002\u0126",
    "1\u0003\u0002\u0002\u0002\u0127\u0128\u00076\u0002\u0002\u01283\u0003",
    "\u0002\u0002\u0002\u0129\u012a\u0007,\u0002\u0002\u012a\u012b\u0005",
    "(\u0015\u0002\u012b\u012c\u0005J&\u0002\u012c5\u0003\u0002\u0002\u0002",
    "\u012d\u012e\u0007-\u0002\u0002\u012e\u0133\u0005\n\u0006\u0002\u012f",
    "\u0130\u0007\u0014\u0002\u0002\u0130\u0132\u0005\n\u0006\u0002\u0131",
    "\u012f\u0003\u0002\u0002\u0002\u0132\u0135\u0003\u0002\u0002\u0002\u0133",
    "\u0131\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002\u0002\u0134",
    "\u0136\u0003\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0136",
    "\u0137\u0007\u0004\u0002\u0002\u0137\u0138\u00058\u001d\u0002\u0138",
    "\u0139\u0005J&\u0002\u01397\u0003\u0002\u0002\u0002\u013a\u013f\u0007",
    "4\u0002\u0002\u013b\u013c\u0007\u0014\u0002\u0002\u013c\u013e\u0007",
    "4\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002\u013e\u0141\u0003",
    "\u0002\u0002\u0002\u013f\u013d\u0003\u0002\u0002\u0002\u013f\u0140\u0003",
    "\u0002\u0002\u0002\u0140\u014b\u0003\u0002\u0002\u0002\u0141\u013f\u0003",
    "\u0002\u0002\u0002\u0142\u0147\u0005:\u001e\u0002\u0143\u0144\u0007",
    "\u0014\u0002\u0002\u0144\u0146\u0005:\u001e\u0002\u0145\u0143\u0003",
    "\u0002\u0002\u0002\u0146\u0149\u0003\u0002\u0002\u0002\u0147\u0145\u0003",
    "\u0002\u0002\u0002\u0147\u0148\u0003\u0002\u0002\u0002\u0148\u014b\u0003",
    "\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002\u0002\u014a\u013a\u0003",
    "\u0002\u0002\u0002\u014a\u0142\u0003\u0002\u0002\u0002\u014b9\u0003",
    "\u0002\u0002\u0002\u014c\u014d\u0007\t\u0002\u0002\u014d\u0152\u0005",
    "<\u001f\u0002\u014e\u014f\u0007\u0014\u0002\u0002\u014f\u0151\u0005",
    "<\u001f\u0002\u0150\u014e\u0003\u0002\u0002\u0002\u0151\u0154\u0003",
    "\u0002\u0002\u0002\u0152\u0150\u0003\u0002\u0002\u0002\u0152\u0153\u0003",
    "\u0002\u0002\u0002\u0153\u0155\u0003\u0002\u0002\u0002\u0154\u0152\u0003",
    "\u0002\u0002\u0002\u0155\u0156\u0007\n\u0002\u0002\u0156;\u0003\u0002",
    "\u0002\u0002\u0157\u015a\u0005Z.\u0002\u0158\u0159\u0007\u0012\u0002",
    "\u0002\u0159\u015b\u0005b2\u0002\u015a\u0158\u0003\u0002\u0002\u0002",
    "\u015a\u015b\u0003\u0002\u0002\u0002\u015b=\u0003\u0002\u0002\u0002",
    "\u015c\u015d\u0007/\u0002\u0002\u015d\u015f\u0005@!\u0002\u015e\u0160",
    "\u0005B\"\u0002\u015f\u015e\u0003\u0002\u0002\u0002\u015f\u0160\u0003",
    "\u0002\u0002\u0002\u0160\u0161\u0003\u0002\u0002\u0002\u0161\u0162\u0007",
    "\u0013\u0002\u0002\u0162?\u0003\u0002\u0002\u0002\u0163\u0168\u0007",
    "5\u0002\u0002\u0164\u0165\u0007 \u0002\u0002\u0165\u0166\u0007<\u0002",
    "\u0002\u0166\u0168\u0007;\u0002\u0002\u0167\u0163\u0003\u0002\u0002",
    "\u0002\u0167\u0164\u0003\u0002\u0002\u0002\u0168A\u0003\u0002\u0002",
    "\u0002\u0169\u016e\u00074\u0002\u0002\u016a\u016b\u0007\u0014\u0002",
    "\u0002\u016b\u016d\u00074\u0002\u0002\u016c\u016a\u0003\u0002\u0002",
    "\u0002\u016d\u0170\u0003\u0002\u0002\u0002\u016e\u016c\u0003\u0002\u0002",
    "\u0002\u016e\u016f\u0003\u0002\u0002\u0002\u016fC\u0003\u0002\u0002",
    "\u0002\u0170\u016e\u0003\u0002\u0002\u0002\u0171\u0172\u0007\u0017\u0002",
    "\u0002\u0172\u0173\u0005F$\u0002\u0173\u0174\u0005L\'\u0002\u0174\u0175",
    "\u0007\u000b\u0002\u0002\u0175\u0176\u0005\u0002\u0002\u0002\u0176\u0177",
    "\u0007\f\u0002\u0002\u0177E\u0003\u0002\u0002\u0002\u0178\u017c\t\u0004",
    "\u0002\u0002\u0179\u017b\u00074\u0002\u0002\u017a\u0179\u0003\u0002",
    "\u0002\u0002\u017b\u017e\u0003\u0002\u0002\u0002\u017c\u017a\u0003\u0002",
    "\u0002\u0002\u017c\u017d\u0003\u0002\u0002\u0002\u017d\u0182\u0003\u0002",
    "\u0002\u0002\u017e\u017c\u0003\u0002\u0002\u0002\u017f\u0181\u0005T",
    "+\u0002\u0180\u017f\u0003\u0002\u0002\u0002\u0181\u0184\u0003\u0002",
    "\u0002\u0002\u0182\u0180\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002",
    "\u0002\u0002\u0183G\u0003\u0002\u0002\u0002\u0184\u0182\u0003\u0002",
    "\u0002\u0002\u0185\u0186\u0005L\'\u0002\u0186\u0187\u0005J&\u0002\u0187",
    "I\u0003\u0002\u0002\u0002\u0188\u018f\u0007\u000b\u0002\u0002\u0189",
    "\u018a\u0005`1\u0002\u018a\u018b\u0007\u0013\u0002\u0002\u018b\u018e",
    "\u0003\u0002\u0002\u0002\u018c\u018e\u0005\u0004\u0003\u0002\u018d\u0189",
    "\u0003\u0002\u0002\u0002\u018d\u018c\u0003\u0002\u0002\u0002\u018e\u0191",
    "\u0003\u0002\u0002\u0002\u018f\u018d\u0003\u0002\u0002\u0002\u018f\u0190",
    "\u0003\u0002\u0002\u0002\u0190\u0193\u0003\u0002\u0002\u0002\u0191\u018f",
    "\u0003\u0002\u0002\u0002\u0192\u0194\u0005`1\u0002\u0193\u0192\u0003",
    "\u0002\u0002\u0002\u0193\u0194\u0003\u0002\u0002\u0002\u0194\u0195\u0003",
    "\u0002\u0002\u0002\u0195\u0196\u0007\f\u0002\u0002\u0196K\u0003\u0002",
    "\u0002\u0002\u0197\u019c\u0005N(\u0002\u0198\u0199\u0007\u0014\u0002",
    "\u0002\u0199\u019b\u0005N(\u0002\u019a\u0198\u0003\u0002\u0002\u0002",
    "\u019b\u019e\u0003\u0002\u0002\u0002\u019c\u019a\u0003\u0002\u0002\u0002",
    "\u019c\u019d\u0003\u0002\u0002\u0002\u019dM\u0003\u0002\u0002\u0002",
    "\u019e\u019c\u0003\u0002\u0002\u0002\u019f\u01a1\u0005R*\u0002\u01a0",
    "\u019f\u0003\u0002\u0002\u0002\u01a1\u01a2\u0003\u0002\u0002\u0002\u01a2",
    "\u01a0\u0003\u0002\u0002\u0002\u01a2\u01a3\u0003\u0002\u0002\u0002\u01a3",
    "\u01a9\u0003\u0002\u0002\u0002\u01a4\u01a5\u0005P)\u0002\u01a5\u01a6",
    "\u0005R*\u0002\u01a6\u01a8\u0003\u0002\u0002\u0002\u01a7\u01a4\u0003",
    "\u0002\u0002\u0002\u01a8\u01ab\u0003\u0002\u0002\u0002\u01a9\u01a7\u0003",
    "\u0002\u0002\u0002\u01a9\u01aa\u0003\u0002\u0002\u0002\u01aa\u01af\u0003",
    "\u0002\u0002\u0002\u01ab\u01a9\u0003\u0002\u0002\u0002\u01ac\u01ae\u0005",
    "V,\u0002\u01ad\u01ac\u0003\u0002\u0002\u0002\u01ae\u01b1\u0003\u0002",
    "\u0002\u0002\u01af\u01ad\u0003\u0002\u0002\u0002\u01af\u01b0\u0003\u0002",
    "\u0002\u0002\u01b0\u01b3\u0003\u0002\u0002\u0002\u01b1\u01af\u0003\u0002",
    "\u0002\u0002\u01b2\u01b4\u0005T+\u0002\u01b3\u01b2\u0003\u0002\u0002",
    "\u0002\u01b3\u01b4\u0003\u0002\u0002\u0002\u01b4O\u0003\u0002\u0002",
    "\u0002\u01b5\u01b6\t\u0005\u0002\u0002\u01b6Q\u0003\u0002\u0002\u0002",
    "\u01b7\u01bf\u0005Z.\u0002\u01b8\u01b9\u0007\u0019\u0002\u0002\u01b9",
    "\u01bf\u0005Z.\u0002\u01ba\u01bb\u0007\u0015\u0002\u0002\u01bb\u01bf",
    "\u0005Z.\u0002\u01bc\u01bf\u0007\u0018\u0002\u0002\u01bd\u01bf\u0007",
    "\u001c\u0002\u0002\u01be\u01b7\u0003\u0002\u0002\u0002\u01be\u01b8\u0003",
    "\u0002\u0002\u0002\u01be\u01ba\u0003\u0002\u0002\u0002\u01be\u01bc\u0003",
    "\u0002\u0002\u0002\u01be\u01bd\u0003\u0002\u0002\u0002\u01bfS\u0003",
    "\u0002\u0002\u0002\u01c0\u01c1\t\u0006\u0002\u0002\u01c1\u01c5\u0007",
    "4\u0002\u0002\u01c2\u01c3\t\u0006\u0002\u0002\u01c3\u01c5\u0005h5\u0002",
    "\u01c4\u01c0\u0003\u0002\u0002\u0002\u01c4\u01c2\u0003\u0002\u0002\u0002",
    "\u01c5U\u0003\u0002\u0002\u0002\u01c6\u01c7\u0007\r\u0002\u0002\u01c7",
    "\u01cb\u00074\u0002\u0002\u01c8\u01c9\u0005X-\u0002\u01c9\u01ca\t\u0007",
    "\u0002\u0002\u01ca\u01cc\u0003\u0002\u0002\u0002\u01cb\u01c8\u0003\u0002",
    "\u0002\u0002\u01cb\u01cc\u0003\u0002\u0002\u0002\u01cc\u01cd\u0003\u0002",
    "\u0002\u0002\u01cd\u01ce\u0007\u000e\u0002\u0002\u01ceW\u0003\u0002",
    "\u0002\u0002\u01cf\u01d0\t\b\u0002\u0002\u01d0Y\u0003\u0002\u0002\u0002",
    "\u01d1\u01d5\u00074\u0002\u0002\u01d2\u01d4\u0005\\/\u0002\u01d3\u01d2",
    "\u0003\u0002\u0002\u0002\u01d4\u01d7\u0003\u0002\u0002\u0002\u01d5\u01d3",
    "\u0003\u0002\u0002\u0002\u01d5\u01d6\u0003\u0002\u0002\u0002\u01d6\u01e2",
    "\u0003\u0002\u0002\u0002\u01d7\u01d5\u0003\u0002\u0002\u0002\u01d8\u01d9",
    "\u0007\b\u0002\u0002\u01d9\u01da\u0005^0\u0002\u01da\u01de\u0007\f\u0002",
    "\u0002\u01db\u01dd\u0005\\/\u0002\u01dc\u01db\u0003\u0002\u0002\u0002",
    "\u01dd\u01e0\u0003\u0002\u0002\u0002\u01de\u01dc\u0003\u0002\u0002\u0002",
    "\u01de\u01df\u0003\u0002\u0002\u0002\u01df\u01e2\u0003\u0002\u0002\u0002",
    "\u01e0\u01de\u0003\u0002\u0002\u0002\u01e1\u01d1\u0003\u0002\u0002\u0002",
    "\u01e1\u01d8\u0003\u0002\u0002\u0002\u01e2[\u0003\u0002\u0002\u0002",
    "\u01e3\u01e4\u0007>\u0002\u0002\u01e4\u01e5\u0005^0\u0002\u01e5\u01e6",
    "\u0007\f\u0002\u0002\u01e6\u01e9\u0003\u0002\u0002\u0002\u01e7\u01e9",
    "\u0007?\u0002\u0002\u01e8\u01e3\u0003\u0002\u0002\u0002\u01e8\u01e7",
    "\u0003\u0002\u0002\u0002\u01e9]\u0003\u0002\u0002\u0002\u01ea\u01eb",
    "\u0007\u0016\u0002\u0002\u01eb\u01ec\t\t\u0002\u0002\u01ec_\u0003\u0002",
    "\u0002\u0002\u01ed\u01ee\u0005Z.\u0002\u01ee\u01ef\u0007\u0012\u0002",
    "\u0002\u01ef\u01f0\u0005b2\u0002\u01f0a\u0003\u0002\u0002\u0002\u01f1",
    "\u01f6\u0005\u001a\u000e\u0002\u01f2\u01f3\u0007\u0014\u0002\u0002\u01f3",
    "\u01f5\u0005\u001a\u000e\u0002\u01f4\u01f2\u0003\u0002\u0002\u0002\u01f5",
    "\u01f8\u0003\u0002\u0002\u0002\u01f6\u01f4\u0003\u0002\u0002\u0002\u01f6",
    "\u01f7\u0003\u0002\u0002\u0002\u01f7c\u0003\u0002\u0002\u0002\u01f8",
    "\u01f6\u0003\u0002\u0002\u0002\u01f9\u01fa\u0007 \u0002\u0002\u01fa",
    "\u01fb\u0007<\u0002\u0002\u01fb\u01fc\u0007;\u0002\u0002\u01fce\u0003",
    "\u0002\u0002\u0002\u01fd\u01ff\u00076\u0002\u0002\u01fe\u0200\u0007",
    "\u0005\u0002\u0002\u01ff\u01fe\u0003\u0002\u0002\u0002\u01ff\u0200\u0003",
    "\u0002\u0002\u0002\u0200g\u0003\u0002\u0002\u0002\u0201\u0202\u0007",
    "4\u0002\u0002\u0202\u0204\u0007\t\u0002\u0002\u0203\u0205\u0005b2\u0002",
    "\u0204\u0203\u0003\u0002\u0002\u0002\u0204\u0205\u0003\u0002\u0002\u0002",
    "\u0205\u0206\u0003\u0002\u0002\u0002\u0206\u0207\u0007\n\u0002\u0002",
    "\u0207i\u0003\u0002\u0002\u0002;m{\u0082\u0086\u008a\u0093\u0099\u009c",
    "\u00a5\u00a9\u00ab\u00ae\u00b0\u00b6\u00bb\u00c2\u00cf\u00d4\u00da\u00dd",
    "\u00ec\u00f4\u00f8\u0105\u0108\u010d\u0113\u0119\u0133\u013f\u0147\u014a",
    "\u0152\u015a\u015f\u0167\u016e\u017c\u0182\u018d\u018f\u0193\u019c\u01a2",
    "\u01a9\u01af\u01b3\u01be\u01c4\u01cb\u01d5\u01de\u01e1\u01e8\u01f6\u01ff",
    "\u0204"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'null'", "'in'", null, null, "'...'", null, 
                     "'('", "')'", "'{'", "'}'", "'['", "']'", "'>'", "'~'", 
                     "'<'", "':'", "';'", "','", "'.'", "'$'", "'@'", "'&'", 
                     "'#'", "'::'", "'+'", "'*'", "'/'", "'-'", "'%'", null, 
                     "'=='", "'!='", "'='", "'|='", "'~='", "'@mixin'", 
                     "'@function'", "'@else'", "'if'", "'@if'", "'@for'", 
                     "'@while'", "'@each'", "'@include'", "'@import'", "'@return'", 
                     "'from'", "'through'", "'!default'" ];

var symbolicNames = [ null, "NULL", "IN", "Unit", "COMBINE_COMPARE", "Ellipsis", 
                      "InterpolationStart", "LPAREN", "RPAREN", "BlockStart", 
                      "BlockEnd", "LBRACK", "RBRACK", "GT", "TIL", "LT", 
                      "COLON", "SEMI", "COMMA", "DOT", "DOLLAR", "AT", "AND", 
                      "HASH", "COLONCOLON", "PLUS", "TIMES", "DIV", "MINUS", 
                      "PERC", "UrlStart", "EQEQ", "NOTEQ", "EQ", "PIPE_EQ", 
                      "TILD_EQ", "MIXIN", "FUNCTION", "AT_ELSE", "IF", "AT_IF", 
                      "AT_FOR", "AT_WHILE", "AT_EACH", "INCLUDE", "IMPORT", 
                      "RETURN", "FROM", "THROUGH", "POUND_DEFAULT", "Identifier", 
                      "StringLiteral", "Number", "Color", "WS", "SL_COMMENT", 
                      "COMMENT", "UrlEnd", "Url", "SPACE", "InterpolationStartAfter", 
                      "IdentifierAfter" ];

var ruleNames =  [ "stylesheet", "statement", "params", "param", "variableName", 
                   "paramOptionalValue", "mixinDeclaration", "includeDeclaration", 
                   "functionDeclaration", "functionBody", "functionReturn", 
                   "functionStatement", "commandStatement", "mathCharacter", 
                   "mathStatement", "expression", "ifDeclaration", "elseIfStatement", 
                   "elseStatement", "conditions", "condition", "variableDeclaration", 
                   "forDeclaration", "fromNumber", "throughNumber", "whileDeclaration", 
                   "eachDeclaration", "eachValueList", "identifierListOrMap", 
                   "identifierValue", "importDeclaration", "referenceUrl", 
                   "mediaTypes", "nested", "nest", "ruleset", "block", "selectors", 
                   "selector", "selectorPrefix", "element", "pseudo", "attrib", 
                   "attribRelate", "identifier", "identifierPart", "identifierVariableName", 
                   "property", "values", "url", "measurement", "functionCall" ];

function ScssParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ScssParser.prototype = Object.create(antlr4.Parser.prototype);
ScssParser.prototype.constructor = ScssParser;

Object.defineProperty(ScssParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ScssParser.EOF = antlr4.Token.EOF;
ScssParser.NULL = 1;
ScssParser.IN = 2;
ScssParser.Unit = 3;
ScssParser.COMBINE_COMPARE = 4;
ScssParser.Ellipsis = 5;
ScssParser.InterpolationStart = 6;
ScssParser.LPAREN = 7;
ScssParser.RPAREN = 8;
ScssParser.BlockStart = 9;
ScssParser.BlockEnd = 10;
ScssParser.LBRACK = 11;
ScssParser.RBRACK = 12;
ScssParser.GT = 13;
ScssParser.TIL = 14;
ScssParser.LT = 15;
ScssParser.COLON = 16;
ScssParser.SEMI = 17;
ScssParser.COMMA = 18;
ScssParser.DOT = 19;
ScssParser.DOLLAR = 20;
ScssParser.AT = 21;
ScssParser.AND = 22;
ScssParser.HASH = 23;
ScssParser.COLONCOLON = 24;
ScssParser.PLUS = 25;
ScssParser.TIMES = 26;
ScssParser.DIV = 27;
ScssParser.MINUS = 28;
ScssParser.PERC = 29;
ScssParser.UrlStart = 30;
ScssParser.EQEQ = 31;
ScssParser.NOTEQ = 32;
ScssParser.EQ = 33;
ScssParser.PIPE_EQ = 34;
ScssParser.TILD_EQ = 35;
ScssParser.MIXIN = 36;
ScssParser.FUNCTION = 37;
ScssParser.AT_ELSE = 38;
ScssParser.IF = 39;
ScssParser.AT_IF = 40;
ScssParser.AT_FOR = 41;
ScssParser.AT_WHILE = 42;
ScssParser.AT_EACH = 43;
ScssParser.INCLUDE = 44;
ScssParser.IMPORT = 45;
ScssParser.RETURN = 46;
ScssParser.FROM = 47;
ScssParser.THROUGH = 48;
ScssParser.POUND_DEFAULT = 49;
ScssParser.Identifier = 50;
ScssParser.StringLiteral = 51;
ScssParser.Number = 52;
ScssParser.Color = 53;
ScssParser.WS = 54;
ScssParser.SL_COMMENT = 55;
ScssParser.COMMENT = 56;
ScssParser.UrlEnd = 57;
ScssParser.Url = 58;
ScssParser.SPACE = 59;
ScssParser.InterpolationStartAfter = 60;
ScssParser.IdentifierAfter = 61;

ScssParser.RULE_stylesheet = 0;
ScssParser.RULE_statement = 1;
ScssParser.RULE_params = 2;
ScssParser.RULE_param = 3;
ScssParser.RULE_variableName = 4;
ScssParser.RULE_paramOptionalValue = 5;
ScssParser.RULE_mixinDeclaration = 6;
ScssParser.RULE_includeDeclaration = 7;
ScssParser.RULE_functionDeclaration = 8;
ScssParser.RULE_functionBody = 9;
ScssParser.RULE_functionReturn = 10;
ScssParser.RULE_functionStatement = 11;
ScssParser.RULE_commandStatement = 12;
ScssParser.RULE_mathCharacter = 13;
ScssParser.RULE_mathStatement = 14;
ScssParser.RULE_expression = 15;
ScssParser.RULE_ifDeclaration = 16;
ScssParser.RULE_elseIfStatement = 17;
ScssParser.RULE_elseStatement = 18;
ScssParser.RULE_conditions = 19;
ScssParser.RULE_condition = 20;
ScssParser.RULE_variableDeclaration = 21;
ScssParser.RULE_forDeclaration = 22;
ScssParser.RULE_fromNumber = 23;
ScssParser.RULE_throughNumber = 24;
ScssParser.RULE_whileDeclaration = 25;
ScssParser.RULE_eachDeclaration = 26;
ScssParser.RULE_eachValueList = 27;
ScssParser.RULE_identifierListOrMap = 28;
ScssParser.RULE_identifierValue = 29;
ScssParser.RULE_importDeclaration = 30;
ScssParser.RULE_referenceUrl = 31;
ScssParser.RULE_mediaTypes = 32;
ScssParser.RULE_nested = 33;
ScssParser.RULE_nest = 34;
ScssParser.RULE_ruleset = 35;
ScssParser.RULE_block = 36;
ScssParser.RULE_selectors = 37;
ScssParser.RULE_selector = 38;
ScssParser.RULE_selectorPrefix = 39;
ScssParser.RULE_element = 40;
ScssParser.RULE_pseudo = 41;
ScssParser.RULE_attrib = 42;
ScssParser.RULE_attribRelate = 43;
ScssParser.RULE_identifier = 44;
ScssParser.RULE_identifierPart = 45;
ScssParser.RULE_identifierVariableName = 46;
ScssParser.RULE_property = 47;
ScssParser.RULE_values = 48;
ScssParser.RULE_url = 49;
ScssParser.RULE_measurement = 50;
ScssParser.RULE_functionCall = 51;


function StylesheetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_stylesheet;
    return this;
}

StylesheetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StylesheetContext.prototype.constructor = StylesheetContext;

StylesheetContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StylesheetContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterStylesheet(this);
	}
};

StylesheetContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitStylesheet(this);
	}
};




ScssParser.StylesheetContext = StylesheetContext;

ScssParser.prototype.stylesheet = function() {

    var localctx = new StylesheetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ScssParser.RULE_stylesheet);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 107;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.InterpolationStart) | (1 << ScssParser.DOT) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.AT) | (1 << ScssParser.AND) | (1 << ScssParser.HASH) | (1 << ScssParser.TIMES))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (ScssParser.MIXIN - 36)) | (1 << (ScssParser.FUNCTION - 36)) | (1 << (ScssParser.AT_IF - 36)) | (1 << (ScssParser.AT_FOR - 36)) | (1 << (ScssParser.AT_WHILE - 36)) | (1 << (ScssParser.AT_EACH - 36)) | (1 << (ScssParser.INCLUDE - 36)) | (1 << (ScssParser.IMPORT - 36)) | (1 << (ScssParser.Identifier - 36)))) !== 0)) {
            this.state = 104;
            this.statement();
            this.state = 109;
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


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.importDeclaration = function() {
    return this.getTypedRuleContext(ImportDeclarationContext,0);
};

StatementContext.prototype.nested = function() {
    return this.getTypedRuleContext(NestedContext,0);
};

StatementContext.prototype.ruleset = function() {
    return this.getTypedRuleContext(RulesetContext,0);
};

StatementContext.prototype.mixinDeclaration = function() {
    return this.getTypedRuleContext(MixinDeclarationContext,0);
};

StatementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

StatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

StatementContext.prototype.includeDeclaration = function() {
    return this.getTypedRuleContext(IncludeDeclarationContext,0);
};

StatementContext.prototype.ifDeclaration = function() {
    return this.getTypedRuleContext(IfDeclarationContext,0);
};

StatementContext.prototype.forDeclaration = function() {
    return this.getTypedRuleContext(ForDeclarationContext,0);
};

StatementContext.prototype.whileDeclaration = function() {
    return this.getTypedRuleContext(WhileDeclarationContext,0);
};

StatementContext.prototype.eachDeclaration = function() {
    return this.getTypedRuleContext(EachDeclarationContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitStatement(this);
	}
};




ScssParser.StatementContext = StatementContext;

ScssParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ScssParser.RULE_statement);
    try {
        this.state = 121;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ScssParser.IMPORT:
            this.enterOuterAlt(localctx, 1);
            this.state = 110;
            this.importDeclaration();
            break;
        case ScssParser.AT:
            this.enterOuterAlt(localctx, 2);
            this.state = 111;
            this.nested();
            break;
        case ScssParser.InterpolationStart:
        case ScssParser.DOT:
        case ScssParser.AND:
        case ScssParser.HASH:
        case ScssParser.TIMES:
        case ScssParser.Identifier:
            this.enterOuterAlt(localctx, 3);
            this.state = 112;
            this.ruleset();
            break;
        case ScssParser.MIXIN:
            this.enterOuterAlt(localctx, 4);
            this.state = 113;
            this.mixinDeclaration();
            break;
        case ScssParser.FUNCTION:
            this.enterOuterAlt(localctx, 5);
            this.state = 114;
            this.functionDeclaration();
            break;
        case ScssParser.DOLLAR:
            this.enterOuterAlt(localctx, 6);
            this.state = 115;
            this.variableDeclaration();
            break;
        case ScssParser.INCLUDE:
            this.enterOuterAlt(localctx, 7);
            this.state = 116;
            this.includeDeclaration();
            break;
        case ScssParser.AT_IF:
            this.enterOuterAlt(localctx, 8);
            this.state = 117;
            this.ifDeclaration();
            break;
        case ScssParser.AT_FOR:
            this.enterOuterAlt(localctx, 9);
            this.state = 118;
            this.forDeclaration();
            break;
        case ScssParser.AT_WHILE:
            this.enterOuterAlt(localctx, 10);
            this.state = 119;
            this.whileDeclaration();
            break;
        case ScssParser.AT_EACH:
            this.enterOuterAlt(localctx, 11);
            this.state = 120;
            this.eachDeclaration();
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


function ParamsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_params;
    return this;
}

ParamsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamsContext.prototype.constructor = ParamsContext;

ParamsContext.prototype.param = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParamContext);
    } else {
        return this.getTypedRuleContext(ParamContext,i);
    }
};

ParamsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.COMMA);
    } else {
        return this.getToken(ScssParser.COMMA, i);
    }
};


ParamsContext.prototype.Ellipsis = function() {
    return this.getToken(ScssParser.Ellipsis, 0);
};

ParamsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterParams(this);
	}
};

ParamsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitParams(this);
	}
};




ScssParser.ParamsContext = ParamsContext;

ScssParser.prototype.params = function() {

    var localctx = new ParamsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ScssParser.RULE_params);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 123;
        this.param();
        this.state = 128;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ScssParser.COMMA) {
            this.state = 124;
            this.match(ScssParser.COMMA);
            this.state = 125;
            this.param();
            this.state = 130;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 132;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.Ellipsis) {
            this.state = 131;
            this.match(ScssParser.Ellipsis);
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


function ParamContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_param;
    return this;
}

ParamContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamContext.prototype.constructor = ParamContext;

ParamContext.prototype.variableName = function() {
    return this.getTypedRuleContext(VariableNameContext,0);
};

ParamContext.prototype.paramOptionalValue = function() {
    return this.getTypedRuleContext(ParamOptionalValueContext,0);
};

ParamContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterParam(this);
	}
};

ParamContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitParam(this);
	}
};




ScssParser.ParamContext = ParamContext;

ScssParser.prototype.param = function() {

    var localctx = new ParamContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ScssParser.RULE_param);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.variableName();
        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.COLON) {
            this.state = 135;
            this.paramOptionalValue();
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


function VariableNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_variableName;
    return this;
}

VariableNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableNameContext.prototype.constructor = VariableNameContext;

VariableNameContext.prototype.DOLLAR = function() {
    return this.getToken(ScssParser.DOLLAR, 0);
};

VariableNameContext.prototype.Identifier = function() {
    return this.getToken(ScssParser.Identifier, 0);
};

VariableNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterVariableName(this);
	}
};

VariableNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitVariableName(this);
	}
};




ScssParser.VariableNameContext = VariableNameContext;

ScssParser.prototype.variableName = function() {

    var localctx = new VariableNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ScssParser.RULE_variableName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(ScssParser.DOLLAR);
        this.state = 139;
        this.match(ScssParser.Identifier);
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


function ParamOptionalValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_paramOptionalValue;
    return this;
}

ParamOptionalValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParamOptionalValueContext.prototype.constructor = ParamOptionalValueContext;

ParamOptionalValueContext.prototype.COLON = function() {
    return this.getToken(ScssParser.COLON, 0);
};

ParamOptionalValueContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ParamOptionalValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterParamOptionalValue(this);
	}
};

ParamOptionalValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitParamOptionalValue(this);
	}
};




ScssParser.ParamOptionalValueContext = ParamOptionalValueContext;

ScssParser.prototype.paramOptionalValue = function() {

    var localctx = new ParamOptionalValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ScssParser.RULE_paramOptionalValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(ScssParser.COLON);
        this.state = 143; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 142;
            this.expression();
            this.state = 145; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.UrlStart))) !== 0) || ((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (ScssParser.Identifier - 50)) | (1 << (ScssParser.StringLiteral - 50)) | (1 << (ScssParser.Number - 50)) | (1 << (ScssParser.Color - 50)))) !== 0));
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


function MixinDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_mixinDeclaration;
    return this;
}

MixinDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixinDeclarationContext.prototype.constructor = MixinDeclarationContext;

MixinDeclarationContext.prototype.MIXIN = function() {
    return this.getToken(ScssParser.MIXIN, 0);
};

MixinDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ScssParser.Identifier, 0);
};

MixinDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

MixinDeclarationContext.prototype.LPAREN = function() {
    return this.getToken(ScssParser.LPAREN, 0);
};

MixinDeclarationContext.prototype.RPAREN = function() {
    return this.getToken(ScssParser.RPAREN, 0);
};

MixinDeclarationContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

MixinDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterMixinDeclaration(this);
	}
};

MixinDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitMixinDeclaration(this);
	}
};




ScssParser.MixinDeclarationContext = MixinDeclarationContext;

ScssParser.prototype.mixinDeclaration = function() {

    var localctx = new MixinDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ScssParser.RULE_mixinDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(ScssParser.MIXIN);
        this.state = 148;
        this.match(ScssParser.Identifier);
        this.state = 154;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.LPAREN) {
            this.state = 149;
            this.match(ScssParser.LPAREN);
            this.state = 151;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ScssParser.DOLLAR) {
                this.state = 150;
                this.params();
            }

            this.state = 153;
            this.match(ScssParser.RPAREN);
        }

        this.state = 156;
        this.block();
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


function IncludeDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_includeDeclaration;
    return this;
}

IncludeDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncludeDeclarationContext.prototype.constructor = IncludeDeclarationContext;

IncludeDeclarationContext.prototype.INCLUDE = function() {
    return this.getToken(ScssParser.INCLUDE, 0);
};

IncludeDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ScssParser.Identifier, 0);
};

IncludeDeclarationContext.prototype.SEMI = function() {
    return this.getToken(ScssParser.SEMI, 0);
};

IncludeDeclarationContext.prototype.LPAREN = function() {
    return this.getToken(ScssParser.LPAREN, 0);
};

IncludeDeclarationContext.prototype.RPAREN = function() {
    return this.getToken(ScssParser.RPAREN, 0);
};

IncludeDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

IncludeDeclarationContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

IncludeDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterIncludeDeclaration(this);
	}
};

IncludeDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitIncludeDeclaration(this);
	}
};




ScssParser.IncludeDeclarationContext = IncludeDeclarationContext;

ScssParser.prototype.includeDeclaration = function() {

    var localctx = new IncludeDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ScssParser.RULE_includeDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(ScssParser.INCLUDE);
        this.state = 159;
        this.match(ScssParser.Identifier);
        this.state = 174;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ScssParser.SEMI:
            this.state = 160;
            this.match(ScssParser.SEMI);
            break;
        case ScssParser.NULL:
        case ScssParser.InterpolationStart:
        case ScssParser.LPAREN:
        case ScssParser.BlockStart:
        case ScssParser.BlockEnd:
        case ScssParser.DOT:
        case ScssParser.DOLLAR:
        case ScssParser.AT:
        case ScssParser.AND:
        case ScssParser.HASH:
        case ScssParser.TIMES:
        case ScssParser.UrlStart:
        case ScssParser.MIXIN:
        case ScssParser.FUNCTION:
        case ScssParser.AT_IF:
        case ScssParser.AT_FOR:
        case ScssParser.AT_WHILE:
        case ScssParser.AT_EACH:
        case ScssParser.INCLUDE:
        case ScssParser.IMPORT:
        case ScssParser.RETURN:
        case ScssParser.Identifier:
        case ScssParser.StringLiteral:
        case ScssParser.Number:
        case ScssParser.Color:
            this.state = 169;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
            if(la_===1) {
                this.state = 161;
                this.match(ScssParser.LPAREN);
                this.state = 163;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.UrlStart))) !== 0) || ((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (ScssParser.Identifier - 50)) | (1 << (ScssParser.StringLiteral - 50)) | (1 << (ScssParser.Number - 50)) | (1 << (ScssParser.Color - 50)))) !== 0)) {
                    this.state = 162;
                    this.values();
                }

                this.state = 165;
                this.match(ScssParser.RPAREN);
                this.state = 167;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if(_la===ScssParser.SEMI) {
                    this.state = 166;
                    this.match(ScssParser.SEMI);
                }


            }
            this.state = 172;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ScssParser.BlockStart) {
                this.state = 171;
                this.block();
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


function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.FUNCTION = function() {
    return this.getToken(ScssParser.FUNCTION, 0);
};

FunctionDeclarationContext.prototype.Identifier = function() {
    return this.getToken(ScssParser.Identifier, 0);
};

FunctionDeclarationContext.prototype.LPAREN = function() {
    return this.getToken(ScssParser.LPAREN, 0);
};

FunctionDeclarationContext.prototype.RPAREN = function() {
    return this.getToken(ScssParser.RPAREN, 0);
};

FunctionDeclarationContext.prototype.BlockStart = function() {
    return this.getToken(ScssParser.BlockStart, 0);
};

FunctionDeclarationContext.prototype.BlockEnd = function() {
    return this.getToken(ScssParser.BlockEnd, 0);
};

FunctionDeclarationContext.prototype.params = function() {
    return this.getTypedRuleContext(ParamsContext,0);
};

FunctionDeclarationContext.prototype.functionBody = function() {
    return this.getTypedRuleContext(FunctionBodyContext,0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitFunctionDeclaration(this);
	}
};




ScssParser.FunctionDeclarationContext = FunctionDeclarationContext;

ScssParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ScssParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(ScssParser.FUNCTION);
        this.state = 177;
        this.match(ScssParser.Identifier);
        this.state = 178;
        this.match(ScssParser.LPAREN);
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.DOLLAR) {
            this.state = 179;
            this.params();
        }

        this.state = 182;
        this.match(ScssParser.RPAREN);
        this.state = 183;
        this.match(ScssParser.BlockStart);
        this.state = 185;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.DOT) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.AT) | (1 << ScssParser.AND) | (1 << ScssParser.HASH) | (1 << ScssParser.TIMES) | (1 << ScssParser.UrlStart))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (ScssParser.MIXIN - 36)) | (1 << (ScssParser.FUNCTION - 36)) | (1 << (ScssParser.AT_IF - 36)) | (1 << (ScssParser.AT_FOR - 36)) | (1 << (ScssParser.AT_WHILE - 36)) | (1 << (ScssParser.AT_EACH - 36)) | (1 << (ScssParser.INCLUDE - 36)) | (1 << (ScssParser.IMPORT - 36)) | (1 << (ScssParser.RETURN - 36)) | (1 << (ScssParser.Identifier - 36)) | (1 << (ScssParser.StringLiteral - 36)) | (1 << (ScssParser.Number - 36)) | (1 << (ScssParser.Color - 36)))) !== 0)) {
            this.state = 184;
            this.functionBody();
        }

        this.state = 187;
        this.match(ScssParser.BlockEnd);
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


function FunctionBodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_functionBody;
    return this;
}

FunctionBodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionBodyContext.prototype.constructor = FunctionBodyContext;

FunctionBodyContext.prototype.functionReturn = function() {
    return this.getTypedRuleContext(FunctionReturnContext,0);
};

FunctionBodyContext.prototype.functionStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FunctionStatementContext);
    } else {
        return this.getTypedRuleContext(FunctionStatementContext,i);
    }
};

FunctionBodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterFunctionBody(this);
	}
};

FunctionBodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitFunctionBody(this);
	}
};




ScssParser.FunctionBodyContext = FunctionBodyContext;

ScssParser.prototype.functionBody = function() {

    var localctx = new FunctionBodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ScssParser.RULE_functionBody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.DOT) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.AT) | (1 << ScssParser.AND) | (1 << ScssParser.HASH) | (1 << ScssParser.TIMES) | (1 << ScssParser.UrlStart))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (ScssParser.MIXIN - 36)) | (1 << (ScssParser.FUNCTION - 36)) | (1 << (ScssParser.AT_IF - 36)) | (1 << (ScssParser.AT_FOR - 36)) | (1 << (ScssParser.AT_WHILE - 36)) | (1 << (ScssParser.AT_EACH - 36)) | (1 << (ScssParser.INCLUDE - 36)) | (1 << (ScssParser.IMPORT - 36)) | (1 << (ScssParser.Identifier - 36)) | (1 << (ScssParser.StringLiteral - 36)) | (1 << (ScssParser.Number - 36)) | (1 << (ScssParser.Color - 36)))) !== 0)) {
            this.state = 189;
            this.functionStatement();
            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 195;
        this.functionReturn();
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


function FunctionReturnContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_functionReturn;
    return this;
}

FunctionReturnContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionReturnContext.prototype.constructor = FunctionReturnContext;

FunctionReturnContext.prototype.RETURN = function() {
    return this.getToken(ScssParser.RETURN, 0);
};

FunctionReturnContext.prototype.commandStatement = function() {
    return this.getTypedRuleContext(CommandStatementContext,0);
};

FunctionReturnContext.prototype.SEMI = function() {
    return this.getToken(ScssParser.SEMI, 0);
};

FunctionReturnContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterFunctionReturn(this);
	}
};

FunctionReturnContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitFunctionReturn(this);
	}
};




ScssParser.FunctionReturnContext = FunctionReturnContext;

ScssParser.prototype.functionReturn = function() {

    var localctx = new FunctionReturnContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ScssParser.RULE_functionReturn);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(ScssParser.RETURN);
        this.state = 198;
        this.commandStatement();
        this.state = 199;
        this.match(ScssParser.SEMI);
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


function FunctionStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_functionStatement;
    return this;
}

FunctionStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionStatementContext.prototype.constructor = FunctionStatementContext;

FunctionStatementContext.prototype.commandStatement = function() {
    return this.getTypedRuleContext(CommandStatementContext,0);
};

FunctionStatementContext.prototype.SEMI = function() {
    return this.getToken(ScssParser.SEMI, 0);
};

FunctionStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

FunctionStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterFunctionStatement(this);
	}
};

FunctionStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitFunctionStatement(this);
	}
};




ScssParser.FunctionStatementContext = FunctionStatementContext;

ScssParser.prototype.functionStatement = function() {

    var localctx = new FunctionStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ScssParser.RULE_functionStatement);
    try {
        this.state = 205;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 201;
            this.commandStatement();
            this.state = 202;
            this.match(ScssParser.SEMI);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 204;
            this.statement();
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


function CommandStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_commandStatement;
    return this;
}

CommandStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandStatementContext.prototype.constructor = CommandStatementContext;

CommandStatementContext.prototype.LPAREN = function() {
    return this.getToken(ScssParser.LPAREN, 0);
};

CommandStatementContext.prototype.commandStatement = function() {
    return this.getTypedRuleContext(CommandStatementContext,0);
};

CommandStatementContext.prototype.RPAREN = function() {
    return this.getToken(ScssParser.RPAREN, 0);
};

CommandStatementContext.prototype.mathStatement = function() {
    return this.getTypedRuleContext(MathStatementContext,0);
};

CommandStatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

CommandStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterCommandStatement(this);
	}
};

CommandStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitCommandStatement(this);
	}
};




ScssParser.CommandStatementContext = CommandStatementContext;

ScssParser.prototype.commandStatement = function() {

    var localctx = new CommandStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ScssParser.RULE_commandStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 216;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ScssParser.NULL:
        case ScssParser.InterpolationStart:
        case ScssParser.DOLLAR:
        case ScssParser.UrlStart:
        case ScssParser.Identifier:
        case ScssParser.StringLiteral:
        case ScssParser.Number:
        case ScssParser.Color:
            this.state = 208; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
                this.state = 207;
                this.expression();
                this.state = 210; 
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.UrlStart))) !== 0) || ((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (ScssParser.Identifier - 50)) | (1 << (ScssParser.StringLiteral - 50)) | (1 << (ScssParser.Number - 50)) | (1 << (ScssParser.Color - 50)))) !== 0));
            break;
        case ScssParser.LPAREN:
            this.state = 212;
            this.match(ScssParser.LPAREN);
            this.state = 213;
            this.commandStatement();
            this.state = 214;
            this.match(ScssParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 219;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.PLUS) | (1 << ScssParser.TIMES) | (1 << ScssParser.DIV) | (1 << ScssParser.MINUS) | (1 << ScssParser.PERC))) !== 0)) {
            this.state = 218;
            this.mathStatement();
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


function MathCharacterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_mathCharacter;
    return this;
}

MathCharacterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MathCharacterContext.prototype.constructor = MathCharacterContext;

MathCharacterContext.prototype.TIMES = function() {
    return this.getToken(ScssParser.TIMES, 0);
};

MathCharacterContext.prototype.PLUS = function() {
    return this.getToken(ScssParser.PLUS, 0);
};

MathCharacterContext.prototype.DIV = function() {
    return this.getToken(ScssParser.DIV, 0);
};

MathCharacterContext.prototype.MINUS = function() {
    return this.getToken(ScssParser.MINUS, 0);
};

MathCharacterContext.prototype.PERC = function() {
    return this.getToken(ScssParser.PERC, 0);
};

MathCharacterContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterMathCharacter(this);
	}
};

MathCharacterContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitMathCharacter(this);
	}
};




ScssParser.MathCharacterContext = MathCharacterContext;

ScssParser.prototype.mathCharacter = function() {

    var localctx = new MathCharacterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ScssParser.RULE_mathCharacter);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 221;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.PLUS) | (1 << ScssParser.TIMES) | (1 << ScssParser.DIV) | (1 << ScssParser.MINUS) | (1 << ScssParser.PERC))) !== 0))) {
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


function MathStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_mathStatement;
    return this;
}

MathStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MathStatementContext.prototype.constructor = MathStatementContext;

MathStatementContext.prototype.mathCharacter = function() {
    return this.getTypedRuleContext(MathCharacterContext,0);
};

MathStatementContext.prototype.commandStatement = function() {
    return this.getTypedRuleContext(CommandStatementContext,0);
};

MathStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterMathStatement(this);
	}
};

MathStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitMathStatement(this);
	}
};




ScssParser.MathStatementContext = MathStatementContext;

ScssParser.prototype.mathStatement = function() {

    var localctx = new MathStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ScssParser.RULE_mathStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.mathCharacter();
        this.state = 224;
        this.commandStatement();
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


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.measurement = function() {
    return this.getTypedRuleContext(MeasurementContext,0);
};

ExpressionContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExpressionContext.prototype.Color = function() {
    return this.getToken(ScssParser.Color, 0);
};

ExpressionContext.prototype.StringLiteral = function() {
    return this.getToken(ScssParser.StringLiteral, 0);
};

ExpressionContext.prototype.NULL = function() {
    return this.getToken(ScssParser.NULL, 0);
};

ExpressionContext.prototype.url = function() {
    return this.getTypedRuleContext(UrlContext,0);
};

ExpressionContext.prototype.variableName = function() {
    return this.getTypedRuleContext(VariableNameContext,0);
};

ExpressionContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitExpression(this);
	}
};




ScssParser.ExpressionContext = ExpressionContext;

ScssParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ScssParser.RULE_expression);
    try {
        this.state = 234;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 226;
            this.measurement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 227;
            this.identifier();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 228;
            this.match(ScssParser.Color);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 229;
            this.match(ScssParser.StringLiteral);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 230;
            this.match(ScssParser.NULL);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 231;
            this.url();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 232;
            this.variableName();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 233;
            this.functionCall();
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


function IfDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_ifDeclaration;
    return this;
}

IfDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfDeclarationContext.prototype.constructor = IfDeclarationContext;

IfDeclarationContext.prototype.AT_IF = function() {
    return this.getToken(ScssParser.AT_IF, 0);
};

IfDeclarationContext.prototype.conditions = function() {
    return this.getTypedRuleContext(ConditionsContext,0);
};

IfDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

IfDeclarationContext.prototype.elseIfStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfStatementContext);
    } else {
        return this.getTypedRuleContext(ElseIfStatementContext,i);
    }
};

IfDeclarationContext.prototype.elseStatement = function() {
    return this.getTypedRuleContext(ElseStatementContext,0);
};

IfDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterIfDeclaration(this);
	}
};

IfDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitIfDeclaration(this);
	}
};




ScssParser.IfDeclarationContext = IfDeclarationContext;

ScssParser.prototype.ifDeclaration = function() {

    var localctx = new IfDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ScssParser.RULE_ifDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.match(ScssParser.AT_IF);
        this.state = 237;
        this.conditions();
        this.state = 238;
        this.block();
        this.state = 242;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 239;
                this.elseIfStatement(); 
            }
            this.state = 244;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
        }

        this.state = 246;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.AT_ELSE) {
            this.state = 245;
            this.elseStatement();
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


function ElseIfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_elseIfStatement;
    return this;
}

ElseIfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfStatementContext.prototype.constructor = ElseIfStatementContext;

ElseIfStatementContext.prototype.AT_ELSE = function() {
    return this.getToken(ScssParser.AT_ELSE, 0);
};

ElseIfStatementContext.prototype.IF = function() {
    return this.getToken(ScssParser.IF, 0);
};

ElseIfStatementContext.prototype.conditions = function() {
    return this.getTypedRuleContext(ConditionsContext,0);
};

ElseIfStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ElseIfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterElseIfStatement(this);
	}
};

ElseIfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitElseIfStatement(this);
	}
};




ScssParser.ElseIfStatementContext = ElseIfStatementContext;

ScssParser.prototype.elseIfStatement = function() {

    var localctx = new ElseIfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ScssParser.RULE_elseIfStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 248;
        this.match(ScssParser.AT_ELSE);
        this.state = 249;
        this.match(ScssParser.IF);
        this.state = 250;
        this.conditions();
        this.state = 251;
        this.block();
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


function ElseStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_elseStatement;
    return this;
}

ElseStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatementContext.prototype.constructor = ElseStatementContext;

ElseStatementContext.prototype.AT_ELSE = function() {
    return this.getToken(ScssParser.AT_ELSE, 0);
};

ElseStatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ElseStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterElseStatement(this);
	}
};

ElseStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitElseStatement(this);
	}
};




ScssParser.ElseStatementContext = ElseStatementContext;

ScssParser.prototype.elseStatement = function() {

    var localctx = new ElseStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ScssParser.RULE_elseStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 253;
        this.match(ScssParser.AT_ELSE);
        this.state = 254;
        this.block();
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


function ConditionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_conditions;
    return this;
}

ConditionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionsContext.prototype.constructor = ConditionsContext;

ConditionsContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ConditionsContext.prototype.COMBINE_COMPARE = function() {
    return this.getToken(ScssParser.COMBINE_COMPARE, 0);
};

ConditionsContext.prototype.conditions = function() {
    return this.getTypedRuleContext(ConditionsContext,0);
};

ConditionsContext.prototype.NULL = function() {
    return this.getToken(ScssParser.NULL, 0);
};

ConditionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterConditions(this);
	}
};

ConditionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitConditions(this);
	}
};




ScssParser.ConditionsContext = ConditionsContext;

ScssParser.prototype.conditions = function() {

    var localctx = new ConditionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ScssParser.RULE_conditions);
    try {
        this.state = 262;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 256;
            this.condition();
            this.state = 259;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
            if(la_===1) {
                this.state = 257;
                this.match(ScssParser.COMBINE_COMPARE);
                this.state = 258;
                this.conditions();

            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 261;
            this.match(ScssParser.NULL);
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


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.commandStatement = function() {
    return this.getTypedRuleContext(CommandStatementContext,0);
};

ConditionContext.prototype.conditions = function() {
    return this.getTypedRuleContext(ConditionsContext,0);
};

ConditionContext.prototype.EQEQ = function() {
    return this.getToken(ScssParser.EQEQ, 0);
};

ConditionContext.prototype.LT = function() {
    return this.getToken(ScssParser.LT, 0);
};

ConditionContext.prototype.GT = function() {
    return this.getToken(ScssParser.GT, 0);
};

ConditionContext.prototype.NOTEQ = function() {
    return this.getToken(ScssParser.NOTEQ, 0);
};

ConditionContext.prototype.LPAREN = function() {
    return this.getToken(ScssParser.LPAREN, 0);
};

ConditionContext.prototype.RPAREN = function() {
    return this.getToken(ScssParser.RPAREN, 0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitCondition(this);
	}
};




ScssParser.ConditionContext = ConditionContext;

ScssParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ScssParser.RULE_condition);
    var _la = 0; // Token type
    try {
        this.state = 273;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 264;
            this.commandStatement();
            this.state = 267;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (ScssParser.GT - 13)) | (1 << (ScssParser.LT - 13)) | (1 << (ScssParser.EQEQ - 13)) | (1 << (ScssParser.NOTEQ - 13)))) !== 0)) {
                this.state = 265;
                _la = this._input.LA(1);
                if(!(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (ScssParser.GT - 13)) | (1 << (ScssParser.LT - 13)) | (1 << (ScssParser.EQEQ - 13)) | (1 << (ScssParser.NOTEQ - 13)))) !== 0))) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 266;
                this.conditions();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 269;
            this.match(ScssParser.LPAREN);
            this.state = 270;
            this.conditions();
            this.state = 271;
            this.match(ScssParser.RPAREN);
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


function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.variableName = function() {
    return this.getTypedRuleContext(VariableNameContext,0);
};

VariableDeclarationContext.prototype.COLON = function() {
    return this.getToken(ScssParser.COLON, 0);
};

VariableDeclarationContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

VariableDeclarationContext.prototype.SEMI = function() {
    return this.getToken(ScssParser.SEMI, 0);
};

VariableDeclarationContext.prototype.POUND_DEFAULT = function() {
    return this.getToken(ScssParser.POUND_DEFAULT, 0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitVariableDeclaration(this);
	}
};




ScssParser.VariableDeclarationContext = VariableDeclarationContext;

ScssParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ScssParser.RULE_variableDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.variableName();
        this.state = 276;
        this.match(ScssParser.COLON);
        this.state = 277;
        this.values();
        this.state = 279;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.POUND_DEFAULT) {
            this.state = 278;
            this.match(ScssParser.POUND_DEFAULT);
        }

        this.state = 281;
        this.match(ScssParser.SEMI);
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


function ForDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_forDeclaration;
    return this;
}

ForDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForDeclarationContext.prototype.constructor = ForDeclarationContext;

ForDeclarationContext.prototype.AT_FOR = function() {
    return this.getToken(ScssParser.AT_FOR, 0);
};

ForDeclarationContext.prototype.variableName = function() {
    return this.getTypedRuleContext(VariableNameContext,0);
};

ForDeclarationContext.prototype.FROM = function() {
    return this.getToken(ScssParser.FROM, 0);
};

ForDeclarationContext.prototype.fromNumber = function() {
    return this.getTypedRuleContext(FromNumberContext,0);
};

ForDeclarationContext.prototype.THROUGH = function() {
    return this.getToken(ScssParser.THROUGH, 0);
};

ForDeclarationContext.prototype.throughNumber = function() {
    return this.getTypedRuleContext(ThroughNumberContext,0);
};

ForDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ForDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterForDeclaration(this);
	}
};

ForDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitForDeclaration(this);
	}
};




ScssParser.ForDeclarationContext = ForDeclarationContext;

ScssParser.prototype.forDeclaration = function() {

    var localctx = new ForDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ScssParser.RULE_forDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.match(ScssParser.AT_FOR);
        this.state = 284;
        this.variableName();
        this.state = 285;
        this.match(ScssParser.FROM);
        this.state = 286;
        this.fromNumber();
        this.state = 287;
        this.match(ScssParser.THROUGH);
        this.state = 288;
        this.throughNumber();
        this.state = 289;
        this.block();
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


function FromNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_fromNumber;
    return this;
}

FromNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FromNumberContext.prototype.constructor = FromNumberContext;

FromNumberContext.prototype.Number = function() {
    return this.getToken(ScssParser.Number, 0);
};

FromNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterFromNumber(this);
	}
};

FromNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitFromNumber(this);
	}
};




ScssParser.FromNumberContext = FromNumberContext;

ScssParser.prototype.fromNumber = function() {

    var localctx = new FromNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ScssParser.RULE_fromNumber);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this.match(ScssParser.Number);
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


function ThroughNumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_throughNumber;
    return this;
}

ThroughNumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ThroughNumberContext.prototype.constructor = ThroughNumberContext;

ThroughNumberContext.prototype.Number = function() {
    return this.getToken(ScssParser.Number, 0);
};

ThroughNumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterThroughNumber(this);
	}
};

ThroughNumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitThroughNumber(this);
	}
};




ScssParser.ThroughNumberContext = ThroughNumberContext;

ScssParser.prototype.throughNumber = function() {

    var localctx = new ThroughNumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ScssParser.RULE_throughNumber);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 293;
        this.match(ScssParser.Number);
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


function WhileDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_whileDeclaration;
    return this;
}

WhileDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileDeclarationContext.prototype.constructor = WhileDeclarationContext;

WhileDeclarationContext.prototype.AT_WHILE = function() {
    return this.getToken(ScssParser.AT_WHILE, 0);
};

WhileDeclarationContext.prototype.conditions = function() {
    return this.getTypedRuleContext(ConditionsContext,0);
};

WhileDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

WhileDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterWhileDeclaration(this);
	}
};

WhileDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitWhileDeclaration(this);
	}
};




ScssParser.WhileDeclarationContext = WhileDeclarationContext;

ScssParser.prototype.whileDeclaration = function() {

    var localctx = new WhileDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ScssParser.RULE_whileDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 295;
        this.match(ScssParser.AT_WHILE);
        this.state = 296;
        this.conditions();
        this.state = 297;
        this.block();
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


function EachDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_eachDeclaration;
    return this;
}

EachDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EachDeclarationContext.prototype.constructor = EachDeclarationContext;

EachDeclarationContext.prototype.AT_EACH = function() {
    return this.getToken(ScssParser.AT_EACH, 0);
};

EachDeclarationContext.prototype.variableName = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableNameContext);
    } else {
        return this.getTypedRuleContext(VariableNameContext,i);
    }
};

EachDeclarationContext.prototype.IN = function() {
    return this.getToken(ScssParser.IN, 0);
};

EachDeclarationContext.prototype.eachValueList = function() {
    return this.getTypedRuleContext(EachValueListContext,0);
};

EachDeclarationContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

EachDeclarationContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.COMMA);
    } else {
        return this.getToken(ScssParser.COMMA, i);
    }
};


EachDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterEachDeclaration(this);
	}
};

EachDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitEachDeclaration(this);
	}
};




ScssParser.EachDeclarationContext = EachDeclarationContext;

ScssParser.prototype.eachDeclaration = function() {

    var localctx = new EachDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ScssParser.RULE_eachDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.match(ScssParser.AT_EACH);
        this.state = 300;
        this.variableName();
        this.state = 305;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ScssParser.COMMA) {
            this.state = 301;
            this.match(ScssParser.COMMA);
            this.state = 302;
            this.variableName();
            this.state = 307;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 308;
        this.match(ScssParser.IN);
        this.state = 309;
        this.eachValueList();
        this.state = 310;
        this.block();
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


function EachValueListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_eachValueList;
    return this;
}

EachValueListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EachValueListContext.prototype.constructor = EachValueListContext;

EachValueListContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.Identifier);
    } else {
        return this.getToken(ScssParser.Identifier, i);
    }
};


EachValueListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.COMMA);
    } else {
        return this.getToken(ScssParser.COMMA, i);
    }
};


EachValueListContext.prototype.identifierListOrMap = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierListOrMapContext);
    } else {
        return this.getTypedRuleContext(IdentifierListOrMapContext,i);
    }
};

EachValueListContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterEachValueList(this);
	}
};

EachValueListContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitEachValueList(this);
	}
};




ScssParser.EachValueListContext = EachValueListContext;

ScssParser.prototype.eachValueList = function() {

    var localctx = new EachValueListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ScssParser.RULE_eachValueList);
    var _la = 0; // Token type
    try {
        this.state = 328;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ScssParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 312;
            this.match(ScssParser.Identifier);
            this.state = 317;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ScssParser.COMMA) {
                this.state = 313;
                this.match(ScssParser.COMMA);
                this.state = 314;
                this.match(ScssParser.Identifier);
                this.state = 319;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case ScssParser.LPAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 320;
            this.identifierListOrMap();
            this.state = 325;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ScssParser.COMMA) {
                this.state = 321;
                this.match(ScssParser.COMMA);
                this.state = 322;
                this.identifierListOrMap();
                this.state = 327;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
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


function IdentifierListOrMapContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_identifierListOrMap;
    return this;
}

IdentifierListOrMapContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierListOrMapContext.prototype.constructor = IdentifierListOrMapContext;

IdentifierListOrMapContext.prototype.LPAREN = function() {
    return this.getToken(ScssParser.LPAREN, 0);
};

IdentifierListOrMapContext.prototype.identifierValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierValueContext);
    } else {
        return this.getTypedRuleContext(IdentifierValueContext,i);
    }
};

IdentifierListOrMapContext.prototype.RPAREN = function() {
    return this.getToken(ScssParser.RPAREN, 0);
};

IdentifierListOrMapContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.COMMA);
    } else {
        return this.getToken(ScssParser.COMMA, i);
    }
};


IdentifierListOrMapContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterIdentifierListOrMap(this);
	}
};

IdentifierListOrMapContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitIdentifierListOrMap(this);
	}
};




ScssParser.IdentifierListOrMapContext = IdentifierListOrMapContext;

ScssParser.prototype.identifierListOrMap = function() {

    var localctx = new IdentifierListOrMapContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ScssParser.RULE_identifierListOrMap);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(ScssParser.LPAREN);
        this.state = 331;
        this.identifierValue();
        this.state = 336;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ScssParser.COMMA) {
            this.state = 332;
            this.match(ScssParser.COMMA);
            this.state = 333;
            this.identifierValue();
            this.state = 338;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 339;
        this.match(ScssParser.RPAREN);
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


function IdentifierValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_identifierValue;
    return this;
}

IdentifierValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierValueContext.prototype.constructor = IdentifierValueContext;

IdentifierValueContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

IdentifierValueContext.prototype.COLON = function() {
    return this.getToken(ScssParser.COLON, 0);
};

IdentifierValueContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

IdentifierValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterIdentifierValue(this);
	}
};

IdentifierValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitIdentifierValue(this);
	}
};




ScssParser.IdentifierValueContext = IdentifierValueContext;

ScssParser.prototype.identifierValue = function() {

    var localctx = new IdentifierValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ScssParser.RULE_identifierValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 341;
        this.identifier();
        this.state = 344;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.COLON) {
            this.state = 342;
            this.match(ScssParser.COLON);
            this.state = 343;
            this.values();
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


function ImportDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_importDeclaration;
    return this;
}

ImportDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportDeclarationContext.prototype.constructor = ImportDeclarationContext;

ImportDeclarationContext.prototype.IMPORT = function() {
    return this.getToken(ScssParser.IMPORT, 0);
};

ImportDeclarationContext.prototype.referenceUrl = function() {
    return this.getTypedRuleContext(ReferenceUrlContext,0);
};

ImportDeclarationContext.prototype.SEMI = function() {
    return this.getToken(ScssParser.SEMI, 0);
};

ImportDeclarationContext.prototype.mediaTypes = function() {
    return this.getTypedRuleContext(MediaTypesContext,0);
};

ImportDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterImportDeclaration(this);
	}
};

ImportDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitImportDeclaration(this);
	}
};




ScssParser.ImportDeclarationContext = ImportDeclarationContext;

ScssParser.prototype.importDeclaration = function() {

    var localctx = new ImportDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ScssParser.RULE_importDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(ScssParser.IMPORT);
        this.state = 347;
        this.referenceUrl();
        this.state = 349;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.Identifier) {
            this.state = 348;
            this.mediaTypes();
        }

        this.state = 351;
        this.match(ScssParser.SEMI);
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


function ReferenceUrlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_referenceUrl;
    return this;
}

ReferenceUrlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceUrlContext.prototype.constructor = ReferenceUrlContext;

ReferenceUrlContext.prototype.StringLiteral = function() {
    return this.getToken(ScssParser.StringLiteral, 0);
};

ReferenceUrlContext.prototype.UrlStart = function() {
    return this.getToken(ScssParser.UrlStart, 0);
};

ReferenceUrlContext.prototype.Url = function() {
    return this.getToken(ScssParser.Url, 0);
};

ReferenceUrlContext.prototype.UrlEnd = function() {
    return this.getToken(ScssParser.UrlEnd, 0);
};

ReferenceUrlContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterReferenceUrl(this);
	}
};

ReferenceUrlContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitReferenceUrl(this);
	}
};




ScssParser.ReferenceUrlContext = ReferenceUrlContext;

ScssParser.prototype.referenceUrl = function() {

    var localctx = new ReferenceUrlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ScssParser.RULE_referenceUrl);
    try {
        this.state = 357;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ScssParser.StringLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 353;
            this.match(ScssParser.StringLiteral);
            break;
        case ScssParser.UrlStart:
            this.enterOuterAlt(localctx, 2);
            this.state = 354;
            this.match(ScssParser.UrlStart);
            this.state = 355;
            this.match(ScssParser.Url);
            this.state = 356;
            this.match(ScssParser.UrlEnd);
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


function MediaTypesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_mediaTypes;
    return this;
}

MediaTypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MediaTypesContext.prototype.constructor = MediaTypesContext;

MediaTypesContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.Identifier);
    } else {
        return this.getToken(ScssParser.Identifier, i);
    }
};


MediaTypesContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.COMMA);
    } else {
        return this.getToken(ScssParser.COMMA, i);
    }
};


MediaTypesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterMediaTypes(this);
	}
};

MediaTypesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitMediaTypes(this);
	}
};




ScssParser.MediaTypesContext = MediaTypesContext;

ScssParser.prototype.mediaTypes = function() {

    var localctx = new MediaTypesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ScssParser.RULE_mediaTypes);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 359;
        this.match(ScssParser.Identifier);
        this.state = 364;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ScssParser.COMMA) {
            this.state = 360;
            this.match(ScssParser.COMMA);
            this.state = 361;
            this.match(ScssParser.Identifier);
            this.state = 366;
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


function NestedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_nested;
    return this;
}

NestedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NestedContext.prototype.constructor = NestedContext;

NestedContext.prototype.AT = function() {
    return this.getToken(ScssParser.AT, 0);
};

NestedContext.prototype.nest = function() {
    return this.getTypedRuleContext(NestContext,0);
};

NestedContext.prototype.selectors = function() {
    return this.getTypedRuleContext(SelectorsContext,0);
};

NestedContext.prototype.BlockStart = function() {
    return this.getToken(ScssParser.BlockStart, 0);
};

NestedContext.prototype.stylesheet = function() {
    return this.getTypedRuleContext(StylesheetContext,0);
};

NestedContext.prototype.BlockEnd = function() {
    return this.getToken(ScssParser.BlockEnd, 0);
};

NestedContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterNested(this);
	}
};

NestedContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitNested(this);
	}
};




ScssParser.NestedContext = NestedContext;

ScssParser.prototype.nested = function() {

    var localctx = new NestedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, ScssParser.RULE_nested);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 367;
        this.match(ScssParser.AT);
        this.state = 368;
        this.nest();
        this.state = 369;
        this.selectors();
        this.state = 370;
        this.match(ScssParser.BlockStart);
        this.state = 371;
        this.stylesheet();
        this.state = 372;
        this.match(ScssParser.BlockEnd);
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


function NestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_nest;
    return this;
}

NestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NestContext.prototype.constructor = NestContext;

NestContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.Identifier);
    } else {
        return this.getToken(ScssParser.Identifier, i);
    }
};


NestContext.prototype.AND = function() {
    return this.getToken(ScssParser.AND, 0);
};

NestContext.prototype.pseudo = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PseudoContext);
    } else {
        return this.getTypedRuleContext(PseudoContext,i);
    }
};

NestContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterNest(this);
	}
};

NestContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitNest(this);
	}
};




ScssParser.NestContext = NestContext;

ScssParser.prototype.nest = function() {

    var localctx = new NestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, ScssParser.RULE_nest);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 374;
        _la = this._input.LA(1);
        if(!(_la===ScssParser.AND || _la===ScssParser.Identifier)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 378;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 375;
                this.match(ScssParser.Identifier); 
            }
            this.state = 380;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
        }

        this.state = 384;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ScssParser.COLON || _la===ScssParser.COLONCOLON) {
            this.state = 381;
            this.pseudo();
            this.state = 386;
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


function RulesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_ruleset;
    return this;
}

RulesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RulesetContext.prototype.constructor = RulesetContext;

RulesetContext.prototype.selectors = function() {
    return this.getTypedRuleContext(SelectorsContext,0);
};

RulesetContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

RulesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterRuleset(this);
	}
};

RulesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitRuleset(this);
	}
};




ScssParser.RulesetContext = RulesetContext;

ScssParser.prototype.ruleset = function() {

    var localctx = new RulesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, ScssParser.RULE_ruleset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 387;
        this.selectors();
        this.state = 388;
        this.block();
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


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.BlockStart = function() {
    return this.getToken(ScssParser.BlockStart, 0);
};

BlockContext.prototype.BlockEnd = function() {
    return this.getToken(ScssParser.BlockEnd, 0);
};

BlockContext.prototype.property = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PropertyContext);
    } else {
        return this.getTypedRuleContext(PropertyContext,i);
    }
};

BlockContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.SEMI);
    } else {
        return this.getToken(ScssParser.SEMI, i);
    }
};


BlockContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitBlock(this);
	}
};




ScssParser.BlockContext = BlockContext;

ScssParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, ScssParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        this.match(ScssParser.BlockStart);
        this.state = 397;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 395;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 391;
                    this.property();
                    this.state = 392;
                    this.match(ScssParser.SEMI);
                    break;

                case 2:
                    this.state = 394;
                    this.statement();
                    break;

                } 
            }
            this.state = 399;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
        }

        this.state = 401;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.InterpolationStart || _la===ScssParser.Identifier) {
            this.state = 400;
            this.property();
        }

        this.state = 403;
        this.match(ScssParser.BlockEnd);
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


function SelectorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_selectors;
    return this;
}

SelectorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorsContext.prototype.constructor = SelectorsContext;

SelectorsContext.prototype.selector = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SelectorContext);
    } else {
        return this.getTypedRuleContext(SelectorContext,i);
    }
};

SelectorsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.COMMA);
    } else {
        return this.getToken(ScssParser.COMMA, i);
    }
};


SelectorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterSelectors(this);
	}
};

SelectorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitSelectors(this);
	}
};




ScssParser.SelectorsContext = SelectorsContext;

ScssParser.prototype.selectors = function() {

    var localctx = new SelectorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, ScssParser.RULE_selectors);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.selector();
        this.state = 410;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ScssParser.COMMA) {
            this.state = 406;
            this.match(ScssParser.COMMA);
            this.state = 407;
            this.selector();
            this.state = 412;
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


function SelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_selector;
    return this;
}

SelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorContext.prototype.constructor = SelectorContext;

SelectorContext.prototype.element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementContext);
    } else {
        return this.getTypedRuleContext(ElementContext,i);
    }
};

SelectorContext.prototype.selectorPrefix = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SelectorPrefixContext);
    } else {
        return this.getTypedRuleContext(SelectorPrefixContext,i);
    }
};

SelectorContext.prototype.attrib = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AttribContext);
    } else {
        return this.getTypedRuleContext(AttribContext,i);
    }
};

SelectorContext.prototype.pseudo = function() {
    return this.getTypedRuleContext(PseudoContext,0);
};

SelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterSelector(this);
	}
};

SelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitSelector(this);
	}
};




ScssParser.SelectorContext = SelectorContext;

ScssParser.prototype.selector = function() {

    var localctx = new SelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, ScssParser.RULE_selector);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 414; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 413;
            this.element();
            this.state = 416; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.InterpolationStart) | (1 << ScssParser.DOT) | (1 << ScssParser.AND) | (1 << ScssParser.HASH) | (1 << ScssParser.TIMES))) !== 0) || _la===ScssParser.Identifier);
        this.state = 423;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.GT) | (1 << ScssParser.TIL) | (1 << ScssParser.PLUS))) !== 0)) {
            this.state = 418;
            this.selectorPrefix();
            this.state = 419;
            this.element();
            this.state = 425;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 429;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ScssParser.LBRACK) {
            this.state = 426;
            this.attrib();
            this.state = 431;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 433;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.COLON || _la===ScssParser.COLONCOLON) {
            this.state = 432;
            this.pseudo();
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


function SelectorPrefixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_selectorPrefix;
    return this;
}

SelectorPrefixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectorPrefixContext.prototype.constructor = SelectorPrefixContext;

SelectorPrefixContext.prototype.GT = function() {
    return this.getToken(ScssParser.GT, 0);
};

SelectorPrefixContext.prototype.PLUS = function() {
    return this.getToken(ScssParser.PLUS, 0);
};

SelectorPrefixContext.prototype.TIL = function() {
    return this.getToken(ScssParser.TIL, 0);
};

SelectorPrefixContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterSelectorPrefix(this);
	}
};

SelectorPrefixContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitSelectorPrefix(this);
	}
};




ScssParser.SelectorPrefixContext = SelectorPrefixContext;

ScssParser.prototype.selectorPrefix = function() {

    var localctx = new SelectorPrefixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, ScssParser.RULE_selectorPrefix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 435;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.GT) | (1 << ScssParser.TIL) | (1 << ScssParser.PLUS))) !== 0))) {
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


function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ElementContext.prototype.HASH = function() {
    return this.getToken(ScssParser.HASH, 0);
};

ElementContext.prototype.DOT = function() {
    return this.getToken(ScssParser.DOT, 0);
};

ElementContext.prototype.AND = function() {
    return this.getToken(ScssParser.AND, 0);
};

ElementContext.prototype.TIMES = function() {
    return this.getToken(ScssParser.TIMES, 0);
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitElement(this);
	}
};




ScssParser.ElementContext = ElementContext;

ScssParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, ScssParser.RULE_element);
    try {
        this.state = 444;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ScssParser.InterpolationStart:
        case ScssParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 437;
            this.identifier();
            break;
        case ScssParser.HASH:
            this.enterOuterAlt(localctx, 2);
            this.state = 438;
            this.match(ScssParser.HASH);
            this.state = 439;
            this.identifier();
            break;
        case ScssParser.DOT:
            this.enterOuterAlt(localctx, 3);
            this.state = 440;
            this.match(ScssParser.DOT);
            this.state = 441;
            this.identifier();
            break;
        case ScssParser.AND:
            this.enterOuterAlt(localctx, 4);
            this.state = 442;
            this.match(ScssParser.AND);
            break;
        case ScssParser.TIMES:
            this.enterOuterAlt(localctx, 5);
            this.state = 443;
            this.match(ScssParser.TIMES);
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


function PseudoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_pseudo;
    return this;
}

PseudoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PseudoContext.prototype.constructor = PseudoContext;

PseudoContext.prototype.Identifier = function() {
    return this.getToken(ScssParser.Identifier, 0);
};

PseudoContext.prototype.COLON = function() {
    return this.getToken(ScssParser.COLON, 0);
};

PseudoContext.prototype.COLONCOLON = function() {
    return this.getToken(ScssParser.COLONCOLON, 0);
};

PseudoContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

PseudoContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterPseudo(this);
	}
};

PseudoContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitPseudo(this);
	}
};




ScssParser.PseudoContext = PseudoContext;

ScssParser.prototype.pseudo = function() {

    var localctx = new PseudoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, ScssParser.RULE_pseudo);
    var _la = 0; // Token type
    try {
        this.state = 450;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 446;
            _la = this._input.LA(1);
            if(!(_la===ScssParser.COLON || _la===ScssParser.COLONCOLON)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 447;
            this.match(ScssParser.Identifier);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 448;
            _la = this._input.LA(1);
            if(!(_la===ScssParser.COLON || _la===ScssParser.COLONCOLON)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 449;
            this.functionCall();
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


function AttribContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_attrib;
    return this;
}

AttribContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttribContext.prototype.constructor = AttribContext;

AttribContext.prototype.LBRACK = function() {
    return this.getToken(ScssParser.LBRACK, 0);
};

AttribContext.prototype.Identifier = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.Identifier);
    } else {
        return this.getToken(ScssParser.Identifier, i);
    }
};


AttribContext.prototype.RBRACK = function() {
    return this.getToken(ScssParser.RBRACK, 0);
};

AttribContext.prototype.attribRelate = function() {
    return this.getTypedRuleContext(AttribRelateContext,0);
};

AttribContext.prototype.StringLiteral = function() {
    return this.getToken(ScssParser.StringLiteral, 0);
};

AttribContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterAttrib(this);
	}
};

AttribContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitAttrib(this);
	}
};




ScssParser.AttribContext = AttribContext;

ScssParser.prototype.attrib = function() {

    var localctx = new AttribContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, ScssParser.RULE_attrib);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 452;
        this.match(ScssParser.LBRACK);
        this.state = 453;
        this.match(ScssParser.Identifier);
        this.state = 457;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ScssParser.EQ - 33)) | (1 << (ScssParser.PIPE_EQ - 33)) | (1 << (ScssParser.TILD_EQ - 33)))) !== 0)) {
            this.state = 454;
            this.attribRelate();
            this.state = 455;
            _la = this._input.LA(1);
            if(!(_la===ScssParser.Identifier || _la===ScssParser.StringLiteral)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 459;
        this.match(ScssParser.RBRACK);
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


function AttribRelateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_attribRelate;
    return this;
}

AttribRelateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AttribRelateContext.prototype.constructor = AttribRelateContext;

AttribRelateContext.prototype.EQ = function() {
    return this.getToken(ScssParser.EQ, 0);
};

AttribRelateContext.prototype.TILD_EQ = function() {
    return this.getToken(ScssParser.TILD_EQ, 0);
};

AttribRelateContext.prototype.PIPE_EQ = function() {
    return this.getToken(ScssParser.PIPE_EQ, 0);
};

AttribRelateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterAttribRelate(this);
	}
};

AttribRelateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitAttribRelate(this);
	}
};




ScssParser.AttribRelateContext = AttribRelateContext;

ScssParser.prototype.attribRelate = function() {

    var localctx = new AttribRelateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, ScssParser.RULE_attribRelate);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 461;
        _la = this._input.LA(1);
        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ScssParser.EQ - 33)) | (1 << (ScssParser.PIPE_EQ - 33)) | (1 << (ScssParser.TILD_EQ - 33)))) !== 0))) {
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


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.Identifier = function() {
    return this.getToken(ScssParser.Identifier, 0);
};

IdentifierContext.prototype.identifierPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierPartContext);
    } else {
        return this.getTypedRuleContext(IdentifierPartContext,i);
    }
};

IdentifierContext.prototype.InterpolationStart = function() {
    return this.getToken(ScssParser.InterpolationStart, 0);
};

IdentifierContext.prototype.identifierVariableName = function() {
    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
};

IdentifierContext.prototype.BlockEnd = function() {
    return this.getToken(ScssParser.BlockEnd, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitIdentifier(this);
	}
};




ScssParser.IdentifierContext = IdentifierContext;

ScssParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, ScssParser.RULE_identifier);
    var _la = 0; // Token type
    try {
        this.state = 479;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ScssParser.Identifier:
            this.enterOuterAlt(localctx, 1);
            this.state = 463;
            this.match(ScssParser.Identifier);
            this.state = 467;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ScssParser.InterpolationStartAfter || _la===ScssParser.IdentifierAfter) {
                this.state = 464;
                this.identifierPart();
                this.state = 469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case ScssParser.InterpolationStart:
            this.enterOuterAlt(localctx, 2);
            this.state = 470;
            this.match(ScssParser.InterpolationStart);
            this.state = 471;
            this.identifierVariableName();
            this.state = 472;
            this.match(ScssParser.BlockEnd);
            this.state = 476;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===ScssParser.InterpolationStartAfter || _la===ScssParser.IdentifierAfter) {
                this.state = 473;
                this.identifierPart();
                this.state = 478;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
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


function IdentifierPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_identifierPart;
    return this;
}

IdentifierPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierPartContext.prototype.constructor = IdentifierPartContext;

IdentifierPartContext.prototype.InterpolationStartAfter = function() {
    return this.getToken(ScssParser.InterpolationStartAfter, 0);
};

IdentifierPartContext.prototype.identifierVariableName = function() {
    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
};

IdentifierPartContext.prototype.BlockEnd = function() {
    return this.getToken(ScssParser.BlockEnd, 0);
};

IdentifierPartContext.prototype.IdentifierAfter = function() {
    return this.getToken(ScssParser.IdentifierAfter, 0);
};

IdentifierPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterIdentifierPart(this);
	}
};

IdentifierPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitIdentifierPart(this);
	}
};




ScssParser.IdentifierPartContext = IdentifierPartContext;

ScssParser.prototype.identifierPart = function() {

    var localctx = new IdentifierPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, ScssParser.RULE_identifierPart);
    try {
        this.state = 486;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ScssParser.InterpolationStartAfter:
            this.enterOuterAlt(localctx, 1);
            this.state = 481;
            this.match(ScssParser.InterpolationStartAfter);
            this.state = 482;
            this.identifierVariableName();
            this.state = 483;
            this.match(ScssParser.BlockEnd);
            break;
        case ScssParser.IdentifierAfter:
            this.enterOuterAlt(localctx, 2);
            this.state = 485;
            this.match(ScssParser.IdentifierAfter);
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


function IdentifierVariableNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_identifierVariableName;
    return this;
}

IdentifierVariableNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierVariableNameContext.prototype.constructor = IdentifierVariableNameContext;

IdentifierVariableNameContext.prototype.DOLLAR = function() {
    return this.getToken(ScssParser.DOLLAR, 0);
};

IdentifierVariableNameContext.prototype.Identifier = function() {
    return this.getToken(ScssParser.Identifier, 0);
};

IdentifierVariableNameContext.prototype.IdentifierAfter = function() {
    return this.getToken(ScssParser.IdentifierAfter, 0);
};

IdentifierVariableNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterIdentifierVariableName(this);
	}
};

IdentifierVariableNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitIdentifierVariableName(this);
	}
};




ScssParser.IdentifierVariableNameContext = IdentifierVariableNameContext;

ScssParser.prototype.identifierVariableName = function() {

    var localctx = new IdentifierVariableNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, ScssParser.RULE_identifierVariableName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 488;
        this.match(ScssParser.DOLLAR);
        this.state = 489;
        _la = this._input.LA(1);
        if(!(_la===ScssParser.Identifier || _la===ScssParser.IdentifierAfter)) {
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


function PropertyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_property;
    return this;
}

PropertyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropertyContext.prototype.constructor = PropertyContext;

PropertyContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

PropertyContext.prototype.COLON = function() {
    return this.getToken(ScssParser.COLON, 0);
};

PropertyContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

PropertyContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterProperty(this);
	}
};

PropertyContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitProperty(this);
	}
};




ScssParser.PropertyContext = PropertyContext;

ScssParser.prototype.property = function() {

    var localctx = new PropertyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, ScssParser.RULE_property);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 491;
        this.identifier();
        this.state = 492;
        this.match(ScssParser.COLON);
        this.state = 493;
        this.values();
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


function ValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_values;
    return this;
}

ValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesContext.prototype.constructor = ValuesContext;

ValuesContext.prototype.commandStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CommandStatementContext);
    } else {
        return this.getTypedRuleContext(CommandStatementContext,i);
    }
};

ValuesContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ScssParser.COMMA);
    } else {
        return this.getToken(ScssParser.COMMA, i);
    }
};


ValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterValues(this);
	}
};

ValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitValues(this);
	}
};




ScssParser.ValuesContext = ValuesContext;

ScssParser.prototype.values = function() {

    var localctx = new ValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, ScssParser.RULE_values);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 495;
        this.commandStatement();
        this.state = 500;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,54,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 496;
                this.match(ScssParser.COMMA);
                this.state = 497;
                this.commandStatement(); 
            }
            this.state = 502;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,54,this._ctx);
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


function UrlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_url;
    return this;
}

UrlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UrlContext.prototype.constructor = UrlContext;

UrlContext.prototype.UrlStart = function() {
    return this.getToken(ScssParser.UrlStart, 0);
};

UrlContext.prototype.Url = function() {
    return this.getToken(ScssParser.Url, 0);
};

UrlContext.prototype.UrlEnd = function() {
    return this.getToken(ScssParser.UrlEnd, 0);
};

UrlContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterUrl(this);
	}
};

UrlContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitUrl(this);
	}
};




ScssParser.UrlContext = UrlContext;

ScssParser.prototype.url = function() {

    var localctx = new UrlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, ScssParser.RULE_url);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 503;
        this.match(ScssParser.UrlStart);
        this.state = 504;
        this.match(ScssParser.Url);
        this.state = 505;
        this.match(ScssParser.UrlEnd);
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


function MeasurementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_measurement;
    return this;
}

MeasurementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MeasurementContext.prototype.constructor = MeasurementContext;

MeasurementContext.prototype.Number = function() {
    return this.getToken(ScssParser.Number, 0);
};

MeasurementContext.prototype.Unit = function() {
    return this.getToken(ScssParser.Unit, 0);
};

MeasurementContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterMeasurement(this);
	}
};

MeasurementContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitMeasurement(this);
	}
};




ScssParser.MeasurementContext = MeasurementContext;

ScssParser.prototype.measurement = function() {

    var localctx = new MeasurementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, ScssParser.RULE_measurement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 507;
        this.match(ScssParser.Number);
        this.state = 509;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ScssParser.Unit) {
            this.state = 508;
            this.match(ScssParser.Unit);
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


function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ScssParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.Identifier = function() {
    return this.getToken(ScssParser.Identifier, 0);
};

FunctionCallContext.prototype.LPAREN = function() {
    return this.getToken(ScssParser.LPAREN, 0);
};

FunctionCallContext.prototype.RPAREN = function() {
    return this.getToken(ScssParser.RPAREN, 0);
};

FunctionCallContext.prototype.values = function() {
    return this.getTypedRuleContext(ValuesContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof ScssParserListener ) {
        listener.exitFunctionCall(this);
	}
};




ScssParser.FunctionCallContext = FunctionCallContext;

ScssParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, ScssParser.RULE_functionCall);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
        this.match(ScssParser.Identifier);
        this.state = 512;
        this.match(ScssParser.LPAREN);
        this.state = 514;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.UrlStart))) !== 0) || ((((_la - 50)) & ~0x1f) == 0 && ((1 << (_la - 50)) & ((1 << (ScssParser.Identifier - 50)) | (1 << (ScssParser.StringLiteral - 50)) | (1 << (ScssParser.Number - 50)) | (1 << (ScssParser.Color - 50)))) !== 0)) {
            this.state = 513;
            this.values();
        }

        this.state = 516;
        this.match(ScssParser.RPAREN);
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


exports.ScssParser = ScssParser;
