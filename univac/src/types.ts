import { ErrorListener } from 'antlr4/error'
import { enumKeys } from './util/misc'

interface BaseOptions {
  language: Language
  input: string
}

export interface GetAstOptions<N = any> extends BaseOptions {
  /**
   * Base path from where to load .wasm files needed by tree-sitter based parsers. By default is '.'
   */
  basePath?: string

  /**
   * If given, it will be notified of parsing errors or other diagnostics. 
   * TODO: make an adapter interface simpler independent of antlr4. 
   */
  errorListener?: Partial<ErrorListener>

  /**
   * If given, each node will have a `text` property with its text. 
   */
  text?: boolean

  /**
   * If true, properties `start`and `stop` won't be emitted in nodes. false bu default.
   */
  omitPosition?: boolean

  /**
   * Adds [[parent]] property to each node referencing node¡'s parent. Notice that the AST won't be serializable with JSON.stringify anymore because of cycles. By default is false.  
   */
  parents?: boolean

  /**
   * Adds [[source]] property to [[start]] and [[stop]] positions. By default is false. 
   */
  positionSource?: boolean;

  /**
   * For tree-sitter based parsers. antlr grammars based implementations doesn't need this, but tree-sitter do since they don't actually visit, they are provided with an AST that needs to be normalized
   */
  root?: N
}

export enum Language {
  'c' = 'c',
  'golang' = 'golang',
  'scala' = 'scala',
  'ruby' = 'ruby',
  'java9' = 'java9',
  'lua' = 'lua',
  'python3' = 'python3',
  'erlang' = 'erlang',
  'dart2' = 'dart2',
  'java' = 'java',
  'kotlin' = 'kotlin',
  'r' = 'r',
  'fortran77' = 'fortran77',
  'smalltalk' = 'smalltalk',
  'visualbasic6' = 'visualbasic6',
  'less' = 'less',
  'wat' = 'wat',
  'cpp' = 'cpp',
  'antlr4' = 'antlr4',
  'rust' = 'rust',
  'sexpression' = 'sexpression',
  'scss' = 'scss',
  'abnf' = 'abnf',
  'bash' = 'bash',
}

export interface Options extends BaseOptions {
  output?: string
  outputStyle?: 'json'
}

export interface Node {
  type: string;
  text?: string
  start?: NodePosition;
  stop?: NodePosition;
  children: Node[];
  parent?: Node | undefined
}

export interface NodePositionLineColumn {
  line: number;
  column: number;
}

export interface NodePosition extends NodePositionLineColumn {
  start: number;
  stop: number;
  text?: string;
  source?: string;
}

export const languages = enumKeys(Language).filter(l => l !== 'java9')

export interface Normalizer<N = any> {
  /**
   * Ast generation options.
   */
  options: GetAstOptions<N> | undefined
  /**
   * Returns the whole AST with all descendants loaded.
   */
  getAst(): Node
  /**
   * Normalizes given node individually, returning empty array for children.
   */
  getNode(sn: N): Node
}
