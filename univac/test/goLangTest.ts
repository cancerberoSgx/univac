import test from 'ava'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
package main
import "fmt"
type Person struct {
  work func()
  name string
  age int32
}
func main() {
  person := Person{work: nil, name: "Michał", age: 29}
  fmt.Println(person)  // {<nil> Michał 29}
}
  `,
    language: Language.golang,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 5)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})
 
test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: 'func 8',
    language: Language.golang,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`mismatched input`)  , msg)
      }
    }
  })
})

test.skip('ast is correct', async t => { })
