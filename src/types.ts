interface BaseOptions {
  language: Language
  input: string
}

export interface GetAstOptions extends BaseOptions {
  includeSource?: boolean;
}

export enum Language {
  'c' = 'c'
  , 'golang' = 'golang'
  , 'scala' = 'scala'
  , 'ruby' = 'ruby'
  , 'java9' = 'java9'
}

export interface Options extends BaseOptions {
  output?: string
  outputStyle?: 'json'
}

export interface Node {
  type: string;
  start: NodePosition;
  stop: NodePosition;
  children: Node[];
}

export interface NodePosition {
  // token: any;
  type: string;
  // channel: any;
  start: number;
  stop: number;
  // tokenIndex: number;
  line: number;
  column: number;
  text: string;
  source?: string;
}



