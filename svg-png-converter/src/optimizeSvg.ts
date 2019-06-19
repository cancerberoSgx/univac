const SVGO = require('svgo')

export async function optimizeSvg(data: string, debug?: boolean) {
  const svgo = new SVGO(svgoOptions)
  const before = data.length
  const result = await svgo.optimize(data, { path: 'foo.svg' })
  // console.log(Object.keys(result));

  if (result.data) {
    debug && console.log('SVG data SHRINK IN ' + ((before) / result.data.length) + '%')
    return result.data
  }
  else {
    // console.log(result);
    debug && console.error(`Error while optimizing svg `, result)
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
    // { removeXMLNS: true },
    // { addAttributesToSVGElement: true },
    { removeOffCanvasPaths: true },
    { removeXMLProcInst: true },
    // { addClassesToSVGElement: true },
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
