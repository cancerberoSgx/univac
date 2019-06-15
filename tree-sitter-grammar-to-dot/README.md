Generates .dot files from grammar.json tree-sitter files rendering the property states for each type. Inspired on antlr4 -atn command.

## Command line

```sh
tree-sitter-grammar-to-dot --input test/assets/javascript-grammar.json --output tmp
```

## JavaScript API

Builds several .dot files, one for each rule in given grammar.json file: 

```ts
import {buildGrammarDot} from 'tree-sitter-grammar-to-dot'

const result = buildGrammarDot({  
  input: JSON.parse(readFileSync('rust-grammar.json').toString())  
})
result.rules.forEach(rule => {
  const file = join(o.output, basename(input.name))+'.'+rule.name+'.dot'
  writeFileSync(file, rule.dot)
})
```

Builds .dot source code from a single rule object:

```ts
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
const dot = buildRuleDot(rule, 'importDeclaration')
writeFileSync('importDeclaration.dot', dot)
```

## Status

## TODO

- [ ] make sure we implement all types
- [ ] test against official language grammars. 
- [ ] CLI
- [ ] document options
- [ ] name option