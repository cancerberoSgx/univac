import { Token } from 'antlr4'
import { Language, Node } from 'univac'
import { AstGraphViewOptions, defaultAstGraphViewOptions } from '../ui/astGraph/graphViewControls'
import { getAst } from './dispatchers'
import { Example, examples } from "./examples"

export interface State {
  example: Example
  language: Language
  ast: Node;
  expandedNodes: Node[]
  expandNegated: boolean
  nodeAtCursor: Node,
  astAutoUpdate: boolean;
  astShowText: boolean
  logs: string[];
  error?: Error | ParserError | ParserError[] | undefined;
  examples: Example[];
  sidebarVisibility: boolean;
  currentTab: number
  astViewer: 'default' | 'evenParent' | 'tidyTreeView' | 'dot',
  argGraphViewOptions: AstGraphViewOptions
}
export const astViewers = ['default', 'dot', 'evenParent', 'tidyTreeView']
export interface ParserError {
  offendingSymbol: Token
  line: number
  column: number
  msg: string
  e: any
}

export async function getInitialState(): Promise<State> {
  const example = examples[0]
  const { ast, error } = await getAst(example.code, example.language)
  return {
    example,
    expandNegated: true,
    language: example.language,
    ast: ast!,
    error,
    astShowText: true,
    expandedNodes: [],
    astAutoUpdate: true,
    nodeAtCursor: ast!,
    logs: [],
    sidebarVisibility: false,
    examples: [],
    currentTab: 0,
    astViewer: 'default',
    argGraphViewOptions: defaultAstGraphViewOptions
  }
}
