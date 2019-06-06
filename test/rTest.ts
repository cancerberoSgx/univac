import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types'

const result = parseAst({
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

test('should parse', t => {
  t.is(result.children.length, 3)
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

