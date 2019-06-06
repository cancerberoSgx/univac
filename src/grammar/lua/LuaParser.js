// @ts-nocheck
// Generated from Lua.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var LuaListener = require('./LuaListener').LuaListener;
var grammarFileName = "Lua.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003E\u0193\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0007\u0003M\n\u0003\f\u0003",
    "\u000e\u0003P\u000b\u0003\u0003\u0003\u0005\u0003S\n\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004w\n\u0004\f\u0004\u000e",
    "\u0004z\u000b\u0004\u0003\u0004\u0003\u0004\u0005\u0004~\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u008a\n\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0005\u0004\u00a4\n\u0004\u0005\u0004\u00a6\n\u0004\u0003\u0005\u0003",
    "\u0005\u0005\u0005\u00aa\n\u0005\u0003\u0005\u0005\u0005\u00ad\n\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0007\u0007\u00b6\n\u0007\f\u0007\u000e\u0007\u00b9\u000b",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u00bd\n\u0007\u0003\b\u0003",
    "\b\u0003\b\u0007\b\u00c2\n\b\f\b\u000e\b\u00c5\u000b\b\u0003\t\u0003",
    "\t\u0003\t\u0007\t\u00ca\n\t\f\t\u000e\t\u00cd\u000b\t\u0003\n\u0003",
    "\n\u0003\n\u0007\n\u00d2\n\n\f\n\u000e\n\u00d5\u000b\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005",
    "\u000b\u00e4\n\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u0106\n",
    "\u000b\f\u000b\u000e\u000b\u0109\u000b\u000b\u0003\f\u0003\f\u0007\f",
    "\u010d\n\f\f\f\u000e\f\u0110\u000b\f\u0003\r\u0003\r\u0006\r\u0114\n",
    "\r\r\r\u000e\r\u0115\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0005\u000e\u011d\n\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u0125\n\u000f",
    "\u0003\u000f\u0007\u000f\u0128\n\u000f\f\u000f\u000e\u000f\u012b\u000b",
    "\u000f\u0003\u0010\u0007\u0010\u012e\n\u0010\f\u0010\u000e\u0010\u0131",
    "\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0139\n\u0010\u0003\u0011\u0003\u0011\u0005",
    "\u0011\u013d\n\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012",
    "\u0005\u0012\u0143\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u0148\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0005\u0014\u014f\n\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u0158",
    "\n\u0015\u0003\u0015\u0005\u0015\u015b\n\u0015\u0003\u0016\u0003\u0016",
    "\u0005\u0016\u015f\n\u0016\u0003\u0016\u0003\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0007\u0017\u0167\n\u0017\f\u0017\u000e",
    "\u0017\u016a\u000b\u0017\u0003\u0017\u0005\u0017\u016d\n\u0017\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0018\u0003\u0018\u0005\u0018\u0179\n\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003!\u0003!\u0003\"\u0003\"",
    "\u0003#\u0003#\u0003$\u0003$\u0003$\u0002\u0003\u0014%\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@BDF\u0002\n\u0004\u0002\u0003\u0003\u0011\u0011\u0003\u0002",
    "%*\u0003\u0002,-\u0003\u0002.1\u0003\u000226\u0005\u0002--4478\u0003",
    "\u0002>A\u0003\u0002;=\u0002\u01ae\u0002H\u0003\u0002\u0002\u0002\u0004",
    "N\u0003\u0002\u0002\u0002\u0006\u00a5\u0003\u0002\u0002\u0002\b\u00a7",
    "\u0003\u0002\u0002\u0002\n\u00ae\u0003\u0002\u0002\u0002\f\u00b2\u0003",
    "\u0002\u0002\u0002\u000e\u00be\u0003\u0002\u0002\u0002\u0010\u00c6\u0003",
    "\u0002\u0002\u0002\u0012\u00ce\u0003\u0002\u0002\u0002\u0014\u00e3\u0003",
    "\u0002\u0002\u0002\u0016\u010a\u0003\u0002\u0002\u0002\u0018\u0111\u0003",
    "\u0002\u0002\u0002\u001a\u011c\u0003\u0002\u0002\u0002\u001c\u0124\u0003",
    "\u0002\u0002\u0002\u001e\u012f\u0003\u0002\u0002\u0002 \u013c\u0003",
    "\u0002\u0002\u0002\"\u0147\u0003\u0002\u0002\u0002$\u0149\u0003\u0002",
    "\u0002\u0002&\u014c\u0003\u0002\u0002\u0002(\u015a\u0003\u0002\u0002",
    "\u0002*\u015c\u0003\u0002\u0002\u0002,\u0162\u0003\u0002\u0002\u0002",
    ".\u0178\u0003\u0002\u0002\u00020\u017a\u0003\u0002\u0002\u00022\u017c",
    "\u0003\u0002\u0002\u00024\u017e\u0003\u0002\u0002\u00026\u0180\u0003",
    "\u0002\u0002\u00028\u0182\u0003\u0002\u0002\u0002:\u0184\u0003\u0002",
    "\u0002\u0002<\u0186\u0003\u0002\u0002\u0002>\u0188\u0003\u0002\u0002",
    "\u0002@\u018a\u0003\u0002\u0002\u0002B\u018c\u0003\u0002\u0002\u0002",
    "D\u018e\u0003\u0002\u0002\u0002F\u0190\u0003\u0002\u0002\u0002HI\u0005",
    "\u0004\u0003\u0002IJ\u0007\u0002\u0002\u0003J\u0003\u0003\u0002\u0002",
    "\u0002KM\u0005\u0006\u0004\u0002LK\u0003\u0002\u0002\u0002MP\u0003\u0002",
    "\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002\u0002\u0002OR\u0003",
    "\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002QS\u0005\b\u0005\u0002R",
    "Q\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002S\u0005\u0003\u0002",
    "\u0002\u0002T\u00a6\u0007\u0003\u0002\u0002UV\u0005\u000e\b\u0002VW",
    "\u0007\u0004\u0002\u0002WX\u0005\u0012\n\u0002X\u00a6\u0003\u0002\u0002",
    "\u0002Y\u00a6\u0005\u0018\r\u0002Z\u00a6\u0005\n\u0006\u0002[\u00a6",
    "\u0007\u0005\u0002\u0002\\]\u0007\u0006\u0002\u0002]\u00a6\u0007:\u0002",
    "\u0002^_\u0007\u0007\u0002\u0002_`\u0005\u0004\u0003\u0002`a\u0007\b",
    "\u0002\u0002a\u00a6\u0003\u0002\u0002\u0002bc\u0007\t\u0002\u0002cd",
    "\u0005\u0014\u000b\u0002de\u0007\u0007\u0002\u0002ef\u0005\u0004\u0003",
    "\u0002fg\u0007\b\u0002\u0002g\u00a6\u0003\u0002\u0002\u0002hi\u0007",
    "\n\u0002\u0002ij\u0005\u0004\u0003\u0002jk\u0007\u000b\u0002\u0002k",
    "l\u0005\u0014\u000b\u0002l\u00a6\u0003\u0002\u0002\u0002mn\u0007\f\u0002",
    "\u0002no\u0005\u0014\u000b\u0002op\u0007\r\u0002\u0002px\u0005\u0004",
    "\u0003\u0002qr\u0007\u000e\u0002\u0002rs\u0005\u0014\u000b\u0002st\u0007",
    "\r\u0002\u0002tu\u0005\u0004\u0003\u0002uw\u0003\u0002\u0002\u0002v",
    "q\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002\u0002xv\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002y}\u0003\u0002\u0002\u0002zx\u0003\u0002",
    "\u0002\u0002{|\u0007\u000f\u0002\u0002|~\u0005\u0004\u0003\u0002}{\u0003",
    "\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0007\b\u0002\u0002\u0080\u00a6\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0007\u0010\u0002\u0002\u0082\u0083\u0007:\u0002",
    "\u0002\u0083\u0084\u0007\u0004\u0002\u0002\u0084\u0085\u0005\u0014\u000b",
    "\u0002\u0085\u0086\u0007\u0011\u0002\u0002\u0086\u0089\u0005\u0014\u000b",
    "\u0002\u0087\u0088\u0007\u0011\u0002\u0002\u0088\u008a\u0005\u0014\u000b",
    "\u0002\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002",
    "\u0002\u008a\u008b\u0003\u0002\u0002\u0002\u008b\u008c\u0007\u0007\u0002",
    "\u0002\u008c\u008d\u0005\u0004\u0003\u0002\u008d\u008e\u0007\b\u0002",
    "\u0002\u008e\u00a6\u0003\u0002\u0002\u0002\u008f\u0090\u0007\u0010\u0002",
    "\u0002\u0090\u0091\u0005\u0010\t\u0002\u0091\u0092\u0007\u0012\u0002",
    "\u0002\u0092\u0093\u0005\u0012\n\u0002\u0093\u0094\u0007\u0007\u0002",
    "\u0002\u0094\u0095\u0005\u0004\u0003\u0002\u0095\u0096\u0007\b\u0002",
    "\u0002\u0096\u00a6\u0003\u0002\u0002\u0002\u0097\u0098\u0007\u0013\u0002",
    "\u0002\u0098\u0099\u0005\f\u0007\u0002\u0099\u009a\u0005&\u0014\u0002",
    "\u009a\u00a6\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u0014\u0002\u0002",
    "\u009c\u009d\u0007\u0013\u0002\u0002\u009d\u009e\u0007:\u0002\u0002",
    "\u009e\u00a6\u0005&\u0014\u0002\u009f\u00a0\u0007\u0014\u0002\u0002",
    "\u00a0\u00a3\u0005\u0010\t\u0002\u00a1\u00a2\u0007\u0004\u0002\u0002",
    "\u00a2\u00a4\u0005\u0012\n\u0002\u00a3\u00a1\u0003\u0002\u0002\u0002",
    "\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a6\u0003\u0002\u0002\u0002",
    "\u00a5T\u0003\u0002\u0002\u0002\u00a5U\u0003\u0002\u0002\u0002\u00a5",
    "Y\u0003\u0002\u0002\u0002\u00a5Z\u0003\u0002\u0002\u0002\u00a5[\u0003",
    "\u0002\u0002\u0002\u00a5\\\u0003\u0002\u0002\u0002\u00a5^\u0003\u0002",
    "\u0002\u0002\u00a5b\u0003\u0002\u0002\u0002\u00a5h\u0003\u0002\u0002",
    "\u0002\u00a5m\u0003\u0002\u0002\u0002\u00a5\u0081\u0003\u0002\u0002",
    "\u0002\u00a5\u008f\u0003\u0002\u0002\u0002\u00a5\u0097\u0003\u0002\u0002",
    "\u0002\u00a5\u009b\u0003\u0002\u0002\u0002\u00a5\u009f\u0003\u0002\u0002",
    "\u0002\u00a6\u0007\u0003\u0002\u0002\u0002\u00a7\u00a9\u0007\u0015\u0002",
    "\u0002\u00a8\u00aa\u0005\u0012\n\u0002\u00a9\u00a8\u0003\u0002\u0002",
    "\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002\u00aa\u00ac\u0003\u0002\u0002",
    "\u0002\u00ab\u00ad\u0007\u0003\u0002\u0002\u00ac\u00ab\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\t\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\u0007\u0016\u0002\u0002\u00af\u00b0\u0007:\u0002",
    "\u0002\u00b0\u00b1\u0007\u0016\u0002\u0002\u00b1\u000b\u0003\u0002\u0002",
    "\u0002\u00b2\u00b7\u0007:\u0002\u0002\u00b3\u00b4\u0007\u0017\u0002",
    "\u0002\u00b4\u00b6\u0007:\u0002\u0002\u00b5\u00b3\u0003\u0002\u0002",
    "\u0002\u00b6\u00b9\u0003\u0002\u0002\u0002\u00b7\u00b5\u0003\u0002\u0002",
    "\u0002\u00b7\u00b8\u0003\u0002\u0002\u0002\u00b8\u00bc\u0003\u0002\u0002",
    "\u0002\u00b9\u00b7\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007\u0018\u0002",
    "\u0002\u00bb\u00bd\u0007:\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002",
    "\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd\r\u0003\u0002\u0002",
    "\u0002\u00be\u00c3\u0005\u001c\u000f\u0002\u00bf\u00c0\u0007\u0011\u0002",
    "\u0002\u00c0\u00c2\u0005\u001c\u000f\u0002\u00c1\u00bf\u0003\u0002\u0002",
    "\u0002\u00c2\u00c5\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002",
    "\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u000f\u0003\u0002\u0002",
    "\u0002\u00c5\u00c3\u0003\u0002\u0002\u0002\u00c6\u00cb\u0007:\u0002",
    "\u0002\u00c7\u00c8\u0007\u0011\u0002\u0002\u00c8\u00ca\u0007:\u0002",
    "\u0002\u00c9\u00c7\u0003\u0002\u0002\u0002\u00ca\u00cd\u0003\u0002\u0002",
    "\u0002\u00cb\u00c9\u0003\u0002\u0002\u0002\u00cb\u00cc\u0003\u0002\u0002",
    "\u0002\u00cc\u0011\u0003\u0002\u0002\u0002\u00cd\u00cb\u0003\u0002\u0002",
    "\u0002\u00ce\u00d3\u0005\u0014\u000b\u0002\u00cf\u00d0\u0007\u0011\u0002",
    "\u0002\u00d0\u00d2\u0005\u0014\u000b\u0002\u00d1\u00cf\u0003\u0002\u0002",
    "\u0002\u00d2\u00d5\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002",
    "\u0002\u00d3\u00d4\u0003\u0002\u0002\u0002\u00d4\u0013\u0003\u0002\u0002",
    "\u0002\u00d5\u00d3\u0003\u0002\u0002\u0002\u00d6\u00d7\b\u000b\u0001",
    "\u0002\u00d7\u00e4\u0007\u0019\u0002\u0002\u00d8\u00e4\u0007\u001a\u0002",
    "\u0002\u00d9\u00e4\u0007\u001b\u0002\u0002\u00da\u00e4\u0005D#\u0002",
    "\u00db\u00e4\u0005F$\u0002\u00dc\u00e4\u0007\u001c\u0002\u0002\u00dd",
    "\u00e4\u0005$\u0013\u0002\u00de\u00e4\u0005\u0016\f\u0002\u00df\u00e4",
    "\u0005*\u0016\u0002\u00e0\u00e1\u0005@!\u0002\u00e1\u00e2\u0005\u0014",
    "\u000b\n\u00e2\u00e4\u0003\u0002\u0002\u0002\u00e3\u00d6\u0003\u0002",
    "\u0002\u0002\u00e3\u00d8\u0003\u0002\u0002\u0002\u00e3\u00d9\u0003\u0002",
    "\u0002\u0002\u00e3\u00da\u0003\u0002\u0002\u0002\u00e3\u00db\u0003\u0002",
    "\u0002\u0002\u00e3\u00dc\u0003\u0002\u0002\u0002\u00e3\u00dd\u0003\u0002",
    "\u0002\u0002\u00e3\u00de\u0003\u0002\u0002\u0002\u00e3\u00df\u0003\u0002",
    "\u0002\u0002\u00e3\u00e0\u0003\u0002\u0002\u0002\u00e4\u0107\u0003\u0002",
    "\u0002\u0002\u00e5\u00e6\f\u000b\u0002\u0002\u00e6\u00e7\u0005B\"\u0002",
    "\u00e7\u00e8\u0005\u0014\u000b\u000b\u00e8\u0106\u0003\u0002\u0002\u0002",
    "\u00e9\u00ea\f\t\u0002\u0002\u00ea\u00eb\u0005<\u001f\u0002\u00eb\u00ec",
    "\u0005\u0014\u000b\n\u00ec\u0106\u0003\u0002\u0002\u0002\u00ed\u00ee",
    "\f\b\u0002\u0002\u00ee\u00ef\u0005:\u001e\u0002\u00ef\u00f0\u0005\u0014",
    "\u000b\t\u00f0\u0106\u0003\u0002\u0002\u0002\u00f1\u00f2\f\u0007\u0002",
    "\u0002\u00f2\u00f3\u00058\u001d\u0002\u00f3\u00f4\u0005\u0014\u000b",
    "\u0007\u00f4\u0106\u0003\u0002\u0002\u0002\u00f5\u00f6\f\u0006\u0002",
    "\u0002\u00f6\u00f7\u00056\u001c\u0002\u00f7\u00f8\u0005\u0014\u000b",
    "\u0007\u00f8\u0106\u0003\u0002\u0002\u0002\u00f9\u00fa\f\u0005\u0002",
    "\u0002\u00fa\u00fb\u00054\u001b\u0002\u00fb\u00fc\u0005\u0014\u000b",
    "\u0006\u00fc\u0106\u0003\u0002\u0002\u0002\u00fd\u00fe\f\u0004\u0002",
    "\u0002\u00fe\u00ff\u00052\u001a\u0002\u00ff\u0100\u0005\u0014\u000b",
    "\u0005\u0100\u0106\u0003\u0002\u0002\u0002\u0101\u0102\f\u0003\u0002",
    "\u0002\u0102\u0103\u0005> \u0002\u0103\u0104\u0005\u0014\u000b\u0004",
    "\u0104\u0106\u0003\u0002\u0002\u0002\u0105\u00e5\u0003\u0002\u0002\u0002",
    "\u0105\u00e9\u0003\u0002\u0002\u0002\u0105\u00ed\u0003\u0002\u0002\u0002",
    "\u0105\u00f1\u0003\u0002\u0002\u0002\u0105\u00f5\u0003\u0002\u0002\u0002",
    "\u0105\u00f9\u0003\u0002\u0002\u0002\u0105\u00fd\u0003\u0002\u0002\u0002",
    "\u0105\u0101\u0003\u0002\u0002\u0002\u0106\u0109\u0003\u0002\u0002\u0002",
    "\u0107\u0105\u0003\u0002\u0002\u0002\u0107\u0108\u0003\u0002\u0002\u0002",
    "\u0108\u0015\u0003\u0002\u0002\u0002\u0109\u0107\u0003\u0002\u0002\u0002",
    "\u010a\u010e\u0005\u001a\u000e\u0002\u010b\u010d\u0005 \u0011\u0002",
    "\u010c\u010b\u0003\u0002\u0002\u0002\u010d\u0110\u0003\u0002\u0002\u0002",
    "\u010e\u010c\u0003\u0002\u0002\u0002\u010e\u010f\u0003\u0002\u0002\u0002",
    "\u010f\u0017\u0003\u0002\u0002\u0002\u0110\u010e\u0003\u0002\u0002\u0002",
    "\u0111\u0113\u0005\u001a\u000e\u0002\u0112\u0114\u0005 \u0011\u0002",
    "\u0113\u0112\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002",
    "\u0115\u0113\u0003\u0002\u0002\u0002\u0115\u0116\u0003\u0002\u0002\u0002",
    "\u0116\u0019\u0003\u0002\u0002\u0002\u0117\u011d\u0005\u001c\u000f\u0002",
    "\u0118\u0119\u0007\u001d\u0002\u0002\u0119\u011a\u0005\u0014\u000b\u0002",
    "\u011a\u011b\u0007\u001e\u0002\u0002\u011b\u011d\u0003\u0002\u0002\u0002",
    "\u011c\u0117\u0003\u0002\u0002\u0002\u011c\u0118\u0003\u0002\u0002\u0002",
    "\u011d\u001b\u0003\u0002\u0002\u0002\u011e\u0125\u0007:\u0002\u0002",
    "\u011f\u0120\u0007\u001d\u0002\u0002\u0120\u0121\u0005\u0014\u000b\u0002",
    "\u0121\u0122\u0007\u001e\u0002\u0002\u0122\u0123\u0005\u001e\u0010\u0002",
    "\u0123\u0125\u0003\u0002\u0002\u0002\u0124\u011e\u0003\u0002\u0002\u0002",
    "\u0124\u011f\u0003\u0002\u0002\u0002\u0125\u0129\u0003\u0002\u0002\u0002",
    "\u0126\u0128\u0005\u001e\u0010\u0002\u0127\u0126\u0003\u0002\u0002\u0002",
    "\u0128\u012b\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002",
    "\u0129\u012a\u0003\u0002\u0002\u0002\u012a\u001d\u0003\u0002\u0002\u0002",
    "\u012b\u0129\u0003\u0002\u0002\u0002\u012c\u012e\u0005 \u0011\u0002",
    "\u012d\u012c\u0003\u0002\u0002\u0002\u012e\u0131\u0003\u0002\u0002\u0002",
    "\u012f\u012d\u0003\u0002\u0002\u0002\u012f\u0130\u0003\u0002\u0002\u0002",
    "\u0130\u0138\u0003\u0002\u0002\u0002\u0131\u012f\u0003\u0002\u0002\u0002",
    "\u0132\u0133\u0007\u001f\u0002\u0002\u0133\u0134\u0005\u0014\u000b\u0002",
    "\u0134\u0135\u0007 \u0002\u0002\u0135\u0139\u0003\u0002\u0002\u0002",
    "\u0136\u0137\u0007\u0017\u0002\u0002\u0137\u0139\u0007:\u0002\u0002",
    "\u0138\u0132\u0003\u0002\u0002\u0002\u0138\u0136\u0003\u0002\u0002\u0002",
    "\u0139\u001f\u0003\u0002\u0002\u0002\u013a\u013b\u0007\u0018\u0002\u0002",
    "\u013b\u013d\u0007:\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002",
    "\u013c\u013d\u0003\u0002\u0002\u0002\u013d\u013e\u0003\u0002\u0002\u0002",
    "\u013e\u013f\u0005\"\u0012\u0002\u013f!\u0003\u0002\u0002\u0002\u0140",
    "\u0142\u0007\u001d\u0002\u0002\u0141\u0143\u0005\u0012\n\u0002\u0142",
    "\u0141\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143",
    "\u0144\u0003\u0002\u0002\u0002\u0144\u0148\u0007\u001e\u0002\u0002\u0145",
    "\u0148\u0005*\u0016\u0002\u0146\u0148\u0005F$\u0002\u0147\u0140\u0003",
    "\u0002\u0002\u0002\u0147\u0145\u0003\u0002\u0002\u0002\u0147\u0146\u0003",
    "\u0002\u0002\u0002\u0148#\u0003\u0002\u0002\u0002\u0149\u014a\u0007",
    "\u0013\u0002\u0002\u014a\u014b\u0005&\u0014\u0002\u014b%\u0003\u0002",
    "\u0002\u0002\u014c\u014e\u0007\u001d\u0002\u0002\u014d\u014f\u0005(",
    "\u0015\u0002\u014e\u014d\u0003\u0002\u0002\u0002\u014e\u014f\u0003\u0002",
    "\u0002\u0002\u014f\u0150\u0003\u0002\u0002\u0002\u0150\u0151\u0007\u001e",
    "\u0002\u0002\u0151\u0152\u0005\u0004\u0003\u0002\u0152\u0153\u0007\b",
    "\u0002\u0002\u0153\'\u0003\u0002\u0002\u0002\u0154\u0157\u0005\u0010",
    "\t\u0002\u0155\u0156\u0007\u0011\u0002\u0002\u0156\u0158\u0007\u001c",
    "\u0002\u0002\u0157\u0155\u0003\u0002\u0002\u0002\u0157\u0158\u0003\u0002",
    "\u0002\u0002\u0158\u015b\u0003\u0002\u0002\u0002\u0159\u015b\u0007\u001c",
    "\u0002\u0002\u015a\u0154\u0003\u0002\u0002\u0002\u015a\u0159\u0003\u0002",
    "\u0002\u0002\u015b)\u0003\u0002\u0002\u0002\u015c\u015e\u0007!\u0002",
    "\u0002\u015d\u015f\u0005,\u0017\u0002\u015e\u015d\u0003\u0002\u0002",
    "\u0002\u015e\u015f\u0003\u0002\u0002\u0002\u015f\u0160\u0003\u0002\u0002",
    "\u0002\u0160\u0161\u0007\"\u0002\u0002\u0161+\u0003\u0002\u0002\u0002",
    "\u0162\u0168\u0005.\u0018\u0002\u0163\u0164\u00050\u0019\u0002\u0164",
    "\u0165\u0005.\u0018\u0002\u0165\u0167\u0003\u0002\u0002\u0002\u0166",
    "\u0163\u0003\u0002\u0002\u0002\u0167\u016a\u0003\u0002\u0002\u0002\u0168",
    "\u0166\u0003\u0002\u0002\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u0169",
    "\u016c\u0003\u0002\u0002\u0002\u016a\u0168\u0003\u0002\u0002\u0002\u016b",
    "\u016d\u00050\u0019\u0002\u016c\u016b\u0003\u0002\u0002\u0002\u016c",
    "\u016d\u0003\u0002\u0002\u0002\u016d-\u0003\u0002\u0002\u0002\u016e",
    "\u016f\u0007\u001f\u0002\u0002\u016f\u0170\u0005\u0014\u000b\u0002\u0170",
    "\u0171\u0007 \u0002\u0002\u0171\u0172\u0007\u0004\u0002\u0002\u0172",
    "\u0173\u0005\u0014\u000b\u0002\u0173\u0179\u0003\u0002\u0002\u0002\u0174",
    "\u0175\u0007:\u0002\u0002\u0175\u0176\u0007\u0004\u0002\u0002\u0176",
    "\u0179\u0005\u0014\u000b\u0002\u0177\u0179\u0005\u0014\u000b\u0002\u0178",
    "\u016e\u0003\u0002\u0002\u0002\u0178\u0174\u0003\u0002\u0002\u0002\u0178",
    "\u0177\u0003\u0002\u0002\u0002\u0179/\u0003\u0002\u0002\u0002\u017a",
    "\u017b\t\u0002\u0002\u0002\u017b1\u0003\u0002\u0002\u0002\u017c\u017d",
    "\u0007#\u0002\u0002\u017d3\u0003\u0002\u0002\u0002\u017e\u017f\u0007",
    "$\u0002\u0002\u017f5\u0003\u0002\u0002\u0002\u0180\u0181\t\u0003\u0002",
    "\u0002\u01817\u0003\u0002\u0002\u0002\u0182\u0183\u0007+\u0002\u0002",
    "\u01839\u0003\u0002\u0002\u0002\u0184\u0185\t\u0004\u0002\u0002\u0185",
    ";\u0003\u0002\u0002\u0002\u0186\u0187\t\u0005\u0002\u0002\u0187=\u0003",
    "\u0002\u0002\u0002\u0188\u0189\t\u0006\u0002\u0002\u0189?\u0003\u0002",
    "\u0002\u0002\u018a\u018b\t\u0007\u0002\u0002\u018bA\u0003\u0002\u0002",
    "\u0002\u018c\u018d\u00079\u0002\u0002\u018dC\u0003\u0002\u0002\u0002",
    "\u018e\u018f\t\b\u0002\u0002\u018fE\u0003\u0002\u0002\u0002\u0190\u0191",
    "\t\t\u0002\u0002\u0191G\u0003\u0002\u0002\u0002$NRx}\u0089\u00a3\u00a5",
    "\u00a9\u00ac\u00b7\u00bc\u00c3\u00cb\u00d3\u00e3\u0105\u0107\u010e\u0115",
    "\u011c\u0124\u0129\u012f\u0138\u013c\u0142\u0147\u014e\u0157\u015a\u015e",
    "\u0168\u016c\u0178"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'='", "'break'", "'goto'", "'do'", "'end'", 
                     "'while'", "'repeat'", "'until'", "'if'", "'then'", 
                     "'elseif'", "'else'", "'for'", "','", "'in'", "'function'", 
                     "'local'", "'return'", "'::'", "'.'", "':'", "'nil'", 
                     "'false'", "'true'", "'...'", "'('", "')'", "'['", 
                     "']'", "'{'", "'}'", "'or'", "'and'", "'<'", "'>'", 
                     "'<='", "'>='", "'~='", "'=='", "'..'", "'+'", "'-'", 
                     "'*'", "'/'", "'%'", "'//'", "'&'", "'|'", "'~'", "'<<'", 
                     "'>>'", "'not'", "'#'", "'^'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, "NAME", "NORMALSTRING", "CHARSTRING", 
                      "LONGSTRING", "INT", "HEX", "FLOAT", "HEX_FLOAT", 
                      "COMMENT", "LINE_COMMENT", "WS", "SHEBANG" ];

