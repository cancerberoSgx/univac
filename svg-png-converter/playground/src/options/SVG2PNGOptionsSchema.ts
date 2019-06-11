import { JSONSchema6 } from 'json-schema'
import { dataToUrl } from '../../../dist/src'
import { graph1_svg } from '../examples/files/graph1_svg'

export const SVG2PNGOptionsSchema: JSONSchema6 = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "input": {
      "type": 'string',
      "format": "data-url",
      "description": "SVG code to render as plain text.\n\nFor CLi or Node.js, it can also be path or glob file pattern to .svg files, relative to current dir.",
      default: dataToUrl(graph1_svg.trim(), 'image/svg+xml')
    },
    "format": {
      "description": "Output format. One of: `png, jpeg`. By default: `png`.",
      "enum": [
        "jpeg",
        "png",
        "gif"
      ],
      "type": "string",
      "default": "png"
    },

    "width": {
      "description": "Cropping width. Introduced in v1.2.14",
      "type": "number"
    },

    color: {
      description: "Fill color. Will be ignored when exporting as \\<symbol\\>. (default: `PotraceTurnPolicy.COLOR_AUTO`,\nwhich means black or white, depending on `blackOnWhite` property)",
      type: "string",
      title: 'Foreground color',
      default: '#000000'
    },
    background: {
      title: "backgorund color",
      description: "Background color. Will be ignored when exporting as \\<symbol\\>. By default is not present\n(`PotraceTurnPolicy.COLOR_TRANSPARENT`)",
      type: "string",
      default: '#ffffff'
    },
    blackOnWhite: {
      title: "Black on white",
      description: "specifies colors by which side from threshold should be traced (default true).",
      type: "boolean",
      default: true
    },
    "height": {
      "description": "Cropping height. Introduced in v1.2.14",
      "type": "number"
    },
    "multiplier": {
      "description": "Multiplier to scale by",
      "type": "number",
      "default": 1
    },
    "quality": {
      "description": "Quality level (0..1). Only used for jpeg",
      "type": "number",
      "default": 1
    },
    "left": {
      "description": "Cropping left offset. Introduced in v1.2.14",
      "type": "number",
      "default": 0
    },
    "top": {
      "description": "Cropping top offset. Introduced in v1.2.14",
      "type": "number",
      "default": 0
    },
    "withoutShadow": {
      "type": "boolean",
      "default": false
    },
    "withoutTransform": {
      "type": "boolean",
      "default": false
    },
    "enableRetinaScaling": {
      "type": "boolean",
      "default": false
    },
    "debug": {
      "description": "Node.js and CLI only. Prints debug messages.",
      "type": "boolean",
      "default": false
    },
  },
  "type": "object"
}
