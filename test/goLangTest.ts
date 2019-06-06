import test from 'ava'
import { parseAst } from '../src/parseAst'

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
  language: 'golang'
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
    language: 'golang'
  }), null, 2))
})
