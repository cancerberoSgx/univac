
 

rm node_modules/tree-sitter-javascript/tree-sitter-javascript.wasm
npx tree-sitter build-wasm node_modules/tree-sitter-javascript 
cp node_modules/tree-sitter-javascript/tree-sitter-javascript.wasm src/tree-sitter-parser

rm -rf node_modules/tree-sitter-rust/tree-sitter-rust.wasm
npx tree-sitter build-wasm node_modules/tree-sitter-rust 
cp node_modules/tree-sitter-rust/tree-sitter-rust.wasm src/tree-sitter-parser

#  rm -rf dist/src/tree-sitter-parser;

#  mkdir -p dist/src/tree-sitter-parser 
#  cp -r src/tree-sitter-parser/* dist/src/tree-sitter-parser


