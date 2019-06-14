import { RemoveProperties } from 'misc-utils-of-mine-generic';

export interface GrammarNode {
  type: 'SEQ' | 'STRING' | 'CHOICE' | 'SYMBOL';
  members?: GrammarNode[];
  value?: string;
  name?: string;
  id: string;
}

export interface Options {
  input: RemoveProperties<GrammarNode, 'id'>,
  name?: string
}