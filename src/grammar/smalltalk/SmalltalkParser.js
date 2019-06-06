// @ts-nocheck
// Generated from Smalltalk.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SmalltalkListener = require('./SmalltalkListener').SmalltalkListener;
var grammarFileName = "Smalltalk.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\"\u019f\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0005\u0003h\n\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003l\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0007\u0004q\n\u0004\f\u0004\u000e\u0004t\u000b\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005{\n\u0005",
    "\r\u0005\u000e\u0005|\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u008d\n",
    "\u0006\u0003\u0006\u0003\u0006\u0005\u0006\u0091\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0098\n",
    "\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u009f\n\b\u0003",
    "\t\u0003\t\u0007\t\u00a3\n\t\f\t\u000e\t\u00a6\u000b\t\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0005\u000b\u00ae\n\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0006\u000b",
    "\u00b5\n\u000b\r\u000b\u000e\u000b\u00b6\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u00bc\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u00c8\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00cd\n\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0006\u0012\u00d6\n\u0012\r\u0012\u000e\u0012\u00d7\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0005\u0014\u00e2\n\u0014\u0003\u0015\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u00ec\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u00f1",
    "\n\u0017\u0003\u0018\u0003\u0018\u0005\u0018\u00f5\n\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0005\u0018\u00fa\n\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0006\u0019\u0102",
    "\n\u0019\r\u0019\u000e\u0019\u0103\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0005\u001a\u0109\n\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0111\n\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0005\u001c\u011c\n\u001c\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001d\u0005\u001d\u0122\n\u001d\u0003\u001e",
    "\u0003\u001e\u0005\u001e\u0126\n\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001f\u0003\u001f\u0003 \u0005 \u012e\n \u0003 \u0003 ",
    "\u0006 \u0132\n \r \u000e \u0133\u0003!\u0005!\u0137\n!\u0003!\u0006",
    "!\u013a\n!\r!\u000e!\u013b\u0003\"\u0005\"\u013f\n\"\u0003\"\u0006\"",
    "\u0142\n\"\r\"\u000e\"\u0143\u0003\"\u0003\"\u0006\"\u0148\n\"\r\"\u000e",
    "\"\u0149\u0003#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003",
    "&\u0003&\u0003&\u0003&\u0006&\u0158\n&\r&\u000e&\u0159\u0003&\u0003",
    "&\u0003&\u0003\'\u0003\'\u0006\'\u0161\n\'\r\'\u000e\'\u0162\u0003\'",
    "\u0003\'\u0006\'\u0167\n\'\r\'\u000e\'\u0168\u0005\'\u016b\n\'\u0003",
    "(\u0003(\u0003(\u0003)\u0003)\u0003)\u0003)\u0005)\u0174\n)\u0007)\u0176",
    "\n)\f)\u000e)\u0179\u000b)\u0003)\u0003)\u0003)\u0003*\u0003*\u0003",
    "*\u0003+\u0003+\u0003+\u0005+\u0184\n+\u0003+\u0003+\u0003,\u0003,\u0003",
    ",\u0003-\u0003-\u0003.\u0006.\u018e\n.\r.\u000e.\u018f\u0003/\u0003",
    "/\u00030\u00030\u00050\u0196\n0\u00031\u00031\u00031\u00031\u00031\u0005",
    "1\u019d\n1\u00031\u0002\u00022\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ",
    "\\^`\u0002\u0004\u0004\u0002\u0003\u0003\u0005\u0005\u0004\u0002\r\r",
    "\u0012\u0012\u0002\u01a9\u0002b\u0003\u0002\u0002\u0002\u0004g\u0003",
    "\u0002\u0002\u0002\u0006r\u0003\u0002\u0002\u0002\bu\u0003\u0002\u0002",
    "\u0002\n\u0090\u0003\u0002\u0002\u0002\f\u0092\u0003\u0002\u0002\u0002",
    "\u000e\u009e\u0003\u0002\u0002\u0002\u0010\u00a0\u0003\u0002\u0002\u0002",
    "\u0012\u00a7\u0003\u0002\u0002\u0002\u0014\u00ad\u0003\u0002\u0002\u0002",
    "\u0016\u00bb\u0003\u0002\u0002\u0002\u0018\u00bd\u0003\u0002\u0002\u0002",
    "\u001a\u00c3\u0003\u0002\u0002\u0002\u001c\u00c5\u0003\u0002\u0002\u0002",
    "\u001e\u00c9\u0003\u0002\u0002\u0002 \u00ce\u0003\u0002\u0002\u0002",
    "\"\u00d1\u0003\u0002\u0002\u0002$\u00d9\u0003\u0002\u0002\u0002&\u00e1",
    "\u0003\u0002\u0002\u0002(\u00e3\u0003\u0002\u0002\u0002*\u00eb\u0003",
    "\u0002\u0002\u0002,\u00f0\u0003\u0002\u0002\u0002.\u00f2\u0003\u0002",
    "\u0002\u00020\u0101\u0003\u0002\u0002\u00022\u0105\u0003\u0002\u0002",
    "\u00024\u010d\u0003\u0002\u0002\u00026\u011b\u0003\u0002\u0002\u0002",
    "8\u0121\u0003\u0002\u0002\u0002:\u0125\u0003\u0002\u0002\u0002<\u012a",
    "\u0003\u0002\u0002\u0002>\u012d\u0003\u0002\u0002\u0002@\u0136\u0003",
    "\u0002\u0002\u0002B\u013e\u0003\u0002\u0002\u0002D\u014b\u0003\u0002",
    "\u0002\u0002F\u014d\u0003\u0002\u0002\u0002H\u014f\u0003\u0002\u0002",
    "\u0002J\u0152\u0003\u0002\u0002\u0002L\u016a\u0003\u0002\u0002\u0002",
    "N\u016c\u0003\u0002\u0002\u0002P\u0177\u0003\u0002\u0002\u0002R\u017d",
    "\u0003\u0002\u0002\u0002T\u0180\u0003\u0002\u0002\u0002V\u0187\u0003",
    "\u0002\u0002\u0002X\u018a\u0003\u0002\u0002\u0002Z\u018d\u0003\u0002",
    "\u0002\u0002\\\u0191\u0003\u0002\u0002\u0002^\u0193\u0003\u0002\u0002",
    "\u0002`\u0197\u0003\u0002\u0002\u0002bc\u0005\u0004\u0003\u0002cd\u0005",
    "\u0006\u0004\u0002de\u0007\u0002\u0002\u0003e\u0003\u0003\u0002\u0002",
    "\u0002fh\u0005\b\u0005\u0002gf\u0003\u0002\u0002\u0002gh\u0003\u0002",
    "\u0002\u0002hi\u0003\u0002\u0002\u0002ik\u0005\u0006\u0004\u0002jl\u0005",
    "\n\u0006\u0002kj\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002l",
    "m\u0003\u0002\u0002\u0002mn\u0005\u0006\u0004\u0002n\u0005\u0003\u0002",
    "\u0002\u0002oq\t\u0002\u0002\u0002po\u0003\u0002\u0002\u0002qt\u0003",
    "\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002\u0002",
    "s\u0007\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002uv\u0005\u0006",
    "\u0004\u0002vz\u0007\n\u0002\u0002wx\u0005\u0006\u0004\u0002xy\u0007",
    "\u0012\u0002\u0002y{\u0003\u0002\u0002\u0002zw\u0003\u0002\u0002\u0002",
    "{|\u0003\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002",
    "\u0002}~\u0003\u0002\u0002\u0002~\u007f\u0005\u0006\u0004\u0002\u007f",
    "\u0080\u0007\n\u0002\u0002\u0080\t\u0003\u0002\u0002\u0002\u0081\u0082",
    "\u0005\f\u0007\u0002\u0082\u0083\u0005\u0006\u0004\u0002\u0083\u0091",
    "\u0003\u0002\u0002\u0002\u0084\u0085\u0005\u0010\t\u0002\u0085\u0086",
    "\u0005\u0006\u0004\u0002\u0086\u0087\u0007\u000b\u0002\u0002\u0087\u0088",
    "\u0005\u0006\u0004\u0002\u0088\u0089\u0005\f\u0007\u0002\u0089\u0091",
    "\u0003\u0002\u0002\u0002\u008a\u008c\u0005\u0010\t\u0002\u008b\u008d",
    "\u0007\u000b\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008c\u008d",
    "\u0003\u0002\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f",
    "\u0005\u0006\u0004\u0002\u008f\u0091\u0003\u0002\u0002\u0002\u0090\u0081",
    "\u0003\u0002\u0002\u0002\u0090\u0084\u0003\u0002\u0002\u0002\u0090\u008a",
    "\u0003\u0002\u0002\u0002\u0091\u000b\u0003\u0002\u0002\u0002\u0092\u0093",
    "\u0007\u0013\u0002\u0002\u0093\u0094\u0005\u0006\u0004\u0002\u0094\u0095",
    "\u0005\u000e\b\u0002\u0095\u0097\u0005\u0006\u0004\u0002\u0096\u0098",
    "\u0007\u000b\u0002\u0002\u0097\u0096\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\r\u0003\u0002\u0002\u0002\u0099\u009f",
    "\u0005\u0018\r\u0002\u009a\u009f\u0005\u0014\u000b\u0002\u009b\u009f",
    "\u0005 \u0011\u0002\u009c\u009f\u0005\u001c\u000f\u0002\u009d\u009f",
    "\u0005J&\u0002\u009e\u0099\u0003\u0002\u0002\u0002\u009e\u009a\u0003",
    "\u0002\u0002\u0002\u009e\u009b\u0003\u0002\u0002\u0002\u009e\u009c\u0003",
    "\u0002\u0002\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009f\u000f\u0003",
    "\u0002\u0002\u0002\u00a0\u00a4\u0005\u000e\b\u0002\u00a1\u00a3\u0005",
    "\u0012\n\u0002\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a3\u00a6\u0003",
    "\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003",
    "\u0002\u0002\u0002\u00a5\u0011\u0003\u0002\u0002\u0002\u00a6\u00a4\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0007\u000b\u0002\u0002\u00a8\u00a9\u0005",
    "\u0006\u0004\u0002\u00a9\u00aa\u0005\u000e\b\u0002\u00aa\u0013\u0003",
    "\u0002\u0002\u0002\u00ab\u00ae\u0005 \u0011\u0002\u00ac\u00ae\u0005",
    "\u001c\u000f\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ad\u00ac\u0003",
    "\u0002\u0002\u0002\u00ae\u00b4\u0003\u0002\u0002\u0002\u00af\u00b0\u0005",
    "\u0006\u0004\u0002\u00b0\u00b1\u0007\f\u0002\u0002\u00b1\u00b2\u0005",
    "\u0006\u0004\u0002\u00b2\u00b3\u0005\u0016\f\u0002\u00b3\u00b5\u0003",
    "\u0002\u0002\u0002\u00b4\u00af\u0003\u0002\u0002\u0002\u00b5\u00b6\u0003",
    "\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b7\u0003",
    "\u0002\u0002\u0002\u00b7\u0015\u0003\u0002\u0002\u0002\u00b8\u00bc\u0005",
    "`1\u0002\u00b9\u00bc\u0005V,\u0002\u00ba\u00bc\u0005\"\u0012\u0002\u00bb",
    "\u00b8\u0003\u0002\u0002\u0002\u00bb\u00b9\u0003\u0002\u0002\u0002\u00bb",
    "\u00ba\u0003\u0002\u0002\u0002\u00bc\u0017\u0003\u0002\u0002\u0002\u00bd",
    "\u00be\u0005\u001a\u000e\u0002\u00be\u00bf\u0005\u0006\u0004\u0002\u00bf",
    "\u00c0\u0007\u0015\u0002\u0002\u00c0\u00c1\u0005\u0006\u0004\u0002\u00c1",
    "\u00c2\u0005\u000e\b\u0002\u00c2\u0019\u0003\u0002\u0002\u0002\u00c3",
    "\u00c4\u0007\u0012\u0002\u0002\u00c4\u001b\u0003\u0002\u0002\u0002\u00c5",
    "\u00c7\u0005\u001e\u0010\u0002\u00c6\u00c8\u0005^0\u0002\u00c7\u00c6",
    "\u0003\u0002\u0002\u0002\u00c7\u00c8\u0003\u0002\u0002\u0002\u00c8\u001d",
    "\u0003\u0002\u0002\u0002\u00c9\u00ca\u0005&\u0014\u0002\u00ca\u00cc",
    "\u0005\u0006\u0004\u0002\u00cb\u00cd\u0005T+\u0002\u00cc\u00cb\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\u0003\u0002\u0002\u0002\u00cd\u001f\u0003",
    "\u0002\u0002\u0002\u00ce\u00cf\u0005\u001c\u000f\u0002\u00cf\u00d0\u0005",
    "\"\u0012\u0002\u00d0!\u0003\u0002\u0002\u0002\u00d1\u00d5\u0005\u0006",
    "\u0004\u0002\u00d2\u00d3\u0005$\u0013\u0002\u00d3\u00d4\u0005\u0006",
    "\u0004\u0002\u00d4\u00d6\u0003\u0002\u0002\u0002\u00d5\u00d2\u0003\u0002",
    "\u0002\u0002\u00d6\u00d7\u0003\u0002\u0002\u0002\u00d7\u00d5\u0003\u0002",
    "\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8#\u0003\u0002",
    "\u0002\u0002\u00d9\u00da\u0007 \u0002\u0002\u00da\u00db\u0005\u0006",
    "\u0004\u0002\u00db\u00dc\u0005\u001c\u000f\u0002\u00dc\u00dd\u0005\u0006",
    "\u0004\u0002\u00dd%\u0003\u0002\u0002\u0002\u00de\u00e2\u0005*\u0016",
    "\u0002\u00df\u00e2\u0005\\/\u0002\u00e0\u00e2\u0005(\u0015\u0002\u00e1",
    "\u00de\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002\u0002\u00e1",
    "\u00e0\u0003\u0002\u0002\u0002\u00e2\'\u0003\u0002\u0002\u0002\u00e3",
    "\u00e4\u0007\t\u0002\u0002\u00e4\u00e5\u0005\u0006\u0004\u0002\u00e5",
    "\u00e6\u0005\u000e\b\u0002\u00e6\u00e7\u0005\u0006\u0004\u0002\u00e7",
    "\u00e8\u0007\b\u0002\u0002\u00e8)\u0003\u0002\u0002\u0002\u00e9\u00ec",
    "\u0005,\u0017\u0002\u00ea\u00ec\u00056\u001c\u0002\u00eb\u00e9\u0003",
    "\u0002\u0002\u0002\u00eb\u00ea\u0003\u0002\u0002\u0002\u00ec+\u0003",
    "\u0002\u0002\u0002\u00ed\u00f1\u00052\u001a\u0002\u00ee\u00f1\u0005",
    "4\u001b\u0002\u00ef\u00f1\u0005.\u0018\u0002\u00f0\u00ed\u0003\u0002",
    "\u0002\u0002\u00f0\u00ee\u0003\u0002\u0002\u0002\u00f0\u00ef\u0003\u0002",
    "\u0002\u0002\u00f1-\u0003\u0002\u0002\u0002\u00f2\u00f4\u0007\u0006",
    "\u0002\u0002\u00f3\u00f5\u00050\u0019\u0002\u00f4\u00f3\u0003\u0002",
    "\u0002\u0002\u00f4\u00f5\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002",
    "\u0002\u0002\u00f6\u00f9\u0005\u0006\u0004\u0002\u00f7\u00f8\u0007\n",
    "\u0002\u0002\u00f8\u00fa\u0005\u0006\u0004\u0002\u00f9\u00f7\u0003\u0002",
    "\u0002\u0002\u00f9\u00fa\u0003\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002",
    "\u0002\u0002\u00fb\u00fc\u0005\u0004\u0003\u0002\u00fc\u00fd\u0007\u0007",
    "\u0002\u0002\u00fd/\u0003\u0002\u0002\u0002\u00fe\u00ff\u0005\u0006",
    "\u0004\u0002\u00ff\u0100\u0007!\u0002\u0002\u0100\u0102\u0003\u0002",
    "\u0002\u0002\u0101\u00fe\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002",
    "\u0002\u0002\u0103\u0101\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002",
    "\u0002\u0002\u01041\u0003\u0002\u0002\u0002\u0105\u0106\u0007\u001b",
    "\u0002\u0002\u0106\u0108\u0005\u0006\u0004\u0002\u0107\u0109\u0005\u0010",
    "\t\u0002\u0108\u0107\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002",
    "\u0002\u0002\u0109\u010a\u0003\u0002\u0002\u0002\u010a\u010b\u0005\u0006",
    "\u0004\u0002\u010b\u010c\u0007\u001c\u0002\u0002\u010c3\u0003\u0002",
    "\u0002\u0002\u010d\u010e\u0007\u001d\u0002\u0002\u010e\u0110\u0005\u0006",
    "\u0004\u0002\u010f\u0111\u0005\u0010\t\u0002\u0110\u010f\u0003\u0002",
    "\u0002\u0002\u0110\u0111\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002",
    "\u0002\u0002\u0112\u0113\u0005\u0006\u0004\u0002\u0113\u0114\u0007\u001c",
    "\u0002\u0002\u01145\u0003\u0002\u0002\u0002\u0115\u011c\u0005<\u001f",
    "\u0002\u0116\u011c\u0005D#\u0002\u0117\u011c\u00058\u001d\u0002\u0118",
    "\u011c\u0005N(\u0002\u0119\u011c\u0005F$\u0002\u011a\u011c\u0005H%\u0002",
    "\u011b\u0115\u0003\u0002\u0002\u0002\u011b\u0116\u0003\u0002\u0002\u0002",
    "\u011b\u0117\u0003\u0002\u0002\u0002\u011b\u0118\u0003\u0002\u0002\u0002",
    "\u011b\u0119\u0003\u0002\u0002\u0002\u011b\u011a\u0003\u0002\u0002\u0002",
    "\u011c7\u0003\u0002\u0002\u0002\u011d\u0122\u0005:\u001e\u0002\u011e",
    "\u0122\u0005> \u0002\u011f\u0122\u0005B\"\u0002\u0120\u0122\u0005@!",
    "\u0002\u0121\u011d\u0003\u0002\u0002\u0002\u0121\u011e\u0003\u0002\u0002",
    "\u0002\u0121\u011f\u0003\u0002\u0002\u0002\u0121\u0120\u0003\u0002\u0002",
    "\u0002\u01229\u0003\u0002\u0002\u0002\u0123\u0126\u0005B\"\u0002\u0124",
    "\u0126\u0005@!\u0002\u0125\u0123\u0003\u0002\u0002\u0002\u0125\u0124",
    "\u0003\u0002\u0002\u0002\u0126\u0127\u0003\u0002\u0002\u0002\u0127\u0128",
    "\u0007\u0018\u0002\u0002\u0128\u0129\u0005@!\u0002\u0129;\u0003\u0002",
    "\u0002\u0002\u012a\u012b\u0007\"\u0002\u0002\u012b=\u0003\u0002\u0002",
    "\u0002\u012c\u012e\u0007\u0010\u0002\u0002\u012d\u012c\u0003\u0002\u0002",
    "\u0002\u012d\u012e\u0003\u0002\u0002\u0002\u012e\u012f\u0003\u0002\u0002",
    "\u0002\u012f\u0131\u0007\u0019\u0002\u0002\u0130\u0132\u0007\u001f\u0002",
    "\u0002\u0131\u0130\u0003\u0002\u0002\u0002\u0132\u0133\u0003\u0002\u0002",
    "\u0002\u0133\u0131\u0003\u0002\u0002\u0002\u0133\u0134\u0003\u0002\u0002",
    "\u0002\u0134?\u0003\u0002\u0002\u0002\u0135\u0137\u0007\u0010\u0002",
    "\u0002\u0136\u0135\u0003\u0002\u0002\u0002\u0136\u0137\u0003\u0002\u0002",
    "\u0002\u0137\u0139\u0003\u0002\u0002\u0002\u0138\u013a\u0007\u001e\u0002",
    "\u0002\u0139\u0138\u0003\u0002\u0002\u0002\u013a\u013b\u0003\u0002\u0002",
    "\u0002\u013b\u0139\u0003\u0002\u0002\u0002\u013b\u013c\u0003\u0002\u0002",
    "\u0002\u013cA\u0003\u0002\u0002\u0002\u013d\u013f\u0007\u0010\u0002",
    "\u0002\u013e\u013d\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002",
    "\u0002\u013f\u0141\u0003\u0002\u0002\u0002\u0140\u0142\u0007\u001e\u0002",
    "\u0002\u0141\u0140\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002",
    "\u0002\u0143\u0141\u0003\u0002\u0002\u0002\u0143\u0144\u0003\u0002\u0002",
    "\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145\u0147\u0007\u000b\u0002",
    "\u0002\u0146\u0148\u0007\u001e\u0002\u0002\u0147\u0146\u0003\u0002\u0002",
    "\u0002\u0148\u0149\u0003\u0002\u0002\u0002\u0149\u0147\u0003\u0002\u0002",
    "\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014aC\u0003\u0002\u0002",
    "\u0002\u014b\u014c\u0007\u0011\u0002\u0002\u014cE\u0003\u0002\u0002",
    "\u0002\u014d\u014e\u0007\u0004\u0002\u0002\u014eG\u0003\u0002\u0002",
    "\u0002\u014f\u0150\u0007\u0016\u0002\u0002\u0150\u0151\u0005L\'\u0002",
    "\u0151I\u0003\u0002\u0002\u0002\u0152\u0153\u0007\u000e\u0002\u0002",
    "\u0153\u0154\u0005\u0006\u0004\u0002\u0154\u0155\u0007 \u0002\u0002",
    "\u0155\u0157\u0005\u0006\u0004\u0002\u0156\u0158\u0007\u001e\u0002\u0002",
    "\u0157\u0156\u0003\u0002\u0002\u0002\u0158\u0159\u0003\u0002\u0002\u0002",
    "\u0159\u0157\u0003\u0002\u0002\u0002\u0159\u015a\u0003\u0002\u0002\u0002",
    "\u015a\u015b\u0003\u0002\u0002\u0002\u015b\u015c\u0005\u0006\u0004\u0002",
    "\u015c\u015d\u0007\u000f\u0002\u0002\u015dK\u0003\u0002\u0002\u0002",
    "\u015e\u016b\t\u0003\u0002\u0002\u015f\u0161\u0007 \u0002\u0002\u0160",
    "\u015f\u0003\u0002\u0002\u0002\u0161\u0162\u0003\u0002\u0002\u0002\u0162",
    "\u0160\u0003\u0002\u0002\u0002\u0162\u0163\u0003\u0002\u0002\u0002\u0163",
    "\u016b\u0003\u0002\u0002\u0002\u0164\u016b\u0005F$\u0002\u0165\u0167",
    "\u0007\n\u0002\u0002\u0166\u0165\u0003\u0002\u0002\u0002\u0167\u0168",
    "\u0003\u0002\u0002\u0002\u0168\u0166\u0003\u0002\u0002\u0002\u0168\u0169",
    "\u0003\u0002\u0002\u0002\u0169\u016b\u0003\u0002\u0002\u0002\u016a\u015e",
    "\u0003\u0002\u0002\u0002\u016a\u0160\u0003\u0002\u0002\u0002\u016a\u0164",
    "\u0003\u0002\u0002\u0002\u016a\u0166\u0003\u0002\u0002\u0002\u016bM",
    "\u0003\u0002\u0002\u0002\u016c\u016d\u0007\u001a\u0002\u0002\u016d\u016e",
    "\u0005P)\u0002\u016eO\u0003\u0002\u0002\u0002\u016f\u0173\u0005\u0006",
    "\u0004\u0002\u0170\u0174\u00056\u001c\u0002\u0171\u0174\u0005R*\u0002",
    "\u0172\u0174\u0005L\'\u0002\u0173\u0170\u0003\u0002\u0002\u0002\u0173",
    "\u0171\u0003\u0002\u0002\u0002\u0173\u0172\u0003\u0002\u0002\u0002\u0174",
    "\u0176\u0003\u0002\u0002\u0002\u0175\u016f\u0003\u0002\u0002\u0002\u0176",
    "\u0179\u0003\u0002\u0002\u0002\u0177\u0175\u0003\u0002\u0002\u0002\u0177",
    "\u0178\u0003\u0002\u0002\u0002\u0178\u017a\u0003\u0002\u0002\u0002\u0179",
    "\u0177\u0003\u0002\u0002\u0002\u017a\u017b\u0005\u0006\u0004\u0002\u017b",
    "\u017c\u0007\b\u0002\u0002\u017cQ\u0003\u0002\u0002\u0002\u017d\u017e",
    "\u0007\t\u0002\u0002\u017e\u017f\u0005P)\u0002\u017fS\u0003\u0002\u0002",
    "\u0002\u0180\u0181\u0005V,\u0002\u0181\u0183\u0005\u0006\u0004\u0002",
    "\u0182\u0184\u0005T+\u0002\u0183\u0182\u0003\u0002\u0002\u0002\u0183",
    "\u0184\u0003\u0002\u0002\u0002\u0184\u0185\u0003\u0002\u0002\u0002\u0185",
    "\u0186\u0005\u0006\u0004\u0002\u0186U\u0003\u0002\u0002\u0002\u0187",
    "\u0188\u0005\u0006\u0004\u0002\u0188\u0189\u0005X-\u0002\u0189W\u0003",
    "\u0002\u0002\u0002\u018a\u018b\u0007\u0012\u0002\u0002\u018bY\u0003",
    "\u0002\u0002\u0002\u018c\u018e\u0007 \u0002\u0002\u018d\u018c\u0003",
    "\u0002\u0002\u0002\u018e\u018f\u0003\u0002\u0002\u0002\u018f\u018d\u0003",
    "\u0002\u0002\u0002\u018f\u0190\u0003\u0002\u0002\u0002\u0190[\u0003",
    "\u0002\u0002\u0002\u0191\u0192\u0005\u001a\u000e\u0002\u0192]\u0003",
    "\u0002\u0002\u0002\u0193\u0195\u0005`1\u0002\u0194\u0196\u0005^0\u0002",
    "\u0195\u0194\u0003\u0002\u0002\u0002\u0195\u0196\u0003\u0002\u0002\u0002",
    "\u0196_\u0003\u0002\u0002\u0002\u0197\u0198\u0005\u0006\u0004\u0002",
    "\u0198\u0199\u0007\r\u0002\u0002\u0199\u019c\u0005\u0006\u0004\u0002",
    "\u019a\u019d\u0005\u001e\u0010\u0002\u019b\u019d\u0005&\u0014\u0002",
    "\u019c\u019a\u0003\u0002\u0002\u0002\u019c\u019b\u0003\u0002\u0002\u0002",
    "\u019da\u0003\u0002\u0002\u0002-gkr|\u008c\u0090\u0097\u009e\u00a4\u00ad",
    "\u00b6\u00bb\u00c7\u00cc\u00d7\u00e1\u00eb\u00f0\u00f4\u00f9\u0103\u0108",
    "\u0110\u011b\u0121\u0125\u012d\u0133\u0136\u013b\u013e\u0143\u0149\u0159",
    "\u0162\u0168\u016a\u0173\u0177\u0183\u018f\u0195\u019c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, "'['", "']'", "')'", "'('", 
                     "'|'", "'.'", "';'", null, "'<'", "'>'", "'-'", null, 
                     null, "'^'", "':'", "':='", "'#'", "'$'", "'e'", "'16r'", 
                     "'#('", "'#{'", "'}'", "'{'" ];

