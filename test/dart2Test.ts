import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types'
import { printNode } from '../src';
import { removeWhites } from 'misc-utils-of-mine-generic';

const result = parseAst({
  input: `
class MyClass<T> {
  final T a;
  final String b;

  const MyClass({@required this.a, @required this.b});

  @override
  String toString() => "$runtimeType(a: $a, b: \\"$b\\")";
}
  `.trim(),
  language: Language.dart2,
  text: true
})

// console.log(printNode({node: result}));

test('should parse', t => {
  t.is(result.children.length, 1)
})

test('should serialize', t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', t => {
  t.throws(() => JSON.stringify(parseAst({
    input: 'fac -> -> -> -> 11 f Ñ un c 8',
    language: Language.erlang
  }), null, 2))
})

test('generate correct ast', t => {
  const o = printNode({
    node: result})

  // console.log(o);

  const expected = [`<identifier text="MyClass"> </identifier> <typeParameters text="<T>"> <typeParameter text="T"> <identifier text="T">`, 
`<fieldFormalParameter text="@requiredthis.a"> <metadata text="@required"> <qualified text="required"> <identifier text="required">`]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
