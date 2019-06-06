// @ts-nocheck
// Generated from Golang.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by GolangParser.
function GolangListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

GolangListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
GolangListener.prototype.constructor = GolangListener;

// Enter a parse tree produced by GolangParser#sourceFile.
GolangListener.prototype.enterSourceFile = function(ctx) {
};

// Exit a parse tree produced by GolangParser#sourceFile.
GolangListener.prototype.exitSourceFile = function(ctx) {
};


// Enter a parse tree produced by GolangParser#packageClause.
GolangListener.prototype.enterPackageClause = function(ctx) {
};

// Exit a parse tree produced by GolangParser#packageClause.
GolangListener.prototype.exitPackageClause = function(ctx) {
};


// Enter a parse tree produced by GolangParser#importDecl.
GolangListener.prototype.enterImportDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#importDecl.
GolangListener.prototype.exitImportDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#importSpec.
GolangListener.prototype.enterImportSpec = function(ctx) {
};

// Exit a parse tree produced by GolangParser#importSpec.
GolangListener.prototype.exitImportSpec = function(ctx) {
};


// Enter a parse tree produced by GolangParser#importPath.
GolangListener.prototype.enterImportPath = function(ctx) {
};

// Exit a parse tree produced by GolangParser#importPath.
GolangListener.prototype.exitImportPath = function(ctx) {
};


// Enter a parse tree produced by GolangParser#topLevelDecl.
GolangListener.prototype.enterTopLevelDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#topLevelDecl.
GolangListener.prototype.exitTopLevelDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#declaration.
GolangListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by GolangParser#declaration.
GolangListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by GolangParser#constDecl.
GolangListener.prototype.enterConstDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#constDecl.
GolangListener.prototype.exitConstDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#constSpec.
GolangListener.prototype.enterConstSpec = function(ctx) {
};

// Exit a parse tree produced by GolangParser#constSpec.
GolangListener.prototype.exitConstSpec = function(ctx) {
};


// Enter a parse tree produced by GolangParser#identifierList.
GolangListener.prototype.enterIdentifierList = function(ctx) {
};

// Exit a parse tree produced by GolangParser#identifierList.
GolangListener.prototype.exitIdentifierList = function(ctx) {
};


// Enter a parse tree produced by GolangParser#expressionList.
GolangListener.prototype.enterExpressionList = function(ctx) {
};

// Exit a parse tree produced by GolangParser#expressionList.
GolangListener.prototype.exitExpressionList = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeDecl.
GolangListener.prototype.enterTypeDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeDecl.
GolangListener.prototype.exitTypeDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeSpec.
GolangListener.prototype.enterTypeSpec = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeSpec.
GolangListener.prototype.exitTypeSpec = function(ctx) {
};


// Enter a parse tree produced by GolangParser#functionDecl.
GolangListener.prototype.enterFunctionDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#functionDecl.
GolangListener.prototype.exitFunctionDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#function_.
GolangListener.prototype.enterFunction_ = function(ctx) {
};

// Exit a parse tree produced by GolangParser#function_.
GolangListener.prototype.exitFunction_ = function(ctx) {
};


// Enter a parse tree produced by GolangParser#methodDecl.
GolangListener.prototype.enterMethodDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#methodDecl.
GolangListener.prototype.exitMethodDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#receiver.
GolangListener.prototype.enterReceiver = function(ctx) {
};

// Exit a parse tree produced by GolangParser#receiver.
GolangListener.prototype.exitReceiver = function(ctx) {
};


// Enter a parse tree produced by GolangParser#varDecl.
GolangListener.prototype.enterVarDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#varDecl.
GolangListener.prototype.exitVarDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#varSpec.
GolangListener.prototype.enterVarSpec = function(ctx) {
};

// Exit a parse tree produced by GolangParser#varSpec.
GolangListener.prototype.exitVarSpec = function(ctx) {
};


// Enter a parse tree produced by GolangParser#block.
GolangListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by GolangParser#block.
GolangListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by GolangParser#statementList.
GolangListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by GolangParser#statementList.
GolangListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by GolangParser#statement.
GolangListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by GolangParser#statement.
GolangListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by GolangParser#simpleStmt.
GolangListener.prototype.enterSimpleStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#simpleStmt.
GolangListener.prototype.exitSimpleStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#expressionStmt.
GolangListener.prototype.enterExpressionStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#expressionStmt.
GolangListener.prototype.exitExpressionStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#sendStmt.
GolangListener.prototype.enterSendStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#sendStmt.
GolangListener.prototype.exitSendStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#incDecStmt.
GolangListener.prototype.enterIncDecStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#incDecStmt.
GolangListener.prototype.exitIncDecStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#assignment.
GolangListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by GolangParser#assignment.
GolangListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by GolangParser#assign_op.
GolangListener.prototype.enterAssign_op = function(ctx) {
};

