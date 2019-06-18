This is [imagetracerjs](https://github.com/jankovicsandras/imagetracerjs) with support for PNG, JPEG, GIF, BMP, TIFF and other input formats, Node.js and Browser API. TypeScript type definitions. 

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

// from URL or path
const out = await bitmap2vector({
  input: 'test/assets/bluebells.jpg'
})
```

## Options

TODO

## eamples

TODO