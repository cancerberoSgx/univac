# svg-png

 * Convert SVG to PNG or JPEG.
 * Convert PNG/JPEG to SVG. produced SVG is one path, that resembles the original image relatiely well and ,
   and in a relative small output length.
 * Supports browsers and node.js (Same JavaScript API). 
 * Command Line interface.

## Usage

### Install

```sh
npm install render-dot
```

### JavaScript

#### svg2png


##### From literal SVG string

```ts
import {svg2png} from 'svg-png'

let s = await svg2png({ 
  input: `<?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="632pt" height="91pt" viewBox="0.00 0.00 631.61 91.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 112)">
  <polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-112 58,-112 58,4 -4,4"/>
  <ellipse fill="none" stroke="#000000" cx="27" cy="-90" rx="27" ry="18"/>
  <text text-anchor="middle" x="27" y="-85.8" font-family="Times,serif" font-size="14.00" fill="#000000">a</text>
</svg>`, 
  encoding: 'dataURL', 
  format: 'jpeg',
  output: 'outputFolder'
})
```

##### From Buffer

(node.js only)

```ts
import {svg2png} from 'svg-png'

let s = await svg2png({ 
  input: readFileSync('./ss/foo.svg'), 
  encoding: 'raw', 
  format: 'jpeg',
  output: 'outputFolder'
})
```


### Command Line

```sh
svg-png --input "some/**/*.dot" --output outputFolder
svg-png --input "digraph { a -> b; }" > tmp.svg
```

## Options

See [types.ts](src/types.ts). Options apply both to JavaScript API and CLI.

## Status

 [x] Node.js API and tests
 [x] CLI
 [x] Browser
 [x] CLI tests
 [ ] browser tests

## Why?

### Why another SVG rasterize library?

There are several packages that rasterize SVG, but all of them (or what I found) work only on node.js or only
on the browser and I wanted something that has the same API for both environments.

### Why a library to convert bitmaps to SVG ?

I found several projects that claim to convert bitmap to SVG but all of them implies pixel per pixel or
data-url dumps of the bitmap.

Nevertheless, I recently discovered libraries like http://potrace.sourceforge.net/,
https://github.com/Tw1ddle/geometrize, https://github.com/fogleman/primitive that reproduce images from
geometric primitives:

 >A target image is provided as input. The algorithm tries to find the single most optimal shape that can be
 >drawn to minimize the error between the target image and the drawn image. It repeats this process, adding
 >one shape at a time. Around 50 to 200 shapes are needed to reach a result that is recognizable yet artistic
 >and abstract. a SVG iterating on small shapes end up with an acceptable approximation of the original, and
 >the produced SVG are indeed real paths. 

 I observed that resulting vector images resembles the original acceptably well and the resulting document is
 indeed a collection of one or more shapes instead of just points or a data url. Also the resulting document
 size is acceptably small

 Many of them supports JavaScript and this one in particular supports both node.js and browsers:
 https://github.com/tooolbox/node-potrace, and that's what this project uses to transform SVG to bitmaps. 