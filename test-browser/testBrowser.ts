
import { parseAst } from '../src/parseAst'

const result = parseAst({
  input: 'int main() {}',
  language: 'c'
})

document.write(`<pre>${JSON.stringify(result, null, 2)}</pre>`)