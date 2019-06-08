# render-dot

Renders [Graphviz](http://www.graphviz.org) .dot files to svg, png, and other format, using different graph engines like dot, neato, virco, etc. 

Based on Graphviz [Emscripten](http://kripken.github.io/emscripten-site/ port [viz.js](https://github.com/mdaines/viz.js) library.

 * Supports node.js and browser JavaScript API.
 * CLI.
 * Outputs png, svg, json, dotx, jpeg. 

## Usage

### Install

```sh
npm install render-dot
```

### JavaScript

```ts
import {renderDot} from 'render-dot'

const svgCode = await renderDot({
  input: 'digraph { a -> b; }'
})
```

### Command Line

```sh
render-dot --input "some/**/*.dot" --output outputFolder
render-dot --input "digraph { a -> b; }" > tmp.svg
```

## Options

See [types.ts](src/types.ts). Options apply both to JavaScript API and CLI.

## Status

(no browser support or test yet)

 * node.js API
 * tests
 * types

## Road map

 [x] CLI
 [ ] Browser
 [ ] browser tests
 [ ] keep investigating if it's possible to input several .dot files and render them all together biding common elements.