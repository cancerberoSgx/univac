import test from 'ava'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { printNode } from '../src';

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
for(i = 1; i < length - 1; i+=1)
  for(j = 0; j < length - i; j+=1)
    if(mas[j] > mas[j+1])
      buf = mas[j]
      mas[j] = mas[j+1]
      mas[j+1] = buf
    end
  end
end
  `,
    language: Language.ruby
  })
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should throw on invalid input', async t => {
  await t.throwsAsync(() => parseAstOrThrow({
    input: `/&%$·@ def && 1 h 7 6 ¿Ñ`,
    language: Language.ruby
  }))
})
test.skip('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: '-- ',
    language: Language.ruby,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`mismatched input`) || msg.includes(`extraneous input`), msg)
      }
    }
  })
})
test.skip('ast is correct', async t => {
  const o = printNode({
    node: await parseAstOrThrow({
      input: `
# The Rectangle constructor accepts arguments in either  
# of the following forms:  
#   Rectangle.new([x_top, y_left], length, width)  
#   Rectangle.new([x_top, y_left], [x_bottom, y_right])  
class Rectangle  
  def initialize(*args)  
    if args.size < 2  || args.size > 3  
      # modify this to raise exception, later  
      puts 'This method takes either 2 or 3 arguments'  
    else  
      if args.size == 2  
        puts 'Two arguments'  
      else  
        puts 'Three arguments'  
      end  
    end  
  end  
end  
Rectangle.new([10, 23], 4, 10)  
Rectangle.new([10, 23], [14, 13]) `,
      language: Language.ruby,
      text: true
    })
  })
  const expected = [`asddasd`]
  expected.forEach(e => t.true(o.includes(e), e))

 })
