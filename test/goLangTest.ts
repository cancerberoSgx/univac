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
  console.log(JSON.stringify(result, null, 2));
  
  t.notThrows(()=>JSON.stringify(result))
})