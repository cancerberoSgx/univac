
import Parser, { SyntaxNode } from 'web-tree-sitter';

(async function f() {

  await Parser.init()
  const parser = new Parser()

  const Lang = await Parser.Language.load('tree-sitter-javascript.wasm')
  parser.setLanguage(Lang)

  // let's parse the code of this file itself:
  const tree = parser.parse('export class C { get p() { return 1 } }')
  console.log(dump(tree.rootNode).trim())

})()

function dump(n: SyntaxNode, level = 0): string {
  return `\n${indent(level)}${n.type}`.padEnd(40, ' ') + `${
    n.isNamed && n.firstNamedChild && n.firstNamedChild.text ?
      ` "${n.firstNamedChild && n.firstNamedChild.text}"` : ''}${
    n.children.filter(c => c.type.match(/[a-z\-_0-1]+/i)).map(c => dump(c, level + 1)).join('')}`
}

function indent(i: number) {
  return new Array(i).fill(0).map(a => '  ').join('')
}

// export function printNode({ node, level = 0 }: { node: SyntaxNode, level?: number }): string {
//   return (`
// <${node.type}${node.text ? ` text="${printNodeText(node.text)}"` : ''}>
// ${node.children.length ?
//       `${indent(level + 1)}${node.children.map(c => printNode({ node: c, level: level + 1 })).join('') + '\n'}` : ''}${indent(level)}</${node.type}>
//   `.trim()
//   ).replace(/\>\</gm, '\> \<')
//   }
//   funcyi
// export function printNodeText(text: string, maxLength = 160, escape = true) {
//   const s = text.substring(0, Math.min(text.length, maxLength))
//   return escape ? s.replace(/"/gm, '\\"').replace(/[\n]+/gm, '\\n') : s
// }
