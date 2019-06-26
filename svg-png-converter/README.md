# svg-png-converter

## Contents

<!-- toc -->

- [Playground](#playground)
- [Summary](#summary)
- [Install](#install)
- [svg2png](#svg2png)
  * [JavaScript API examples](#javascript-api-examples)
    + [Example 1](#example-1)
  * [Example 2](#example-2)
- [png2svg](#png2svg)
  * [Image Tracers](#image-tracers)
  * [SVG Optimization](#svg-optimization)
  * [JavaScript API](#javascript-api)
  * [Command Line examples](#command-line-examples)
    + [svg2png](#svg2png-1)
    + [png2svg](#png2svg-1)
- [Options](#options)
- [Status / TODO](#status--todo)
- [Ideas](#ideas)
- [Why?](#why)
  * [Why another SVG rasterize library?](#why-another-svg-rasterize-library)
  * [Why a library to convert bitmaps to SVG ?](#why-a-library-to-convert-bitmaps-to-svg-)

<!-- tocstop -->

## Playground

Checkout [Project Playground](https://cancerberosgx.github.io/demos/svg-png-converter/playground/) to test converting SVG images to PNG and back again using different configurations. 

Also, checkout this app build with this library to transform bitmap to SVG online: 
[bitmap2vector](https://cancerberosgx.github.io/demos/bitmap2vector-converter) (WIP) 

## Summary

 * [Repository](https://github.com/cancerberoSgx/univac/tree/master/svg-png-converter).
 * Convert SVG to PNG / JPEG
 * Convert PNG/JPEG to SVG. 
   * produced SVG are paths that resembles the original image relatively well and in a relative small output length.
   * It does good job with cartoons / logos etc
   * photos / realistic images need to be configured using the options since they output could be large in size.
 * Supports browsers and node.js (Same JavaScript API). 
 * `--optimize` optimizes SVG output files with [svgo](https://github.com/svg/svgo/)
 * Command Line interface.
 * Uses [fabricjs](http://fabricjs.com/) to rasterize SVG documents into PNG/JPEG,.
 * Uses [potrace](https://github.com/cancerberoSgx/univac/tree/master/svg-png-converter) and [bitmap2vector](https://www.npmjs.com/package/bitmap2vector) to convert PNG/JPEG bitmap images to SVG vector graphics with flexible options to control output size / quality. 

## Install

```sh
npm install svg-png-converter
```

## svg2png

 * Accept several type of input objects: string, Buffer, typedArrays, DataUrls, Globs, etc

 * In the browser, Buffer is emulated with [Buffer](https://www.npmjs.com/package/buffer) so the same API and implementation works both on it and Node.js.

### JavaScript API examples

#### Example 1

Pass a Buffer as input, and receive a Buffer as output with a JPEG image content.

```ts
import {svg2png} from 'svg-png-converter'

let outputBuffer = await svg2png({ 
  input: readFileSync('./ss/foo.svg'), 
  encoding: 'buffer', 
  format: 'jpeg',
})
writeFileSync("tmp25.jpg", outputBuffer)
```


### Example 2

Transform a literal SVG string to a DataUrl containing JPEG with custom size and quality jpeg

```ts
import {svg2png} from 'svg-png-converter'

let s = await svg2png({ 
  input: `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="632pt" height="91pt" viewBox="0.00 0.00 631.61 91.30" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(4 112)">
    <polygon fill="#ffffff" stroke="transparent" points="-4,4 -4,-112 58,-112 58,4 -4,4"/>
    <ellipse fill="none" stroke="#000000" cx="27" cy="-90" rx="27" ry="18"/>
    <text text-anchor="middle" x="27" y="-85.8" font-family="Times,serif" font-size="14.00" fill="#000000">a</text>
  </g>
</svg>
`.trim(), 
  encoding: 'dataURL', 
  format: 'jpeg',
  width: 100,
  height: 100,
  multiplier: .7,
  quality: .5
})
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ
```


## png2svg

### Image Tracers

Transforming a bitmap image to a vector document is not straight forward. .This library accomplish that using different [](image tracing) implementations and options to configure them. Right now it support the following "tracers" (some comments about each): 

 * [bitmap2vector](https://www.npmjs.com/package/bitmap2vector) 
  * Support color output and does good job preserving the original colors by default
  * has multiple settings to configure output quality, size, colors, noise, etc.
 
 * [potrace](https://github.com/cancerberoSgx/univac/tree/master/svg-png-converter) 
  * Supports only monochromatic color  output (configurable). 
  * Does a good job preserving edges/shapes and color contrast / light. 
  * Has options to remove noise, control quality, etc. Has options to add iterations for color posterization but is not simple / requires manual work.
  * (IMO) Potrace generated shapes are better / cleaner so if only monochromatic output is needed this could be better than the other tracers.

### SVG Optimization

 * passing `--optimize` minify output SVG with [svgo](https://github.com/svg/svgo/). This is THE svg optimization tool which has as dependency and runs in the browser.


### JavaScript API

Convert a .gif file using `imagetracer` implementation, limiting output number of colors to 16, not rendering segments smaller than 4

```ts
import { png2svg } from 'svg-png-converter'

const result = await png2svg({ 
  tracer: 'imagetracer', 
  optimize: true,
  input: readFileSync('test/assets/tmp2.`gif`') ,
  numberofcolors: 24, 
  pathomit: 1,
})
writeFileSync("tmp25.png", s)
```


TODO


### Command Line examples

#### svg2png

```sh
svg2png --input "some/**/*.svg" --output ../assets/jpeg --format jpeg
svg-png-converter --input " > tmp.svg
```

#### png2svg

```sh
png2svg --input "some/**/*.png" --output vectors 
png2svg --input foo.jpeg > tmp.svg
```


## Options

TODO

See [types.ts](src/types.ts). Options apply both to JavaScript API and CLI.



## Status / TODO

- [x] Node.js API and tests
- [x] CLI
- [x] Browser
- [x] CLI tests
- [ ] browser tests
- [ ] Make sure we are using Potrace latest forks and not the original one.
- [ ] add https://github.com/cancerberoSgx/svgo


## Ideas

- [ ] This is another library to rasterize svgs DOM based and fast: https://github.com/canvg/canvg - we could support also that as an alternative to fabric and measure
- [ ] switch between output/input images so we can perform png=>svg=> png multiple times to see if degrades or improves. Also a mechanism to perform this N times.
 * add ImageMagic to measure differenc e
 * idea: a general preprocessing ImageMagic/jimp filter - for example edge detection, scale. Perhaps jimp already support these


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

 It also uses bitmap2vector that is a facade over
