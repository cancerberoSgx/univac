import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
// define a grammar called Hello
grammar Hello;
r   : 'hello' ID;
ID  : [a-z]+ ;
WS  : [ \\t\\r\\n]+ -> skip ;    
    `,
    language: Language.antlr4,
    omitPosition: true,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 2)
})

test('JSON stringify', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: 'jo jo jo',
    language: Language.antlr4,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`mismatched input`), msg)
      }
    }
  })
})

// TODO: should be similar to https://clang.llvm.org/doxygen/group__CINDEX.html#gaaccc432245b4cd9f2d470913f9ef0013
test('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  const expected = [`
<grammarType text="grammar">
  </grammarType> <identifier text="Hello"> </identifier>`, `

<ruleSpec text="r:'hello'ID;">
  <parserRuleSpec text="r:'hello'ID;">
    <ruleBlock text="'hello'ID">
      <ruleAltList text="'hello'ID">
        <labeledAlt text="'hello'ID">
          <alternative text="'hello'ID">
            <element text="'hello'">
              <atom text="'hello'">
                <terminal text="'hello'">
                </terminal>
              </atom>
            </element> <element text="ID">
              <atom text="ID">
                <terminal text="ID">
                </terminal>
              </atom>
            </element>
          </alternative>`, `
          
<lexerRuleSpec text="ID:[a-z]+;">
  <lexerRuleBlock text="[a-z]+">
    <lexerAltList text="[a-z]+">
      <lexerAlt text="[a-z]+">
        <lexerElements text="[a-z]+">
          <lexerElement text="[a-z]+">
            <lexerAtom text="[a-z]">
            </lexerAtom> <ebnfSuffix text="+">
            </ebnfSuffix>
          </lexerElement>
        </lexerElements>
                `, `
                
<lexerCommands text="->skip">
  <lexerCommand text="skip">
    <lexerCommandName text="skip">
      <identifier text="skip">
      </identifier>
    </lexerCommandName>
  </lexerCommand>
</lexerCommands>
              
              `]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
