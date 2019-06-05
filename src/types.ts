interface BaseOptions {
  language: Language
  input: string
}

export interface GetAstOptions extends BaseOptions {
  includeSource?: boolean;
}

export type Language = 'c'

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



