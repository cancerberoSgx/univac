import test from 'ava'
import { removeWhites } from 'misc-utils-of-mine-generic'
import { printNode } from '../src'
import { parseAstOrThrow } from '../src/parseAst'
import { Language, Node } from '../src/types'
import { getPackageJsonFolder } from '../src/util/misc'

let result: Node
test.before(async t => {
  result = await parseAstOrThrow({
    input: `
object HelloWorld {
  def main(args: Array[String]): Unit = {
    println("Hello, world!")
  }
}

val planets =
  List(("Mercury", 57.9), ("Venus", 108), ("Earth", 149),
       ("Mars", 227), ("Jupiter", 778))
planets.foreach{
  case ("Earth", distance) =>
    println(s"Our planet is $distance million kilometers from the sun")
  case _ =>
}

class Point(var x: Int, var y: Int) {
  def move(dx: Int, dy: Int): Unit = {
    x = x + dx
    y = y + dy
  }
  override def toString: String =
    s"($x, $y)"
}
val point1 = new Point(2, 3)
point1.x  // 2
println(point1)  // prints (2, 3)
  `,
    basePath: getPackageJsonFolder() + '/dist/static/',
    language: Language.scala,
    omitPosition: true,
    text: true,
  })
})

test('should parse', async t => {
  t.is(result.children.length, 5)
})

test('should serialize', async t => {
  t.notThrows(() => JSON.stringify(result))
})

test.skip('should report syntax errors to given listener', async t => {
  await parseAstOrThrow({
    input: '-- ',
    basePath: getPackageJsonFolder() + '/dist/static/',
    language: Language.scala,
    omitPosition: true,
    text: true,
    errorListener: {
      syntaxError(a, b, c, d, msg) {
        t.true(msg.includes(`mismatched input`) || msg.includes(`extraneous input`), msg)
      }
    }
  })
})

test('ast is correct', async t => {
  const o = printNode({
    node: await parseAstOrThrow({
      input: `
val planets =
  List(("Mercury", 57.9), ("Venus", 108), ("Earth", 149),
        ("Mars", 229), ("Jupiter", 773))
  
class Point(var x: Int, var y: Int) {
  def move(dx: Int, dy: Int): Unit = {
    x = x + dx
    y = y + dy
  }
  override def toString: String =
    s"($x, $y)"
}
val point1 = new Point(2, 3)
`,
      language: Language.scala,
      text: true,
      basePath: getPackageJsonFolder() + '/dist/static/',
      omitPosition: true,
    })
  })
  // writeFileSync('tmp.txt', o)
  const expected = [`
  `, `
  <function_definition text="override def toString: String =\\n    s\\"($x, $y)\\"">
  <modifiers text="override">
    <override text="override">
    </override>
  </modifiers> <def text="def">
  </def> <identifier text="toString">
  </identifier> <: text=":">
  </:> <type_identifier text="String">
  </type_identifier> <= text="=">
  </=> <string_transform_expression text="s\\"($x, $y)\\"">
    <identifier text="s">
    </identifier> <string text="\\"($x, $y)\\"">
      <interpolation text="$x">
        <$ text="$">
        </$> <identifier text="x">
        </identifier>
      </interpolation> <interpolation text="$y">
        <$ text="$">
        </$> <identifier text="y">
        </identifier>
      </interpolation>
    </string>
  </string_transform_expression>
</function_definition>
 `, `
<val_definition text="val point1 = new Point(2, 3)">
    <val text="val">
    </val> <identifier text="point1">
    </identifier> <= text="=">
    </=> <instance_expression text="new Point(2, 3)">
      <new text="new">
      </new> <call_expression text="Point(2, 3)">
        <identifier text="Point">
        </identifier> <arguments text="(2, 3)">
          <( text="(">
          </(> <number text="2">
          </number> <, text=",">
          </,> <number text="3">
          </number> <) text=")">
          </)>
        </arguments>
      </call_expression>
    </instance_expression>
  </val_definition>
`, ``]
  expected.forEach(e => t.true(removeWhites(o).includes(removeWhites(e))))

})
