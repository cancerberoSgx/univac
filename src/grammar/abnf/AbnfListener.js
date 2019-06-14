// @ts-nocheck
// Generated from Abnf.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by AbnfParser.
function AbnfListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

AbnfListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
AbnfListener.prototype.constructor = AbnfListener;

// Enter a parse tree produced by AbnfParser#rulelist.
AbnfListener.prototype.enterRulelist = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#rulelist.
AbnfListener.prototype.exitRulelist = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#rule_.
AbnfListener.prototype.enterRule_ = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#rule_.
AbnfListener.prototype.exitRule_ = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#elements.
AbnfListener.prototype.enterElements = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#elements.
AbnfListener.prototype.exitElements = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#alternation.
AbnfListener.prototype.enterAlternation = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#alternation.
AbnfListener.prototype.exitAlternation = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#concatenation.
AbnfListener.prototype.enterConcatenation = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#concatenation.
AbnfListener.prototype.exitConcatenation = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#repetition.
AbnfListener.prototype.enterRepetition = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#repetition.
AbnfListener.prototype.exitRepetition = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#repeat.
AbnfListener.prototype.enterRepeat = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#repeat.
AbnfListener.prototype.exitRepeat = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#element.
AbnfListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#element.
AbnfListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#group.
AbnfListener.prototype.enterGroup = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#group.
AbnfListener.prototype.exitGroup = function(ctx) {
};


// Enter a parse tree produced by AbnfParser#option.
AbnfListener.prototype.enterOption = function(ctx) {
};

// Exit a parse tree produced by AbnfParser#option.
AbnfListener.prototype.exitOption = function(ctx) {
};



exports.AbnfListener = AbnfListener;