import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { printNode } from '../src';

const result = parseAst({
  input: 'int main() {}',
  language: Language.c,
  omitPosition: true,
  text: true
})

test('should parse', t => {
  t.is(result.children.length, 1)
})

test('JSON stringify', t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: 'jo jo jo 123',
    language: Language.c
  }))
})

test('ast compare', t => {
  t.is(printNode({node: result}), `<compilationUnit text="intmain(){}<EOF>">
  <translationUnit text="intmain(){}">
    <externalDeclaration text="intmain(){}">
      <functionDefinition text="intmain(){}">
        <declarationSpecifiers text="int">
          <declarationSpecifier text="int">
            <typeSpecifier text="int">
            </typeSpecifier>
          </declarationSpecifier>
        </declarationSpecifiers><declarator text="main()">
          <directDeclarator text="main()">
            <directDeclarator text="main">
            </directDeclarator>
          </directDeclarator>
        </declarator><compoundStatement text="{}">
        </compoundStatement>
      </functionDefinition>
    </externalDeclaration>
  </translationUnit>
</compilationUnit>`)
})
