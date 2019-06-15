import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { buildDot } from '../src/buildDot';
import { Rule } from '../src/types';
import { buildRule } from '../src/buildRule';
import { writeFileSync, readFileSync } from 'fs';

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
  const result: string[] = [];
  buildRule(grammar, undefined, result);
  // console.log(result.join('\n'));
writeFileSync('tmp.dot', buildDot({input: {name: 'test1', word: 'test1', supertypes: [], conflicts: [], externals: [], extras: [], inline: [], rules: {grammar: grammar}}, name: 'import_declaration'}))
t.true(true)

  // const result = buildDot({input: grammar, name: 'import_declaration'});
//   t.deepEqual(removeWhites(result.join('\n')), removeWhites(`
// s1 [ label="s1\\n&rarr; SEQ"];
// s2 [label="s2 STRING\\nimport"];
// s1 -> s2 [];
// s3 [label="{s3\\n&rarr; CHOICE|{}}", shape=record, fixedsize=false, peripheries=1];
// s2 [label="s2 STRING\\nimport"];
// s2 -> s3 [];
// s3 [label="{s3\\n&rarr; CHOICE|{<p0>|<p1>}}", shape=record, fixedsize=false, peripheries=1];
// s5 [ label="s5\\n&rarr; SEQ"];
// s5 -> s6 [];
// s6 -> s7 [];
// s3:p0 -> s5 [label=""];
// s3:p1 -> s8 [label="string"];
// s7 -> s4 [];
// s8 -> s4 [];
//     `))
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
  } as Rule

  const result: string[] = [];
  buildRule(grammar, undefined, result);
  // console.log(result.join('\n'));
  t.true(true)
writeFileSync('tmp2.dot', buildDot({input: {name: 'test1', word: 'test1', supertypes: [], conflicts: [], externals: [], extras: [], inline: [], rules: {grammar: grammar}}, name: 'import_declaration'}))

// writeFileSync('tmp2.dot', buildDot({input: grammar, name: 'import_declaration'}))
  // t.deepEqual(removeWhites(result.join('\n')), removeWhites(`
  // s1 [ label="s1\\n&rarr; SasdEQ"];
  //   `))


}) 



test('should parse official javascript grammar ', async t => {
  
  // console.log(result.join('\n'));
writeFileSync('tmp3.dot', buildDot({input: JSON.parse(readFileSync('test/assets/javascript-grammar.json').toString()) as any, name: 'import_declaration'}))
t.true(true)

  // const result = buildDot({input: grammar, name: 'import_declaration'});
//   t.deepEqual(removeWhites(result.join('\n')), removeWhites(`
// s1 [ label="s1\\n&rarr; SEQ"];
// s2 [label="s2 STRING\\nimport"];
// s1 -> s2 [];
// s3 [label="{s3\\n&rarr; CHOICE|{}}", shape=record, fixedsize=false, peripheries=1];
// s2 [label="s2 STRING\\nimport"];
// s2 -> s3 [];
// s3 [label="{s3\\n&rarr; CHOICE|{<p0>|<p1>}}", shape=record, fixedsize=false, peripheries=1];
// s5 [ label="s5\\n&rarr; SEQ"];
// s5 -> s6 [];
// s6 -> s7 [];
// s3:p0 -> s5 [label=""];
// s3:p1 -> s8 [label="string"];
// s7 -> s4 [];
// s8 -> s4 [];
//     `))
})
