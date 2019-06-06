import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAst({
    input:  `
|myArray|

myArray := #('a' 'b' 'c' ).

#('hello' 'Javascript') at: 2 put: 'Smalltalk'; yourself.

Object subclass: #Customer
  instanceVariableNames: ''
  classVariableNames: ''
  poolDictionaries: ''
  category: ''.
  
Customer methodAt: #sayHello put: [
  Transcript show: 'Hello World.'; cr.
].

girlInBar phoneNumber 
  jerk say: 'Get lost' 
  jerk throwAt: drink.

10 timesRepeat: [
  Transcript show:'hello'.
  Transcript cr.
].
    
    ` .trim(),
    language: Language.smalltalk,
    text: true
  })
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', async t => {
 await  t.throwsAsync(() => parseAst({
  input: '.#[ })#{"',
    language: Language.smalltalk
  }))
})

test('should report syntax errors to given listener', async t => {
  await parseAst({
    input: '.',
    language: Language.smalltalk,
    errorListener: {
      syntaxError(a,b,c,d,msg){
        t.true(msg.includes(`mismatched input`), msg)
      }
    }
  })
})
test.skip('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  const expected = [``]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
