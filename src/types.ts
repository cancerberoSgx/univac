interface GetAstOptions {
  includeSource: any;
  input: string;
}
interface Ctx {
  children: Ctx[];
  parser: {
    ruleNames: {
      [x: string]: any;
    };
  };
  ruleIndex: string | number;
  constructor: {
    name: any;
  };
  // children: any[];
  accept(arg0: any): any;
  getText(): any;
  start: any;
  stop: any;
}
interface CtxPosition {
  source: any[]
  getTokenSource: () => {
    text: any;
  };
  type: any;
  channel: any;
  start: any;
  stop: any;
  tokenIndex: any;
  line: any;
  column: any;
  text: any;
} 
interface Node {
  type: string;
  start: NodePosition;
  stop: NodePosition;
  children: Node[];
}
interface NodePosition {
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
