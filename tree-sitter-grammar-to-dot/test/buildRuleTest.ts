import test from 'ava'
import { notSame, removeWhites } from 'misc-utils-of-mine-generic'
import { buildRule, _resetBuildRuleId } from '../src/buildRule'
import { Rule } from '../src/types'

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
  } as Rule
  const result: string[] = []
  _resetBuildRuleId()
  buildRule(grammar, undefined, result)
  t.deepEqual(removeWhites(result.filter(notSame).join('\n')), removeWhites(`
  s1 [label="s1\\n&rarr; SEQ", shape=record, fixedsize=false, peripheries=1];
  s2 [label="s2 STRING\\n\\"import\\""];
  s1 -> s2 [];
  s3 [label="{s3\\n&rarr; CHOICE|{<p0>|<p1>}}", shape=record, fixedsize=false, peripheries=1];
  s4 [label="s4\\n&rarr; SEQ", shape=record, fixedsize=false, peripheries=1];
  s5 [label="s5 SYMBOL\\nimport_clause" href=""];
  s4 -> s5 [];
  s6 [label="s6 SYMBOL\\n_from_clause" href=""];
  s5 -> s6 [];
  s3:p0 -> s4 [label=""];
  s7 [label="s7 SYMBOL\\nstring" href=""];
  s3:p1 -> s7 [label="string"];
  s2 -> s3 [];
  s8 [label="s8 SYMBOL\\n_semicolon" href=""];
  s6 -> s8 [];
  s7 -> s8 [];
    `))
})

test('repeat choice, seq', t => {
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
  } as Rule

  const result: string[] = []
  _resetBuildRuleId()
  buildRule(grammar, undefined, result)
  t.deepEqual(removeWhites(result.filter(notSame).join('\n')), removeWhites(`
s1 [label="{s1\\n&rarr; CHOICE|{<p0>|<p1>}}", shape=record, fixedsize=false, peripheries=1];
s2 [label="s2\\n&rarr; SEQ", shape=record, fixedsize=false, peripheries=1];
s3 [label="{s3\\n&rarr; CHOICE|{<p0>|<p1>|<p2>|<p3>}}", shape=record, fixedsize=false, peripheries=1];
s4 [label="s4 SYMBOL\\n_path" href=""];
s3:p0 -> s4 [label="_path"];
s5 [label="s5 SYMBOL\\nuse_as_clause" href=""];
s3:p1 -> s5 [label="use_as_clause"];
s6 [label="s6 SYMBOL\\nuse_list" href=""];
s3:p2 -> s6 [label="use_list"];
s7 [label="s7 SYMBOL\\nscoped_use_list" href=""];
s3:p3 -> s7 [label="scoped_use_list"];
s2 -> s3 [];
s8 [label="s8\\n&rarr; REPEAT", shape=record, fixedsize=false, peripheries=1];
s9 [label="s9\\n&rarr; SEQ", shape=record, fixedsize=false, peripheries=1];
s10 [label="s10 STRING\\n\\",\\""];
s9 -> s10 [];
s11 [label="{s11\\n&rarr; CHOICE|{<p0>|<p1>|<p2>|<p3>}}", shape=record, fixedsize=false, peripheries=1];
s12 [label="s12 SYMBOL\\n_path" href=""];
s11:p0 -> s12 [label="_path"];
s13 [label="s13 SYMBOL\\nuse_as_clause" href=""];
s11:p1 -> s13 [label="use_as_clause"];
s14 [label="s14 SYMBOL\\nuse_list" href=""];
s11:p2 -> s14 [label="use_list"];
s15 [label="s15 SYMBOL\\nscoped_use_list" href=""];
s11:p3 -> s15 [label="scoped_use_list"];
s10 -> s11 [];
s8 -> s9 [];
s11 -> s8 [];
s4 -> s8 [];
s5 -> s8 [];
s6 -> s8 [];
s7 -> s8 [];
s1:p0 -> s2 [label=""];
s16 [label="s16 \\nBLANK"];
s1:p1 -> s16 [label=""];
    `))


})



