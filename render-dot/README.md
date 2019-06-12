# render-dot

Renders [Graphviz](http://www.graphviz.org) .dot files to svg, png, and other format, using different graph engines like dot, neato, virco, etc. 

Based on Graphviz [Emscripten](http://kripken.github.io/emscripten-site/ port [viz.js](https://github.com/mdaines/viz.js) library.

 * Supports node.js and browser JavaScript API.
 * CLI.
 * Outputs 
   * Image formats: png, svg, jpeg, gif, json, ps, eps, ps2, pic, vml
   * text formats: xdot, json, xdot_json, plain, plain_ext, pov

## Usage

### Install

```sh
npm install render-dot
```

### JavaScript

Render DOT code to SVG code as string:

```ts
import {renderDot} from 'render-dot'
const svgCode = await renderDot({
  input: 'digraph { a -> b; }'
})
```

Render DOT to PNG file:

```ts
const result = await renderDot({
  input: 'digraph { a -> b; }', 
  format: 'png'
})
writeFileSync('graph.png', result, 'binary')
```


### Command Line

```sh
render-dot --input "some/**/*.dot" --output outputFolder
render-dot --input "digraph { a -> b; }" > tmp.svg
render-dot --input "some/**/*.dot" --output outputFolder --format gif
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