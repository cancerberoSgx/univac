import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
postal-address   = name-part street zip-part

name-part        = *(personal-part SP) last-name [SP suffix] CRLF
name-part        =/ personal-part CRLF

personal-part    = first-name / (initial ".")
first-name       = *ALPHA
initial          = ALPHA
last-name        = *ALPHA
suffix           = ("Jr." / "Sr." / 1*("I" / "V" / "X"))

street           = [apt SP] house-num SP street-name CRLF
apt              = 1*4DIGIT
house-num        = 1*8(DIGIT / ALPHA)
street-name      = 1*VCHAR

zip-part         = town-name "," SP state 1*2SP zip-code CRLF
town-name        = 1*(ALPHA / SP)
state            = 2ALPHA
zip-code         = 5DIGIT ["-" 4DIGIT]
            `,
    language: Language.abnf,
    omitPosition: true,
    text: true
  })!
  t.true(!!result)
})

test('should parse', async t => {
  t.is(result.children.length, 16)
})

test('JSON stringify', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: ')( jo jo jo --oo )(',
    language: Language.abnf,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`mismatched input`) , msg)
      }
    }
  })
})

test('generate correct ast ', async t => {
  const o = printNode({
    node: result
  })
  const expected = [`
<rule text="last-name=*ALPHA">
  <repetition text="*ALPHA">
    <repeat text="*">
    </repeat> <element text="ALPHA">
    </element>
  </repetition>
</rule>`, 
`
<rule text="street=[aptSP]house-numSPstreet-nameCRLF">
  <concatenation text="[aptSP]house-numSPstreet-nameCRLF">
    <element text="[aptSP]">
      <concatenation text="aptSP">
        <element text="apt">
        </element> <element text="SP">
        </element>
      </concatenation>
    </element> <element text="house-num">
    </element> <element text="SP">
    </element> <element text="street-name">
    </element> <element text="CRLF">
    </element>
  </concatenation>
</rule>`]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e)), e))
})
