import test from 'ava'
import { writeFileSync } from 'fs'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { getPackageJsonFolder } from '../src/util/misc'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
#!/bin/bash

if [ "$(uname)" == 'Darwin' ]; then
  OS='Mac'
elif [ "$(expr substr $(uname -s) 1 5)" == 'Linux' ]; then
  OS='Linux'
else
  echo "Your platform ($(uname -a)) is not supported."
  exit 1
fi

if [ "$(basename $0)" == 'atom-beta' ]; then
  BETA_VERSION=true
else
  BETA_VERSION=
fi

export ATOM_DISABLE_SHELLING_OUT_FOR_ENVIRONMENT=true

while getopts ":wtfvh-:" opt; do
  case "$opt" in
    -)
      case "\${OPTARG}" in
        wait)
          WAIT=1
          ;;
        help|version)
          REDIRECT_STDERR=1
          EXPECT_OUTPUT=1
          ;;
        foreground|benchmark|benchmark-test|test)
          EXPECT_OUTPUT=1
          ;;
      esac
      ;;
    w)
      WAIT=1
      ;;
    h|v)
      REDIRECT_STDERR=1
      EXPECT_OUTPUT=1
      ;;
    f|t)
      EXPECT_OUTPUT=1
      ;;
  esac
done
    `,
    language: Language.bash,
    omitPosition: true,
    text: true,
    basePath: getPackageJsonFolder() + '/dist/static/'
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 9)
})

test('JSON stringify', async t => {
  t.notThrows(() => JSON.stringify(result))
  // console.log(JSON.stringify(result, null, 2))  
})

test.todo('should report syntax errors to given listener')
// , async t => {
//   await parseAstOrThrow({
//     input: 'jo jo jo',
//     language: Language.bash,
//     errorListener: {
//       syntaxError(a, b, c, d, msg) {
//         t.true(msg.includes(`no viable alternative at input`), msg)
//       }
//     }
//   })
// })

test('generate correct ast', async t => {
  const o = printNode({
    node: result
  })
  writeFileSync('tmp.txt', o)
  const expected = [`  <comment text="#!/bin/bash">`, `
  <if text="if">
    </if> <test_command text="[ \\"$(uname)\\" == 'Darwin' ]">
      <[ text="[">
      </[> <binary_expression text="\\"$(uname)\\" == 'Darwin'">
        <string text="\\"$(uname)\\"">
          <" text="\\"">
          </"> <command_substitution text="$(uname)">
            <$( text="$(">
            </$(> <command text="uname">
              <command_name text="uname">
                <word text="uname">
                </word>
              </command_name>
            </command> <) text=")">
            </)>
          </command_substitution> <" text="\\"">
          </">
        </string> <== text="==">
        </==> <raw_string text="'Darwin'">
        </raw_string>
      </binary_expression> <] text="]">
      </]>
    </test_command> <; text=";">
    </;>
    `, `<while text="while">
    </while> <command text="getopts \\":wtfvh-:\\" opt">
      <command_name text="getopts">
        <word text="getopts">
        </word>
      </command_name>`, `  <case text="case">
      </case> <string text="\\"\${OPTARG}\\"">
        <" text="\\"">
        </"> <expansion text="\${OPTARG}">
          <\${ text="\${">
          </\${> <variable_name text="OPTARG">
          </variable_name> <} text="}">
          </}>
        </expansion>`, `<esac text="esac">
        </esac>
      </case_statement>`, ``, ``, ``,]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
