# svg-png-converter

## Playground

Checkout [Project Playground](https://cancerberosgx.github.io/demos/svg-png-converter/playground/) to  test converting SVG images to PNG and back again using different configurations. 

## Summary

 * Convert SVG to PNG or JPEG.
 * Convert PNG/JPEG to SVG. produced SVG is one path, that resembles the original image relatively well and ,
   and in a relative small output length.
 * Supports browsers and node.js (Same JavaScript API). 
 * Command Line interface.
 * Uses [fabricjs](http://fabricjs.com/) to rasterize SVG documents into PNG/JPEG,.
 * Uses [potrace](https://github.com/cancerberoSgx/univac/tree/master/svg-png-converter) to convert PNG/JPEG bitmap images to SVG vector graphics. 

## Usage

### Install

```sh
npm install svg-png-converter
```

### JavaScript API Examples

#### svg2png


##### From Buffer to Buffer

(In the browser buffer are instances of UInt8Array, supported thanks to https://www.npmjs.com/package/buffer)

```ts
import {svg2png} from 'svg-png-converter'

let s = await svg2png({ 
  input: readFileSync('./ss/foo.svg'), 
  encoding: 'raw', 
  format: 'jpeg',
  output: 'outputFolder'
})
writeFileSync("tmp25.png", s)
```


##### From literal SVG string to DataUrl, custom size and quality jpeg

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


#### svg2png

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