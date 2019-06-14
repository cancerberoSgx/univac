import Parser, { SyntaxNode } from 'web-tree-sitter';

(async function f() {

  await Parser.init()
  const parser = new Parser()

  const Lang = await Parser.Language.load('tree-sitter-javascript.wasm')
  parser.setLanguage(Lang)

  // let's parse the code of this file itself:
  const response = await fetch(document.scripts[document.scripts.length - 1].src)
  const tree = parser.parse(await response.text())

  // and render it in the body:
  const e = document.createElement('pre')
  e.innerHTML = dump(tree.rootNode)
  document.body.append(e)

})()
function dump(n: SyntaxNode, level = 0): string {

  return `<br/>${indent(level)}⬆️<i title="${
    (n.text || '').replace(/["\<\&\>]/g, '_')  // text as title attribute (tooltip), escaped
    }">${
    n.type                                     // type
    }</i>${
    n.children
      // .filter(c => c.type.match(/[a-z\-_0-1]+/i)) // don't print tokens
      .map(c => dump(c, level + 1)).join('')}`

  function indent(i: number) {
    return new Array(i).fill(0).map(a => '--').join('')
  }

}
