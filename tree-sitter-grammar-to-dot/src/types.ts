import { RemoveProperties } from 'misc-utils-of-mine-generic';

export interface GrammarNode {
  type: 'SEQ' | 'STRING' | 'CHOICE' | 'SYMBOL' | 'REPEAT' | 'BLANK' | 'PATTERN';
  members?: GrammarNode[];
  value?: string;
  name?: string;
  id: string;
  content?: GrammarNode
}

export interface Options {
  input: RemoveProperties<GrammarNode, 'id'>,
  name?: string
}