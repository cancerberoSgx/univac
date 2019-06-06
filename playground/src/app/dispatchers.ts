import { Language, parseAst, Node } from 'univac'
import { setCodeEditorText } from '../editor/codeEditor'
import { Example, examples } from './examples'
import { getStore } from './store'
import { ErrorListener } from 'antlr4/error';

// export function debug(...args: any[]) {
//   getStore().getState().logs.push(args.map(a => inspect(a)).join(' '))
// }

export async function getAst(input: string, language: Language) {
  try {
    // getStore() && getStore().setState({
    //   error: undefined
    // })
    const ast = await parseAst({ input, language, parents: true, text: true, errorListener })
  return {ast}
  } catch (error) {
    return {error}
  }
}
const  errorListener: ErrorListener ={
  syntaxError(recognizer , offendingSymbol , line , column , msg, e){
    // debugger
    getStore().setState({
      error: {offendingSymbol , line , column , msg, e}
    })
  },
  reportAmbiguity(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs): void{

  },
  reportAttemptingFullContext(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs){

  },
  reportContextSensitivity(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs): void{

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
  // getStore().setState({ language: l as any, ...selectedExample ? {selectedExample}:{} })
}