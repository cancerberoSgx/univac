import test from 'ava'
import { writeFileSync } from 'fs'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types'

const result = parseAst({
  input: `
class Runnable<a,a>(a : doo = 0) : foo(d=0), bar by x, bar {
}
fun foo() {
  when (a) {
    a.foo<T>(a, d) -> a
  }
}
enum class Color(val rgb : Int) {
  RED(0xFF000) {
      override fun foo(): Int { return 1 }
  }
}
  `,
  language: Language.kotlin,
  text: true
})

writeFileSync('tmp.json', printNode({ node: result }))

test('should parse', t => {
  t.is(result.children.length, 7)
})

test('should serialize', t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: '--  -- `` [[ ``  ^ j + + o j+ o . Ñ  jo . 123 ( % ) . .',
    language: Language.kotlin
  }))
})

test('should get correct ast 2', t => {
  const r = printNode({
    node: result
  })
  const expected = [`
<whenCondition text="a.foo<T>(a,d)">
  <expression text="a.foo<T>(a,d)">
    <postfixUnaryExpression text="a.foo<T>(a,d)">
      <atomicExpression text="a">
        <simpleIdentifier text="a">
        </simpleIdentifier>
      </atomicExpression> <postfixUnaryOperation text=".foo<T>(a,d)">
        <memberAccessOperator text=".">
        </memberAccessOperator> <postfixUnaryExpression text="foo<T>(a,d)">
          <atomicExpression text="foo">
            <simpleIdentifier text="foo"> `,
    `
    <modifierList text="enum">
    <modifier text="enum">
      <classModifier text="enum">
      </classModifier>
    </modifier>
  </modifierList> <simpleIdentifier text="Color">
  </simpleIdentifier> <primaryConstructor text="(valrgb:Int)">
    <classParameters text="(valrgb:Int)">
      <classParameter text="valrgb:Int">
        <simpleIdentifier text="rgb">
        </simpleIdentifier> <type text="Int">
          <typeReference text="Int">
            <userType text="Int">
              <simpleUserType text="Int">
                <simpleIdentifier text="Int">`
  ]
  expected.forEach(e => {
    t.true(removeWhites(r).includes(removeWhites(e)), e)
  })
})

