import { RemoveProperties } from 'misc-utils-of-mine-generic'

export interface Rule {
  type: 'SEQ' | 'STRING' | 'CHOICE' | 'SYMBOL' | 'REPEAT' | 'BLANK' | 'PATTERN' | 'REPEAT1' | 'PREC' | 'TOKEN' | 'ALIAS'
  members?: Rule[];
  value?: string;
  name?: string;
  id?: string;
  content?: Rule
}

export interface Options {
  input: Grammar
  name?: string
}

export interface Grammar {
  name: string,
  word: string,
  rules: { [ruleName: string]: RemoveProperties<Rule, 'id'> }
  extras: { type: string, name: string }[]
  conflicts: string[][]
  externals: { type: string, name: string }[]
  inline: string[]
  supertypes: any[]
}
