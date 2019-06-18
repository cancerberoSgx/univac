import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
import java.io.File;
class Test {
  public static boolean profile = false;
  public static class Worker implements Runnable {
    public long parserStart;
    public long parserStop;
    List<String> files;
  }
  int m(String s){return s;}
  public static boolean profile = false;
  public int m(String[] a) {
    return (1+1>0 || !true) ? 1 : 2;
  }
}
  `,
    language: Language.java,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 2)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})


test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: '-- ',
    language: Language.java,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`mismatched input`) || msg.includes(`extraneous input`), msg)
      }
    }
  })
})

test('should get correct ast 2', async t => {
  const r = printNode({
    node: result
  })
  const expected = [`
<statement text="return(1+1>0||!true)?1:2;">
  <expression text="(1+1>0||!true)?1:2">
    <expression text="(1+1>0||!true)">
      <primary text="(1+1>0||!true)">
        <expression text="1+1>0||!true">
          <expression text="1+1>0">
            <expression text="1+1">
              <expression text="1">
                <primary text="1">
                  <literal text="1">
                    <integerLiteral text="1">`,
    `
<formalParameters text="(String[]a)">
  <formalParameterList text="String[]a">
    <formalParameter text="String[]a">
      <typeType text="String[]">
        <classOrInterfaceType text="String">
        </classOrInterfaceType>
      </typeType> <variableDeclaratorId text="a">`
  ]
  expected.forEach(e => {
    t.true(removeWhites(r).includes(removeWhites(e)))
  })
})

