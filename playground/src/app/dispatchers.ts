import { unique } from 'misc-utils-of-mine-generic'
import { Language, parseAst } from 'univac'
import { getCodeEditorText, setCodeEditorText } from '../editor/codeEditor'
import { createUrl } from '../ui/common/uiUtil'
import { Example, examples } from './examples'
import { ParserError } from './state'
import { getStore } from './store'

export async function getAst(input: string, language: Language) {
  try {
    const error: ParserError[] = []
    const ast = await parseAst({
      debug: true,
      input, 
      language, 
      parents: true, 
      text: true, 
      errorListener: {
        syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
          error.push({ offendingSymbol, line, column, msg, e })
        }
      }
    })
    return { ast, error }
  } catch (error) {
    debugger
    return { error }
  }
}

export async function selectExample(selectedExample: Example, setEditorText = true) {
  const { ast, error } = await getAst(selectedExample.code, selectedExample.language)
  getStore().setState({ example: selectedExample, ast, error, language: selectedExample.language })
  setEditorText && setCodeEditorText(selectedExample.code)
  createUrl()
}

export async function selectLanguage(l: Language) {
  const selectedExample = examples.find(e => e.language === l)
  selectedExample && selectExample(selectedExample)
}

export async function updateAst(forceUpdate = false) {
  const code = getCodeEditorText()
  if (getStore().getState().example.code !== code) {
    await selectExample({ ...getStore().getState().example, code, ...forceUpdate ? { name: unique() + getStore().getState().example.name } : {} })
  }
}