var symbolicNames = [ null, "SEPARATOR", "STRING", "COMMENT", "BLOCK_START", 
                      "BLOCK_END", "CLOSE_PAREN", "OPEN_PAREN", "PIPE", 
                      "PERIOD", "SEMI_COLON", "BINARY_SELECTOR", "LT", "GT", 
                      "MINUS", "RESERVED_WORD", "IDENTIFIER", "CARROT", 
                      "COLON", "ASSIGNMENT", "HASH", "DOLLAR", "EXP", "HEX", 
                      "LITARR_START", "DYNDICT_START", "DYNARR_END", "DYNARR_START", 
                      "DIGIT", "HEXDIGIT", "KEYWORD", "BLOCK_PARAM", "CHARACTER_CONSTANT" ];

var ruleNames =  [ "script", "sequence", "ws", "temps", "statements", "answer", 
                   "expression", "expressions", "expressionList", "cascade", 
                   "message", "assignment", "variable", "binarySend", "unarySend", 
                   "keywordSend", "keywordMessage", "keywordPair", "operand", 
                   "subexpression", "literal", "runtimeLiteral", "block", 
                   "blockParamList", "dynamicDictionary", "dynamicArray", 
                   "parsetimeLiteral", "number", "numberExp", "charConstant", 
                   "hex", "stInteger", "stFloat", "pseudoVariable", "string", 
                   "symbol", "primitive", "bareSymbol", "literalArray", 
                   "literalArrayRest", "bareLiteralArray", "unaryTail", 
                   "unaryMessage", "unarySelector", "keywords", "reference", 
                   "binaryTail", "binaryMessage" ];

function SmalltalkParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SmalltalkParser.prototype = Object.create(antlr4.Parser.prototype);
SmalltalkParser.prototype.constructor = SmalltalkParser;

Object.defineProperty(SmalltalkParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SmalltalkParser.EOF = antlr4.Token.EOF;
SmalltalkParser.SEPARATOR = 1;
SmalltalkParser.STRING = 2;
SmalltalkParser.COMMENT = 3;
SmalltalkParser.BLOCK_START = 4;
SmalltalkParser.BLOCK_END = 5;
SmalltalkParser.CLOSE_PAREN = 6;
SmalltalkParser.OPEN_PAREN = 7;
SmalltalkParser.PIPE = 8;
SmalltalkParser.PERIOD = 9;
SmalltalkParser.SEMI_COLON = 10;
SmalltalkParser.BINARY_SELECTOR = 11;
SmalltalkParser.LT = 12;
SmalltalkParser.GT = 13;
SmalltalkParser.MINUS = 14;
SmalltalkParser.RESERVED_WORD = 15;
SmalltalkParser.IDENTIFIER = 16;
SmalltalkParser.CARROT = 17;
SmalltalkParser.COLON = 18;
SmalltalkParser.ASSIGNMENT = 19;
SmalltalkParser.HASH = 20;
SmalltalkParser.DOLLAR = 21;
SmalltalkParser.EXP = 22;
SmalltalkParser.HEX = 23;
SmalltalkParser.LITARR_START = 24;
SmalltalkParser.DYNDICT_START = 25;
SmalltalkParser.DYNARR_END = 26;
SmalltalkParser.DYNARR_START = 27;
SmalltalkParser.DIGIT = 28;
SmalltalkParser.HEXDIGIT = 29;
SmalltalkParser.KEYWORD = 30;
SmalltalkParser.BLOCK_PARAM = 31;
SmalltalkParser.CHARACTER_CONSTANT = 32;

SmalltalkParser.RULE_script = 0;
SmalltalkParser.RULE_sequence = 1;
SmalltalkParser.RULE_ws = 2;
SmalltalkParser.RULE_temps = 3;
SmalltalkParser.RULE_statements = 4;
SmalltalkParser.RULE_answer = 5;
SmalltalkParser.RULE_expression = 6;
SmalltalkParser.RULE_expressions = 7;
SmalltalkParser.RULE_expressionList = 8;
SmalltalkParser.RULE_cascade = 9;
SmalltalkParser.RULE_message = 10;
SmalltalkParser.RULE_assignment = 11;
SmalltalkParser.RULE_variable = 12;
SmalltalkParser.RULE_binarySend = 13;
SmalltalkParser.RULE_unarySend = 14;
SmalltalkParser.RULE_keywordSend = 15;
SmalltalkParser.RULE_keywordMessage = 16;
SmalltalkParser.RULE_keywordPair = 17;
SmalltalkParser.RULE_operand = 18;
SmalltalkParser.RULE_subexpression = 19;
SmalltalkParser.RULE_literal = 20;
SmalltalkParser.RULE_runtimeLiteral = 21;
SmalltalkParser.RULE_block = 22;
SmalltalkParser.RULE_blockParamList = 23;
SmalltalkParser.RULE_dynamicDictionary = 24;
SmalltalkParser.RULE_dynamicArray = 25;
SmalltalkParser.RULE_parsetimeLiteral = 26;
SmalltalkParser.RULE_number = 27;
SmalltalkParser.RULE_numberExp = 28;
SmalltalkParser.RULE_charConstant = 29;
SmalltalkParser.RULE_hex = 30;
SmalltalkParser.RULE_stInteger = 31;
SmalltalkParser.RULE_stFloat = 32;
SmalltalkParser.RULE_pseudoVariable = 33;
SmalltalkParser.RULE_string = 34;
SmalltalkParser.RULE_symbol = 35;
SmalltalkParser.RULE_primitive = 36;
SmalltalkParser.RULE_bareSymbol = 37;
SmalltalkParser.RULE_literalArray = 38;
SmalltalkParser.RULE_literalArrayRest = 39;
SmalltalkParser.RULE_bareLiteralArray = 40;
SmalltalkParser.RULE_unaryTail = 41;
SmalltalkParser.RULE_unaryMessage = 42;
SmalltalkParser.RULE_unarySelector = 43;
SmalltalkParser.RULE_keywords = 44;
SmalltalkParser.RULE_reference = 45;
SmalltalkParser.RULE_binaryTail = 46;
SmalltalkParser.RULE_binaryMessage = 47;


function ScriptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_script;
    return this;
}

ScriptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ScriptContext.prototype.constructor = ScriptContext;

ScriptContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

ScriptContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

ScriptContext.prototype.EOF = function() {
    return this.getToken(SmalltalkParser.EOF, 0);
};

ScriptContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterScript(this);
	}
};

ScriptContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitScript(this);
	}
};




SmalltalkParser.ScriptContext = ScriptContext;

SmalltalkParser.prototype.script = function() {

    var localctx = new ScriptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SmalltalkParser.RULE_script);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.sequence();
        this.state = 97;
        this.ws();
        this.state = 98;
        this.match(SmalltalkParser.EOF);
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


function SequenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_sequence;
    return this;
}

SequenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SequenceContext.prototype.constructor = SequenceContext;

SequenceContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

SequenceContext.prototype.temps = function() {
    return this.getTypedRuleContext(TempsContext,0);
};

SequenceContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

SequenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterSequence(this);
	}
};

SequenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitSequence(this);
	}
};




SmalltalkParser.SequenceContext = SequenceContext;

SmalltalkParser.prototype.sequence = function() {

    var localctx = new SequenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SmalltalkParser.RULE_sequence);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 101;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
        if(la_===1) {
            this.state = 100;
            this.temps();

        }
        this.state = 103;
        this.ws();
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.CARROT - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
            this.state = 104;
            this.statements();
        }

        this.state = 107;
        this.ws();
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


function WsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_ws;
    return this;
}

WsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WsContext.prototype.constructor = WsContext;

WsContext.prototype.SEPARATOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.SEPARATOR);
    } else {
        return this.getToken(SmalltalkParser.SEPARATOR, i);
    }
};


WsContext.prototype.COMMENT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.COMMENT);
    } else {
        return this.getToken(SmalltalkParser.COMMENT, i);
    }
};


WsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterWs(this);
	}
};

WsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitWs(this);
	}
};




SmalltalkParser.WsContext = WsContext;

SmalltalkParser.prototype.ws = function() {

    var localctx = new WsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SmalltalkParser.RULE_ws);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 109;
                _la = this._input.LA(1);
                if(!(_la===SmalltalkParser.SEPARATOR || _la===SmalltalkParser.COMMENT)) {
                this._errHandler.recoverInline(this);
                }
                else {
                	this._errHandler.reportMatch(this);
                    this.consume();
                } 
            }
            this.state = 114;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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


function TempsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_temps;
    return this;
}

TempsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TempsContext.prototype.constructor = TempsContext;

TempsContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

TempsContext.prototype.PIPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.PIPE);
    } else {
        return this.getToken(SmalltalkParser.PIPE, i);
    }
};


TempsContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.IDENTIFIER);
    } else {
        return this.getToken(SmalltalkParser.IDENTIFIER, i);
    }
};


TempsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterTemps(this);
	}
};

TempsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitTemps(this);
	}
};




SmalltalkParser.TempsContext = TempsContext;

SmalltalkParser.prototype.temps = function() {

    var localctx = new TempsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SmalltalkParser.RULE_temps);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.ws();
        this.state = 116;
        this.match(SmalltalkParser.PIPE);
        this.state = 120; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 117;
        		this.ws();
        		this.state = 118;
        		this.match(SmalltalkParser.IDENTIFIER);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 122; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
        this.state = 124;
        this.ws();
        this.state = 125;
        this.match(SmalltalkParser.PIPE);
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


function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;


 
StatementsContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function StatementAnswerContext(parser, ctx) {
	StatementsContext.call(this, parser);
    StatementsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementAnswerContext.prototype = Object.create(StatementsContext.prototype);
StatementAnswerContext.prototype.constructor = StatementAnswerContext;

SmalltalkParser.StatementAnswerContext = StatementAnswerContext;

StatementAnswerContext.prototype.answer = function() {
    return this.getTypedRuleContext(AnswerContext,0);
};

StatementAnswerContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};
StatementAnswerContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterStatementAnswer(this);
	}
};

StatementAnswerContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitStatementAnswer(this);
	}
};


function StatementExpressionsContext(parser, ctx) {
	StatementsContext.call(this, parser);
    StatementsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementExpressionsContext.prototype = Object.create(StatementsContext.prototype);
StatementExpressionsContext.prototype.constructor = StatementExpressionsContext;

SmalltalkParser.StatementExpressionsContext = StatementExpressionsContext;

StatementExpressionsContext.prototype.expressions = function() {
    return this.getTypedRuleContext(ExpressionsContext,0);
};

StatementExpressionsContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

StatementExpressionsContext.prototype.PERIOD = function() {
    return this.getToken(SmalltalkParser.PERIOD, 0);
};
StatementExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterStatementExpressions(this);
	}
};

StatementExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitStatementExpressions(this);
	}
};


function StatementExpressionsAnswerContext(parser, ctx) {
	StatementsContext.call(this, parser);
    StatementsContext.prototype.copyFrom.call(this, ctx);
    return this;
}

StatementExpressionsAnswerContext.prototype = Object.create(StatementsContext.prototype);
StatementExpressionsAnswerContext.prototype.constructor = StatementExpressionsAnswerContext;

SmalltalkParser.StatementExpressionsAnswerContext = StatementExpressionsAnswerContext;

StatementExpressionsAnswerContext.prototype.expressions = function() {
    return this.getTypedRuleContext(ExpressionsContext,0);
};

StatementExpressionsAnswerContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

StatementExpressionsAnswerContext.prototype.PERIOD = function() {
    return this.getToken(SmalltalkParser.PERIOD, 0);
};

StatementExpressionsAnswerContext.prototype.answer = function() {
    return this.getTypedRuleContext(AnswerContext,0);
};
StatementExpressionsAnswerContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterStatementExpressionsAnswer(this);
	}
};

StatementExpressionsAnswerContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitStatementExpressionsAnswer(this);
	}
};



SmalltalkParser.StatementsContext = StatementsContext;

SmalltalkParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SmalltalkParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.state = 142;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            localctx = new StatementAnswerContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 127;
            this.answer();
            this.state = 128;
            this.ws();
            break;

        case 2:
            localctx = new StatementExpressionsAnswerContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 130;
            this.expressions();
            this.state = 131;
            this.ws();
            this.state = 132;
            this.match(SmalltalkParser.PERIOD);
            this.state = 133;
            this.ws();
            this.state = 134;
            this.answer();
            break;

        case 3:
            localctx = new StatementExpressionsContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 136;
            this.expressions();
            this.state = 138;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SmalltalkParser.PERIOD) {
                this.state = 137;
                this.match(SmalltalkParser.PERIOD);
            }

            this.state = 140;
            this.ws();
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


function AnswerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_answer;
    return this;
}

AnswerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnswerContext.prototype.constructor = AnswerContext;

AnswerContext.prototype.CARROT = function() {
    return this.getToken(SmalltalkParser.CARROT, 0);
};

AnswerContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

AnswerContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AnswerContext.prototype.PERIOD = function() {
    return this.getToken(SmalltalkParser.PERIOD, 0);
};

AnswerContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterAnswer(this);
	}
};

AnswerContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitAnswer(this);
	}
};




SmalltalkParser.AnswerContext = AnswerContext;

