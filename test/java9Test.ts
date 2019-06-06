import test from 'ava'
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types'
import { printNode } from '../src';

const result = parseAst({
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
})

// console.log(printNode({node: result}));

test('should parse', t => {
  t.is(result.children.length, 1)
})

test('should serialize', t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should throw on invalid input', t => {
  t.throws(() => parseAst({
    input: '--  -- `` [[ ``  ^ j + + o j+ o . Ñ  jo . 123 ( % ) . .',
    language: Language.java9
  }))
})

test('should get correct ast', t => {
  t.deepEqual(printNode({node: parseAst({
    input: `
  class Test {
    public int i;
  }
    `,
    language: Language.java9,
    text: true
  })}).trim(), `<compilationUnit text="classTest{publicinti;}<EOF>">
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

