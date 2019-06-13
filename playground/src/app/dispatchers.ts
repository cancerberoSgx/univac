import { Language, parseAst } from 'univac'
import { setCodeEditorText } from '../editor/codeEditor'
import { createUrl } from '../ui/common/uiUtil'
import { Example, examples } from './examples'
import { ParserError } from './state'
import { getStore } from './store'

export async function getAst(input: string, language: Language) {
  try {
    const error: ParserError[] = []
    const ast = await parseAst({
      input, language, parents: true, text: true, errorListener: {
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
