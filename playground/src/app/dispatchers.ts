import { Language, parseAst } from 'univac'
import { inspect } from 'util'
import { setCodeEditorText } from '../editor/codeEditor'
import { Example } from './examples'
import { getStore } from './store'

export function debug(...args: any[]) {
  getStore().getState().logs.push(args.map(a => inspect(a)).join(' '))
}

export function getAst(input: string, language: Language) {
  const result = await parseAst({ input, language, parents: true })
  return result
}

export function selectExample(selectedExample: Example) {
  setCodeEditorText(selectedExample.code)
  const ast = getAst(selectedExample.code, selectedExample.language)
  getStore().setState({ selectedExample, ast })
}
