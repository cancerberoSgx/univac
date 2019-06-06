// @ts-nocheck
// Generated from Lua.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by LuaParser.
function LuaListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

LuaListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
LuaListener.prototype.constructor = LuaListener;

// Enter a parse tree produced by LuaParser#chunk.
LuaListener.prototype.enterChunk = function(ctx) {
};

// Exit a parse tree produced by LuaParser#chunk.
LuaListener.prototype.exitChunk = function(ctx) {
};


// Enter a parse tree produced by LuaParser#block.
LuaListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by LuaParser#block.
LuaListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by LuaParser#stat.
LuaListener.prototype.enterStat = function(ctx) {
};

// Exit a parse tree produced by LuaParser#stat.
LuaListener.prototype.exitStat = function(ctx) {
};


// Enter a parse tree produced by LuaParser#retstat.
LuaListener.prototype.enterRetstat = function(ctx) {
};

// Exit a parse tree produced by LuaParser#retstat.
LuaListener.prototype.exitRetstat = function(ctx) {
};


// Enter a parse tree produced by LuaParser#label.
LuaListener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by LuaParser#label.
LuaListener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by LuaParser#funcname.
LuaListener.prototype.enterFuncname = function(ctx) {
};

// Exit a parse tree produced by LuaParser#funcname.
LuaListener.prototype.exitFuncname = function(ctx) {
};


// Enter a parse tree produced by LuaParser#varlist.
LuaListener.prototype.enterVarlist = function(ctx) {
};

// Exit a parse tree produced by LuaParser#varlist.
LuaListener.prototype.exitVarlist = function(ctx) {
};


// Enter a parse tree produced by LuaParser#namelist.
LuaListener.prototype.enterNamelist = function(ctx) {
};

// Exit a parse tree produced by LuaParser#namelist.
LuaListener.prototype.exitNamelist = function(ctx) {
};


// Enter a parse tree produced by LuaParser#explist.
LuaListener.prototype.enterExplist = function(ctx) {
};

// Exit a parse tree produced by LuaParser#explist.
LuaListener.prototype.exitExplist = function(ctx) {
};


// Enter a parse tree produced by LuaParser#exp.
LuaListener.prototype.enterExp = function(ctx) {
};

// Exit a parse tree produced by LuaParser#exp.
LuaListener.prototype.exitExp = function(ctx) {
};


// Enter a parse tree produced by LuaParser#prefixexp.
LuaListener.prototype.enterPrefixexp = function(ctx) {
};

// Exit a parse tree produced by LuaParser#prefixexp.
LuaListener.prototype.exitPrefixexp = function(ctx) {
};


// Enter a parse tree produced by LuaParser#functioncall.
LuaListener.prototype.enterFunctioncall = function(ctx) {
};

// Exit a parse tree produced by LuaParser#functioncall.
LuaListener.prototype.exitFunctioncall = function(ctx) {
};


// Enter a parse tree produced by LuaParser#varOrExp.
LuaListener.prototype.enterVarOrExp = function(ctx) {
};

// Exit a parse tree produced by LuaParser#varOrExp.
LuaListener.prototype.exitVarOrExp = function(ctx) {
};


// Enter a parse tree produced by LuaParser#var.
LuaListener.prototype.enterVar = function(ctx) {
};

// Exit a parse tree produced by LuaParser#var.
LuaListener.prototype.exitVar = function(ctx) {
};


// Enter a parse tree produced by LuaParser#varSuffix.
LuaListener.prototype.enterVarSuffix = function(ctx) {
};

// Exit a parse tree produced by LuaParser#varSuffix.
LuaListener.prototype.exitVarSuffix = function(ctx) {
};


// Enter a parse tree produced by LuaParser#nameAndArgs.
LuaListener.prototype.enterNameAndArgs = function(ctx) {
};

// Exit a parse tree produced by LuaParser#nameAndArgs.
LuaListener.prototype.exitNameAndArgs = function(ctx) {
};


// Enter a parse tree produced by LuaParser#args.
LuaListener.prototype.enterArgs = function(ctx) {
};

// Exit a parse tree produced by LuaParser#args.
LuaListener.prototype.exitArgs = function(ctx) {
};


// Enter a parse tree produced by LuaParser#functiondef.
LuaListener.prototype.enterFunctiondef = function(ctx) {
};

// Exit a parse tree produced by LuaParser#functiondef.
LuaListener.prototype.exitFunctiondef = function(ctx) {
};


// Enter a parse tree produced by LuaParser#funcbody.
LuaListener.prototype.enterFuncbody = function(ctx) {
};

// Exit a parse tree produced by LuaParser#funcbody.
LuaListener.prototype.exitFuncbody = function(ctx) {
};


// Enter a parse tree produced by LuaParser#parlist.
LuaListener.prototype.enterParlist = function(ctx) {
};

// Exit a parse tree produced by LuaParser#parlist.
LuaListener.prototype.exitParlist = function(ctx) {
};


// Enter a parse tree produced by LuaParser#tableconstructor.
LuaListener.prototype.enterTableconstructor = function(ctx) {
};

// Exit a parse tree produced by LuaParser#tableconstructor.
LuaListener.prototype.exitTableconstructor = function(ctx) {
};


// Enter a parse tree produced by LuaParser#fieldlist.
LuaListener.prototype.enterFieldlist = function(ctx) {
};

// Exit a parse tree produced by LuaParser#fieldlist.
LuaListener.prototype.exitFieldlist = function(ctx) {
};


// Enter a parse tree produced by LuaParser#field.
LuaListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by LuaParser#field.
LuaListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by LuaParser#fieldsep.
LuaListener.prototype.enterFieldsep = function(ctx) {
};

// Exit a parse tree produced by LuaParser#fieldsep.
LuaListener.prototype.exitFieldsep = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorOr.
LuaListener.prototype.enterOperatorOr = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorOr.
LuaListener.prototype.exitOperatorOr = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorAnd.
LuaListener.prototype.enterOperatorAnd = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorAnd.
LuaListener.prototype.exitOperatorAnd = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorComparison.
LuaListener.prototype.enterOperatorComparison = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorComparison.
LuaListener.prototype.exitOperatorComparison = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorStrcat.
LuaListener.prototype.enterOperatorStrcat = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorStrcat.
LuaListener.prototype.exitOperatorStrcat = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorAddSub.
LuaListener.prototype.enterOperatorAddSub = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorAddSub.
LuaListener.prototype.exitOperatorAddSub = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorMulDivMod.
LuaListener.prototype.enterOperatorMulDivMod = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorMulDivMod.
LuaListener.prototype.exitOperatorMulDivMod = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorBitwise.
LuaListener.prototype.enterOperatorBitwise = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorBitwise.
LuaListener.prototype.exitOperatorBitwise = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorUnary.
LuaListener.prototype.enterOperatorUnary = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorUnary.
LuaListener.prototype.exitOperatorUnary = function(ctx) {
};


// Enter a parse tree produced by LuaParser#operatorPower.
LuaListener.prototype.enterOperatorPower = function(ctx) {
};

// Exit a parse tree produced by LuaParser#operatorPower.
LuaListener.prototype.exitOperatorPower = function(ctx) {
};


// Enter a parse tree produced by LuaParser#number.
LuaListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by LuaParser#number.
LuaListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by LuaParser#string.
LuaListener.prototype.enterString = function(ctx) {
};

// Exit a parse tree produced by LuaParser#string.
LuaListener.prototype.exitString = function(ctx) {
};



exports.LuaListener = LuaListener;