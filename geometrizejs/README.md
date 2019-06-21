# geometrizejs

[Repository](https://github.com/cancerberoSgx/univac/tree/master/geometrizejs).

 * [geometrize](https://www.geometrize.co.uk/) JavaScript API.
 * Generated directly from [official geometrize-haxe](https://github.com/Tw1ddle/geometrize-haxe) code.
 * for node.js and browsers.
 * TypeScript typings
 * Zero dependencies.
 * No implementation, just typings of generated JavaScript library.

## Usage

```
npm install --save geometrizejs
```

This example uses [jimp](TODO) to load images supporting several formats, node.js and browsers.

```js

import Jimp from 'jimp'
import { Bitmap, ImageRunner, ShapeTypes, SvgExporter } from '../src'

(async ()=>{  
  
  const image = await Jimp.read('test/assets/logo.png')
  const bitmap = Bitmap.createFromRawBytes(image.bitmap.width, image.bitmap.height, image.bitmap.data)
  const runner = new ImageRunner(bitmap)
  const options = {
    shapeTypes: [ShapeTypes.CIRCLE],
    candidateShapesPerStep: 50,
    shapeMutationsPerStep: 100,
    alpha: 128
  }
  const iterations = 500
  const svgData = []
  for (let i = 0; i < iterations; i++) {
    svgData.push(SvgExporter.exportShapes(runner.step(options)))
  }
  const svg = SvgExporter.getSvgPrelude() + SvgExporter.getSvgNodeOpen(bitmap.width, bitmap.height) + svgData.join('\n') + SvgExporter.getSvgNodeClose()

  // in node.js write output in file
  writeFileSync('output.svg', svg)

  // or in the browser, create a SVGElement
  document.getElementById('svg-container').innerHTML = svg

})()

```

## API docs

TODO

## Build gemoetrize.js

```sh
git clone https://github.com/Tw1ddle/geometrize-haxe.git
cp this-folder/build/build-js-target.hxml geometrize-haxe
cd geometrize-haxe
haxe build-js-target.hxml
```

That should generate `geometrize-haxe/build/geometrize.js` which should be copied to this projects src folder.