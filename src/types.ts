import { ErrorListener } from 'antlr4/error'
import { enumKeys } from './util'

interface BaseOptions {
  language: Language
  input: string
}

export interface GetAstOptions extends BaseOptions {
  errorListener?: Partial<ErrorListener>;
  text?: boolean
  omitPosition?: boolean
  /**
   * Adds [[parent]] property to each node referencing node¡'s parent. Notice that the AST won't be serializable with JSON.stringify anymore because of cycles. By default is false.  
   */
  parents?: boolean
  /**
   * Adds [[source]] property to [[start]] and [[stop]] positions. By default is false. 
   */
  positionSource?: boolean;
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
  'visualbasic6' = 'visualbasic6'
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
  parent?: Node
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


export const languages = enumKeys(Language)
