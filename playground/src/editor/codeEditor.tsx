import { throttle } from 'misc-utils-of-mine-generic'
import * as monaco from 'monaco-editor'
import { ISelection } from 'monaco-editor'
import { getNodeAtPosition, Node } from 'univac'
import { selectExample } from '../app/dispatchers'
import { examples } from '../app/examples'
import { getStore } from '../app/store'

export function installCodeEditor(editorContainer: HTMLElement) {
  if (editor) {
    return editor
  }
  monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ES2016,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.CommonJS,
    noEmit: true,
    typeRoots: ['node_modules/@types'],
    jsx: monaco.languages.typescript.JsxEmit.React,
  })

  editor = monaco.editor.create(editorContainer, {
    model: monaco.editor.createModel(examples[0].code, 'python', monaco.Uri.parse('file:///main.py')),
    language: 'python',
    wordWrap: 'on',
    minimap: { enabled: false, }
  })

  getCodeEditor()!.onDidChangeCursorPosition(e => {
    getStore().setState({
      nodeAtCursor: getNodeAtPosition(getStore().getState().ast, { line: e.position.lineNumber, column: e.position.column })
    })
  })

  editor.getModel()!.onDidChangeContent(throttle(e => {
    selectExample({ ...getStore().getState().example, code: getCodeEditorText() }, false)
  }, 5000, { trailing: true }))

  return editor
}

export function highlightNodesInEditor(result: Node[]): any {
  const selections: ISelection[] = result.map(node => {
    return { selectionStartLineNumber: node.start!.line, selectionStartColumn: node.start!.column, positionLineNumber: node.stop!.line, positionColumn: node.stop!.column }
  })
  select(selections)
}

export function select(selections: monaco.ISelection[]) {
  const ed = getCodeEditor()!
  ed.setSelections(selections)
  ed.revealLines(selections[0].selectionStartLineNumber, selections[selections.length - 1].selectionStartLineNumber, monaco.editor.ScrollType.Smooth)
  window.scrollTo({ top: 0 })
}

export function getCodeEditorText() {
  const model = editor && editor.getModel()
  return model && model.getValue() || ''
}

const models: { [name: string]: monaco.editor.ITextModel } = {}

const languageMapping: any = {
  scala: 'java',
  dart2: 'java',
  erlang: 'javascript',
  fortran77: 'javascript'
}
export function setCodeEditorText(s: string) {
  if (!editor) {
    return
  }
  const fileName = getStore().getState().example.name
  let model = models[fileName]
  if (!model) {
    model = monaco.editor.createModel(examples[0].code, languageMapping[getStore().getState().example.language], monaco.Uri.parse(`file:///${fileName}`))
    models[fileName] = model
  }

  if (editor.getModel() !== model) {
    editor.setModel(model)
  }

  editor.getModel()!.setValue(s)
}

export function getEditorTextAtNode(n: Node) {
  const text = getCodeEditorText()
  if (!n.start || !n.stop) {
    return ''
  }
  return text.substring(n.start.start, n.stop.stop) || ''
}

let editor: monaco.editor.IStandaloneCodeEditor

function getCodeEditor() {
  if (!editor) {
    throw new Error('Editor not initialized, installEditor needs to be called first.')
  }
  return editor
}
