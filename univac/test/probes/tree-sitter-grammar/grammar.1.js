// // const grammar = require('tree-sitter')
// // const {seq, optional, repeat} = require('tree-sitter')

// module.exports = grammar({
//   name: 'the_language_name',

//   rules: {
//     // source_file: $ => repeat($._definition),

//     // _definition: $ => choice(
//     //   'hello', 
//     //   $.function_definition
//     //   // TODO: other kinds of definitions
//     // ),

//     // function_definition: $ => seq(
//     //   'func',
//     //   $.identifier,
//     //   $.parameter_list,
//     //   // $._type,
//     //   // $.block
//     // ),

//     // parameter_list: $ => seq(
//     //   '(',
//     //    // TODO: parameters
//     //   ')'
//     // ),

//     // _type: $ => choice(
//     //   'bool'
//     //   // TODO: other kinds of types
//     // ),

//     // block: $ => seq(
//     //   '{',
//     //   repeat($._statement),
//     //   '}'
//     // ),

//     // _statement: $ => choice(
//     //   $.return_statement
//     //   // TODO: other kinds of statements
//     // ),

//     // return_statement: $ => seq(
//     //   'return',
//     //   $._expression,
//     //   ';'
//     // ),

//     // _expression: $ => choice(
//     //   $.identifier,
//     //   $.number
//     //   // TODO: other kinds of expressions
//     // ),

//     // identifier: $ => /[a-z]+/,

//     // number: $ => /\d+/

//     // The production rules of the context-free grammar
//     source_file: $ => repeat(choice($.methods)),
//     methods: $ => seq('!', $.identifier, optional('class'), 'methodsFor:', $.string, '!', repeat(seq($.method, '!')), '!'),
//     identifier: $ => /[a-z][a-z0-9_]*/i,
//     method: $=>'m1',
//     string: $=>seq("'", /[^']*/i, "'")
//   }
// });