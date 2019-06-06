// @ts-nocheck
// Generated from Ruby.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RubyParser.
function RubyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RubyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RubyListener.prototype.constructor = RubyListener;

// Enter a parse tree produced by RubyParser#prog.
RubyListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by RubyParser#prog.
RubyListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by RubyParser#expression_list.
RubyListener.prototype.enterExpression_list = function(ctx) {
};

// Exit a parse tree produced by RubyParser#expression_list.
RubyListener.prototype.exitExpression_list = function(ctx) {
};


// Enter a parse tree produced by RubyParser#expression.
RubyListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by RubyParser#expression.
RubyListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by RubyParser#global_get.
RubyListener.prototype.enterGlobal_get = function(ctx) {
};

// Exit a parse tree produced by RubyParser#global_get.
RubyListener.prototype.exitGlobal_get = function(ctx) {
};


// Enter a parse tree produced by RubyParser#global_set.
RubyListener.prototype.enterGlobal_set = function(ctx) {
};

// Exit a parse tree produced by RubyParser#global_set.
RubyListener.prototype.exitGlobal_set = function(ctx) {
};


// Enter a parse tree produced by RubyParser#global_result.
RubyListener.prototype.enterGlobal_result = function(ctx) {
};

// Exit a parse tree produced by RubyParser#global_result.
RubyListener.prototype.exitGlobal_result = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_inline_call.
RubyListener.prototype.enterFunction_inline_call = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_inline_call.
RubyListener.prototype.exitFunction_inline_call = function(ctx) {
};


// Enter a parse tree produced by RubyParser#require_block.
RubyListener.prototype.enterRequire_block = function(ctx) {
};

// Exit a parse tree produced by RubyParser#require_block.
RubyListener.prototype.exitRequire_block = function(ctx) {
};


// Enter a parse tree produced by RubyParser#pir_inline.
RubyListener.prototype.enterPir_inline = function(ctx) {
};

// Exit a parse tree produced by RubyParser#pir_inline.
RubyListener.prototype.exitPir_inline = function(ctx) {
};


// Enter a parse tree produced by RubyParser#pir_expression_list.
RubyListener.prototype.enterPir_expression_list = function(ctx) {
};

// Exit a parse tree produced by RubyParser#pir_expression_list.
RubyListener.prototype.exitPir_expression_list = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_definition.
RubyListener.prototype.enterFunction_definition = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_definition.
RubyListener.prototype.exitFunction_definition = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_definition_body.
RubyListener.prototype.enterFunction_definition_body = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_definition_body.
RubyListener.prototype.exitFunction_definition_body = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_definition_header.
RubyListener.prototype.enterFunction_definition_header = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_definition_header.
RubyListener.prototype.exitFunction_definition_header = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_name.
RubyListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_name.
RubyListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_definition_params.
RubyListener.prototype.enterFunction_definition_params = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_definition_params.
RubyListener.prototype.exitFunction_definition_params = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_definition_params_list.
RubyListener.prototype.enterFunction_definition_params_list = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_definition_params_list.
RubyListener.prototype.exitFunction_definition_params_list = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_definition_param_id.
RubyListener.prototype.enterFunction_definition_param_id = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_definition_param_id.
RubyListener.prototype.exitFunction_definition_param_id = function(ctx) {
};


// Enter a parse tree produced by RubyParser#return_statement.
RubyListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by RubyParser#return_statement.
RubyListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_call.
RubyListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_call.
RubyListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_call_param_list.
RubyListener.prototype.enterFunction_call_param_list = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_call_param_list.
RubyListener.prototype.exitFunction_call_param_list = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_call_params.
RubyListener.prototype.enterFunction_call_params = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_call_params.
RubyListener.prototype.exitFunction_call_params = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_param.
RubyListener.prototype.enterFunction_param = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_param.
RubyListener.prototype.exitFunction_param = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_unnamed_param.
RubyListener.prototype.enterFunction_unnamed_param = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_unnamed_param.
RubyListener.prototype.exitFunction_unnamed_param = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_named_param.
RubyListener.prototype.enterFunction_named_param = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_named_param.
RubyListener.prototype.exitFunction_named_param = function(ctx) {
};


// Enter a parse tree produced by RubyParser#function_call_assignment.
RubyListener.prototype.enterFunction_call_assignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#function_call_assignment.
RubyListener.prototype.exitFunction_call_assignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#all_result.
RubyListener.prototype.enterAll_result = function(ctx) {
};

// Exit a parse tree produced by RubyParser#all_result.
RubyListener.prototype.exitAll_result = function(ctx) {
};


// Enter a parse tree produced by RubyParser#elsif_statement.
RubyListener.prototype.enterElsif_statement = function(ctx) {
};

// Exit a parse tree produced by RubyParser#elsif_statement.
RubyListener.prototype.exitElsif_statement = function(ctx) {
};


// Enter a parse tree produced by RubyParser#if_elsif_statement.
RubyListener.prototype.enterIf_elsif_statement = function(ctx) {
};

// Exit a parse tree produced by RubyParser#if_elsif_statement.
RubyListener.prototype.exitIf_elsif_statement = function(ctx) {
};


