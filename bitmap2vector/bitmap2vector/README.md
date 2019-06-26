# bitmap2vector

## Contents

<!-- toc -->

- [Summary](#summary)
- [Install](#install)
- [Usage](#usage)
- [Options](#options)
- [Examples](#examples)
- [Related](#related)
- [TODO](#todo)

<!-- tocstop -->

## Summary 

 * Convert bitmap images like PNG, JPEG, GIF, BMP, TIFF to SVG vector graphics using the image tracer implementation [imagetracerjs](https://github.com/jankovicsandras/imagetracerjs) 
 * JavaScript API for Node.js and Browser API. 
 * TypeScript type definitions. 
 * [Command Line interface](https://www.npmjs.com/package/bitmap2vector-cli)

## Install 

```sh
npm install bitmap2vector
```

## Usage

```ts
import { bitmap2vector } from 'bitmap2vector';

// from file input stream 
const out = await bitmap2vector({
  input: readFileSync('test/assets/panda.png')
})
writeFileSync('output.svg', out.content)

// from URL or path
const out = await bitmap2vector({
  input: '../assets/bluebells.jpg'
})
aDiv.innerHTML = out.content
```

## Options

 * `input: string | Buffer`: Path or glob file pattern to .png files, relative to current dir.
in current folder.
 * `help?: boolean`:  Print usage information, then exit.
 * `debug?: boolean`:  Prints debug messages. 
 * `format?: 'svg'`: output file format. Currently only svg is supported
 * `ltres?: number`: Error threshold for straight lines. Default value: 1. 
 * `qtres?: number`: Error threshold for quadratic splines. Default value: 1.
 * `pathomit?: number`: \tEdge node paths shorter than this will be discarded for noise reduction. Default value: 8.
 * `rightangleenhance?: boolean`: Enhance right angle corners. Default value: 1.
 * `colorsampling?: 0 | 1 | 2`: 0: disabled, generating a palette; 1: randomsampling; 2: deterministic sampling. Default value: 2.
 * `numberofcolors?: number`: \tNumber of colors to use on palette if pal object is not defined. Default value: 16.
 * `mincolorratio?: number`: \tColor quantization will randomize a color if fewer pixels than (total pixels *mincolorratio) has it.
\tDefault value: 0.
 * `colorquantcycles?: number`:  Color quantization will be repeated this many times. Default value: 3.
 * `layering?: 0 | 1`: 0: sequential ; 1: parallel
 * `strokewidth?: number`:  SVG stroke-width. Default value: 1.
 * `linefilter?: boolean`:  Enable or disable line filter for noise reduction. Default value: false.
 * `scale?: number`:  Every coordinate will be multiplied with this, to scale the SVG. Default value: 1.
 * `roundcoords?: number`:  rounding coordinates to a given decimal place. 1 means rounded to 1 decimal place like 7.3 ; 3 means
rounded to 3places, like 7.356. Default value: 1.
 * `viewbox?: boolean`:  Enable or disable SVG viewbox. Default value: false.
 * `desc?: boolean`:  Enable or disable SVG descriptions. Default value: false.
 * `blurradius?: number`:  \tSet this to 1..5 for selective Gaussian blur preprocessing. Default value: 0.
 * `blurdelta?: number`:  \tRGBA delta treshold for selective Gaussian blur preprocessing. Default value: 20.

## Examples

TODO

## Related 

 * [svg-png-converter](https://www.npmjs.com/package/svg-png-converter)
 * [render-dot](https://www.npmjs.com/package/render-dot)

 ## TODO

- [x] document src/options.ts
- [x] options in readme
- [x] node js basic tests
- [ ] browser basic tests
