// @ts-nocheck
// Generated from sexpression.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by sexpressionParser.
function sexpressionListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

sexpressionListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
sexpressionListener.prototype.constructor = sexpressionListener;

// Enter a parse tree produced by sexpressionParser#sexpr.
sexpressionListener.prototype.enterSexpr = function(ctx) {
};

// Exit a parse tree produced by sexpressionParser#sexpr.
sexpressionListener.prototype.exitSexpr = function(ctx) {
};


// Enter a parse tree produced by sexpressionParser#item.
sexpressionListener.prototype.enterItem = function(ctx) {
};

// Exit a parse tree produced by sexpressionParser#item.
sexpressionListener.prototype.exitItem = function(ctx) {
};


// Enter a parse tree produced by sexpressionParser#list.
sexpressionListener.prototype.enterList = function(ctx) {
};

// Exit a parse tree produced by sexpressionParser#list.
sexpressionListener.prototype.exitList = function(ctx) {
};


// Enter a parse tree produced by sexpressionParser#atom.
sexpressionListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by sexpressionParser#atom.
sexpressionListener.prototype.exitAtom = function(ctx) {
};



exports.sexpressionListener = sexpressionListener;