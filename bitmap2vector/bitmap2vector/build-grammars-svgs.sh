ts-node src/cli/main.ts --input test/assets/javascript-grammar.json --output ../../demos/docs/tree-sitter-grammar-to-dot/javascript
ts-node ../render-dot/src/cli/main.ts --input "../../demos/docs/tree-sitter-grammar-to-dot/javascript/*.dot" --output ../../demos/docs/tree-sitter-grammar-to-dot/javascript

ts-node src/cli/main.ts --input test/assets/rust-grammar.json --output ../../demos/docs/tree-sitter-grammar-to-dot/rust
ts-node ../render-dot/src/cli/main.ts --input "../../demos/docs/tree-sitter-grammar-to-dot/rust/*.dot" --output ../../demos/docs/tree-sitter-grammar-to-dot/rust
