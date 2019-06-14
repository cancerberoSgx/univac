# TODO

 [ ] replace what we cant with tree-sitter ones (ruby, go, etc)
 [ ] support error listener in non antlr4 asts
 [ ] integrate a peg.js based AST parser
 [ ] remove .wasm files from the repo,  
 [ ] tree-sitter tests for browser
 [ ] make sure if using only one grammar, its possible to generate a browser bundle that only contains that parser and not all of them. Dependency injection - user should be able to configure somehow which parsears it will use so only those are combined.
 [ ]implement:unicode, 
 * visuallise with d3 : https://raw.githubusercontent.com/tree-sitter/tree-sitter-typescript/master/typescript/src/highlights.json
 integrate http://tree-sitter.github.io/tree-sitter/creating-parsers
   * unicode
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








<!-- 
## pegjs based grammars for common languages

 * https://github.com/michael-brade/LaTeX.js/blob/master/src/latex-parser.pegjs
 * https://libraries.io/npm/lucene-query-parser

https://github.com/honza/inertia/blob/master/inertia/grammar.pegjs
https://github.com/devijvers/lisp.js/tree/master/lisp/grammar
Schemeish grammar https://github.com/patrickdlogan/nconc/blob/master/public/scripts/nconc.pegjs

objective C - https://github.com/okaxaki/objc2swift/blob/master/grammar/objc.pegjs
formal logic  https://github.com/cameronbwhite/WeberLogicJS/blob/master/src/grammer.pegjs

misc https://github.com/for-GET/core-pegjs/tree/master/src/ietf

markdown: https://github.com/shamansir/xtd/blob/master/sources/assets/mdown-parse-pegjs/markdown.pegjs 

list: https://libraries.io/search?keywords=pegjs&page=2

https://github.com/kevinludwig/pgn-parser
https://github.com/bpow/pegjs-bonsai
https://www.npmjs.com/package/pegjs-prolog-parser
https://github.com/bripkens/lucene https://libraries.io/npm/lucene-query-parser
https://github.com/Bannerets/ti-el - https://github.com/Bannerets/ti-el/blob/master/packages/tl-parser/src/tl.pegjs
-->

<!-- 

7. BNF for syntax

We give separate BNF's for canonical and advanced forms of S-expressions.
We use the following notation:
	<x>* 		means 0 or more occurrences of <x>
	<x>+		means 1 or more occurrences of <x>  
	<x>?		means 0 or 1 occurrences of <x>
	parentheses	are used for grouping, as in (<x> | <y>)*


For canonical and basic transport:
https://people.csail.mit.edu/rivest/Sexp.txt

<sexpr>    	:: <string> | <list>
<string>   	:: <display>? <simple-string> ;
<simple-string>	:: <raw> ;
<display>  	:: "[" <simple-string> "]" ;
<raw>      	:: <decimal> ":" <bytes> ;
<decimal>  	:: <decimal-digit>+ ;
		-- decimal numbers should have no unnecessary leading zeros
<bytes> 	-- any string of bytes, of the indicated length
<list>     	:: "(" <sexp>* ")" ;
<decimal-digit> :: "0" | ... | "9" ;

For advanced transport:

<sexpr>    	:: <string> | <list>
<string>   	:: <display>? <simple-string> ;
<simple-string>	:: <raw> | <token> | <base-64> | <hexadecimal> | 
		           <quoted-string> ;
<display>  	:: "[" <simple-string> "]" ;
<raw>      	:: <decimal> ":" <bytes> ;
<decimal>  	:: <decimal-digit>+ ;
		-- decimal numbers should have no unnecessary leading zeros
<bytes> 	-- any string of bytes, of the indicated length
<token>    	:: <tokenchar>+ ;
<base-64>  	:: <decimal>? "|" ( <base-64-char> | <whitespace> )* "|" ;
<hexadecimal>   :: "#" ( <hex-digit> | <white-space> )* "#" ;
<quoted-string> :: <decimal>? <quoted-string-body>  
<quoted-string-body> :: "\"" <bytes> "\""
<list>     	:: "(" ( <sexp> | <whitespace> )* ")" ;
<whitespace> 	:: <whitespace-char>* ;
<token-char>  	:: <alpha> | <decimal-digit> | <simple-punc> ;
<alpha>       	:: <upper-case> | <lower-case> | <digit> ;
<lower-case>  	:: "a" | ... | "z" ;
<upper-case>  	:: "A" | ... | "Z" ;
<decimal-digit> :: "0" | ... | "9" ;
<hex-digit>     :: <decimal-digit> | "A" | ... | "F" | "a" | ... | "f" ;
<simple-punc> 	:: "-" | "." | "/" | "_" | ":" | "*" | "+" | "=" ;
<whitespace-char> :: " " | "\t" | "\r" | "\n" ;
<base-64-char> 	:: <alpha> | <decimal-digit> | "+" | "/" | "=" ;
<null>        	:: "" ; -->