// Exit a parse tree produced by GolangParser#assign_op.
GolangListener.prototype.exitAssign_op = function(ctx) {
};


// Enter a parse tree produced by GolangParser#shortVarDecl.
GolangListener.prototype.enterShortVarDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#shortVarDecl.
GolangListener.prototype.exitShortVarDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#emptyStmt.
GolangListener.prototype.enterEmptyStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#emptyStmt.
GolangListener.prototype.exitEmptyStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#labeledStmt.
GolangListener.prototype.enterLabeledStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#labeledStmt.
GolangListener.prototype.exitLabeledStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#returnStmt.
GolangListener.prototype.enterReturnStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#returnStmt.
GolangListener.prototype.exitReturnStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#breakStmt.
GolangListener.prototype.enterBreakStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#breakStmt.
GolangListener.prototype.exitBreakStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#continueStmt.
GolangListener.prototype.enterContinueStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#continueStmt.
GolangListener.prototype.exitContinueStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#gotoStmt.
GolangListener.prototype.enterGotoStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#gotoStmt.
GolangListener.prototype.exitGotoStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#fallthroughStmt.
GolangListener.prototype.enterFallthroughStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#fallthroughStmt.
GolangListener.prototype.exitFallthroughStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#deferStmt.
GolangListener.prototype.enterDeferStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#deferStmt.
GolangListener.prototype.exitDeferStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#ifStmt.
GolangListener.prototype.enterIfStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#ifStmt.
GolangListener.prototype.exitIfStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#switchStmt.
GolangListener.prototype.enterSwitchStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#switchStmt.
GolangListener.prototype.exitSwitchStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#exprSwitchStmt.
GolangListener.prototype.enterExprSwitchStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#exprSwitchStmt.
GolangListener.prototype.exitExprSwitchStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#exprCaseClause.
GolangListener.prototype.enterExprCaseClause = function(ctx) {
};

// Exit a parse tree produced by GolangParser#exprCaseClause.
GolangListener.prototype.exitExprCaseClause = function(ctx) {
};


// Enter a parse tree produced by GolangParser#exprSwitchCase.
GolangListener.prototype.enterExprSwitchCase = function(ctx) {
};

// Exit a parse tree produced by GolangParser#exprSwitchCase.
GolangListener.prototype.exitExprSwitchCase = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeSwitchStmt.
GolangListener.prototype.enterTypeSwitchStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeSwitchStmt.
GolangListener.prototype.exitTypeSwitchStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeSwitchGuard.
GolangListener.prototype.enterTypeSwitchGuard = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeSwitchGuard.
GolangListener.prototype.exitTypeSwitchGuard = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeCaseClause.
GolangListener.prototype.enterTypeCaseClause = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeCaseClause.
GolangListener.prototype.exitTypeCaseClause = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeSwitchCase.
GolangListener.prototype.enterTypeSwitchCase = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeSwitchCase.
GolangListener.prototype.exitTypeSwitchCase = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeList.
GolangListener.prototype.enterTypeList = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeList.
GolangListener.prototype.exitTypeList = function(ctx) {
};


// Enter a parse tree produced by GolangParser#selectStmt.
GolangListener.prototype.enterSelectStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#selectStmt.
GolangListener.prototype.exitSelectStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#commClause.
GolangListener.prototype.enterCommClause = function(ctx) {
};

// Exit a parse tree produced by GolangParser#commClause.
GolangListener.prototype.exitCommClause = function(ctx) {
};


// Enter a parse tree produced by GolangParser#commCase.
GolangListener.prototype.enterCommCase = function(ctx) {
};

// Exit a parse tree produced by GolangParser#commCase.
GolangListener.prototype.exitCommCase = function(ctx) {
};


// Enter a parse tree produced by GolangParser#recvStmt.
GolangListener.prototype.enterRecvStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#recvStmt.
GolangListener.prototype.exitRecvStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#forStmt.
GolangListener.prototype.enterForStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#forStmt.
GolangListener.prototype.exitForStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#forClause.
GolangListener.prototype.enterForClause = function(ctx) {
};

// Exit a parse tree produced by GolangParser#forClause.
GolangListener.prototype.exitForClause = function(ctx) {
};


// Enter a parse tree produced by GolangParser#rangeClause.
GolangListener.prototype.enterRangeClause = function(ctx) {
};

// Exit a parse tree produced by GolangParser#rangeClause.
GolangListener.prototype.exitRangeClause = function(ctx) {
};


// Enter a parse tree produced by GolangParser#goStmt.
GolangListener.prototype.enterGoStmt = function(ctx) {
};

