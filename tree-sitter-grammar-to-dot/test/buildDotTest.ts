import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { Rule } from '../src'
import { buildRuleDot } from '../src/buildDot'
import { _resetBuildRuleId } from '../src/buildRule'

test('buildRuleDot', async t => {
  const rule = {
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
  _resetBuildRuleId()
  const dot = buildRuleDot(rule, 'Cool')

  t.deepEqual(removeWhites(dot), removeWhites(`
digraph Cool {

  rankdir=LR;

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

}
    
    `))
})

test.skip('should parse official javascript grammar ', async (t) => {
  // console.log(result.join('\n'));
  // writeFileSync('tmp3.dot', buildGrammarDot({ input: JSON.parse(readFileSync('test/assets/javascript-grammar.json').toString()) as any, name: 'import_declaration' }));
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
