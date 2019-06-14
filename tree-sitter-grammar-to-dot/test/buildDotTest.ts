import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { buildDot } from '../src/buildDot';
import { GrammarNode } from '../src/types';

test('should parse', async t => {
  const grammar = {
    "type": "SEQ",
    "members": [
      {
        "type": "STRING",
        "value": "import"
      },
      {
        "type": "CHOICE",
        "members": [
          {
            "type": "SEQ",
            "members": [
              {
                "type": "SYMBOL",
                "name": "import_clause"
              },
              {
                "type": "SYMBOL",
                "name": "_from_clause"
              }
            ]
          },
          {
            "type": "SYMBOL",
            "name": "string"
          }
        ]
      },
      {
        "type": "SYMBOL",
        "name": "_semicolon"
      }
    ]
  } as GrammarNode
  const result = buildDot({input: grammar, name: 'import_declaration'});
  t.deepEqual(removeWhites(result), removeWhites(`
digraph ATN {
  
  rankdir=LR;

  s1 [ label="s1\\n&rarr; SEQ"];
  s2 [label="s2 STRING\\nimport"];
  s1 -> s2 [];
  s3 [label="{s3\\n&rarr; CHOICE|{}}", shape=record, fixedsize=false, peripheries=1];
  s2 [label="s2 STRING\\nimport"];
  s2 -> s3 [];
  s4 [label="s4 SYMBOL\\n_semicolon"];
  s3 [label="{s3\\n&rarr; CHOICE|{<p0>|<p1>}}", shape=record, fixedsize=false, peripheries=1];
  s5 [ label="s5\\n&rarr; SEQ"];
  s6 [label="s6 SYMBOL\\nimport_clause"];
  s5 -> s6 [];
  s7 [label="s7 SYMBOL\\n_from_clause"];
  s6 [label="s6 SYMBOL\\nimport_clause"];
  s6 -> s7 [];
  s3:p0 -> s5 [label=""];
  s8 [label="s8 SYMBOL\\nstring"];
  s3:p1 -> s8 [label="string"];
  s7 -> s4 [];
  s8 -> s4 [];

}
    `))
})
