import { Language, parseAst, Node } from 'univac'
import { setCodeEditorText } from '../editor/codeEditor'
import { Example, examples } from './examples'
import { getStore } from './store'
import { ErrorListener } from 'antlr4/error';

export async function getAst(input: string, language: Language) {
  try {
    const ast = await parseAst({ input, language, parents: true, text: true, errorListener })
  return {ast}
  } catch (error) {
    return {error}
  }
}
const  errorListener: ErrorListener ={
  syntaxError(recognizer , offendingSymbol , line , column , msg, e){
    getStore().setState({
      error: {offendingSymbol , line , column , msg, e}
    })
  }
}
export async function selectExample(selectedExample: Example, setEditorText=true) {
  setEditorText && setCodeEditorText(selectedExample.code)
  const {ast} = await getAst(selectedExample.code, selectedExample.language)
  getStore().setState({ example: selectedExample, ast,  language: selectedExample.language })
}

export async function selectLanguage(l: Language){
  const selectedExample = examples.find(e=>e.language===l)
  selectedExample && selectExample(selectedExample)
}