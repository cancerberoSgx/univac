import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAst({
    input: `
object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, world!")
  }
}
  `,
    language: Language.scala
  })
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', async t => {
  await t.throwsAsync(() => parseAst({
    input: '--  -- `` [[ ``  ^ j + + o j+ o . Ñ  jo . 123 ( % ) . .',
    language: Language.scala
  }))
})

test.skip('ast is correct', async t => { })