// Exit a parse tree produced by GolangParser#goStmt.
GolangListener.prototype.exitGoStmt = function(ctx) {
};


// Enter a parse tree produced by GolangParser#type.
GolangListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#type.
GolangListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeName.
GolangListener.prototype.enterTypeName = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeName.
GolangListener.prototype.exitTypeName = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeLit.
GolangListener.prototype.enterTypeLit = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeLit.
GolangListener.prototype.exitTypeLit = function(ctx) {
};


// Enter a parse tree produced by GolangParser#arrayType.
GolangListener.prototype.enterArrayType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#arrayType.
GolangListener.prototype.exitArrayType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#arrayLength.
GolangListener.prototype.enterArrayLength = function(ctx) {
};

// Exit a parse tree produced by GolangParser#arrayLength.
GolangListener.prototype.exitArrayLength = function(ctx) {
};


// Enter a parse tree produced by GolangParser#elementType.
GolangListener.prototype.enterElementType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#elementType.
GolangListener.prototype.exitElementType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#pointerType.
GolangListener.prototype.enterPointerType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#pointerType.
GolangListener.prototype.exitPointerType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#interfaceType.
GolangListener.prototype.enterInterfaceType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#interfaceType.
GolangListener.prototype.exitInterfaceType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#sliceType.
GolangListener.prototype.enterSliceType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#sliceType.
GolangListener.prototype.exitSliceType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#mapType.
GolangListener.prototype.enterMapType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#mapType.
GolangListener.prototype.exitMapType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#channelType.
GolangListener.prototype.enterChannelType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#channelType.
GolangListener.prototype.exitChannelType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#methodSpec.
GolangListener.prototype.enterMethodSpec = function(ctx) {
};

// Exit a parse tree produced by GolangParser#methodSpec.
GolangListener.prototype.exitMethodSpec = function(ctx) {
};


// Enter a parse tree produced by GolangParser#functionType.
GolangListener.prototype.enterFunctionType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#functionType.
GolangListener.prototype.exitFunctionType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#signature.
GolangListener.prototype.enterSignature = function(ctx) {
};

// Exit a parse tree produced by GolangParser#signature.
GolangListener.prototype.exitSignature = function(ctx) {
};


// Enter a parse tree produced by GolangParser#result.
GolangListener.prototype.enterResult = function(ctx) {
};

// Exit a parse tree produced by GolangParser#result.
GolangListener.prototype.exitResult = function(ctx) {
};


// Enter a parse tree produced by GolangParser#parameters.
GolangListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by GolangParser#parameters.
GolangListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by GolangParser#parameterList.
GolangListener.prototype.enterParameterList = function(ctx) {
};

// Exit a parse tree produced by GolangParser#parameterList.
GolangListener.prototype.exitParameterList = function(ctx) {
};


// Enter a parse tree produced by GolangParser#parameterDecl.
GolangListener.prototype.enterParameterDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#parameterDecl.
GolangListener.prototype.exitParameterDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#operand.
GolangListener.prototype.enterOperand = function(ctx) {
};

// Exit a parse tree produced by GolangParser#operand.
GolangListener.prototype.exitOperand = function(ctx) {
};


// Enter a parse tree produced by GolangParser#literal.
GolangListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by GolangParser#literal.
GolangListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by GolangParser#basicLit.
GolangListener.prototype.enterBasicLit = function(ctx) {
};

// Exit a parse tree produced by GolangParser#basicLit.
GolangListener.prototype.exitBasicLit = function(ctx) {
};


// Enter a parse tree produced by GolangParser#operandName.
GolangListener.prototype.enterOperandName = function(ctx) {
};

// Exit a parse tree produced by GolangParser#operandName.
GolangListener.prototype.exitOperandName = function(ctx) {
};


// Enter a parse tree produced by GolangParser#qualifiedIdent.
GolangListener.prototype.enterQualifiedIdent = function(ctx) {
};

// Exit a parse tree produced by GolangParser#qualifiedIdent.
GolangListener.prototype.exitQualifiedIdent = function(ctx) {
};


// Enter a parse tree produced by GolangParser#compositeLit.
GolangListener.prototype.enterCompositeLit = function(ctx) {
};

// Exit a parse tree produced by GolangParser#compositeLit.
GolangListener.prototype.exitCompositeLit = function(ctx) {
};


// Enter a parse tree produced by GolangParser#literalType.
GolangListener.prototype.enterLiteralType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#literalType.
GolangListener.prototype.exitLiteralType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#literalValue.
GolangListener.prototype.enterLiteralValue = function(ctx) {
};

// Exit a parse tree produced by GolangParser#literalValue.
GolangListener.prototype.exitLiteralValue = function(ctx) {
};


