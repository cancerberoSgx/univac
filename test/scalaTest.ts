import test from 'ava'
import { parseAst } from '../src/parseAst'

const result = parseAst({
  input: `
object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, world!")
  }
}
  `,
  language: 'scala'
})

test('should parse', t => {
  t.is(result.children.length, 1)
})

test('should serialize', t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: '--  -- `` [[ ``  ^ j + + o j+ o . Ñ  jo . 123 ( % ) . .',
    language: 'scala'
  }))
})