// Enter a parse tree produced by RubyParser#if_statement.
RubyListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by RubyParser#if_statement.
RubyListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by RubyParser#unless_statement.
RubyListener.prototype.enterUnless_statement = function(ctx) {
};

// Exit a parse tree produced by RubyParser#unless_statement.
RubyListener.prototype.exitUnless_statement = function(ctx) {
};


// Enter a parse tree produced by RubyParser#while_statement.
RubyListener.prototype.enterWhile_statement = function(ctx) {
};

// Exit a parse tree produced by RubyParser#while_statement.
RubyListener.prototype.exitWhile_statement = function(ctx) {
};


// Enter a parse tree produced by RubyParser#for_statement.
RubyListener.prototype.enterFor_statement = function(ctx) {
};

// Exit a parse tree produced by RubyParser#for_statement.
RubyListener.prototype.exitFor_statement = function(ctx) {
};


// Enter a parse tree produced by RubyParser#init_expression.
RubyListener.prototype.enterInit_expression = function(ctx) {
};

// Exit a parse tree produced by RubyParser#init_expression.
RubyListener.prototype.exitInit_expression = function(ctx) {
};


// Enter a parse tree produced by RubyParser#all_assignment.
RubyListener.prototype.enterAll_assignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#all_assignment.
RubyListener.prototype.exitAll_assignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#for_init_list.
RubyListener.prototype.enterFor_init_list = function(ctx) {
};

// Exit a parse tree produced by RubyParser#for_init_list.
RubyListener.prototype.exitFor_init_list = function(ctx) {
};


// Enter a parse tree produced by RubyParser#cond_expression.
RubyListener.prototype.enterCond_expression = function(ctx) {
};

// Exit a parse tree produced by RubyParser#cond_expression.
RubyListener.prototype.exitCond_expression = function(ctx) {
};


// Enter a parse tree produced by RubyParser#loop_expression.
RubyListener.prototype.enterLoop_expression = function(ctx) {
};

// Exit a parse tree produced by RubyParser#loop_expression.
RubyListener.prototype.exitLoop_expression = function(ctx) {
};


// Enter a parse tree produced by RubyParser#for_loop_list.
RubyListener.prototype.enterFor_loop_list = function(ctx) {
};

// Exit a parse tree produced by RubyParser#for_loop_list.
RubyListener.prototype.exitFor_loop_list = function(ctx) {
};


// Enter a parse tree produced by RubyParser#statement_body.
RubyListener.prototype.enterStatement_body = function(ctx) {
};

// Exit a parse tree produced by RubyParser#statement_body.
RubyListener.prototype.exitStatement_body = function(ctx) {
};


// Enter a parse tree produced by RubyParser#statement_expression_list.
RubyListener.prototype.enterStatement_expression_list = function(ctx) {
};

// Exit a parse tree produced by RubyParser#statement_expression_list.
RubyListener.prototype.exitStatement_expression_list = function(ctx) {
};


// Enter a parse tree produced by RubyParser#assignment.
RubyListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#assignment.
RubyListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#dynamic_assignment.
RubyListener.prototype.enterDynamic_assignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#dynamic_assignment.
RubyListener.prototype.exitDynamic_assignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#int_assignment.
RubyListener.prototype.enterInt_assignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#int_assignment.
RubyListener.prototype.exitInt_assignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#float_assignment.
RubyListener.prototype.enterFloat_assignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#float_assignment.
RubyListener.prototype.exitFloat_assignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#string_assignment.
RubyListener.prototype.enterString_assignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#string_assignment.
RubyListener.prototype.exitString_assignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#initial_array_assignment.
RubyListener.prototype.enterInitial_array_assignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#initial_array_assignment.
RubyListener.prototype.exitInitial_array_assignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#array_assignment.
RubyListener.prototype.enterArray_assignment = function(ctx) {
};

// Exit a parse tree produced by RubyParser#array_assignment.
RubyListener.prototype.exitArray_assignment = function(ctx) {
};


// Enter a parse tree produced by RubyParser#array_definition.
RubyListener.prototype.enterArray_definition = function(ctx) {
};

// Exit a parse tree produced by RubyParser#array_definition.
RubyListener.prototype.exitArray_definition = function(ctx) {
};


// Enter a parse tree produced by RubyParser#array_definition_elements.
RubyListener.prototype.enterArray_definition_elements = function(ctx) {
};

// Exit a parse tree produced by RubyParser#array_definition_elements.
RubyListener.prototype.exitArray_definition_elements = function(ctx) {
};


// Enter a parse tree produced by RubyParser#array_selector.
RubyListener.prototype.enterArray_selector = function(ctx) {
};

// Exit a parse tree produced by RubyParser#array_selector.
RubyListener.prototype.exitArray_selector = function(ctx) {
};


// Enter a parse tree produced by RubyParser#dynamic_result.
RubyListener.prototype.enterDynamic_result = function(ctx) {
};

// Exit a parse tree produced by RubyParser#dynamic_result.
RubyListener.prototype.exitDynamic_result = function(ctx) {
};


