
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types';
async function main(){
  await testTreeSitter()
  await testAntlr4();
}
main()

async function testAntlr4() {
  const result = await parseAst({
    input: 'int main() {}',
    language: Language.c
  });
  const el = document.createElement('pre')
  el.innerHTML = JSON.stringify(result, null, 2)
document.body.appendChild(el)
}

async function testTreeSitter() {
  try {
    const result = await parseAst({
      input: 'pub type __darwin_size_t = ::std::os::raw::c_ulong;',
      language: Language.rust,
      basePath: '' // browserTest we copy the wasm files to target folder test-browser-output
    });
  
    const el = document.createElement('pre')
    el.innerHTML = JSON.stringify(result, null, 2)
  document.body.appendChild(el)
  } catch (error) {
    console.error({error});
    throw error
  }

}
