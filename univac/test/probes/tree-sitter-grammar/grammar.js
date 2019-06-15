// https://github.com/graphql/graphql-spec/blob/master/spec/Appendix%20B%20--%20Grammar%20Summary.md
module.exports = grammar({
  name: 'GraphQL',

  rules: {
    source_file: $ => repeat1($.Definition),

    /**
     * Definition :
     *  * ExecutableDefinition
     *  * TypeSystemDefinition
     *  * TypeSystemExtension
     */
    Definition: $ => choice($.ExecutableDefinition, $.TypeSystemDefinition, $.TypeSystemExtension),

    /**
     * ExecutableDefinition :
     *  * OperationDefinition
     *  * FragmentDefinition
     */
    ExecutableDefinition: $ => choice($.OperationDefinition, $.FragmentDefinition),

    /**
     * OperationDefinition :
     *  * SelectionSet
     *  * OperationType Name? VariableDefinitions? Directives? SelectionSet
     */
    OperationDefinition: $ => choice($.SelectionSet,
      seq($.OperationType, optional($.Name), optional($.VariableDefinitions), optional($.Directives ?), $.SelectionSet)
    ),

    /**
     * OperationType : one of query mutation subscription
     */
    OperationType: $ => choice('query', 'mutation', 'subscription'),

    /**
     * SelectionSet : { Selection+ }
     */
    SelectionSet: $ => seq('{', repeat1($.Selection), '}'),

    /**
     * Selection :
     *  * Field
     *  * FragmentSpread
     *  * InlineFragment
     */
    Selection: $ => choice($.Field, $.FragmentSpread, $.InlineFragment),

    /** Field : Alias? Name Arguments? Directives? SelectionSet? */
    Field: $ => seq(optional($.Alias), $.Name, optional($.arguments), optional($.directives), optional($.SelectionSet)),

    Alias: $ => seq($.Name, ':'),

    /**
     * Arguments[Const] : ( Argument[?Const]+ )
     */
    Arguments: $ => seq('(', $.Argument, repeat(seq(',', $.Argument)), ')'),

    /**
     * Argument[Const] : Name : Value[?Const]
     */
    Argument: $ => seq($.Name, ':', $.Value),

    /**
     * FragmentSpread : ... FragmentName Directives?
     */

    /**
     * InlineFragment : ... TypeCondition? Directives? SelectionSet
     */

    /**
     * FragmentDefinition : fragment FragmentName TypeCondition Directives? SelectionSet
     */

    /**
     * FragmentName : Name but not `on`
     */

    /**
     * TypeCondition : on NamedType
     */

    /**
     * Value[Const] :
     *  * [~Const] Variable
     *  * IntValue
     *  * FloatValue
     *  * StringValue
     *  * BooleanValue
     *  * NullValue
     *  * EnumValue
     *  * ListValue[?Const]
     *  * ObjectValue[?Const]
     */
    /**
     * Name :: /[_A-Za-z][_0-9A-Za-z]* /
     */
    Name: $ => /[_A-Za-z][_0-9A-Za-z]*/,

  }
});