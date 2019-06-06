import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types'

const result = parseAst({
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
})


// console.log(printNode({node: result}));

test('should parse', t => {
  t.is(result.children.length, 3)
})

test('should serialize', t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', t => {
  t.throws(() => JSON.stringify(parseAst({
    input: 'fac -> -> -> -> 11 f Ñ un c 8',
    language: Language.erlang
  }), null, 2))
})
