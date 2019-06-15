import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { writeFileSync } from 'fs';

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
$title-font: normal 24px/1.5 'Open Sans', sans-serif;
$cool-red: #F44336;
$box-shadow-bottom-only: 0 2px 1px 0 rgba(0, 0, 0, 0.2);

h1.title {
  font: $title-font;
  color: $cool-red;
}

div.container {
  color: $cool-red;
  background: #fff;
  width: 100%;
  box-shadow: $box-shadow-bottom-only;
}
            `,
    language: Language.scss,
    omitPosition: true,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 5)
})

test('JSON stringify', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: 'jo jo jo --oo )(',
    language: Language.scss,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`mismatched input`), msg)
      }
    }
  })
})

test('generate correct ast 2', async t => {
  const o = printNode({
    node: result
  })
  writeFileSync('tmp.txt', o)
  const expected = [`<statement text="$title-font:normal24px/1.5'Open Sans',sans-serif;">
  <variableDeclaration text="$title-font:normal24px/1.5'Open Sans',sans-serif;">
    <variableName text="$title-font">
    </variableName> <values text="normal24px/1.5'Open Sans',sans-serif">
      <commandStatement text="normal24px/1.5'Open Sans'">
        <expression text="normal">
          <identifier text="normal">
          </identifier>
        </expression> <expression text="24px">
          <measurement text="24px">
          </measurement>
        </expression> <mathStatement text="/1.5'Open Sans'">
          <mathCharacter text="/">
          </mathCharacter> <commandStatement text="1.5'Open Sans'">
            <expression text="1.5">
              <measurement text="1.5">
              </measurement>
            </expression> <expression text="'Open Sans'">
            </expression>
          </commandStatement>
        </mathStatement>
      </commandStatement> <commandStatement text="sans-serif">
        <expression text="sans-serif">
          <identifier text="sans-serif">
          </identifier>
        </expression>
      </commandStatement>
    </values>
  </variableDeclaration>
                  `, ` 
                    `]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
