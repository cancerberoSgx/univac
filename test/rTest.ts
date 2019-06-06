import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAst({
    input: `
myString <- "Hello, World!"
print ( myString)
bdeff <- function(blocks, varieties) {
  blocks <- as.factor(blocks)
}
  `,
    language: Language.r,
    text: true
  })
})

test('should parse', async t => {
  t.is(result.children.length, 3)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAst({
    input: '$) djdj',
    language: Language.r,
    errorListener: {
      syntaxError(a,b,c,d,msg){
        t.true(msg.includes(`mismatched input`), msg)
      }
    }
  })
})

test('should get correct ast 2', async t => {
  const r = printNode({
    node: result
  })
  const expected = [`
  <expr text="myString<-\\"Hello, World!\\"">
  <expr text="myString">
  </expr> <expr text="\\"Hello, World!\\"">
  `,
    `
<expr text="bdeff<-function(blocks,varieties){blocks<-as.factor(blocks)\\n}">
<expr text="bdeff">
</expr> <expr text="function(blocks,varieties){blocks<-as.factor(blocks)\\n}">
  <formlist text="blocks,varieties">
    <form text="blocks">
    </form> <form text="varieties">
    </form>
  </formlist> <expr text="{blocks<-as.factor(blocks)\\n}">
    <exprlist text="blocks<-as.factor(blocks)\\n">
      <expr text="blocks<-as.factor(blocks)">
        <expr text="blocks<-as.factor">
          <expr text="blocks">
          </expr> <expr text="as.factor">
          </expr>
        </expr> <sublist text="blocks">
          <sub text="blocks">
            <expr text="blocks">
                `
  ]
  expected.forEach(e => {
    t.true(removeWhites(r).includes(removeWhites(e)), e)
  })
})

