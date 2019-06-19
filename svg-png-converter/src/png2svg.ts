import { bitmap2vector } from 'bitmap2vector'
import { isNode } from 'misc-utils-of-mine-generic'
import { isBase64, urlToBase64 } from "./base64"
import { blobToBuffer, BufferClass, typedArrayToBuffer } from './buffer'
import { potracePosterize } from './potrace'
import { PNG2SVGOptions, PotraceTraceOptions } from './types'
const SVGO = require('svgo')

/**
 * Converts a PNG bitmap image to a SVG vector graphics. Other input supported besides PNG/SVG are JPEG and
 * BMP. Notice that the output SVG won't respect image colors and only will be monochrome. If no --color
 * parameter is given it will produce a black-white (background transparent) image. 
 */
export async function png2svg(options: PNG2SVGOptions) {
  try {
    let buffer = await resolveInput(options)
    let result: { content: string } | undefined
    if (!options.tracer || options.tracer === 'potrace') {
      result = await dispatchPotrace(options, buffer)
    }
    else {
      result = await bitmap2vector({ ...options, input: buffer })
    }
    result.content = await dispatchOptimizeSvg(options, result.content)
    return result
  }
  catch (error) {
    console.error('ERROR PngToSvg', error, error.stack)
    throw error
  }
}

async function dispatchPotrace(options: PNG2SVGOptions, buffer: Buffer) {
  if (options.fillStrategy === 'none') {
    options.fillStrategy = true as any
  }
  if (typeof options.steps === 'string' && (options.steps as any).includes(',')) {
    console.log((options.steps as any).split(','), (options.steps as string).split(',').map(e => parseInt(e)))
    options.steps = (options.steps as string).split(',').map(e => parseInt(e))
  }
  (options as PotraceTraceOptions).optCurve = options.noCurveOptimization !== false
  options.debug && console.log(`Options: ${JSON.stringify({ ...options, input: null })}`)
  return {
    content: await potracePosterize(buffer, options)
  }
}

async function resolveInput(options: PNG2SVGOptions) {
  let buffer: Buffer | undefined
  if (BufferClass.isBuffer(options.input)) {
    buffer = options.input;
  }
  else if (!isNode() && typeof Blob !== 'undefined' && options.input instanceof Blob) {
    buffer = await blobToBuffer(options.input);
  }
  else if (typeof options.input === 'string' && options.input.startsWith('data:')) {
    buffer = BufferClass.from(urlToBase64(options.input), 'base64');
  }
  else if (typeof options.input === 'string' && isBase64(options.input)) {
    buffer = BufferClass.from(Base64.atob(options.input), 'binary');
  }
  else if (typeof options.input === 'string') {
    buffer = BufferClass.from(options.input, 'binary');
  }
  else if (options.input instanceof Uint8Array && !BufferClass.isBuffer(options.input)) {
    buffer = typedArrayToBuffer(options.input);
  }
  if (!buffer) {
    throw new Error('Invalid input option, must be one of Buffer|Uint8Array|Blob|data-url string|binary string');
  }
  return buffer;
}

async function dispatchOptimizeSvg(options: PNG2SVGOptions, data: string) {
  if (!options.optimize) {
    return data
  }
  // console.log(data);

  const svgo = new SVGO(svgoOptions)

  const before = data.length
  const result = await svgo.optimize(data, { path: 'foo.svg' })
  options.debug && console.log('SVG OUTPUT SHRINK IN ' + ((before) / result.data.length) + '%')
  if (result.data) {
    // console.log(result.data);    
    return result.data
  }
  else {
    options.debug && console.error(`Error while optimizing svg `, result)
    return data

  }
}


const svgoOptions = {
  full: true,
  multipass: true,
  precision: 1,
  plugins: [
  {
    moveElemsAttrsToGroup: true,
  },
  {
    moveGroupAttrsToElems: true,
  },
  {
    collapseGroups: true,
  },
  {
    mergePaths: true,
  },
  {
    convertShapeToPath: true,
  },
  {
    sortAttrs: true,
  },
  {
    cleanupEnableBackground: true,
  },
  {
    cleanupIDs: true,
  },
  {
    cleanupNumericValues: true,
  },
  {
    convertStyleToAttrs: true,
  },
  {
    convertTransform: true,
  },
  {
    removeComments: true,
  },
  {
    removeDesc: true,
  },
  {
    removeEmptyAttrs: true,
  },
  {
    removeEmptyText: true,
  },
  {
    removeEmptyContainers: true,
  },
  {
    removeViewBox: false,
  },
  {
    removeUnknownsAndDefaults: true,
  },
  {
    removeUselessStrokeAndFill: true,
  },
  { convertColors: true },
  // { removeAttributesBySelector: true },
  { removeHiddenElems: true },
  { removeUselessStrokeAndFill: true },
  { convertPathData: true },
  { removeAttrs: true },
  { removeMetadata: true },
  { removeViewBox: true },
  { convertShapeToPath: true },
  { removeComments: true },
  { removeNonInheritableGroupAttrs: true },
  { removeXMLNS: true },
  { addAttributesToSVGElement: true },
  { removeOffCanvasPaths: true },
  { removeXMLProcInst: true },
  { addClassesToSVGElement: true },
  { convertTransform: true },
  { removeDimensions: true },
  { removeRasterImages: true },
  { reusePaths: true },
  { cleanupAttrs: true },
  { inlineStyles: true },
  { removeDoctype: true },
  { removeScriptElement: true },
  { sortAttrs: true },
  { cleanupEnableBackground: true },
  { mergePaths: true },
  { removeEditorsNSData: true },
  { removeStyleElement: true },
  { sortDefsChildren: true },
  { cleanupIDs: true },
  { minifyStyles: true },
  { removeElementsByAttr: true },
  { removeTitle: true },
  { cleanupListOfValues: true },
  { moveElemsAttrsToGroup: true },
  { removeEmptyAttrs: true },
  { removeUnknownsAndDefaults: true },
  { cleanupNumericValues: true },
  { moveGroupAttrsToElems: true },
  { removeEmptyContainers: true },
  { removeUnusedNS: true },
  { collapseGroups: true },
  { prefixIds: true },
  { removeEmptyText: true },
  { removeUselessDefs: true },

  ]
}