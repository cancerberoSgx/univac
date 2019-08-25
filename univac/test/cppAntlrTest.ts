import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
#include <iostream.h>
main()
{
  cout << "Hello World!";
  return 0;
}
class C {
  public:
    int a;
    operator int() const;
    virtual ~Foo();
}; 
typedef int X;
struct S {
  union {
    int i;
  } U;
};
void f() {
  int x;
  static int y;
  thread_local int z;
}
int a;
    `,
    language: Language.cppAntlr,
    debug: true,
    omitPosition: true,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 1)
})

test('JSON stringify', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: 'jo jo jo',
    language: Language.cppAntlr,
    debug: true,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`no viable alternative at input`), msg)
      }
    }
  })
})

// TODO: should be similar to https://clang.llvm.org/doxygen/group__CINDEX.html#gaaccc432245b4cd9f2d470913f9ef0013
test('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  // writeFileSync('tmp.txt', o)
  const expected = [`<storageclassspecifier text="thread_local">`, `<storageclassspecifier text="static">`, `<simpletypespecifier text="void">`, `<classkey text="struct">
  </classkey> <classheadname text="S">
    <classname text="S">`, `  <simpledeclaration text="typedefintX;">
    <declspecifierseq text="typedefint">
      <declspecifier text="typedef">
      </declspecifier> <declspecifierseq text="int">
        <declspecifier text="int">`, ` <declaratorid text="operatorint">
        <unqualifiedid text="operatorint">
          <conversionfunctionid text="operatorint">
            <conversiontypeid text="int">
              <typespecifierseq text="int">
                <typespecifier text="int">
                  <trailingtypespecifier text="int">
                    <simpletypespecifier text="int">`, ``, ``, ``]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
