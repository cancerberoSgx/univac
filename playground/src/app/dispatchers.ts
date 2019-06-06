import { Language, parseAst } from 'univac'
import { setCodeEditorText } from '../editor/codeEditor'
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
    return { error }
  }
}
// const  errorListener: ErrorListener =
export async function selectExample(selectedExample: Example, setEditorText = true) {
  // setEditorText && setCodeEditorText(selectedExample.code)
  const { ast, error } = await getAst(selectedExample.code, selectedExample.language)
  getStore().setState({ example: selectedExample, ast, error, language: selectedExample.language })
  // setTimeout(() => {
  // getStore().setState({ example: selectedExample, ast, error, language: selectedExample.language })
  setEditorText && setCodeEditorText(selectedExample.code)

  // }, 500);C
}

export async function selectLanguage(l: Language) {
  const selectedExample = examples.find(e => e.language === l)
  selectedExample && selectExample(selectedExample)
}
