import test from 'ava'
import Jimp from 'jimp'
import { Bitmap, ImageRunner, ShapeTypes, SvgExporter } from '../src'

test('should export SVG', async t => {
  const image = await Jimp.read('test/assets/logo.png')
  const bitmap = Bitmap.createFromRawBytes(image.bitmap.width, image.bitmap.height, image.bitmap.data)
  const runner = new ImageRunner(bitmap)
  const options = {
    shapeTypes: [ShapeTypes.CIRCLE],
    candidateShapesPerStep: 50,
    shapeMutationsPerStep: 100,
    alpha: 128
  }
  const iterations = 1
  const svgData = []
  for (let i = 0;i < iterations;i++) {
    svgData.push(SvgExporter.exportShapes(runner.step(options)))
  }
  const svg = SvgExporter.getSvgPrelude() + SvgExporter.getSvgNodeOpen(bitmap.width, bitmap.height) + svgData.join('\n') + SvgExporter.getSvgNodeClose()

  const expected = ['<?xml', '<svg xmlns="http://www.w3.org/2000/svg"', '<circle', '</svg>']
  expected.forEach(e => t.true(svg.includes(e)))
})
