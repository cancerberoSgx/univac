import test from 'ava'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: 'int main() {}',
    language: Language.c,
    omitPosition: true,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('JSON stringify', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', async t => {
  await t.throwsAsync(() => parseAstOrThrow({
    input: 'jo jo jo 123',
    language: Language.c
  }))
})

test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: 'jo jo jo',
    language: Language.c,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`no viable alternative at input`), msg)
      }
    }
  })
})

test('ast compare', async t => {
  t.is(printNode({ node: result }), `<compilationUnit text="intmain(){}<EOF>">
  <translationUnit text="intmain(){}">
    <externalDeclaration text="intmain(){}">
      <functionDefinition text="intmain(){}">
        <declarationSpecifiers text="int">
          <declarationSpecifier text="int">
            <typeSpecifier text="int">
            </typeSpecifier>
          </declarationSpecifier>
        </declarationSpecifiers> <declarator text="main()">
          <directDeclarator text="main()">
            <directDeclarator text="main">
            </directDeclarator>
          </directDeclarator>
        </declarator> <compoundStatement text="{}">
        </compoundStatement>
      </functionDefinition>
    </externalDeclaration>
  </translationUnit>
</compilationUnit>`)
})
