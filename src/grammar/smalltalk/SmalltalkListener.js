// @ts-nocheck
// Generated from Smalltalk.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SmalltalkParser.
function SmalltalkListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SmalltalkListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SmalltalkListener.prototype.constructor = SmalltalkListener;

// Enter a parse tree produced by SmalltalkParser#script.
SmalltalkListener.prototype.enterScript = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#script.
SmalltalkListener.prototype.exitScript = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#sequence.
SmalltalkListener.prototype.enterSequence = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#sequence.
SmalltalkListener.prototype.exitSequence = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#ws.
SmalltalkListener.prototype.enterWs = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#ws.
SmalltalkListener.prototype.exitWs = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#temps.
SmalltalkListener.prototype.enterTemps = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#temps.
SmalltalkListener.prototype.exitTemps = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#StatementAnswer.
SmalltalkListener.prototype.enterStatementAnswer = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#StatementAnswer.
SmalltalkListener.prototype.exitStatementAnswer = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#StatementExpressionsAnswer.
SmalltalkListener.prototype.enterStatementExpressionsAnswer = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#StatementExpressionsAnswer.
SmalltalkListener.prototype.exitStatementExpressionsAnswer = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#StatementExpressions.
SmalltalkListener.prototype.enterStatementExpressions = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#StatementExpressions.
SmalltalkListener.prototype.exitStatementExpressions = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#answer.
SmalltalkListener.prototype.enterAnswer = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#answer.
SmalltalkListener.prototype.exitAnswer = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#expression.
SmalltalkListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#expression.
SmalltalkListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#expressions.
SmalltalkListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#expressions.
SmalltalkListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#expressionList.
SmalltalkListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#expressionList.
SmalltalkListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#cascade.
SmalltalkListener.prototype.enterCascade = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#cascade.
SmalltalkListener.prototype.exitCascade = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#message.
SmalltalkListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#message.
SmalltalkListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#assignment.
SmalltalkListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#assignment.
SmalltalkListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#variable.
SmalltalkListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#variable.
SmalltalkListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#binarySend.
SmalltalkListener.prototype.enterBinarySend = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#binarySend.
SmalltalkListener.prototype.exitBinarySend = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#unarySend.
SmalltalkListener.prototype.enterUnarySend = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#unarySend.
SmalltalkListener.prototype.exitUnarySend = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#keywordSend.
SmalltalkListener.prototype.enterKeywordSend = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#keywordSend.
SmalltalkListener.prototype.exitKeywordSend = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#keywordMessage.
SmalltalkListener.prototype.enterKeywordMessage = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#keywordMessage.
SmalltalkListener.prototype.exitKeywordMessage = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#keywordPair.
SmalltalkListener.prototype.enterKeywordPair = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#keywordPair.
SmalltalkListener.prototype.exitKeywordPair = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#operand.
SmalltalkListener.prototype.enterOperand = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#operand.
SmalltalkListener.prototype.exitOperand = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#subexpression.
SmalltalkListener.prototype.enterSubexpression = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#subexpression.
SmalltalkListener.prototype.exitSubexpression = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#literal.
SmalltalkListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#literal.
SmalltalkListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#runtimeLiteral.
SmalltalkListener.prototype.enterRuntimeLiteral = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#runtimeLiteral.
SmalltalkListener.prototype.exitRuntimeLiteral = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#block.
SmalltalkListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#block.
SmalltalkListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#blockParamList.
SmalltalkListener.prototype.enterBlockParamList = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#blockParamList.
SmalltalkListener.prototype.exitBlockParamList = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#dynamicDictionary.
SmalltalkListener.prototype.enterDynamicDictionary = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#dynamicDictionary.
SmalltalkListener.prototype.exitDynamicDictionary = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#dynamicArray.
SmalltalkListener.prototype.enterDynamicArray = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#dynamicArray.
SmalltalkListener.prototype.exitDynamicArray = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#parsetimeLiteral.
SmalltalkListener.prototype.enterParsetimeLiteral = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#parsetimeLiteral.
SmalltalkListener.prototype.exitParsetimeLiteral = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#number.
SmalltalkListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#number.
SmalltalkListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#numberExp.
SmalltalkListener.prototype.enterNumberExp = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#numberExp.
SmalltalkListener.prototype.exitNumberExp = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#charConstant.
SmalltalkListener.prototype.enterCharConstant = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#charConstant.
SmalltalkListener.prototype.exitCharConstant = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#hex.
SmalltalkListener.prototype.enterHex = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#hex.
SmalltalkListener.prototype.exitHex = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#stInteger.
SmalltalkListener.prototype.enterStInteger = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#stInteger.
SmalltalkListener.prototype.exitStInteger = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#stFloat.
SmalltalkListener.prototype.enterStFloat = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#stFloat.
SmalltalkListener.prototype.exitStFloat = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#pseudoVariable.
SmalltalkListener.prototype.enterPseudoVariable = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#pseudoVariable.
SmalltalkListener.prototype.exitPseudoVariable = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#string.
SmalltalkListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#string.
SmalltalkListener.prototype.exitString = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#symbol.
SmalltalkListener.prototype.enterSymbol = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#symbol.
SmalltalkListener.prototype.exitSymbol = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#primitive.
SmalltalkListener.prototype.enterPrimitive = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#primitive.
SmalltalkListener.prototype.exitPrimitive = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#bareSymbol.
SmalltalkListener.prototype.enterBareSymbol = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#bareSymbol.
SmalltalkListener.prototype.exitBareSymbol = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#literalArray.
SmalltalkListener.prototype.enterLiteralArray = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#literalArray.
SmalltalkListener.prototype.exitLiteralArray = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#literalArrayRest.
SmalltalkListener.prototype.enterLiteralArrayRest = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#literalArrayRest.
SmalltalkListener.prototype.exitLiteralArrayRest = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#bareLiteralArray.
SmalltalkListener.prototype.enterBareLiteralArray = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#bareLiteralArray.
SmalltalkListener.prototype.exitBareLiteralArray = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#unaryTail.
SmalltalkListener.prototype.enterUnaryTail = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#unaryTail.
SmalltalkListener.prototype.exitUnaryTail = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#unaryMessage.
SmalltalkListener.prototype.enterUnaryMessage = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#unaryMessage.
SmalltalkListener.prototype.exitUnaryMessage = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#unarySelector.
SmalltalkListener.prototype.enterUnarySelector = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#unarySelector.
SmalltalkListener.prototype.exitUnarySelector = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#keywords.
SmalltalkListener.prototype.enterKeywords = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#keywords.
SmalltalkListener.prototype.exitKeywords = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#reference.
SmalltalkListener.prototype.enterReference = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#reference.
SmalltalkListener.prototype.exitReference = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#binaryTail.
SmalltalkListener.prototype.enterBinaryTail = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#binaryTail.
SmalltalkListener.prototype.exitBinaryTail = function(ctx) {
};


// Enter a parse tree produced by SmalltalkParser#binaryMessage.
SmalltalkListener.prototype.enterBinaryMessage = function(ctx) {
};

// Exit a parse tree produced by SmalltalkParser#binaryMessage.
SmalltalkListener.prototype.exitBinaryMessage = function(ctx) {
};



exports.SmalltalkListener = SmalltalkListener;