var ruleNames =  [ "chunk", "block", "stat", "retstat", "label", "funcname", 
                   "varlist", "namelist", "explist", "exp", "prefixexp", 
                   "functioncall", "varOrExp", "var", "varSuffix", "nameAndArgs", 
                   "args", "functiondef", "funcbody", "parlist", "tableconstructor", 
                   "fieldlist", "field", "fieldsep", "operatorOr", "operatorAnd", 
                   "operatorComparison", "operatorStrcat", "operatorAddSub", 
                   "operatorMulDivMod", "operatorBitwise", "operatorUnary", 
                   "operatorPower", "number", "string" ];

function LuaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

LuaParser.prototype = Object.create(antlr4.Parser.prototype);
LuaParser.prototype.constructor = LuaParser;

Object.defineProperty(LuaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

LuaParser.EOF = antlr4.Token.EOF;
LuaParser.T__0 = 1;
LuaParser.T__1 = 2;
LuaParser.T__2 = 3;
LuaParser.T__3 = 4;
LuaParser.T__4 = 5;
LuaParser.T__5 = 6;
LuaParser.T__6 = 7;
LuaParser.T__7 = 8;
LuaParser.T__8 = 9;
LuaParser.T__9 = 10;
LuaParser.T__10 = 11;
LuaParser.T__11 = 12;
LuaParser.T__12 = 13;
LuaParser.T__13 = 14;
LuaParser.T__14 = 15;
LuaParser.T__15 = 16;
LuaParser.T__16 = 17;
LuaParser.T__17 = 18;
LuaParser.T__18 = 19;
LuaParser.T__19 = 20;
LuaParser.T__20 = 21;
LuaParser.T__21 = 22;
LuaParser.T__22 = 23;
LuaParser.T__23 = 24;
LuaParser.T__24 = 25;
LuaParser.T__25 = 26;
LuaParser.T__26 = 27;
LuaParser.T__27 = 28;
LuaParser.T__28 = 29;
LuaParser.T__29 = 30;
LuaParser.T__30 = 31;
LuaParser.T__31 = 32;
LuaParser.T__32 = 33;
LuaParser.T__33 = 34;
LuaParser.T__34 = 35;
LuaParser.T__35 = 36;
LuaParser.T__36 = 37;
LuaParser.T__37 = 38;
LuaParser.T__38 = 39;
LuaParser.T__39 = 40;
LuaParser.T__40 = 41;
LuaParser.T__41 = 42;
LuaParser.T__42 = 43;
LuaParser.T__43 = 44;
LuaParser.T__44 = 45;
LuaParser.T__45 = 46;
LuaParser.T__46 = 47;
LuaParser.T__47 = 48;
LuaParser.T__48 = 49;
LuaParser.T__49 = 50;
LuaParser.T__50 = 51;
LuaParser.T__51 = 52;
LuaParser.T__52 = 53;
LuaParser.T__53 = 54;
LuaParser.T__54 = 55;
LuaParser.NAME = 56;
LuaParser.NORMALSTRING = 57;
LuaParser.CHARSTRING = 58;
LuaParser.LONGSTRING = 59;
LuaParser.INT = 60;
LuaParser.HEX = 61;
LuaParser.FLOAT = 62;
LuaParser.HEX_FLOAT = 63;
LuaParser.COMMENT = 64;
LuaParser.LINE_COMMENT = 65;
LuaParser.WS = 66;
LuaParser.SHEBANG = 67;

LuaParser.RULE_chunk = 0;
LuaParser.RULE_block = 1;
LuaParser.RULE_stat = 2;
LuaParser.RULE_retstat = 3;
LuaParser.RULE_label = 4;
LuaParser.RULE_funcname = 5;
LuaParser.RULE_varlist = 6;
LuaParser.RULE_namelist = 7;
LuaParser.RULE_explist = 8;
LuaParser.RULE_exp = 9;
LuaParser.RULE_prefixexp = 10;
LuaParser.RULE_functioncall = 11;
LuaParser.RULE_varOrExp = 12;
LuaParser.RULE_var = 13;
LuaParser.RULE_varSuffix = 14;
LuaParser.RULE_nameAndArgs = 15;
LuaParser.RULE_args = 16;
LuaParser.RULE_functiondef = 17;
LuaParser.RULE_funcbody = 18;
LuaParser.RULE_parlist = 19;
LuaParser.RULE_tableconstructor = 20;
LuaParser.RULE_fieldlist = 21;
LuaParser.RULE_field = 22;
LuaParser.RULE_fieldsep = 23;
LuaParser.RULE_operatorOr = 24;
LuaParser.RULE_operatorAnd = 25;
LuaParser.RULE_operatorComparison = 26;
LuaParser.RULE_operatorStrcat = 27;
LuaParser.RULE_operatorAddSub = 28;
LuaParser.RULE_operatorMulDivMod = 29;
LuaParser.RULE_operatorBitwise = 30;
LuaParser.RULE_operatorUnary = 31;
LuaParser.RULE_operatorPower = 32;
LuaParser.RULE_number = 33;
LuaParser.RULE_string = 34;


function ChunkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_chunk;
    return this;
}

ChunkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChunkContext.prototype.constructor = ChunkContext;

ChunkContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

ChunkContext.prototype.EOF = function() {
    return this.getToken(LuaParser.EOF, 0);
};

ChunkContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterChunk(this);
	}
};

ChunkContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitChunk(this);
	}
};




LuaParser.ChunkContext = ChunkContext;

LuaParser.prototype.chunk = function() {

    var localctx = new ChunkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, LuaParser.RULE_chunk);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 70;
        this.block();
        this.state = 71;
        this.match(LuaParser.EOF);
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
    this.ruleIndex = LuaParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.stat = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatContext);
    } else {
        return this.getTypedRuleContext(StatContext,i);
    }
};

BlockContext.prototype.retstat = function() {
    return this.getTypedRuleContext(RetstatContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitBlock(this);
	}
};




LuaParser.BlockContext = BlockContext;

LuaParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, LuaParser.RULE_block);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__0) | (1 << LuaParser.T__2) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__6) | (1 << LuaParser.T__7) | (1 << LuaParser.T__9) | (1 << LuaParser.T__13) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__19) | (1 << LuaParser.T__26))) !== 0) || _la===LuaParser.NAME) {
            this.state = 73;
            this.stat();
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 80;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__18) {
            this.state = 79;
            this.retstat();
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


function StatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_stat;
    return this;
}

StatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatContext.prototype.constructor = StatContext;

StatContext.prototype.varlist = function() {
    return this.getTypedRuleContext(VarlistContext,0);
};

StatContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

StatContext.prototype.functioncall = function() {
    return this.getTypedRuleContext(FunctioncallContext,0);
};

StatContext.prototype.label = function() {
    return this.getTypedRuleContext(LabelContext,0);
};

StatContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

StatContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

StatContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

StatContext.prototype.namelist = function() {
    return this.getTypedRuleContext(NamelistContext,0);
};

StatContext.prototype.funcname = function() {
    return this.getTypedRuleContext(FuncnameContext,0);
};

StatContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};

StatContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterStat(this);
	}
};

StatContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitStat(this);
	}
};




LuaParser.StatContext = StatContext;

LuaParser.prototype.stat = function() {

    var localctx = new StatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, LuaParser.RULE_stat);
    var _la = 0; // Token type
    try {
        this.state = 163;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.match(LuaParser.T__0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.varlist();
            this.state = 84;
            this.match(LuaParser.T__1);
            this.state = 85;
            this.explist();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 87;
            this.functioncall();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 88;
            this.label();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 89;
            this.match(LuaParser.T__2);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 90;
            this.match(LuaParser.T__3);
            this.state = 91;
            this.match(LuaParser.NAME);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 92;
            this.match(LuaParser.T__4);
            this.state = 93;
            this.block();
            this.state = 94;
            this.match(LuaParser.T__5);
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 96;
            this.match(LuaParser.T__6);
            this.state = 97;
            this.exp(0);
            this.state = 98;
            this.match(LuaParser.T__4);
            this.state = 99;
            this.block();
            this.state = 100;
            this.match(LuaParser.T__5);
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 102;
            this.match(LuaParser.T__7);
            this.state = 103;
            this.block();
            this.state = 104;
            this.match(LuaParser.T__8);
            this.state = 105;
            this.exp(0);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 107;
            this.match(LuaParser.T__9);
            this.state = 108;
            this.exp(0);
            this.state = 109;
            this.match(LuaParser.T__10);
            this.state = 110;
            this.block();
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===LuaParser.T__11) {
                this.state = 111;
                this.match(LuaParser.T__11);
                this.state = 112;
                this.exp(0);
                this.state = 113;
                this.match(LuaParser.T__10);
                this.state = 114;
                this.block();
                this.state = 120;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__12) {
                this.state = 121;
                this.match(LuaParser.T__12);
                this.state = 122;
                this.block();
            }

            this.state = 125;
            this.match(LuaParser.T__5);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 127;
            this.match(LuaParser.T__13);
            this.state = 128;
            this.match(LuaParser.NAME);
            this.state = 129;
            this.match(LuaParser.T__1);
            this.state = 130;
            this.exp(0);
            this.state = 131;
            this.match(LuaParser.T__14);
            this.state = 132;
            this.exp(0);
            this.state = 135;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__14) {
                this.state = 133;
                this.match(LuaParser.T__14);
                this.state = 134;
                this.exp(0);
            }

            this.state = 137;
            this.match(LuaParser.T__4);
            this.state = 138;
            this.block();
            this.state = 139;
            this.match(LuaParser.T__5);
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 141;
            this.match(LuaParser.T__13);
            this.state = 142;
            this.namelist();
            this.state = 143;
            this.match(LuaParser.T__15);
            this.state = 144;
            this.explist();
            this.state = 145;
            this.match(LuaParser.T__4);
            this.state = 146;
            this.block();
            this.state = 147;
            this.match(LuaParser.T__5);
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 149;
            this.match(LuaParser.T__16);
            this.state = 150;
            this.funcname();
            this.state = 151;
            this.funcbody();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 153;
            this.match(LuaParser.T__17);
            this.state = 154;
            this.match(LuaParser.T__16);
            this.state = 155;
            this.match(LuaParser.NAME);
            this.state = 156;
            this.funcbody();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 157;
            this.match(LuaParser.T__17);
            this.state = 158;
            this.namelist();
            this.state = 161;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__1) {
                this.state = 159;
                this.match(LuaParser.T__1);
                this.state = 160;
                this.explist();
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


function RetstatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_retstat;
    return this;
}

RetstatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RetstatContext.prototype.constructor = RetstatContext;

RetstatContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

RetstatContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterRetstat(this);
	}
};

RetstatContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitRetstat(this);
	}
};




LuaParser.RetstatContext = RetstatContext;

LuaParser.prototype.retstat = function() {

    var localctx = new RetstatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, LuaParser.RULE_retstat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(LuaParser.T__18);
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
            this.state = 166;
            this.explist();
        }

        this.state = 170;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__0) {
            this.state = 169;
            this.match(LuaParser.T__0);
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


function LabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_label;
    return this;
}

LabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LabelContext.prototype.constructor = LabelContext;

LabelContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

LabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterLabel(this);
	}
};

LabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitLabel(this);
	}
};




LuaParser.LabelContext = LabelContext;

LuaParser.prototype.label = function() {

    var localctx = new LabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, LuaParser.RULE_label);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 172;
        this.match(LuaParser.T__19);
        this.state = 173;
        this.match(LuaParser.NAME);
        this.state = 174;
        this.match(LuaParser.T__19);
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


function FuncnameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_funcname;
    return this;
}

FuncnameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncnameContext.prototype.constructor = FuncnameContext;

FuncnameContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LuaParser.NAME);
    } else {
        return this.getToken(LuaParser.NAME, i);
    }
};


FuncnameContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterFuncname(this);
	}
};

FuncnameContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitFuncname(this);
	}
};




LuaParser.FuncnameContext = FuncnameContext;

LuaParser.prototype.funcname = function() {

    var localctx = new FuncnameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, LuaParser.RULE_funcname);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(LuaParser.NAME);
        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuaParser.T__20) {
            this.state = 177;
            this.match(LuaParser.T__20);
            this.state = 178;
            this.match(LuaParser.NAME);
            this.state = 183;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 186;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__21) {
            this.state = 184;
            this.match(LuaParser.T__21);
            this.state = 185;
            this.match(LuaParser.NAME);
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


function VarlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_varlist;
    return this;
}

VarlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarlistContext.prototype.constructor = VarlistContext;

VarlistContext.prototype.var = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarContext);
    } else {
        return this.getTypedRuleContext(VarContext,i);
    }
};

VarlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterVarlist(this);
	}
};

VarlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitVarlist(this);
	}
};




LuaParser.VarlistContext = VarlistContext;

LuaParser.prototype.varlist = function() {

    var localctx = new VarlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, LuaParser.RULE_varlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.var();
        this.state = 193;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuaParser.T__14) {
            this.state = 189;
            this.match(LuaParser.T__14);
            this.state = 190;
            this.var();
            this.state = 195;
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


function NamelistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_namelist;
    return this;
}

NamelistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamelistContext.prototype.constructor = NamelistContext;

NamelistContext.prototype.NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(LuaParser.NAME);
    } else {
        return this.getToken(LuaParser.NAME, i);
    }
};


NamelistContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterNamelist(this);
	}
};

NamelistContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitNamelist(this);
	}
};




LuaParser.NamelistContext = NamelistContext;

LuaParser.prototype.namelist = function() {

    var localctx = new NamelistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, LuaParser.RULE_namelist);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(LuaParser.NAME);
        this.state = 201;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 197;
                this.match(LuaParser.T__14);
                this.state = 198;
                this.match(LuaParser.NAME); 
            }
            this.state = 203;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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


function ExplistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_explist;
    return this;
}

ExplistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExplistContext.prototype.constructor = ExplistContext;

ExplistContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExplistContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterExplist(this);
	}
};

ExplistContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitExplist(this);
	}
};




LuaParser.ExplistContext = ExplistContext;

LuaParser.prototype.explist = function() {

    var localctx = new ExplistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, LuaParser.RULE_explist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.exp(0);
        this.state = 209;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===LuaParser.T__14) {
            this.state = 205;
            this.match(LuaParser.T__14);
            this.state = 206;
            this.exp(0);
            this.state = 211;
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


function ExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_exp;
    return this;
}

ExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpContext.prototype.constructor = ExpContext;

ExpContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

ExpContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ExpContext.prototype.functiondef = function() {
    return this.getTypedRuleContext(FunctiondefContext,0);
};

ExpContext.prototype.prefixexp = function() {
    return this.getTypedRuleContext(PrefixexpContext,0);
};

ExpContext.prototype.tableconstructor = function() {
    return this.getTypedRuleContext(TableconstructorContext,0);
};

ExpContext.prototype.operatorUnary = function() {
    return this.getTypedRuleContext(OperatorUnaryContext,0);
};

ExpContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

ExpContext.prototype.operatorPower = function() {
    return this.getTypedRuleContext(OperatorPowerContext,0);
};

ExpContext.prototype.operatorMulDivMod = function() {
    return this.getTypedRuleContext(OperatorMulDivModContext,0);
};

ExpContext.prototype.operatorAddSub = function() {
    return this.getTypedRuleContext(OperatorAddSubContext,0);
};

ExpContext.prototype.operatorStrcat = function() {
    return this.getTypedRuleContext(OperatorStrcatContext,0);
};

ExpContext.prototype.operatorComparison = function() {
    return this.getTypedRuleContext(OperatorComparisonContext,0);
};

ExpContext.prototype.operatorAnd = function() {
    return this.getTypedRuleContext(OperatorAndContext,0);
};

ExpContext.prototype.operatorOr = function() {
    return this.getTypedRuleContext(OperatorOrContext,0);
};

ExpContext.prototype.operatorBitwise = function() {
    return this.getTypedRuleContext(OperatorBitwiseContext,0);
};

ExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterExp(this);
	}
};

ExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitExp(this);
	}
};



LuaParser.prototype.exp = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 18;
    this.enterRecursionRule(localctx, 18, LuaParser.RULE_exp, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuaParser.T__22:
            this.state = 213;
            this.match(LuaParser.T__22);
            break;
        case LuaParser.T__23:
            this.state = 214;
            this.match(LuaParser.T__23);
            break;
        case LuaParser.T__24:
            this.state = 215;
            this.match(LuaParser.T__24);
            break;
        case LuaParser.INT:
        case LuaParser.HEX:
        case LuaParser.FLOAT:
        case LuaParser.HEX_FLOAT:
            this.state = 216;
            this.number();
            break;
        case LuaParser.NORMALSTRING:
        case LuaParser.CHARSTRING:
        case LuaParser.LONGSTRING:
            this.state = 217;
            this.string();
            break;
        case LuaParser.T__25:
            this.state = 218;
            this.match(LuaParser.T__25);
            break;
        case LuaParser.T__16:
            this.state = 219;
            this.functiondef();
            break;
        case LuaParser.T__26:
        case LuaParser.NAME:
            this.state = 220;
            this.prefixexp();
            break;
        case LuaParser.T__30:
            this.state = 221;
            this.tableconstructor();
            break;
        case LuaParser.T__42:
        case LuaParser.T__49:
        case LuaParser.T__52:
        case LuaParser.T__53:
            this.state = 222;
            this.operatorUnary();
            this.state = 223;
            this.exp(8);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 261;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 259;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 227;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 228;
                    this.operatorPower();
                    this.state = 229;
                    this.exp(9);
                    break;

                case 2:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 231;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 232;
                    this.operatorMulDivMod();
                    this.state = 233;
                    this.exp(8);
                    break;

                case 3:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 235;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 236;
                    this.operatorAddSub();
                    this.state = 237;
                    this.exp(7);
                    break;

                case 4:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 239;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 240;
                    this.operatorStrcat();
                    this.state = 241;
                    this.exp(5);
                    break;

                case 5:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 243;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 244;
                    this.operatorComparison();
                    this.state = 245;
                    this.exp(5);
                    break;

                case 6:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 247;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 248;
                    this.operatorAnd();
                    this.state = 249;
                    this.exp(4);
                    break;

                case 7:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 251;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 252;
                    this.operatorOr();
                    this.state = 253;
                    this.exp(3);
                    break;

                case 8:
                    localctx = new ExpContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
                    this.state = 255;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 256;
                    this.operatorBitwise();
                    this.state = 257;
                    this.exp(2);
                    break;

                } 
            }
            this.state = 263;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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


function PrefixexpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_prefixexp;
    return this;
}

PrefixexpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrefixexpContext.prototype.constructor = PrefixexpContext;

PrefixexpContext.prototype.varOrExp = function() {
    return this.getTypedRuleContext(VarOrExpContext,0);
};

PrefixexpContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

PrefixexpContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterPrefixexp(this);
	}
};

PrefixexpContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitPrefixexp(this);
	}
};




LuaParser.PrefixexpContext = PrefixexpContext;

LuaParser.prototype.prefixexp = function() {

    var localctx = new PrefixexpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, LuaParser.RULE_prefixexp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.varOrExp();
        this.state = 268;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 265;
                this.nameAndArgs(); 
            }
            this.state = 270;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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


function FunctioncallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_functioncall;
    return this;
}

FunctioncallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctioncallContext.prototype.constructor = FunctioncallContext;

FunctioncallContext.prototype.varOrExp = function() {
    return this.getTypedRuleContext(VarOrExpContext,0);
};

FunctioncallContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

FunctioncallContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterFunctioncall(this);
	}
};

FunctioncallContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitFunctioncall(this);
	}
};




LuaParser.FunctioncallContext = FunctioncallContext;

LuaParser.prototype.functioncall = function() {

    var localctx = new FunctioncallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, LuaParser.RULE_functioncall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.varOrExp();
        this.state = 273; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 272;
        		this.nameAndArgs();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 275; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,18, this._ctx);
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


function VarOrExpContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_varOrExp;
    return this;
}

VarOrExpContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarOrExpContext.prototype.constructor = VarOrExpContext;

VarOrExpContext.prototype.var = function() {
    return this.getTypedRuleContext(VarContext,0);
};

VarOrExpContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarOrExpContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterVarOrExp(this);
	}
};

VarOrExpContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitVarOrExp(this);
	}
};




LuaParser.VarOrExpContext = VarOrExpContext;

LuaParser.prototype.varOrExp = function() {

    var localctx = new VarOrExpContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, LuaParser.RULE_varOrExp);
    try {
        this.state = 282;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 277;
            this.var();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 278;
            this.match(LuaParser.T__26);
            this.state = 279;
            this.exp(0);
            this.state = 280;
            this.match(LuaParser.T__27);
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


function VarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_var;
    return this;
}

VarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarContext.prototype.constructor = VarContext;

VarContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

VarContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarContext.prototype.varSuffix = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VarSuffixContext);
    } else {
        return this.getTypedRuleContext(VarSuffixContext,i);
    }
};

VarContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterVar(this);
	}
};

VarContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitVar(this);
	}
};




LuaParser.VarContext = VarContext;

LuaParser.prototype.var = function() {

    var localctx = new VarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, LuaParser.RULE_var);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 290;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuaParser.NAME:
            this.state = 284;
            this.match(LuaParser.NAME);
            break;
        case LuaParser.T__26:
            this.state = 285;
            this.match(LuaParser.T__26);
            this.state = 286;
            this.exp(0);
            this.state = 287;
            this.match(LuaParser.T__27);
            this.state = 288;
            this.varSuffix();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 295;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 292;
                this.varSuffix(); 
            }
            this.state = 297;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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


function VarSuffixContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_varSuffix;
    return this;
}

VarSuffixContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VarSuffixContext.prototype.constructor = VarSuffixContext;

VarSuffixContext.prototype.exp = function() {
    return this.getTypedRuleContext(ExpContext,0);
};

VarSuffixContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

VarSuffixContext.prototype.nameAndArgs = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(NameAndArgsContext);
    } else {
        return this.getTypedRuleContext(NameAndArgsContext,i);
    }
};

VarSuffixContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterVarSuffix(this);
	}
};

VarSuffixContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitVarSuffix(this);
	}
};




LuaParser.VarSuffixContext = VarSuffixContext;

