import * as monaco from 'monaco-editor'
import { ISelection } from 'monaco-editor'
import { getNodeAtPosition, Node } from 'univac'
import { examples } from '../app/examples'
import { getStore } from '../app/store'

let el: HTMLElement | undefined
export function installCodeEditor(editorContainer: HTMLElement) {
  const editor = installEditor(examples[0].code, editorContainer)
  getCodeEditor()!.onDidChangeCursorPosition(e => {
    getStore().setState({
      nodeAtCursor: getNodeAtPosition(getStore().getState().ast, { line: e.position.lineNumber, column: e.position.column })
    })
  })
  editor.getModel()!.onDidChangeContent(e => {
    // setDirty() 
  })
  el = editorContainer
}

export function getCodeEditorContainerEl() {
  return el
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
  return editor.getModel()!.getValue()
}

export function setCodeEditorText(s: string) {
  return editor.getModel()!.setValue(s)
}

let editor: monaco.editor.IStandaloneCodeEditor

function getCodeEditor() {
  if (!editor) {
    throw new Error('Editor not initialized, installEditor needs to be called first.')
  }
  return editor
}

function installEditor(code: string, containerEl: HTMLElement) {
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

  editor = monaco.editor.create(containerEl, {
    model: monaco.editor.createModel(code, 'python', monaco.Uri.parse('file:///main.py')),
    language: 'python',
    wordWrap: 'on',
    minimap: { enabled: false, }
  })

  return editor
}