SmalltalkParser.prototype.answer = function() {

    var localctx = new AnswerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SmalltalkParser.RULE_answer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.match(SmalltalkParser.CARROT);
        this.state = 145;
        this.ws();
        this.state = 146;
        this.expression();
        this.state = 147;
        this.ws();
        this.state = 149;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SmalltalkParser.PERIOD) {
            this.state = 148;
            this.match(SmalltalkParser.PERIOD);
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


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.assignment = function() {
    return this.getTypedRuleContext(AssignmentContext,0);
};

ExpressionContext.prototype.cascade = function() {
    return this.getTypedRuleContext(CascadeContext,0);
};

ExpressionContext.prototype.keywordSend = function() {
    return this.getTypedRuleContext(KeywordSendContext,0);
};

ExpressionContext.prototype.binarySend = function() {
    return this.getTypedRuleContext(BinarySendContext,0);
};

ExpressionContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitExpression(this);
	}
};




SmalltalkParser.ExpressionContext = ExpressionContext;

SmalltalkParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SmalltalkParser.RULE_expression);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 151;
            this.assignment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            this.cascade();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 153;
            this.keywordSend();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 154;
            this.binarySend();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 155;
            this.primitive();
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


function ExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_expressions;
    return this;
}

ExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionsContext.prototype.constructor = ExpressionsContext;

ExpressionsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionsContext.prototype.expressionList = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionListContext);
    } else {
        return this.getTypedRuleContext(ExpressionListContext,i);
    }
};

ExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterExpressions(this);
	}
};

ExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitExpressions(this);
	}
};




SmalltalkParser.ExpressionsContext = ExpressionsContext;

SmalltalkParser.prototype.expressions = function() {

    var localctx = new ExpressionsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SmalltalkParser.RULE_expressions);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.expression();
        this.state = 162;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 159;
                this.expressionList(); 
            }
            this.state = 164;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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


function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.PERIOD = function() {
    return this.getToken(SmalltalkParser.PERIOD, 0);
};

ExpressionListContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

ExpressionListContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitExpressionList(this);
	}
};




SmalltalkParser.ExpressionListContext = ExpressionListContext;

SmalltalkParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SmalltalkParser.RULE_expressionList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(SmalltalkParser.PERIOD);
        this.state = 166;
        this.ws();
        this.state = 167;
        this.expression();
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


function CascadeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_cascade;
    return this;
}

CascadeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CascadeContext.prototype.constructor = CascadeContext;

CascadeContext.prototype.keywordSend = function() {
    return this.getTypedRuleContext(KeywordSendContext,0);
};

CascadeContext.prototype.binarySend = function() {
    return this.getTypedRuleContext(BinarySendContext,0);
};

CascadeContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

CascadeContext.prototype.SEMI_COLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.SEMI_COLON);
    } else {
        return this.getToken(SmalltalkParser.SEMI_COLON, i);
    }
};


CascadeContext.prototype.message = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MessageContext);
    } else {
        return this.getTypedRuleContext(MessageContext,i);
    }
};

CascadeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterCascade(this);
	}
};

CascadeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitCascade(this);
	}
};




SmalltalkParser.CascadeContext = CascadeContext;

SmalltalkParser.prototype.cascade = function() {

    var localctx = new CascadeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SmalltalkParser.RULE_cascade);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.state = 169;
            this.keywordSend();
            break;

        case 2:
            this.state = 170;
            this.binarySend();
            break;

        }
        this.state = 178; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 173;
        		this.ws();
        		this.state = 174;
        		this.match(SmalltalkParser.SEMI_COLON);
        		this.state = 175;
        		this.ws();
        		this.state = 176;
        		this.message();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 180; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,10, this._ctx);
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


function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.binaryMessage = function() {
    return this.getTypedRuleContext(BinaryMessageContext,0);
};

MessageContext.prototype.unaryMessage = function() {
    return this.getTypedRuleContext(UnaryMessageContext,0);
};

MessageContext.prototype.keywordMessage = function() {
    return this.getTypedRuleContext(KeywordMessageContext,0);
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitMessage(this);
	}
};




SmalltalkParser.MessageContext = MessageContext;

SmalltalkParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SmalltalkParser.RULE_message);
    try {
        this.state = 185;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 182;
            this.binaryMessage();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 183;
            this.unaryMessage();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 184;
            this.keywordMessage();
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


function AssignmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_assignment;
    return this;
}

AssignmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentContext.prototype.constructor = AssignmentContext;

AssignmentContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

AssignmentContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

AssignmentContext.prototype.ASSIGNMENT = function() {
    return this.getToken(SmalltalkParser.ASSIGNMENT, 0);
};

AssignmentContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterAssignment(this);
	}
};

AssignmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitAssignment(this);
	}
};




SmalltalkParser.AssignmentContext = AssignmentContext;

SmalltalkParser.prototype.assignment = function() {

    var localctx = new AssignmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SmalltalkParser.RULE_assignment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 187;
        this.variable();
        this.state = 188;
        this.ws();
        this.state = 189;
        this.match(SmalltalkParser.ASSIGNMENT);
        this.state = 190;
        this.ws();
        this.state = 191;
        this.expression();
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


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.IDENTIFIER = function() {
    return this.getToken(SmalltalkParser.IDENTIFIER, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitVariable(this);
	}
};




SmalltalkParser.VariableContext = VariableContext;

SmalltalkParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SmalltalkParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(SmalltalkParser.IDENTIFIER);
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


function BinarySendContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_binarySend;
    return this;
}

BinarySendContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinarySendContext.prototype.constructor = BinarySendContext;

BinarySendContext.prototype.unarySend = function() {
    return this.getTypedRuleContext(UnarySendContext,0);
};

BinarySendContext.prototype.binaryTail = function() {
    return this.getTypedRuleContext(BinaryTailContext,0);
};

BinarySendContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterBinarySend(this);
	}
};

BinarySendContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitBinarySend(this);
	}
};




SmalltalkParser.BinarySendContext = BinarySendContext;

SmalltalkParser.prototype.binarySend = function() {

    var localctx = new BinarySendContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SmalltalkParser.RULE_binarySend);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 195;
        this.unarySend();
        this.state = 197;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        if(la_===1) {
            this.state = 196;
            this.binaryTail();

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


function UnarySendContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_unarySend;
    return this;
}

UnarySendContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnarySendContext.prototype.constructor = UnarySendContext;

UnarySendContext.prototype.operand = function() {
    return this.getTypedRuleContext(OperandContext,0);
};

UnarySendContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

UnarySendContext.prototype.unaryTail = function() {
    return this.getTypedRuleContext(UnaryTailContext,0);
};

UnarySendContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterUnarySend(this);
	}
};

UnarySendContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitUnarySend(this);
	}
};




SmalltalkParser.UnarySendContext = UnarySendContext;

SmalltalkParser.prototype.unarySend = function() {

    var localctx = new UnarySendContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SmalltalkParser.RULE_unarySend);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.operand();
        this.state = 200;
        this.ws();
        this.state = 202;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        if(la_===1) {
            this.state = 201;
            this.unaryTail();

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


function KeywordSendContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_keywordSend;
    return this;
}

KeywordSendContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordSendContext.prototype.constructor = KeywordSendContext;

KeywordSendContext.prototype.binarySend = function() {
    return this.getTypedRuleContext(BinarySendContext,0);
};

KeywordSendContext.prototype.keywordMessage = function() {
    return this.getTypedRuleContext(KeywordMessageContext,0);
};

KeywordSendContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterKeywordSend(this);
	}
};

KeywordSendContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitKeywordSend(this);
	}
};




SmalltalkParser.KeywordSendContext = KeywordSendContext;

SmalltalkParser.prototype.keywordSend = function() {

    var localctx = new KeywordSendContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SmalltalkParser.RULE_keywordSend);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.binarySend();
        this.state = 205;
        this.keywordMessage();
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


function KeywordMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_keywordMessage;
    return this;
}

KeywordMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordMessageContext.prototype.constructor = KeywordMessageContext;

KeywordMessageContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

KeywordMessageContext.prototype.keywordPair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(KeywordPairContext);
    } else {
        return this.getTypedRuleContext(KeywordPairContext,i);
    }
};

KeywordMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterKeywordMessage(this);
	}
};

KeywordMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitKeywordMessage(this);
	}
};




SmalltalkParser.KeywordMessageContext = KeywordMessageContext;

SmalltalkParser.prototype.keywordMessage = function() {

    var localctx = new KeywordMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SmalltalkParser.RULE_keywordMessage);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.ws();
        this.state = 211; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 208;
            this.keywordPair();
            this.state = 209;
            this.ws();
            this.state = 213; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SmalltalkParser.KEYWORD);
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


function KeywordPairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_keywordPair;
    return this;
}

KeywordPairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordPairContext.prototype.constructor = KeywordPairContext;

KeywordPairContext.prototype.KEYWORD = function() {
    return this.getToken(SmalltalkParser.KEYWORD, 0);
};

KeywordPairContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

KeywordPairContext.prototype.binarySend = function() {
    return this.getTypedRuleContext(BinarySendContext,0);
};

KeywordPairContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterKeywordPair(this);
	}
};

KeywordPairContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitKeywordPair(this);
	}
};




SmalltalkParser.KeywordPairContext = KeywordPairContext;

SmalltalkParser.prototype.keywordPair = function() {

    var localctx = new KeywordPairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SmalltalkParser.RULE_keywordPair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.match(SmalltalkParser.KEYWORD);
        this.state = 216;
        this.ws();
        this.state = 217;
        this.binarySend();
        this.state = 218;
        this.ws();
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


function OperandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_operand;
    return this;
}

OperandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperandContext.prototype.constructor = OperandContext;

OperandContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

OperandContext.prototype.reference = function() {
    return this.getTypedRuleContext(ReferenceContext,0);
};

OperandContext.prototype.subexpression = function() {
    return this.getTypedRuleContext(SubexpressionContext,0);
};

OperandContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterOperand(this);
	}
};

OperandContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitOperand(this);
	}
};




SmalltalkParser.OperandContext = OperandContext;

SmalltalkParser.prototype.operand = function() {

    var localctx = new OperandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SmalltalkParser.RULE_operand);
    try {
        this.state = 223;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SmalltalkParser.STRING:
        case SmalltalkParser.BLOCK_START:
        case SmalltalkParser.MINUS:
        case SmalltalkParser.RESERVED_WORD:
        case SmalltalkParser.HASH:
        case SmalltalkParser.HEX:
        case SmalltalkParser.LITARR_START:
        case SmalltalkParser.DYNDICT_START:
        case SmalltalkParser.DYNARR_START:
        case SmalltalkParser.DIGIT:
        case SmalltalkParser.CHARACTER_CONSTANT:
            this.enterOuterAlt(localctx, 1);
            this.state = 220;
            this.literal();
            break;
        case SmalltalkParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 221;
            this.reference();
            break;
        case SmalltalkParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 3);
            this.state = 222;
            this.subexpression();
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


function SubexpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_subexpression;
    return this;
}

SubexpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubexpressionContext.prototype.constructor = SubexpressionContext;

SubexpressionContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SmalltalkParser.OPEN_PAREN, 0);
};

SubexpressionContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

SubexpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SubexpressionContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SmalltalkParser.CLOSE_PAREN, 0);
};

SubexpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterSubexpression(this);
	}
};

SubexpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitSubexpression(this);
	}
};




SmalltalkParser.SubexpressionContext = SubexpressionContext;

SmalltalkParser.prototype.subexpression = function() {

    var localctx = new SubexpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SmalltalkParser.RULE_subexpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(SmalltalkParser.OPEN_PAREN);
        this.state = 226;
        this.ws();
        this.state = 227;
        this.expression();
        this.state = 228;
        this.ws();
        this.state = 229;
        this.match(SmalltalkParser.CLOSE_PAREN);
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


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.runtimeLiteral = function() {
    return this.getTypedRuleContext(RuntimeLiteralContext,0);
};

LiteralContext.prototype.parsetimeLiteral = function() {
    return this.getTypedRuleContext(ParsetimeLiteralContext,0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitLiteral(this);
	}
};




SmalltalkParser.LiteralContext = LiteralContext;

SmalltalkParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SmalltalkParser.RULE_literal);
    try {
        this.state = 233;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SmalltalkParser.BLOCK_START:
        case SmalltalkParser.DYNDICT_START:
        case SmalltalkParser.DYNARR_START:
            this.enterOuterAlt(localctx, 1);
            this.state = 231;
            this.runtimeLiteral();
            break;
        case SmalltalkParser.STRING:
        case SmalltalkParser.MINUS:
        case SmalltalkParser.RESERVED_WORD:
        case SmalltalkParser.HASH:
        case SmalltalkParser.HEX:
        case SmalltalkParser.LITARR_START:
        case SmalltalkParser.DIGIT:
        case SmalltalkParser.CHARACTER_CONSTANT:
            this.enterOuterAlt(localctx, 2);
            this.state = 232;
            this.parsetimeLiteral();
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


function RuntimeLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_runtimeLiteral;
    return this;
}

RuntimeLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuntimeLiteralContext.prototype.constructor = RuntimeLiteralContext;

RuntimeLiteralContext.prototype.dynamicDictionary = function() {
    return this.getTypedRuleContext(DynamicDictionaryContext,0);
};

RuntimeLiteralContext.prototype.dynamicArray = function() {
    return this.getTypedRuleContext(DynamicArrayContext,0);
};

RuntimeLiteralContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

RuntimeLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterRuntimeLiteral(this);
	}
};

RuntimeLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitRuntimeLiteral(this);
	}
};




SmalltalkParser.RuntimeLiteralContext = RuntimeLiteralContext;

SmalltalkParser.prototype.runtimeLiteral = function() {

    var localctx = new RuntimeLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SmalltalkParser.RULE_runtimeLiteral);
    try {
        this.state = 238;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SmalltalkParser.DYNDICT_START:
            this.enterOuterAlt(localctx, 1);
            this.state = 235;
            this.dynamicDictionary();
            break;
        case SmalltalkParser.DYNARR_START:
            this.enterOuterAlt(localctx, 2);
            this.state = 236;
            this.dynamicArray();
            break;
        case SmalltalkParser.BLOCK_START:
            this.enterOuterAlt(localctx, 3);
            this.state = 237;
            this.block();
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


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.BLOCK_START = function() {
    return this.getToken(SmalltalkParser.BLOCK_START, 0);
};

BlockContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

BlockContext.prototype.sequence = function() {
    return this.getTypedRuleContext(SequenceContext,0);
};

BlockContext.prototype.BLOCK_END = function() {
    return this.getToken(SmalltalkParser.BLOCK_END, 0);
};

BlockContext.prototype.blockParamList = function() {
    return this.getTypedRuleContext(BlockParamListContext,0);
};

BlockContext.prototype.PIPE = function() {
    return this.getToken(SmalltalkParser.PIPE, 0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitBlock(this);
	}
};




SmalltalkParser.BlockContext = BlockContext;

SmalltalkParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SmalltalkParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(SmalltalkParser.BLOCK_START);
        this.state = 242;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
        if(la_===1) {
            this.state = 241;
            this.blockParamList();

        }
        this.state = 244;
        this.ws();
        this.state = 247;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        if(la_===1) {
            this.state = 245;
            this.match(SmalltalkParser.PIPE);
            this.state = 246;
            this.ws();

        }
        this.state = 249;
        this.sequence();
        this.state = 250;
        this.match(SmalltalkParser.BLOCK_END);
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


function BlockParamListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_blockParamList;
    return this;
}

BlockParamListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockParamListContext.prototype.constructor = BlockParamListContext;

BlockParamListContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

BlockParamListContext.prototype.BLOCK_PARAM = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.BLOCK_PARAM);
    } else {
        return this.getToken(SmalltalkParser.BLOCK_PARAM, i);
    }
};


BlockParamListContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterBlockParamList(this);
	}
};

BlockParamListContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitBlockParamList(this);
	}
};




SmalltalkParser.BlockParamListContext = BlockParamListContext;

SmalltalkParser.prototype.blockParamList = function() {

    var localctx = new BlockParamListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SmalltalkParser.RULE_blockParamList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 252;
        		this.ws();
        		this.state = 253;
        		this.match(SmalltalkParser.BLOCK_PARAM);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 257; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
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


function DynamicDictionaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_dynamicDictionary;
    return this;
}

DynamicDictionaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DynamicDictionaryContext.prototype.constructor = DynamicDictionaryContext;

DynamicDictionaryContext.prototype.DYNDICT_START = function() {
    return this.getToken(SmalltalkParser.DYNDICT_START, 0);
};

DynamicDictionaryContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

DynamicDictionaryContext.prototype.DYNARR_END = function() {
    return this.getToken(SmalltalkParser.DYNARR_END, 0);
};

DynamicDictionaryContext.prototype.expressions = function() {
    return this.getTypedRuleContext(ExpressionsContext,0);
};

DynamicDictionaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterDynamicDictionary(this);
	}
};

DynamicDictionaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitDynamicDictionary(this);
	}
};




SmalltalkParser.DynamicDictionaryContext = DynamicDictionaryContext;

SmalltalkParser.prototype.dynamicDictionary = function() {

    var localctx = new DynamicDictionaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SmalltalkParser.RULE_dynamicDictionary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 259;
        this.match(SmalltalkParser.DYNDICT_START);
        this.state = 260;
        this.ws();
        this.state = 262;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
            this.state = 261;
            this.expressions();
        }

        this.state = 264;
        this.ws();
        this.state = 265;
        this.match(SmalltalkParser.DYNARR_END);
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


function DynamicArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_dynamicArray;
    return this;
}

DynamicArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DynamicArrayContext.prototype.constructor = DynamicArrayContext;

DynamicArrayContext.prototype.DYNARR_START = function() {
    return this.getToken(SmalltalkParser.DYNARR_START, 0);
};

DynamicArrayContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

DynamicArrayContext.prototype.DYNARR_END = function() {
    return this.getToken(SmalltalkParser.DYNARR_END, 0);
};

DynamicArrayContext.prototype.expressions = function() {
    return this.getTypedRuleContext(ExpressionsContext,0);
};

DynamicArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterDynamicArray(this);
	}
};

DynamicArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitDynamicArray(this);
	}
};




SmalltalkParser.DynamicArrayContext = DynamicArrayContext;

SmalltalkParser.prototype.dynamicArray = function() {

    var localctx = new DynamicArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SmalltalkParser.RULE_dynamicArray);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.match(SmalltalkParser.DYNARR_START);
        this.state = 268;
        this.ws();
        this.state = 270;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 2)) & ~0x1f) == 0 && ((1 << (_la - 2)) & ((1 << (SmalltalkParser.STRING - 2)) | (1 << (SmalltalkParser.BLOCK_START - 2)) | (1 << (SmalltalkParser.OPEN_PAREN - 2)) | (1 << (SmalltalkParser.LT - 2)) | (1 << (SmalltalkParser.MINUS - 2)) | (1 << (SmalltalkParser.RESERVED_WORD - 2)) | (1 << (SmalltalkParser.IDENTIFIER - 2)) | (1 << (SmalltalkParser.HASH - 2)) | (1 << (SmalltalkParser.HEX - 2)) | (1 << (SmalltalkParser.LITARR_START - 2)) | (1 << (SmalltalkParser.DYNDICT_START - 2)) | (1 << (SmalltalkParser.DYNARR_START - 2)) | (1 << (SmalltalkParser.DIGIT - 2)) | (1 << (SmalltalkParser.CHARACTER_CONSTANT - 2)))) !== 0)) {
            this.state = 269;
            this.expressions();
        }

        this.state = 272;
        this.ws();
        this.state = 273;
        this.match(SmalltalkParser.DYNARR_END);
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


function ParsetimeLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_parsetimeLiteral;
    return this;
}

ParsetimeLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParsetimeLiteralContext.prototype.constructor = ParsetimeLiteralContext;

ParsetimeLiteralContext.prototype.charConstant = function() {
    return this.getTypedRuleContext(CharConstantContext,0);
};

ParsetimeLiteralContext.prototype.pseudoVariable = function() {
    return this.getTypedRuleContext(PseudoVariableContext,0);
};

ParsetimeLiteralContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ParsetimeLiteralContext.prototype.literalArray = function() {
    return this.getTypedRuleContext(LiteralArrayContext,0);
};

ParsetimeLiteralContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ParsetimeLiteralContext.prototype.symbol = function() {
    return this.getTypedRuleContext(SymbolContext,0);
};

ParsetimeLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterParsetimeLiteral(this);
	}
};

ParsetimeLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitParsetimeLiteral(this);
	}
};




SmalltalkParser.ParsetimeLiteralContext = ParsetimeLiteralContext;

