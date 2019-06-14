import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../../src'
import { parseAstOrThrow } from '../../src/parseAst'
import { Language, Node } from '../../src/types'

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
  }
    `,
    language: Language.java9,
    text: true
  })!
  t.true(!!result)
})

// console.log(printNode({node: result}));

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', async t => {
  await t.throwsAsync(() => parseAstOrThrow({
    input: '--  -- `` [[ ``  ^ j + + o j+ o . Ñ  jo . 123 ( % ) . .',
    language: Language.java9
  }))
})

test('should get correct ast', async t => {
  t.deepEqual(printNode({
    node: await parseAstOrThrow({
      input: `
  class Test {
    public int i;
  }
    `,
      language: Language.java9,
      text: true
    })
  }).trim(), `<compilationUnit text="classTest{publicinti;}<EOF>">
  <ordinaryCompilation text="classTest{publicinti;}<EOF>">
    <typeDeclaration text="classTest{publicinti;}">
      <classDeclaration text="classTest{publicinti;}">
        <normalClassDeclaration text="classTest{publicinti;}">
          <identifier text="Test">
          </identifier> <classBody text="{publicinti;}">
            <classBodyDeclaration text="publicinti;">
              <classMemberDeclaration text="publicinti;">
                <fieldDeclaration text="publicinti;">
                  <fieldModifier text="public">
                  </fieldModifier> <unannType text="int">
                    <unannPrimitiveType text="int">
                      <numericType text="int">
                        <integralType text="int">
                        </integralType>
                      </numericType>
                    </unannPrimitiveType>
                  </unannType> <variableDeclaratorList text="i">
                    <variableDeclarator text="i">
                      <variableDeclaratorId text="i">
                        <identifier text="i">
                        </identifier>
                      </variableDeclaratorId>
                    </variableDeclarator>
                  </variableDeclaratorList>
                </fieldDeclaration>
              </classMemberDeclaration>
            </classBodyDeclaration>
          </classBody>
        </normalClassDeclaration>
      </classDeclaration>
    </typeDeclaration>
  </ordinaryCompilation>
</compilationUnit>`.trim())
})

test('should get correct ast 2', async t => {
  const r = printNode({
    node: await parseAstOrThrow({
      input: `
class Test<T> {
  public static boolean profile = false;
  public int m(String[] a) {
    return (1+1>0 || !true) ? 1 : 2;
  }
}
  `,
      language: Language.java9,
      text: true
    })
  }).trim()
  const expected = [`<typeParameter text="T"> <identifier text="T">`,
    `<variableInitializer text="false"> <expression text="false">`,
    `<conditionalOrExpression text="1+1>0"> <relationalExpression text="1+1>0"> <relationalExpression text="1+1"> <additiveExpression text="1+1"> <additiveExpression text="1"> <postfixExpression text="1"> <primary text="1"> <literal text="1">`,
    `<conditionalAndExpression text="!true"> <unaryExpressionNotPlusMinus text="!true"> <unaryExpression text="true"> <postfixExpression text="true"> <primary text="true"> <literal text="true">`,
    `<classMemberDeclaration text="publicintm(String[]a){return(1+1>0||!true)?1:2<missing ';'>}"> <methodDeclaration text="publicintm(String[]a){return(1+1>0||!true)?1:2<missing ';'>}"> <methodModifier text="public"> </methodModifier> <methodHeader text="intm(String[]a)"> <result text="int"> <unannType text="int"> <unannPrimitiveType text="int"> <numericType text="int"> <integralType text="int"> </integralType> </numericType> </unannPrimitiveType> </unannType> </result> <methodDeclarator text="m(String[]a)"> <identifier text="m"> </identifier> <formalParameterList text="String[]a"> <lastFormalParameter text="String[]a"> <formalParameter text="String[]a"> <unannType text="String[]"> <unannReferenceType text="String[]"> <unannArrayType text="String[]"> <unannClassOrInterfaceType text="String"> <identifier text="String">`]

  expected.forEach(e => {
    t.true(removeWhites(r).includes(removeWhites(e)), e)
  })

})
