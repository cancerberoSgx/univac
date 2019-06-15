// // https://github.com/graphql/graphql-spec/blob/master/spec/Appendix%20B%20--%20Grammar%20Summary.md
// // https://github.com/antlr/grammars-v4/blob/master/graphql/GraphQL.g4

// module.exports = grammar({
//   name: 'GraphQL',

//   rules: {
//     source_file: $ => repeat1($.Definition),

//     /**
//      * Definition :
//      *  * ExecutableDefinition
//      *  * TypeSystemDefinition
//      *  * TypeSystemExtension
//      */
//     Definition: $ => choice($.ExecutableDefinition, $.TypeSystemDefinition, $.TypeSystemExtension),

//     /**
//      * ExecutableDefinition :
//      *  * OperationDefinition
//      *  * FragmentDefinition
//      */
//     ExecutableDefinition: $ => choice($.OperationDefinition, $.FragmentDefinition),

//     /**
//      * OperationDefinition :
//      *  * SelectionSet
//      *  * OperationType Name? VariableDefinitions? Directives? SelectionSet
//      */
//     OperationDefinition: $ => choice($.SelectionSet,
//       seq($.OperationType, optional($.Name), optional($.VariableDefinitions), optional($.Directives), $.SelectionSet)
//     ),

//     /**
//      * OperationType : one of query mutation subscription
//      */
//     OperationType: $ => choice('query', 'mutation', 'subscription'),

//     /**
//      * SelectionSet : { Selection+ }
//      */
//     SelectionSet: $ => seq('{', repeat1($.Selection), '}'),

//     /**
//      * Selection :
//      *  * Field
//      *  * FragmentSpread
//      *  * InlineFragment
//      */
//     Selection: $ => choice($.Field, $.FragmentSpread, $.InlineFragment),

//     /** Field : Alias? Name Arguments? Directives? SelectionSet? */
//     Field: $ => seq(optional($.Alias), $.Name, optional($.Arguments), optional($.Directives), optional($.SelectionSet)),

//     Alias: $ => seq($.Name, ':'),

//     /**
//      * Arguments[Const] : ( Argument[?Const]+ )
//      */
//     Arguments: $ => seq('(', $.Argument, repeat(seq(',', $.Argument)), ')'),

//     /**
//      * Argument[Const] : Name : Value[?Const]
//      */
//     Argument: $ => seq($.Name, ':', $.Value),

//     /**
//      * FragmentSpread : ... FragmentName Directives?
//      */

//     /**
//      * InlineFragment : ... TypeCondition? Directives? SelectionSet
//      */

//     /**
//      * FragmentDefinition : fragment FragmentName TypeCondition Directives? SelectionSet
//      */

//     /**
//      * FragmentName : Name but not `on`
//      */

//     /**
//      * TypeCondition : on NamedType
//      */

//      /**
//       * TypeSystemDefinition :
//       * 
//       *   - SchemaDefinition
//       *   - TypeDefinition
//       *   - DirectiveDefinition
//       */
//      TypeSystemDefinition: $=>'TODO 8',

//      /**
//       * TypeSystemExtension :
//       *   - SchemaExtension
//       *   - TypeExtension
//       */
//      TypeSystemExtension: $=>'TODO 7',
     
//      /**
//       * FragmentDefinition : fragment FragmentName TypeCondition Directives? SelectionSet
//       */
//      FragmentDefinition: $=>'TODO 6',

//      /**
//       * VariableDefinitions : ( VariableDefinition+ )
//       */
//      VariableDefinitions: $=>'TODO 5',

//      /**
//       * Directives[Const] : Directive[?Const]+
//       */
//      Directives: $=>'TODO 4',

//      /**
//       * FragmentSpread : ... FragmentName Directives?
//       */
//      FragmentSpread: $=>'TODO 3',
     
//      /**
//       *  InlineFragment : ... TypeCondition? Directives? SelectionSet
//       */
//      InlineFragment: $=>'TODO 2',
    
//     /**
//      * Value[Const] :
//      *  * [~Const] Variable
//      *  * IntValue
//      *  * FloatValue
//      *  * StringValue
//      *  * BooleanValue
//      *  * NullValue
//      *  * EnumValue
//      *  * ListValue[?Const]
//      *  * ObjectValue[?Const]
//      */
//       Value: $=>'TODO 1',

//     /**
//      * Name :: /[_A-Za-z][_0-9A-Za-z]* /
//      */
//     Name: $ => /[_A-Za-z][_0-9A-Za-z]*/,

//   }
// });