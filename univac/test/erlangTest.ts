import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
-module(tut1).
-export([fac/1]).
fac(1) ->
    1;
fac(N) ->
    N * fac(N - 1).
  
  `.trim(),
    language: Language.erlang,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 3)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', async t => {
  await t.throwsAsync(() => parseAstOrThrow({
    input: 'fac -> -> -> -> 11 f Ñ un c 8',
    language: Language.erlang
  }))
})

// test('should report syntax errors to given listener', async t => {
//   await parseAstOrThrow({
//     input: 'jo jo jo',
//     language: Language.fortran77,
//     errorListener: {
//       syntaxError(a,b,c,d,msg){
//         t.true(msg.includes(`missing EOL at`), msg)
//       }
//     }
//   })
// })

test('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  const expected = [`
<form text="-module(tut1).">
  <attribute text="-module(tut1)">
    <tokAtom text="module">
    </tokAtom> <attrVal text="(tut1)">
      <atomic text="tut1">
              `,
    ` <functionClause text="fac(1)->1">
    <tokAtom text="fac">
    </tokAtom> <clauseArgs text="(1)">
      <argumentList text="(1)">
        <exprs text="1">
          <atomic text="1">
            <tokInteger text="1">`,

    `
            <clauseBody text="->N*fac(N-1)">
          <exprs text="N*fac(N-1)">
            <expr500 text="N*fac(N-1)">
              <tokVar text="N">
              </tokVar> <multOp text="*">
              </multOp> <functionCall text="fac(N-1)">
                <atomic text="fac">
                  <tokAtom text="fac">
                  </tokAtom>
                </atomic> <argumentList text="(N-1)">
                  <exprs text="N-1">
                    <expr400 text="N-1">
                      <tokVar text="N">
                      </tokVar> <addOp text="-">
                      </addOp> <atomic text="1">
                        <tokInteger text="1">
            `]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
