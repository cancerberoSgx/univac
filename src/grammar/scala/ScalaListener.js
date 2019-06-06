// @ts-nocheck
// Generated from Scala.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ScalaParser.
function ScalaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ScalaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ScalaListener.prototype.constructor = ScalaListener;

// Enter a parse tree produced by ScalaParser#literal.
ScalaListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#literal.
ScalaListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#qualId.
ScalaListener.prototype.enterQualId = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#qualId.
ScalaListener.prototype.exitQualId = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#ids.
ScalaListener.prototype.enterIds = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#ids.
ScalaListener.prototype.exitIds = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#stableId.
ScalaListener.prototype.enterStableId = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#stableId.
ScalaListener.prototype.exitStableId = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classQualifier.
ScalaListener.prototype.enterClassQualifier = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classQualifier.
ScalaListener.prototype.exitClassQualifier = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#type.
ScalaListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#type.
ScalaListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#functionArgTypes.
ScalaListener.prototype.enterFunctionArgTypes = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#functionArgTypes.
ScalaListener.prototype.exitFunctionArgTypes = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#existentialClause.
ScalaListener.prototype.enterExistentialClause = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#existentialClause.
ScalaListener.prototype.exitExistentialClause = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#existentialDcl.
ScalaListener.prototype.enterExistentialDcl = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#existentialDcl.
ScalaListener.prototype.exitExistentialDcl = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#infixType.
ScalaListener.prototype.enterInfixType = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#infixType.
ScalaListener.prototype.exitInfixType = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#compoundType.
ScalaListener.prototype.enterCompoundType = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#compoundType.
ScalaListener.prototype.exitCompoundType = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#annotType.
ScalaListener.prototype.enterAnnotType = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#annotType.
ScalaListener.prototype.exitAnnotType = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#simpleType.
ScalaListener.prototype.enterSimpleType = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#simpleType.
ScalaListener.prototype.exitSimpleType = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#typeArgs.
ScalaListener.prototype.enterTypeArgs = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#typeArgs.
ScalaListener.prototype.exitTypeArgs = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#types.
ScalaListener.prototype.enterTypes = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#types.
ScalaListener.prototype.exitTypes = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#refinement.
ScalaListener.prototype.enterRefinement = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#refinement.
ScalaListener.prototype.exitRefinement = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#refineStat.
ScalaListener.prototype.enterRefineStat = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#refineStat.
ScalaListener.prototype.exitRefineStat = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#typePat.
ScalaListener.prototype.enterTypePat = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#typePat.
ScalaListener.prototype.exitTypePat = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#ascription.
ScalaListener.prototype.enterAscription = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#ascription.
ScalaListener.prototype.exitAscription = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#expr.
ScalaListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#expr.
ScalaListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#expr1.
ScalaListener.prototype.enterExpr1 = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#expr1.
ScalaListener.prototype.exitExpr1 = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#postfixExpr.
ScalaListener.prototype.enterPostfixExpr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#postfixExpr.
ScalaListener.prototype.exitPostfixExpr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#infixExpr.
ScalaListener.prototype.enterInfixExpr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#infixExpr.
ScalaListener.prototype.exitInfixExpr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#prefixExpr.
ScalaListener.prototype.enterPrefixExpr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#prefixExpr.
ScalaListener.prototype.exitPrefixExpr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#simpleExpr1.
ScalaListener.prototype.enterSimpleExpr1 = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#simpleExpr1.
ScalaListener.prototype.exitSimpleExpr1 = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#exprs.
ScalaListener.prototype.enterExprs = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#exprs.
ScalaListener.prototype.exitExprs = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#argumentExprs.
ScalaListener.prototype.enterArgumentExprs = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#argumentExprs.
ScalaListener.prototype.exitArgumentExprs = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#blockExpr.
ScalaListener.prototype.enterBlockExpr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#blockExpr.
ScalaListener.prototype.exitBlockExpr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#block.
ScalaListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#block.
ScalaListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#blockStat.
ScalaListener.prototype.enterBlockStat = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#blockStat.
ScalaListener.prototype.exitBlockStat = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#resultExpr.
ScalaListener.prototype.enterResultExpr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#resultExpr.
ScalaListener.prototype.exitResultExpr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#enumerators.
ScalaListener.prototype.enterEnumerators = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#enumerators.
ScalaListener.prototype.exitEnumerators = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#generator.
ScalaListener.prototype.enterGenerator = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#generator.
ScalaListener.prototype.exitGenerator = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#caseClauses.
ScalaListener.prototype.enterCaseClauses = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#caseClauses.
ScalaListener.prototype.exitCaseClauses = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#caseClause.
ScalaListener.prototype.enterCaseClause = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#caseClause.
ScalaListener.prototype.exitCaseClause = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#guard.
ScalaListener.prototype.enterGuard = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#guard.
ScalaListener.prototype.exitGuard = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#pattern.
ScalaListener.prototype.enterPattern = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#pattern.
ScalaListener.prototype.exitPattern = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#pattern1.
ScalaListener.prototype.enterPattern1 = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#pattern1.
ScalaListener.prototype.exitPattern1 = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#pattern2.
ScalaListener.prototype.enterPattern2 = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#pattern2.
ScalaListener.prototype.exitPattern2 = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#pattern3.
ScalaListener.prototype.enterPattern3 = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#pattern3.
ScalaListener.prototype.exitPattern3 = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#simplePattern.
ScalaListener.prototype.enterSimplePattern = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#simplePattern.
ScalaListener.prototype.exitSimplePattern = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#patterns.
ScalaListener.prototype.enterPatterns = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#patterns.
ScalaListener.prototype.exitPatterns = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#typeParamClause.
ScalaListener.prototype.enterTypeParamClause = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#typeParamClause.
ScalaListener.prototype.exitTypeParamClause = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#funTypeParamClause.
ScalaListener.prototype.enterFunTypeParamClause = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#funTypeParamClause.
ScalaListener.prototype.exitFunTypeParamClause = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#variantTypeParam.
ScalaListener.prototype.enterVariantTypeParam = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#variantTypeParam.
ScalaListener.prototype.exitVariantTypeParam = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#typeParam.
ScalaListener.prototype.enterTypeParam = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#typeParam.
ScalaListener.prototype.exitTypeParam = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#paramClauses.
ScalaListener.prototype.enterParamClauses = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#paramClauses.
ScalaListener.prototype.exitParamClauses = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#paramClause.
ScalaListener.prototype.enterParamClause = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#paramClause.
ScalaListener.prototype.exitParamClause = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#params.
ScalaListener.prototype.enterParams = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#params.
ScalaListener.prototype.exitParams = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#param.
ScalaListener.prototype.enterParam = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#param.
ScalaListener.prototype.exitParam = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#paramType.
ScalaListener.prototype.enterParamType = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#paramType.
ScalaListener.prototype.exitParamType = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classParamClauses.
ScalaListener.prototype.enterClassParamClauses = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classParamClauses.
ScalaListener.prototype.exitClassParamClauses = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classParamClause.
ScalaListener.prototype.enterClassParamClause = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classParamClause.
ScalaListener.prototype.exitClassParamClause = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classParams.
ScalaListener.prototype.enterClassParams = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classParams.
ScalaListener.prototype.exitClassParams = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classParam.
ScalaListener.prototype.enterClassParam = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classParam.
ScalaListener.prototype.exitClassParam = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#bindings.
ScalaListener.prototype.enterBindings = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#bindings.
ScalaListener.prototype.exitBindings = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#binding.
ScalaListener.prototype.enterBinding = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#binding.
ScalaListener.prototype.exitBinding = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#modifier.
ScalaListener.prototype.enterModifier = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#modifier.
ScalaListener.prototype.exitModifier = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#localModifier.
ScalaListener.prototype.enterLocalModifier = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#localModifier.
ScalaListener.prototype.exitLocalModifier = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#accessModifier.
ScalaListener.prototype.enterAccessModifier = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#accessModifier.
ScalaListener.prototype.exitAccessModifier = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#accessQualifier.
ScalaListener.prototype.enterAccessQualifier = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#accessQualifier.
ScalaListener.prototype.exitAccessQualifier = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#annotation.
ScalaListener.prototype.enterAnnotation = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#annotation.
ScalaListener.prototype.exitAnnotation = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#constrAnnotation.
ScalaListener.prototype.enterConstrAnnotation = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#constrAnnotation.
ScalaListener.prototype.exitConstrAnnotation = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#templateBody.
ScalaListener.prototype.enterTemplateBody = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#templateBody.
ScalaListener.prototype.exitTemplateBody = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#templateStat.
ScalaListener.prototype.enterTemplateStat = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#templateStat.
ScalaListener.prototype.exitTemplateStat = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#selfType.
ScalaListener.prototype.enterSelfType = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#selfType.
ScalaListener.prototype.exitSelfType = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#import_.
ScalaListener.prototype.enterImport_ = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#import_.
ScalaListener.prototype.exitImport_ = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#importExpr.
ScalaListener.prototype.enterImportExpr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#importExpr.
ScalaListener.prototype.exitImportExpr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#importSelectors.
ScalaListener.prototype.enterImportSelectors = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#importSelectors.
ScalaListener.prototype.exitImportSelectors = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#importSelector.
ScalaListener.prototype.enterImportSelector = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#importSelector.
ScalaListener.prototype.exitImportSelector = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#dcl.
ScalaListener.prototype.enterDcl = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#dcl.
ScalaListener.prototype.exitDcl = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#valDcl.
ScalaListener.prototype.enterValDcl = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#valDcl.
ScalaListener.prototype.exitValDcl = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#varDcl.
ScalaListener.prototype.enterVarDcl = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#varDcl.
ScalaListener.prototype.exitVarDcl = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#funDcl.
ScalaListener.prototype.enterFunDcl = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#funDcl.
ScalaListener.prototype.exitFunDcl = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#funSig.
ScalaListener.prototype.enterFunSig = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#funSig.
ScalaListener.prototype.exitFunSig = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#typeDcl.
ScalaListener.prototype.enterTypeDcl = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#typeDcl.
ScalaListener.prototype.exitTypeDcl = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#patVarDef.
ScalaListener.prototype.enterPatVarDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#patVarDef.
ScalaListener.prototype.exitPatVarDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#def.
ScalaListener.prototype.enterDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#def.
ScalaListener.prototype.exitDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#patDef.
ScalaListener.prototype.enterPatDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#patDef.
ScalaListener.prototype.exitPatDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#varDef.
ScalaListener.prototype.enterVarDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#varDef.
ScalaListener.prototype.exitVarDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#funDef.
ScalaListener.prototype.enterFunDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#funDef.
ScalaListener.prototype.exitFunDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#typeDef.
ScalaListener.prototype.enterTypeDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#typeDef.
ScalaListener.prototype.exitTypeDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#tmplDef.
ScalaListener.prototype.enterTmplDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#tmplDef.
ScalaListener.prototype.exitTmplDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classDef.
ScalaListener.prototype.enterClassDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classDef.
ScalaListener.prototype.exitClassDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#traitDef.
ScalaListener.prototype.enterTraitDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#traitDef.
ScalaListener.prototype.exitTraitDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#objectDef.
ScalaListener.prototype.enterObjectDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#objectDef.
ScalaListener.prototype.exitObjectDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classTemplateOpt.
ScalaListener.prototype.enterClassTemplateOpt = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classTemplateOpt.
ScalaListener.prototype.exitClassTemplateOpt = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#traitTemplateOpt.
ScalaListener.prototype.enterTraitTemplateOpt = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#traitTemplateOpt.
ScalaListener.prototype.exitTraitTemplateOpt = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classTemplate.
ScalaListener.prototype.enterClassTemplate = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classTemplate.
ScalaListener.prototype.exitClassTemplate = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#traitTemplate.
ScalaListener.prototype.enterTraitTemplate = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#traitTemplate.
ScalaListener.prototype.exitTraitTemplate = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#classParents.
ScalaListener.prototype.enterClassParents = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#classParents.
ScalaListener.prototype.exitClassParents = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#traitParents.
ScalaListener.prototype.enterTraitParents = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#traitParents.
ScalaListener.prototype.exitTraitParents = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#constr.
ScalaListener.prototype.enterConstr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#constr.
ScalaListener.prototype.exitConstr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#earlyDefs.
ScalaListener.prototype.enterEarlyDefs = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#earlyDefs.
ScalaListener.prototype.exitEarlyDefs = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#earlyDef.
ScalaListener.prototype.enterEarlyDef = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#earlyDef.
ScalaListener.prototype.exitEarlyDef = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#constrExpr.
ScalaListener.prototype.enterConstrExpr = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#constrExpr.
ScalaListener.prototype.exitConstrExpr = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#constrBlock.
ScalaListener.prototype.enterConstrBlock = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#constrBlock.
ScalaListener.prototype.exitConstrBlock = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#selfInvocation.
ScalaListener.prototype.enterSelfInvocation = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#selfInvocation.
ScalaListener.prototype.exitSelfInvocation = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#topStatSeq.
ScalaListener.prototype.enterTopStatSeq = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#topStatSeq.
ScalaListener.prototype.exitTopStatSeq = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#topStat.
ScalaListener.prototype.enterTopStat = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#topStat.
ScalaListener.prototype.exitTopStat = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#packaging.
ScalaListener.prototype.enterPackaging = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#packaging.
ScalaListener.prototype.exitPackaging = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#packageObject.
ScalaListener.prototype.enterPackageObject = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#packageObject.
ScalaListener.prototype.exitPackageObject = function(ctx) {
};


// Enter a parse tree produced by ScalaParser#compilationUnit.
ScalaListener.prototype.enterCompilationUnit = function(ctx) {
};

// Exit a parse tree produced by ScalaParser#compilationUnit.
ScalaListener.prototype.exitCompilationUnit = function(ctx) {
};



exports.ScalaListener = ScalaListener;