import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
(source_file ((milk juice a b c 1 2 (3)) (honey marmalade))
  (package_clause (package_identifier))
  (function_declaration (identifier) (parameter_list) (block
    (call_expression
      (identifier)
      (argument_list
        (identifier)
        (variadic_argument (identifier))))
    (call_expression (((milk juice) (honey marmalade)))
      (identifier)
      (argument_list (identifier) (identifier)))
    (call_expression
      (identifier)
      (argument_list (identifier) (variadic_argument (identifier))))
    )
  )
)    
            `,
    language: Language.sexpression,
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

test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: 'jo jo jo --oo )(',
    language: Language.sexpression,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`extraneous input`), msg)
      }
    }
  })
})

test('generate correct ast', async t => {
  t.deepEqual(await parseAstOrThrow({
    input: `(a 1)`,
    language: Language.sexpression,
    omitPosition: true,
    text: true
  }), {
      "type": "sexpr",
      "text": "(a1)<EOF>",
      "children": [
        {
          "type": "list",
          "text": "(a1)",
          "children": [
            {
              "type": "atom",
              "text": "a",
              "children": []
            },
            {
              "type": "atom",
              "text": "1",
              "children": []
            }
          ]
        }
      ]
    })
})

test('generate correct ast 2', async t => {
  const o = printNode({
    node: result
  })
  const expected = [`
                  `, `
<list text="((milkjuiceabc12(3))(honeymarmalade))">
  <list text="(milkjuiceabc12(3))">
    <atom text="milk">
    </atom> <atom text="juice">
    </atom> <atom text="a">
    </atom> <atom text="b">
    </atom> <atom text="c">
    </atom> <atom text="1">
    </atom> <atom text="2">
    </atom> <list text="(3)">
      <atom text="3">
      </atom>
  </list>
</list> <list text="(honeymarmalade)">                
                `, `
<atom text="call_expression">
</atom> 
<list text="(identifier)">
  <atom text="identifier">
  </atom>
</list> 
<list text="(argument_list(identifier)(variadic_argument(identifier)))">
  <atom text="argument_list">
  </atom> 
  <list text="(identifier)">
    <atom text="identifier">
      
                    `]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
