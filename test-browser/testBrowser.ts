
import { parseAst } from '../src/parseAst'
import { Language } from '../src/types';
async function main(){
  const result = await parseAst({
    input: 'int main() {}',
    language: Language.c
  })
  document.write(`<pre>${JSON.stringify(result, null, 2)}</pre>`)
}
main()