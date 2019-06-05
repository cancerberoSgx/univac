export interface Ctx {
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
  accept(arg0: any): any;
  getText(): any;
  start: any;
  stop: any;
}

export interface CtxPosition {
  source: any[];
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
