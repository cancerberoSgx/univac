import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAst({
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
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', async t => {
  await t.throwsAsync(() => parseAst({
    input: 'fac -> -> -> -> 11 f Ñ un c 8',
    language: Language.dart2
  }))
})

test('should report syntax errors to given listener', async t => {
  await parseAst({
    input: 'class A h {}',
    language: Language.dart2,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`no viable alternative at input`), msg)
      }
    }
  })
})

test('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  const expected = [`<identifier text="MyClass"> </identifier> <typeParameters text="<T>"> <typeParameter text="T"> <identifier text="T">`,
    `<fieldFormalParameter text="@requiredthis.a"> <metadata text="@required"> <qualified text="required"> <identifier text="required">`]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