SmalltalkParser.prototype.parsetimeLiteral = function() {

    var localctx = new ParsetimeLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SmalltalkParser.RULE_parsetimeLiteral);
    try {
        this.state = 281;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SmalltalkParser.CHARACTER_CONSTANT:
            this.enterOuterAlt(localctx, 1);
            this.state = 275;
            this.charConstant();
            break;
        case SmalltalkParser.RESERVED_WORD:
            this.enterOuterAlt(localctx, 2);
            this.state = 276;
            this.pseudoVariable();
            break;
        case SmalltalkParser.MINUS:
        case SmalltalkParser.HEX:
        case SmalltalkParser.DIGIT:
            this.enterOuterAlt(localctx, 3);
            this.state = 277;
            this.number();
            break;
        case SmalltalkParser.LITARR_START:
            this.enterOuterAlt(localctx, 4);
            this.state = 278;
            this.literalArray();
            break;
        case SmalltalkParser.STRING:
            this.enterOuterAlt(localctx, 5);
            this.state = 279;
            this.string();
            break;
        case SmalltalkParser.HASH:
            this.enterOuterAlt(localctx, 6);
            this.state = 280;
            this.symbol();
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


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.numberExp = function() {
    return this.getTypedRuleContext(NumberExpContext,0);
};

NumberContext.prototype.hex = function() {
    return this.getTypedRuleContext(HexContext,0);
};

NumberContext.prototype.stFloat = function() {
    return this.getTypedRuleContext(StFloatContext,0);
};

NumberContext.prototype.stInteger = function() {
    return this.getTypedRuleContext(StIntegerContext,0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitNumber(this);
	}
};




SmalltalkParser.NumberContext = NumberContext;

SmalltalkParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SmalltalkParser.RULE_number);
    try {
        this.state = 287;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 283;
            this.numberExp();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 284;
            this.hex();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 285;
            this.stFloat();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 286;
            this.stInteger();
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


function NumberExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_numberExp;
    return this;
}

NumberExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberExpContext.prototype.constructor = NumberExpContext;

NumberExpContext.prototype.EXP = function() {
    return this.getToken(SmalltalkParser.EXP, 0);
};

NumberExpContext.prototype.stInteger = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StIntegerContext);
    } else {
        return this.getTypedRuleContext(StIntegerContext,i);
    }
};

NumberExpContext.prototype.stFloat = function() {
    return this.getTypedRuleContext(StFloatContext,0);
};

NumberExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterNumberExp(this);
	}
};

NumberExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitNumberExp(this);
	}
};




SmalltalkParser.NumberExpContext = NumberExpContext;

SmalltalkParser.prototype.numberExp = function() {

    var localctx = new NumberExpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SmalltalkParser.RULE_numberExp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 291;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.state = 289;
            this.stFloat();
            break;

        case 2:
            this.state = 290;
            this.stInteger();
            break;

        }
        this.state = 293;
        this.match(SmalltalkParser.EXP);
        this.state = 294;
        this.stInteger();
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


function CharConstantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_charConstant;
    return this;
}

CharConstantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CharConstantContext.prototype.constructor = CharConstantContext;

CharConstantContext.prototype.CHARACTER_CONSTANT = function() {
    return this.getToken(SmalltalkParser.CHARACTER_CONSTANT, 0);
};

CharConstantContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterCharConstant(this);
	}
};

CharConstantContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitCharConstant(this);
	}
};




SmalltalkParser.CharConstantContext = CharConstantContext;

SmalltalkParser.prototype.charConstant = function() {

    var localctx = new CharConstantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SmalltalkParser.RULE_charConstant);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(SmalltalkParser.CHARACTER_CONSTANT);
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


function HexContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_hex;
    return this;
}

HexContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
HexContext.prototype.constructor = HexContext;

HexContext.prototype.HEX = function() {
    return this.getToken(SmalltalkParser.HEX, 0);
};

HexContext.prototype.MINUS = function() {
    return this.getToken(SmalltalkParser.MINUS, 0);
};

HexContext.prototype.HEXDIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.HEXDIGIT);
    } else {
        return this.getToken(SmalltalkParser.HEXDIGIT, i);
    }
};


HexContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterHex(this);
	}
};

HexContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitHex(this);
	}
};




SmalltalkParser.HexContext = HexContext;

SmalltalkParser.prototype.hex = function() {

    var localctx = new HexContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SmalltalkParser.RULE_hex);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SmalltalkParser.MINUS) {
            this.state = 298;
            this.match(SmalltalkParser.MINUS);
        }

        this.state = 301;
        this.match(SmalltalkParser.HEX);
        this.state = 303; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 302;
            this.match(SmalltalkParser.HEXDIGIT);
            this.state = 305; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SmalltalkParser.HEXDIGIT);
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


function StIntegerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_stInteger;
    return this;
}

StIntegerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StIntegerContext.prototype.constructor = StIntegerContext;

StIntegerContext.prototype.MINUS = function() {
    return this.getToken(SmalltalkParser.MINUS, 0);
};

StIntegerContext.prototype.DIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.DIGIT);
    } else {
        return this.getToken(SmalltalkParser.DIGIT, i);
    }
};


StIntegerContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterStInteger(this);
	}
};

StIntegerContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitStInteger(this);
	}
};




SmalltalkParser.StIntegerContext = StIntegerContext;

SmalltalkParser.prototype.stInteger = function() {

    var localctx = new StIntegerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SmalltalkParser.RULE_stInteger);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SmalltalkParser.MINUS) {
            this.state = 307;
            this.match(SmalltalkParser.MINUS);
        }

        this.state = 311; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 310;
        		this.match(SmalltalkParser.DIGIT);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 313; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,29, this._ctx);
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


function StFloatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_stFloat;
    return this;
}

StFloatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StFloatContext.prototype.constructor = StFloatContext;

StFloatContext.prototype.PERIOD = function() {
    return this.getToken(SmalltalkParser.PERIOD, 0);
};

StFloatContext.prototype.MINUS = function() {
    return this.getToken(SmalltalkParser.MINUS, 0);
};

StFloatContext.prototype.DIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.DIGIT);
    } else {
        return this.getToken(SmalltalkParser.DIGIT, i);
    }
};


StFloatContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterStFloat(this);
	}
};

StFloatContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitStFloat(this);
	}
};




SmalltalkParser.StFloatContext = StFloatContext;

SmalltalkParser.prototype.stFloat = function() {

    var localctx = new StFloatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SmalltalkParser.RULE_stFloat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 316;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SmalltalkParser.MINUS) {
            this.state = 315;
            this.match(SmalltalkParser.MINUS);
        }

        this.state = 319; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 318;
            this.match(SmalltalkParser.DIGIT);
            this.state = 321; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SmalltalkParser.DIGIT);
        this.state = 323;
        this.match(SmalltalkParser.PERIOD);
        this.state = 325; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 324;
        		this.match(SmalltalkParser.DIGIT);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 327; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,32, this._ctx);
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


function PseudoVariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_pseudoVariable;
    return this;
}

PseudoVariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PseudoVariableContext.prototype.constructor = PseudoVariableContext;

PseudoVariableContext.prototype.RESERVED_WORD = function() {
    return this.getToken(SmalltalkParser.RESERVED_WORD, 0);
};

PseudoVariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterPseudoVariable(this);
	}
};

PseudoVariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitPseudoVariable(this);
	}
};




SmalltalkParser.PseudoVariableContext = PseudoVariableContext;

SmalltalkParser.prototype.pseudoVariable = function() {

    var localctx = new PseudoVariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SmalltalkParser.RULE_pseudoVariable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 329;
        this.match(SmalltalkParser.RESERVED_WORD);
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


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.STRING = function() {
    return this.getToken(SmalltalkParser.STRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitString(this);
	}
};




SmalltalkParser.StringContext = StringContext;

SmalltalkParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SmalltalkParser.RULE_string);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 331;
        this.match(SmalltalkParser.STRING);
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


function SymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_symbol;
    return this;
}

SymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SymbolContext.prototype.constructor = SymbolContext;

SymbolContext.prototype.HASH = function() {
    return this.getToken(SmalltalkParser.HASH, 0);
};

SymbolContext.prototype.bareSymbol = function() {
    return this.getTypedRuleContext(BareSymbolContext,0);
};

SymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterSymbol(this);
	}
};

SymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitSymbol(this);
	}
};




SmalltalkParser.SymbolContext = SymbolContext;

SmalltalkParser.prototype.symbol = function() {

    var localctx = new SymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SmalltalkParser.RULE_symbol);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
        this.match(SmalltalkParser.HASH);
        this.state = 334;
        this.bareSymbol();
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


function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;

PrimitiveContext.prototype.LT = function() {
    return this.getToken(SmalltalkParser.LT, 0);
};

PrimitiveContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

PrimitiveContext.prototype.KEYWORD = function() {
    return this.getToken(SmalltalkParser.KEYWORD, 0);
};

PrimitiveContext.prototype.GT = function() {
    return this.getToken(SmalltalkParser.GT, 0);
};

PrimitiveContext.prototype.DIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.DIGIT);
    } else {
        return this.getToken(SmalltalkParser.DIGIT, i);
    }
};


PrimitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterPrimitive(this);
	}
};

PrimitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitPrimitive(this);
	}
};




SmalltalkParser.PrimitiveContext = PrimitiveContext;

SmalltalkParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SmalltalkParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 336;
        this.match(SmalltalkParser.LT);
        this.state = 337;
        this.ws();
        this.state = 338;
        this.match(SmalltalkParser.KEYWORD);
        this.state = 339;
        this.ws();
        this.state = 341; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 340;
            this.match(SmalltalkParser.DIGIT);
            this.state = 343; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SmalltalkParser.DIGIT);
        this.state = 345;
        this.ws();
        this.state = 346;
        this.match(SmalltalkParser.GT);
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


function BareSymbolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_bareSymbol;
    return this;
}

BareSymbolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BareSymbolContext.prototype.constructor = BareSymbolContext;

BareSymbolContext.prototype.IDENTIFIER = function() {
    return this.getToken(SmalltalkParser.IDENTIFIER, 0);
};

BareSymbolContext.prototype.BINARY_SELECTOR = function() {
    return this.getToken(SmalltalkParser.BINARY_SELECTOR, 0);
};

BareSymbolContext.prototype.KEYWORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.KEYWORD);
    } else {
        return this.getToken(SmalltalkParser.KEYWORD, i);
    }
};


BareSymbolContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

BareSymbolContext.prototype.PIPE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.PIPE);
    } else {
        return this.getToken(SmalltalkParser.PIPE, i);
    }
};


BareSymbolContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterBareSymbol(this);
	}
};

BareSymbolContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitBareSymbol(this);
	}
};




SmalltalkParser.BareSymbolContext = BareSymbolContext;

SmalltalkParser.prototype.bareSymbol = function() {

    var localctx = new BareSymbolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SmalltalkParser.RULE_bareSymbol);
    var _la = 0; // Token type
    try {
        this.state = 360;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SmalltalkParser.BINARY_SELECTOR:
        case SmalltalkParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 1);
            this.state = 348;
            _la = this._input.LA(1);
            if(!(_la===SmalltalkParser.BINARY_SELECTOR || _la===SmalltalkParser.IDENTIFIER)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case SmalltalkParser.KEYWORD:
            this.enterOuterAlt(localctx, 2);
            this.state = 350; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 349;
            		this.match(SmalltalkParser.KEYWORD);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 352; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,34, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        case SmalltalkParser.STRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 354;
            this.string();
            break;
        case SmalltalkParser.PIPE:
            this.enterOuterAlt(localctx, 4);
            this.state = 356; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 355;
            		this.match(SmalltalkParser.PIPE);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 358; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,35, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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


function LiteralArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_literalArray;
    return this;
}

LiteralArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralArrayContext.prototype.constructor = LiteralArrayContext;

LiteralArrayContext.prototype.LITARR_START = function() {
    return this.getToken(SmalltalkParser.LITARR_START, 0);
};

LiteralArrayContext.prototype.literalArrayRest = function() {
    return this.getTypedRuleContext(LiteralArrayRestContext,0);
};

LiteralArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterLiteralArray(this);
	}
};

LiteralArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitLiteralArray(this);
	}
};




SmalltalkParser.LiteralArrayContext = LiteralArrayContext;

SmalltalkParser.prototype.literalArray = function() {

    var localctx = new LiteralArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SmalltalkParser.RULE_literalArray);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 362;
        this.match(SmalltalkParser.LITARR_START);
        this.state = 363;
        this.literalArrayRest();
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


function LiteralArrayRestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_literalArrayRest;
    return this;
}

LiteralArrayRestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralArrayRestContext.prototype.constructor = LiteralArrayRestContext;

LiteralArrayRestContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

LiteralArrayRestContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SmalltalkParser.CLOSE_PAREN, 0);
};

LiteralArrayRestContext.prototype.parsetimeLiteral = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParsetimeLiteralContext);
    } else {
        return this.getTypedRuleContext(ParsetimeLiteralContext,i);
    }
};

LiteralArrayRestContext.prototype.bareLiteralArray = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BareLiteralArrayContext);
    } else {
        return this.getTypedRuleContext(BareLiteralArrayContext,i);
    }
};

LiteralArrayRestContext.prototype.bareSymbol = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BareSymbolContext);
    } else {
        return this.getTypedRuleContext(BareSymbolContext,i);
    }
};

LiteralArrayRestContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterLiteralArrayRest(this);
	}
};

LiteralArrayRestContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitLiteralArrayRest(this);
	}
};




SmalltalkParser.LiteralArrayRestContext = LiteralArrayRestContext;

SmalltalkParser.prototype.literalArrayRest = function() {

    var localctx = new LiteralArrayRestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SmalltalkParser.RULE_literalArrayRest);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 365;
                this.ws();
                this.state = 369;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 366;
                    this.parsetimeLiteral();
                    break;

                case 2:
                    this.state = 367;
                    this.bareLiteralArray();
                    break;

                case 3:
                    this.state = 368;
                    this.bareSymbol();
                    break;

                } 
            }
            this.state = 375;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
        }

        this.state = 376;
        this.ws();
        this.state = 377;
        this.match(SmalltalkParser.CLOSE_PAREN);
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


function BareLiteralArrayContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_bareLiteralArray;
    return this;
}

BareLiteralArrayContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BareLiteralArrayContext.prototype.constructor = BareLiteralArrayContext;

BareLiteralArrayContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SmalltalkParser.OPEN_PAREN, 0);
};

BareLiteralArrayContext.prototype.literalArrayRest = function() {
    return this.getTypedRuleContext(LiteralArrayRestContext,0);
};

BareLiteralArrayContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterBareLiteralArray(this);
	}
};

BareLiteralArrayContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitBareLiteralArray(this);
	}
};




SmalltalkParser.BareLiteralArrayContext = BareLiteralArrayContext;

SmalltalkParser.prototype.bareLiteralArray = function() {

    var localctx = new BareLiteralArrayContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SmalltalkParser.RULE_bareLiteralArray);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(SmalltalkParser.OPEN_PAREN);
        this.state = 380;
        this.literalArrayRest();
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


function UnaryTailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_unaryTail;
    return this;
}

UnaryTailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryTailContext.prototype.constructor = UnaryTailContext;

UnaryTailContext.prototype.unaryMessage = function() {
    return this.getTypedRuleContext(UnaryMessageContext,0);
};

UnaryTailContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

UnaryTailContext.prototype.unaryTail = function() {
    return this.getTypedRuleContext(UnaryTailContext,0);
};

UnaryTailContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterUnaryTail(this);
	}
};

UnaryTailContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitUnaryTail(this);
	}
};




SmalltalkParser.UnaryTailContext = UnaryTailContext;

SmalltalkParser.prototype.unaryTail = function() {

    var localctx = new UnaryTailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SmalltalkParser.RULE_unaryTail);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        this.unaryMessage();
        this.state = 383;
        this.ws();
        this.state = 385;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
        if(la_===1) {
            this.state = 384;
            this.unaryTail();

        }
        this.state = 387;
        this.ws();
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


function UnaryMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_unaryMessage;
    return this;
}

UnaryMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnaryMessageContext.prototype.constructor = UnaryMessageContext;

UnaryMessageContext.prototype.ws = function() {
    return this.getTypedRuleContext(WsContext,0);
};

UnaryMessageContext.prototype.unarySelector = function() {
    return this.getTypedRuleContext(UnarySelectorContext,0);
};

UnaryMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterUnaryMessage(this);
	}
};

UnaryMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitUnaryMessage(this);
	}
};




SmalltalkParser.UnaryMessageContext = UnaryMessageContext;

SmalltalkParser.prototype.unaryMessage = function() {

    var localctx = new UnaryMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SmalltalkParser.RULE_unaryMessage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 389;
        this.ws();
        this.state = 390;
        this.unarySelector();
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


function UnarySelectorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_unarySelector;
    return this;
}

UnarySelectorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UnarySelectorContext.prototype.constructor = UnarySelectorContext;

UnarySelectorContext.prototype.IDENTIFIER = function() {
    return this.getToken(SmalltalkParser.IDENTIFIER, 0);
};

UnarySelectorContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterUnarySelector(this);
	}
};

UnarySelectorContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitUnarySelector(this);
	}
};




SmalltalkParser.UnarySelectorContext = UnarySelectorContext;

SmalltalkParser.prototype.unarySelector = function() {

    var localctx = new UnarySelectorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SmalltalkParser.RULE_unarySelector);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        this.match(SmalltalkParser.IDENTIFIER);
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


function KeywordsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_keywords;
    return this;
}

KeywordsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
KeywordsContext.prototype.constructor = KeywordsContext;

KeywordsContext.prototype.KEYWORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SmalltalkParser.KEYWORD);
    } else {
        return this.getToken(SmalltalkParser.KEYWORD, i);
    }
};


KeywordsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterKeywords(this);
	}
};

KeywordsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitKeywords(this);
	}
};




SmalltalkParser.KeywordsContext = KeywordsContext;

SmalltalkParser.prototype.keywords = function() {

    var localctx = new KeywordsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SmalltalkParser.RULE_keywords);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 395; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 394;
            this.match(SmalltalkParser.KEYWORD);
            this.state = 397; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SmalltalkParser.KEYWORD);
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


function ReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterReference(this);
	}
};

ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitReference(this);
	}
};




SmalltalkParser.ReferenceContext = ReferenceContext;

SmalltalkParser.prototype.reference = function() {

    var localctx = new ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SmalltalkParser.RULE_reference);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 399;
        this.variable();
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


function BinaryTailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_binaryTail;
    return this;
}

BinaryTailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryTailContext.prototype.constructor = BinaryTailContext;

BinaryTailContext.prototype.binaryMessage = function() {
    return this.getTypedRuleContext(BinaryMessageContext,0);
};

BinaryTailContext.prototype.binaryTail = function() {
    return this.getTypedRuleContext(BinaryTailContext,0);
};

BinaryTailContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterBinaryTail(this);
	}
};

BinaryTailContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitBinaryTail(this);
	}
};




SmalltalkParser.BinaryTailContext = BinaryTailContext;

SmalltalkParser.prototype.binaryTail = function() {

    var localctx = new BinaryTailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, SmalltalkParser.RULE_binaryTail);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 401;
        this.binaryMessage();
        this.state = 403;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
        if(la_===1) {
            this.state = 402;
            this.binaryTail();

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


function BinaryMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SmalltalkParser.RULE_binaryMessage;
    return this;
}

BinaryMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BinaryMessageContext.prototype.constructor = BinaryMessageContext;

BinaryMessageContext.prototype.ws = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(WsContext);
    } else {
        return this.getTypedRuleContext(WsContext,i);
    }
};

BinaryMessageContext.prototype.BINARY_SELECTOR = function() {
    return this.getToken(SmalltalkParser.BINARY_SELECTOR, 0);
};

BinaryMessageContext.prototype.unarySend = function() {
    return this.getTypedRuleContext(UnarySendContext,0);
};

BinaryMessageContext.prototype.operand = function() {
    return this.getTypedRuleContext(OperandContext,0);
};

BinaryMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.enterBinaryMessage(this);
	}
};

BinaryMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof SmalltalkListener ) {
        listener.exitBinaryMessage(this);
	}
};




SmalltalkParser.BinaryMessageContext = BinaryMessageContext;

SmalltalkParser.prototype.binaryMessage = function() {

    var localctx = new BinaryMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, SmalltalkParser.RULE_binaryMessage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.ws();
        this.state = 406;
        this.match(SmalltalkParser.BINARY_SELECTOR);
        this.state = 407;
        this.ws();
        this.state = 410;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
        switch(la_) {
        case 1:
            this.state = 408;
            this.unarySend();
            break;

        case 2:
            this.state = 409;
            this.operand();
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


exports.SmalltalkParser = SmalltalkParser;
