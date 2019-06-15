import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { buildDot } from '../src/buildDot';
import { GrammarNode } from '../src/types';
import { buildRule } from '../src/buildRule';
import { writeFileSync } from 'fs';

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
  const result: string[] = [];
  buildRule(grammar, undefined, result);
  // console.log(result.join('\n'));
writeFileSync('tmp.dot', buildDot({input: grammar, name: 'import_declaration'}))

  // const result = buildDot({input: grammar, name: 'import_declaration'});
  t.deepEqual(removeWhites(result.join('\n')), removeWhites(`
s1 [ label="s1\\n&rarr; SEQ"];
s2 [label="s2 STRING\\nimport"];
s1 -> s2 [];
s3 [label="{s3\\n&rarr; CHOICE|{}}", shape=record, fixedsize=false, peripheries=1];
s2 [label="s2 STRING\\nimport"];
s2 -> s3 [];
s3 [label="{s3\\n&rarr; CHOICE|{<p0>|<p1>}}", shape=record, fixedsize=false, peripheries=1];
s5 [ label="s5\\n&rarr; SEQ"];
s5 -> s6 [];
s6 -> s7 [];
s3:p0 -> s5 [label=""];
s3:p1 -> s8 [label="string"];
s7 -> s4 [];
s8 -> s4 [];
    `))
})

test('repeat', t => {
  const grammar = {
    "type": "CHOICE",
    "members": [
      {
        "type": "SEQ",
        "members": [
          {
            "type": "CHOICE",
            "members": [
              {
                "type": "SYMBOL",
                "name": "_path"
              },
              {
                "type": "SYMBOL",
                "name": "use_as_clause"
              },
              {
                "type": "SYMBOL",
                "name": "use_list"
              },
              {
                "type": "SYMBOL",
                "name": "scoped_use_list"
              }
            ]
          },
          {
            "type": "REPEAT",
            "content": {
              "type": "SEQ",
              "members": [
                {
                  "type": "STRING",
                  "value": ","
                },
                {
                  "type": "CHOICE",
                  "members": [
                    {
                      "type": "SYMBOL",
                      "name": "_path"
                    },
                    {
                      "type": "SYMBOL",
                      "name": "use_as_clause"
                    },
                    {
                      "type": "SYMBOL",
                      "name": "use_list"
                    },
                    {
                      "type": "SYMBOL",
                      "name": "scoped_use_list"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "type": "BLANK"
      }
    ]
  } as GrammarNode

  const result: string[] = [];
  buildRule(grammar, undefined, result);
  // console.log(result.join('\n'));
writeFileSync('tmp2.dot', buildDot({input: grammar, name: 'import_declaration'}))
  t.true(true)
  // t.deepEqual(removeWhites(result.join('\n')), removeWhites(`
  // s1 [ label="s1\\n&rarr; SasdEQ"];
  //   `))


}) 
