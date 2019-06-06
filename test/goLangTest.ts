import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types'

const result = parseAst({
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
  language: Language.golang
})

test('should parse', t => {
  t.is(result.children.length, 5)
})

test('should serialize', t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', t => {
  t.throws(() => JSON.stringify(parseAst({
    input: 'func 8',
    language: Language.golang
  }), null, 2))
})
