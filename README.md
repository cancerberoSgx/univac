API and CLI to generate Abstract Syntax Trees (AST) of many programming languages using [antlr4 grammars](https://github.com/antlr/grammars-v4)

 * supports node.js and browser
 * Command line tool

## Install

```sh
npm i univac
```

## JavaScript API

```js
import { parseAst } from 'univac'
const ast = parseAst({
  input: 'int main() {}',
  language: 'c'
})
console.log(JSON.stringify(ast, null, 2))
```

## Command line

```
univac --input src/file.py --language python3 --output file-ast.json
univac --listLanguages
univac --input "int main() {}" --language c
```

## Supported Languages

The idea is to support all languages in [antlr4 grammars](https://github.com/antlr/grammars-v4)

## Status

THis is a very new project, WIP, this is the current status:

 * test for Node.js API
 * test to make sure it runs in the browser
 * C language
 * Golang
 * scala
 * ruby
 * java9
 * lua
 * python3
 * CLI

## Language grammar notes

### Ruby

Limited support. only expressions. Don't support OO features. 

These are some notes of the author of the Ruby grammar:

`
Ruby-like language (Corundum) grammar written in ANTLR v4. Was developed just for fun
to use with Parrot VM (basically it compiles into PIR - parrot intermediate
representation)

It has some specific stuff like inline pir and for loop :) And won't ever have
OOP features, sorry.
`