# TODO

 [ ] remove .wasm files from the repo,  
 [ ] tree-sitter tests for browser
 [ ] make sure if using only one grammar, its possible to generate a browser bundle that only contains that parser and not all of them. Dependency injection - user should be able to configure somehow which parsears it will use so only those are combined.
 [ ]implement: wat, unicode, 
 * visuallise with d3 : https://raw.githubusercontent.com/tree-sitter/tree-sitter-typescript/master/typescript/src/highlights.json
 integrate http://tree-sitter.github.io/tree-sitter/creating-parsers
   * unicode, abnf
   * guido
   * objc, javadoc , pascal, modula, clojure
   * plsql, sqlite, mysql, 
   * sass  
   * less important: prolog, xml, mathlab, logo, brainfuck, qbasic, basic, b, aspect-j, asm8080
 [ ] in a separate project, use http://viz-js.com/ and -atn .dot files , and show, for each node type, the graph of it. Just upload the svgs somewhere and show them on hover... 
     * also try to join all the graphs in one big navigable . I can't find references, but incestigate ifelement numbers are, and if them make sense.  java -jar /usr/local/lib/antlr-4.7.2-complete.jar -Dlanguage=JavaScript -visitor Lua.g4 -atn


# Notes

## tree-sitter

How to generate an individual language .wasm and run it in node.js:

```sh
npm i  tree-sitter tree-sitter-cli tree-sitter-javascript
# generate tree-sitter-javascript.wasm in local folder
npx tree-sitter build-wasm node_modules/tree-sitter-javascript && mv tree-sitter-javascript.wasm src/tree-sitter-parser
npx tree-sitter build-wasm node_modules/tree-sitter-rust && mv tree-sitter-rust.wasm src/tree-sitter-parser
```

```ts
import Parser from 'web-tree-sitter'
(async function f() {
  await Parser.init()
  const parser = new Parser;
  const Lang = await Parser.Language.load('tree-sitter-javascript.wasm');
  parser.setLanguage(Lang);
  const tree = parser.parse( 'let x = 1; console.log(x);');
  console.log(tree.rootNode.toString());
})()
```

```sh
ts-node test.ts
```