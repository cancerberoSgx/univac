import test, { todo } from 'ava'
import { parseAst } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { toDot } from '../src/util/toDot';
import { writeFileSync } from 'fs';

test('toDot', async t => {
  const r  = await parseAst({
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
  })
  const d = toDot(r)
  writeFileSync('tmp.dot', d)
  // console.log(d); 
  t.true(d.includes('-> node'))
  t.true(d.includes('label="classOrInterfaceModifier"'))
  
})