LuaParser.prototype.varSuffix = function() {

    var localctx = new VarSuffixContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, LuaParser.RULE_varSuffix);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__21) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0)) {
            this.state = 298;
            this.nameAndArgs();
            this.state = 303;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 310;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuaParser.T__28:
            this.state = 304;
            this.match(LuaParser.T__28);
            this.state = 305;
            this.exp(0);
            this.state = 306;
            this.match(LuaParser.T__29);
            break;
        case LuaParser.T__20:
            this.state = 308;
            this.match(LuaParser.T__20);
            this.state = 309;
            this.match(LuaParser.NAME);
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


function NameAndArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_nameAndArgs;
    return this;
}

NameAndArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameAndArgsContext.prototype.constructor = NameAndArgsContext;

NameAndArgsContext.prototype.args = function() {
    return this.getTypedRuleContext(ArgsContext,0);
};

NameAndArgsContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

NameAndArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterNameAndArgs(this);
	}
};

NameAndArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitNameAndArgs(this);
	}
};




LuaParser.NameAndArgsContext = NameAndArgsContext;

LuaParser.prototype.nameAndArgs = function() {

    var localctx = new NameAndArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, LuaParser.RULE_nameAndArgs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 314;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__21) {
            this.state = 312;
            this.match(LuaParser.T__21);
            this.state = 313;
            this.match(LuaParser.NAME);
        }

        this.state = 316;
        this.args();
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


function ArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_args;
    return this;
}

ArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgsContext.prototype.constructor = ArgsContext;

ArgsContext.prototype.explist = function() {
    return this.getTypedRuleContext(ExplistContext,0);
};

ArgsContext.prototype.tableconstructor = function() {
    return this.getTypedRuleContext(TableconstructorContext,0);
};

ArgsContext.prototype.string = function() {
    return this.getTypedRuleContext(StringContext,0);
};

ArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterArgs(this);
	}
};

ArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitArgs(this);
	}
};




LuaParser.ArgsContext = ArgsContext;

LuaParser.prototype.args = function() {

    var localctx = new ArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, LuaParser.RULE_args);
    var _la = 0; // Token type
    try {
        this.state = 325;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuaParser.T__26:
            this.enterOuterAlt(localctx, 1);
            this.state = 318;
            this.match(LuaParser.T__26);
            this.state = 320;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
                this.state = 319;
                this.explist();
            }

            this.state = 322;
            this.match(LuaParser.T__27);
            break;
        case LuaParser.T__30:
            this.enterOuterAlt(localctx, 2);
            this.state = 323;
            this.tableconstructor();
            break;
        case LuaParser.NORMALSTRING:
        case LuaParser.CHARSTRING:
        case LuaParser.LONGSTRING:
            this.enterOuterAlt(localctx, 3);
            this.state = 324;
            this.string();
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


function FunctiondefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_functiondef;
    return this;
}

FunctiondefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctiondefContext.prototype.constructor = FunctiondefContext;

FunctiondefContext.prototype.funcbody = function() {
    return this.getTypedRuleContext(FuncbodyContext,0);
};

FunctiondefContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterFunctiondef(this);
	}
};

FunctiondefContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitFunctiondef(this);
	}
};




LuaParser.FunctiondefContext = FunctiondefContext;

LuaParser.prototype.functiondef = function() {

    var localctx = new FunctiondefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, LuaParser.RULE_functiondef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 327;
        this.match(LuaParser.T__16);
        this.state = 328;
        this.funcbody();
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


function FuncbodyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_funcbody;
    return this;
}

FuncbodyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FuncbodyContext.prototype.constructor = FuncbodyContext;

FuncbodyContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

FuncbodyContext.prototype.parlist = function() {
    return this.getTypedRuleContext(ParlistContext,0);
};

FuncbodyContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterFuncbody(this);
	}
};

FuncbodyContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitFuncbody(this);
	}
};




LuaParser.FuncbodyContext = FuncbodyContext;

LuaParser.prototype.funcbody = function() {

    var localctx = new FuncbodyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, LuaParser.RULE_funcbody);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(LuaParser.T__26);
        this.state = 332;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__25 || _la===LuaParser.NAME) {
            this.state = 331;
            this.parlist();
        }

        this.state = 334;
        this.match(LuaParser.T__27);
        this.state = 335;
        this.block();
        this.state = 336;
        this.match(LuaParser.T__5);
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


function ParlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_parlist;
    return this;
}

ParlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParlistContext.prototype.constructor = ParlistContext;

ParlistContext.prototype.namelist = function() {
    return this.getTypedRuleContext(NamelistContext,0);
};

ParlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterParlist(this);
	}
};

ParlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitParlist(this);
	}
};




LuaParser.ParlistContext = ParlistContext;

LuaParser.prototype.parlist = function() {

    var localctx = new ParlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, LuaParser.RULE_parlist);
    var _la = 0; // Token type
    try {
        this.state = 344;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case LuaParser.NAME:
            this.enterOuterAlt(localctx, 1);
            this.state = 338;
            this.namelist();
            this.state = 341;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===LuaParser.T__14) {
                this.state = 339;
                this.match(LuaParser.T__14);
                this.state = 340;
                this.match(LuaParser.T__25);
            }

            break;
        case LuaParser.T__25:
            this.enterOuterAlt(localctx, 2);
            this.state = 343;
            this.match(LuaParser.T__25);
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


function TableconstructorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_tableconstructor;
    return this;
}

TableconstructorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableconstructorContext.prototype.constructor = TableconstructorContext;

TableconstructorContext.prototype.fieldlist = function() {
    return this.getTypedRuleContext(FieldlistContext,0);
};

TableconstructorContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterTableconstructor(this);
	}
};

TableconstructorContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitTableconstructor(this);
	}
};




LuaParser.TableconstructorContext = TableconstructorContext;

LuaParser.prototype.tableconstructor = function() {

    var localctx = new TableconstructorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, LuaParser.RULE_tableconstructor);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(LuaParser.T__30);
        this.state = 348;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__22) | (1 << LuaParser.T__23) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__28) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)) | (1 << (LuaParser.NAME - 43)) | (1 << (LuaParser.NORMALSTRING - 43)) | (1 << (LuaParser.CHARSTRING - 43)) | (1 << (LuaParser.LONGSTRING - 43)) | (1 << (LuaParser.INT - 43)) | (1 << (LuaParser.HEX - 43)) | (1 << (LuaParser.FLOAT - 43)) | (1 << (LuaParser.HEX_FLOAT - 43)))) !== 0)) {
            this.state = 347;
            this.fieldlist();
        }

        this.state = 350;
        this.match(LuaParser.T__31);
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


function FieldlistContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_fieldlist;
    return this;
}

FieldlistContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldlistContext.prototype.constructor = FieldlistContext;

FieldlistContext.prototype.field = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldContext);
    } else {
        return this.getTypedRuleContext(FieldContext,i);
    }
};

FieldlistContext.prototype.fieldsep = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FieldsepContext);
    } else {
        return this.getTypedRuleContext(FieldsepContext,i);
    }
};

FieldlistContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterFieldlist(this);
	}
};

FieldlistContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitFieldlist(this);
	}
};




LuaParser.FieldlistContext = FieldlistContext;

LuaParser.prototype.fieldlist = function() {

    var localctx = new FieldlistContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, LuaParser.RULE_fieldlist);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.field();
        this.state = 358;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 353;
                this.fieldsep();
                this.state = 354;
                this.field(); 
            }
            this.state = 360;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
        }

        this.state = 362;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===LuaParser.T__0 || _la===LuaParser.T__14) {
            this.state = 361;
            this.fieldsep();
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


function FieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_field;
    return this;
}

FieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldContext.prototype.constructor = FieldContext;

FieldContext.prototype.exp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpContext);
    } else {
        return this.getTypedRuleContext(ExpContext,i);
    }
};

FieldContext.prototype.NAME = function() {
    return this.getToken(LuaParser.NAME, 0);
};

FieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterField(this);
	}
};

FieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitField(this);
	}
};




LuaParser.FieldContext = FieldContext;

LuaParser.prototype.field = function() {

    var localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, LuaParser.RULE_field);
    try {
        this.state = 374;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 364;
            this.match(LuaParser.T__28);
            this.state = 365;
            this.exp(0);
            this.state = 366;
            this.match(LuaParser.T__29);
            this.state = 367;
            this.match(LuaParser.T__1);
            this.state = 368;
            this.exp(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 370;
            this.match(LuaParser.NAME);
            this.state = 371;
            this.match(LuaParser.T__1);
            this.state = 372;
            this.exp(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 373;
            this.exp(0);
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


function FieldsepContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_fieldsep;
    return this;
}

FieldsepContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldsepContext.prototype.constructor = FieldsepContext;


FieldsepContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterFieldsep(this);
	}
};

FieldsepContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitFieldsep(this);
	}
};




LuaParser.FieldsepContext = FieldsepContext;

LuaParser.prototype.fieldsep = function() {

    var localctx = new FieldsepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, LuaParser.RULE_fieldsep);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        _la = this._input.LA(1);
        if(!(_la===LuaParser.T__0 || _la===LuaParser.T__14)) {
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


function OperatorOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorOr;
    return this;
}

OperatorOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorOrContext.prototype.constructor = OperatorOrContext;


OperatorOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorOr(this);
	}
};

OperatorOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorOr(this);
	}
};




LuaParser.OperatorOrContext = OperatorOrContext;

LuaParser.prototype.operatorOr = function() {

    var localctx = new OperatorOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, LuaParser.RULE_operatorOr);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        this.match(LuaParser.T__32);
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


function OperatorAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorAnd;
    return this;
}

OperatorAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorAndContext.prototype.constructor = OperatorAndContext;


OperatorAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorAnd(this);
	}
};

OperatorAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorAnd(this);
	}
};




LuaParser.OperatorAndContext = OperatorAndContext;

LuaParser.prototype.operatorAnd = function() {

    var localctx = new OperatorAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, LuaParser.RULE_operatorAnd);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 380;
        this.match(LuaParser.T__33);
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


function OperatorComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorComparison;
    return this;
}

OperatorComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorComparisonContext.prototype.constructor = OperatorComparisonContext;


OperatorComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorComparison(this);
	}
};

OperatorComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorComparison(this);
	}
};




LuaParser.OperatorComparisonContext = OperatorComparisonContext;

LuaParser.prototype.operatorComparison = function() {

    var localctx = new OperatorComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, LuaParser.RULE_operatorComparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 382;
        _la = this._input.LA(1);
        if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (LuaParser.T__34 - 35)) | (1 << (LuaParser.T__35 - 35)) | (1 << (LuaParser.T__36 - 35)) | (1 << (LuaParser.T__37 - 35)) | (1 << (LuaParser.T__38 - 35)) | (1 << (LuaParser.T__39 - 35)))) !== 0))) {
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


function OperatorStrcatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorStrcat;
    return this;
}

OperatorStrcatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorStrcatContext.prototype.constructor = OperatorStrcatContext;


OperatorStrcatContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorStrcat(this);
	}
};

OperatorStrcatContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorStrcat(this);
	}
};




LuaParser.OperatorStrcatContext = OperatorStrcatContext;

LuaParser.prototype.operatorStrcat = function() {

    var localctx = new OperatorStrcatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, LuaParser.RULE_operatorStrcat);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 384;
        this.match(LuaParser.T__40);
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


function OperatorAddSubContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorAddSub;
    return this;
}

OperatorAddSubContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorAddSubContext.prototype.constructor = OperatorAddSubContext;


OperatorAddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorAddSub(this);
	}
};

OperatorAddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorAddSub(this);
	}
};




LuaParser.OperatorAddSubContext = OperatorAddSubContext;

LuaParser.prototype.operatorAddSub = function() {

    var localctx = new OperatorAddSubContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, LuaParser.RULE_operatorAddSub);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 386;
        _la = this._input.LA(1);
        if(!(_la===LuaParser.T__41 || _la===LuaParser.T__42)) {
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


function OperatorMulDivModContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorMulDivMod;
    return this;
}

OperatorMulDivModContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorMulDivModContext.prototype.constructor = OperatorMulDivModContext;


OperatorMulDivModContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorMulDivMod(this);
	}
};

OperatorMulDivModContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorMulDivMod(this);
	}
};




LuaParser.OperatorMulDivModContext = OperatorMulDivModContext;

LuaParser.prototype.operatorMulDivMod = function() {

    var localctx = new OperatorMulDivModContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, LuaParser.RULE_operatorMulDivMod);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        _la = this._input.LA(1);
        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (LuaParser.T__43 - 44)) | (1 << (LuaParser.T__44 - 44)) | (1 << (LuaParser.T__45 - 44)) | (1 << (LuaParser.T__46 - 44)))) !== 0))) {
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


function OperatorBitwiseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorBitwise;
    return this;
}

OperatorBitwiseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorBitwiseContext.prototype.constructor = OperatorBitwiseContext;


OperatorBitwiseContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorBitwise(this);
	}
};

OperatorBitwiseContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorBitwise(this);
	}
};




LuaParser.OperatorBitwiseContext = OperatorBitwiseContext;

LuaParser.prototype.operatorBitwise = function() {

    var localctx = new OperatorBitwiseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, LuaParser.RULE_operatorBitwise);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        _la = this._input.LA(1);
        if(!(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (LuaParser.T__47 - 48)) | (1 << (LuaParser.T__48 - 48)) | (1 << (LuaParser.T__49 - 48)) | (1 << (LuaParser.T__50 - 48)) | (1 << (LuaParser.T__51 - 48)))) !== 0))) {
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


function OperatorUnaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorUnary;
    return this;
}

OperatorUnaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorUnaryContext.prototype.constructor = OperatorUnaryContext;


OperatorUnaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorUnary(this);
	}
};

OperatorUnaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorUnary(this);
	}
};




LuaParser.OperatorUnaryContext = OperatorUnaryContext;

LuaParser.prototype.operatorUnary = function() {

    var localctx = new OperatorUnaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, LuaParser.RULE_operatorUnary);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 392;
        _la = this._input.LA(1);
        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)))) !== 0))) {
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


function OperatorPowerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_operatorPower;
    return this;
}

OperatorPowerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OperatorPowerContext.prototype.constructor = OperatorPowerContext;


OperatorPowerContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterOperatorPower(this);
	}
};

OperatorPowerContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitOperatorPower(this);
	}
};




LuaParser.OperatorPowerContext = OperatorPowerContext;

LuaParser.prototype.operatorPower = function() {

    var localctx = new OperatorPowerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, LuaParser.RULE_operatorPower);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(LuaParser.T__54);
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
    this.ruleIndex = LuaParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.INT = function() {
    return this.getToken(LuaParser.INT, 0);
};

NumberContext.prototype.HEX = function() {
    return this.getToken(LuaParser.HEX, 0);
};

NumberContext.prototype.FLOAT = function() {
    return this.getToken(LuaParser.FLOAT, 0);
};

NumberContext.prototype.HEX_FLOAT = function() {
    return this.getToken(LuaParser.HEX_FLOAT, 0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitNumber(this);
	}
};




LuaParser.NumberContext = NumberContext;

LuaParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, LuaParser.RULE_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 396;
        _la = this._input.LA(1);
        if(!(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (LuaParser.INT - 60)) | (1 << (LuaParser.HEX - 60)) | (1 << (LuaParser.FLOAT - 60)) | (1 << (LuaParser.HEX_FLOAT - 60)))) !== 0))) {
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


function StringContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = LuaParser.RULE_string;
    return this;
}

StringContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringContext.prototype.constructor = StringContext;

StringContext.prototype.NORMALSTRING = function() {
    return this.getToken(LuaParser.NORMALSTRING, 0);
};

StringContext.prototype.CHARSTRING = function() {
    return this.getToken(LuaParser.CHARSTRING, 0);
};

StringContext.prototype.LONGSTRING = function() {
    return this.getToken(LuaParser.LONGSTRING, 0);
};

StringContext.prototype.enterRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.enterString(this);
	}
};

StringContext.prototype.exitRule = function(listener) {
    if(listener instanceof LuaListener ) {
        listener.exitString(this);
	}
};




LuaParser.StringContext = StringContext;

LuaParser.prototype.string = function() {

    var localctx = new StringContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, LuaParser.RULE_string);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 398;
        _la = this._input.LA(1);
        if(!(((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0))) {
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


LuaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 9:
			return this.exp_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

LuaParser.prototype.exp_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 9);
		case 1:
			return this.precpred(this._ctx, 7);
		case 2:
			return this.precpred(this._ctx, 6);
		case 3:
			return this.precpred(this._ctx, 5);
		case 4:
			return this.precpred(this._ctx, 4);
		case 5:
			return this.precpred(this._ctx, 3);
		case 6:
			return this.precpred(this._ctx, 2);
		case 7:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.LuaParser = LuaParser;
