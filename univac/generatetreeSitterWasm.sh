
 mkdir -p src/tree-sitter-parser

# rm tree-sitter-javascript.wasm
# npx tree-sitter build-wasm node_modules/tree-sitter-javascript 
# mv tree-sitter-javascript.wasm src/tree-sitter-parser

rm -rf tree-sitter-rust.wasm
npx tree-sitter build-wasm node_modules/tree-sitter-rust 
mv tree-sitter-rust.wasm src/tree-sitter-parser

rm -rf tree-sitter-bash.wasm
npx tree-sitter build-wasm node_modules/tree-sitter-bash 
mv tree-sitter-bash.wasm src/tree-sitter-parser


rm -rf tree-sitter-scala.wasm
npx tree-sitter build-wasm node_modules/tree-sitter-scala 
mv tree-sitter-scala.wasm src/tree-sitter-parser

# rm -rf tree-sitter-ocaml.wasm
# npx tree-sitter build-wasm node_modules/tree-sitter-ocaml 
# mv tree-sitter-ocaml.wasm src/tree-sitter-parser

#  rm -rf dist/src/tree-sitter-parser;

#  mkdir -p dist/src/tree-sitter-parser 
#  cp -r src/tree-sitter-parser/* dist/src/tree-sitter-parser


