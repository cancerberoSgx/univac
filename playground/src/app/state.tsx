import { Language, Node } from 'univac'
import { getAst } from './dispatchers'
import { Example, examples } from "./examples"

export interface State {
  selectedExample: Example
  language: Language
  ast: Node;
  expandedNodes: Node[]
  nodeAtCursor: Node,
  astAutoUpdate: boolean;
  logs: string[];
  error?: Error | undefined;
  examples: Example[];
  sidebarVisibility: boolean;
  currentTab: number
}
export function getInitialState(): State {
  const selectedExample = examples[0]
  const ast = getAst(selectedExample.code, selectedExample.language)

  return {
    selectedExample,
    language: selectedExample.language,
    ast,
    expandedNodes: [],
    astAutoUpdate: false,
    nodeAtCursor: ast,
    logs: [],
    sidebarVisibility: false,
    examples: [],
    currentTab: 0
  }
}
