# render-dot

## Contents

<!-- toc -->

- [Summary](#summary)
- [Usage](#usage)
  * [Install](#install)
  * [JavaScript](#javascript)
  * [Command Line](#command-line)
- [Options](#options)
- [Status](#status)
- [Road map](#road-map)

<!-- tocstop -->

## Summary 

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

 * `input: string;`: .dot code to render. For Command line, it can also be path to .dot files or glob pattern to many .dot
files, relative to current dir.
 * `width?: number;`: Output image width. 
 * `height?: number;`: Output image height. 
 * `format?: 'svg' | 'png' | 'jpeg' | 'gif' | 'json' | 'xdot' | 'plain' | 'ps' | 'eps' | 'ps2' | 'pic' | 'vml' | 'xdot_json' | 'plain_ext' | 'pov'`: Output format. One of: ` 'svg' | 'png' | 'jpeg' | 'gif' | 'json' | 'xdot' | 'plain' | 'ps'|   'eps'| 'ps2'| 'pic'| 'vml'| 'xdot_json'| 'plain_ext'| 'pov'`. By default: `svg`.
 * `engine?: Engine;`: Graph layout implementation. One of : `dot, circo, fdp, neato, asage, twopi, patchwork, sfdp`. By default: `dot`.
 * `quality?: number;`: Quality of output image.
 * `scale?: number;`: Set input scale to scale. If this value is omitted, 72.0 is used. This number is used to convert the
point coordinate units used in the pos attribute into inches, which is what is expected by neato and fdp.
Thus, feeding the output of a graph laid out by one program into neato or fdp almost always requires this
flag. Ignored if the -n flag is used.
 * `yInvert?: boolean`: By default, the coordinate system used in generic output formats, such as attributed dot, extended dot,
plain and plain-ext, is the standard cartesian system with the origin in the lower left corner, and with
increasing y coordinates as points move from bottom to top. If the -y flag is used, the coordinate system
is inverted, so that increasing values of y correspond to movement from top to bottom.
 * `nop?: number;`: Sets no-op flag in neato. If set, neato assumes nodes have already been positioned and all nodes have a
pos attribute giving the positions. It then performs an optional adjustment to remove node-node overlap,
depending on the value of the overlap attribute, computes the edge layouts, depending on the value of the
splines attribute, and emits the graph in the appropriate format. If num is supplied, the following
actions occur: 
   - num = 1 : Equivalent to -n.
   - num > 1: Use node positions as specified, with no adjustment to remove node-node overlaps, and use any
edge layouts already specified by the pos attribute. neato computes an edge layout for any edge that does
not have a pos attribute. As usual, edge layout is guided by the splines attribute.
 * `output?: string`: Folder for output files. If it doesn't exists it will be created. If none, output will be written to
stdout.
 * `help?: boolean`: Print usage information, then exit.
 * `debug?: boolean`: Prints debug messages.

## Status

(no browser support or test yet)

 * node.js API
 * tests
 * types

## Road map

- [x] CLI
- [ ] Browser
- [ ] browser tests
- [ ] keep investigating if it's possible to input several .dot files and render them all together biding common elements.