// Enter a parse tree produced by RubyParser#dynamic.
RubyListener.prototype.enterDynamic = function(ctx) {
};

// Exit a parse tree produced by RubyParser#dynamic.
RubyListener.prototype.exitDynamic = function(ctx) {
};


// Enter a parse tree produced by RubyParser#int_result.
RubyListener.prototype.enterInt_result = function(ctx) {
};

// Exit a parse tree produced by RubyParser#int_result.
RubyListener.prototype.exitInt_result = function(ctx) {
};


// Enter a parse tree produced by RubyParser#float_result.
RubyListener.prototype.enterFloat_result = function(ctx) {
};

// Exit a parse tree produced by RubyParser#float_result.
RubyListener.prototype.exitFloat_result = function(ctx) {
};


// Enter a parse tree produced by RubyParser#string_result.
RubyListener.prototype.enterString_result = function(ctx) {
};

// Exit a parse tree produced by RubyParser#string_result.
RubyListener.prototype.exitString_result = function(ctx) {
};


// Enter a parse tree produced by RubyParser#comparison_list.
RubyListener.prototype.enterComparison_list = function(ctx) {
};

// Exit a parse tree produced by RubyParser#comparison_list.
RubyListener.prototype.exitComparison_list = function(ctx) {
};


// Enter a parse tree produced by RubyParser#comparison.
RubyListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by RubyParser#comparison.
RubyListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by RubyParser#comp_var.
RubyListener.prototype.enterComp_var = function(ctx) {
};

// Exit a parse tree produced by RubyParser#comp_var.
RubyListener.prototype.exitComp_var = function(ctx) {
};


// Enter a parse tree produced by RubyParser#lvalue.
RubyListener.prototype.enterLvalue = function(ctx) {
};

// Exit a parse tree produced by RubyParser#lvalue.
RubyListener.prototype.exitLvalue = function(ctx) {
};


// Enter a parse tree produced by RubyParser#rvalue.
RubyListener.prototype.enterRvalue = function(ctx) {
};

// Exit a parse tree produced by RubyParser#rvalue.
RubyListener.prototype.exitRvalue = function(ctx) {
};


// Enter a parse tree produced by RubyParser#break_expression.
RubyListener.prototype.enterBreak_expression = function(ctx) {
};

// Exit a parse tree produced by RubyParser#break_expression.
RubyListener.prototype.exitBreak_expression = function(ctx) {
};


// Enter a parse tree produced by RubyParser#literal_t.
RubyListener.prototype.enterLiteral_t = function(ctx) {
};

// Exit a parse tree produced by RubyParser#literal_t.
RubyListener.prototype.exitLiteral_t = function(ctx) {
};


// Enter a parse tree produced by RubyParser#float_t.
RubyListener.prototype.enterFloat_t = function(ctx) {
};

// Exit a parse tree produced by RubyParser#float_t.
RubyListener.prototype.exitFloat_t = function(ctx) {
};


// Enter a parse tree produced by RubyParser#int_t.
RubyListener.prototype.enterInt_t = function(ctx) {
};

// Exit a parse tree produced by RubyParser#int_t.
RubyListener.prototype.exitInt_t = function(ctx) {
};


// Enter a parse tree produced by RubyParser#bool_t.
RubyListener.prototype.enterBool_t = function(ctx) {
};

// Exit a parse tree produced by RubyParser#bool_t.
RubyListener.prototype.exitBool_t = function(ctx) {
};


// Enter a parse tree produced by RubyParser#nil_t.
RubyListener.prototype.enterNil_t = function(ctx) {
};

// Exit a parse tree produced by RubyParser#nil_t.
RubyListener.prototype.exitNil_t = function(ctx) {
};


// Enter a parse tree produced by RubyParser#id.
RubyListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by RubyParser#id.
RubyListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by RubyParser#id_global.
RubyListener.prototype.enterId_global = function(ctx) {
};

// Exit a parse tree produced by RubyParser#id_global.
RubyListener.prototype.exitId_global = function(ctx) {
};


// Enter a parse tree produced by RubyParser#id_function.
RubyListener.prototype.enterId_function = function(ctx) {
};

// Exit a parse tree produced by RubyParser#id_function.
RubyListener.prototype.exitId_function = function(ctx) {
};


// Enter a parse tree produced by RubyParser#terminator.
RubyListener.prototype.enterTerminator = function(ctx) {
};

// Exit a parse tree produced by RubyParser#terminator.
RubyListener.prototype.exitTerminator = function(ctx) {
};


// Enter a parse tree produced by RubyParser#else_token.
RubyListener.prototype.enterElse_token = function(ctx) {
};

// Exit a parse tree produced by RubyParser#else_token.
RubyListener.prototype.exitElse_token = function(ctx) {
};


// Enter a parse tree produced by RubyParser#crlf.
RubyListener.prototype.enterCrlf = function(ctx) {
};

// Exit a parse tree produced by RubyParser#crlf.
RubyListener.prototype.exitCrlf = function(ctx) {
};



exports.RubyListener = RubyListener;