// Enter a parse tree produced by GolangParser#elementList.
GolangListener.prototype.enterElementList = function(ctx) {
};

// Exit a parse tree produced by GolangParser#elementList.
GolangListener.prototype.exitElementList = function(ctx) {
};


// Enter a parse tree produced by GolangParser#keyedElement.
GolangListener.prototype.enterKeyedElement = function(ctx) {
};

// Exit a parse tree produced by GolangParser#keyedElement.
GolangListener.prototype.exitKeyedElement = function(ctx) {
};


// Enter a parse tree produced by GolangParser#key.
GolangListener.prototype.enterKey = function(ctx) {
};

// Exit a parse tree produced by GolangParser#key.
GolangListener.prototype.exitKey = function(ctx) {
};


// Enter a parse tree produced by GolangParser#element.
GolangListener.prototype.enterElement = function(ctx) {
};

// Exit a parse tree produced by GolangParser#element.
GolangListener.prototype.exitElement = function(ctx) {
};


// Enter a parse tree produced by GolangParser#structType.
GolangListener.prototype.enterStructType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#structType.
GolangListener.prototype.exitStructType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#fieldDecl.
GolangListener.prototype.enterFieldDecl = function(ctx) {
};

// Exit a parse tree produced by GolangParser#fieldDecl.
GolangListener.prototype.exitFieldDecl = function(ctx) {
};


// Enter a parse tree produced by GolangParser#anonymousField.
GolangListener.prototype.enterAnonymousField = function(ctx) {
};

// Exit a parse tree produced by GolangParser#anonymousField.
GolangListener.prototype.exitAnonymousField = function(ctx) {
};


// Enter a parse tree produced by GolangParser#functionLit.
GolangListener.prototype.enterFunctionLit = function(ctx) {
};

// Exit a parse tree produced by GolangParser#functionLit.
GolangListener.prototype.exitFunctionLit = function(ctx) {
};


// Enter a parse tree produced by GolangParser#primaryExpr.
GolangListener.prototype.enterPrimaryExpr = function(ctx) {
};

// Exit a parse tree produced by GolangParser#primaryExpr.
GolangListener.prototype.exitPrimaryExpr = function(ctx) {
};


// Enter a parse tree produced by GolangParser#selector.
GolangListener.prototype.enterSelector = function(ctx) {
};

// Exit a parse tree produced by GolangParser#selector.
GolangListener.prototype.exitSelector = function(ctx) {
};


// Enter a parse tree produced by GolangParser#index.
GolangListener.prototype.enterIndex = function(ctx) {
};

// Exit a parse tree produced by GolangParser#index.
GolangListener.prototype.exitIndex = function(ctx) {
};


// Enter a parse tree produced by GolangParser#slice.
GolangListener.prototype.enterSlice = function(ctx) {
};

// Exit a parse tree produced by GolangParser#slice.
GolangListener.prototype.exitSlice = function(ctx) {
};


// Enter a parse tree produced by GolangParser#typeAssertion.
GolangListener.prototype.enterTypeAssertion = function(ctx) {
};

// Exit a parse tree produced by GolangParser#typeAssertion.
GolangListener.prototype.exitTypeAssertion = function(ctx) {
};


// Enter a parse tree produced by GolangParser#arguments.
GolangListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by GolangParser#arguments.
GolangListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by GolangParser#methodExpr.
GolangListener.prototype.enterMethodExpr = function(ctx) {
};

// Exit a parse tree produced by GolangParser#methodExpr.
GolangListener.prototype.exitMethodExpr = function(ctx) {
};


// Enter a parse tree produced by GolangParser#receiverType.
GolangListener.prototype.enterReceiverType = function(ctx) {
};

// Exit a parse tree produced by GolangParser#receiverType.
GolangListener.prototype.exitReceiverType = function(ctx) {
};


// Enter a parse tree produced by GolangParser#expression.
GolangListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by GolangParser#expression.
GolangListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by GolangParser#unaryExpr.
GolangListener.prototype.enterUnaryExpr = function(ctx) {
};

// Exit a parse tree produced by GolangParser#unaryExpr.
GolangListener.prototype.exitUnaryExpr = function(ctx) {
};


// Enter a parse tree produced by GolangParser#conversion.
GolangListener.prototype.enterConversion = function(ctx) {
};

// Exit a parse tree produced by GolangParser#conversion.
GolangListener.prototype.exitConversion = function(ctx) {
};


// Enter a parse tree produced by GolangParser#eos.
GolangListener.prototype.enterEos = function(ctx) {
};

// Exit a parse tree produced by GolangParser#eos.
GolangListener.prototype.exitEos = function(ctx) {
};



exports.GolangListener = GolangListener;