import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAst({
    input: `
@primarycolor: #FF7F50;
@color:#800080;
h1 {
    color: @primarycolor;
}
h3 {
    color: @color;
}
    ` .trim(),
    language: Language.less,
    text: true
  })
})

test('should parse', async t => {
  t.is(result.children.length, 4)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAst({
    input: 'no .=%& # kÑ f=)+oo9t valid css  }{',
    language: Language.less,
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
  // writeFileSync('tmp.json', o)
  const expected = [`<expression text="@color">  <variableName text="@color">`,
    `<statement text="h3{color:@color;}"> <ruleset text="h3{color:@color;}">  <selectors text="h3">`,
    `statement text="@primarycolor:#FF7F50;"> <variableDeclaration text="@primarycolor:#FF7F50"> <variableName text="@primarycolor">  </variableName> <values text="#FF7F50"> <commandStatement text="#FF7F50"> <expression text="#FF7F50">`,
  ]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
