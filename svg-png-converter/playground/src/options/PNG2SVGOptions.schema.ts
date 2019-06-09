import { JSONSchema6 } from 'json-schema'
import { yao_jpg } from '../examples/files/yao_jpg'

export const PNG2SVGOptionsSchema: JSONSchema6 = {
  "$schema": "http://json-schema.org/draft-07/schema#",

  "properties": {

    "input": {
      "type": 'string',
      "title": "Input",
      "anyOf": [
        , {
          "type": "string",
          "format": "data-url",
          "title": "Local file",
        } as any,
        {
          "type": "string",
          "title": "Source Code",
        }
      ],
      //     "description": "PNG/JPEG file content encoded as dataURL. \n\nFor CLi and Node.js, it can also be a path or glob file pattern to .png / .jpg files, relative to current dir."
      default: yao_jpg
    },

    "color": {
      "description": "Fill color. Will be ignored when exporting as \\<symbol\\>. (default: `PotraceTurnPolicy.COLOR_AUTO`,\nwhich means black or white, depending on `blackOnWhite` property)",
      "type": "string",
      title: 'Foreground color',
      default: 'black'
    },
    "background": {
      title: "backgorund color",
      "description": "Background color. Will be ignored when exporting as \\<symbol\\>. By default is not present\n(`PotraceTurnPolicy.COLOR_TRANSPARENT`)",
      "type": "string",
      default: "-1"
    },
    "blackOnWhite": {
      "title": "Black on white",
      "description": "specifies colors by which side from threshold should be traced (default true).",
      "type": "boolean",
      default: true
    },
    "fillStrategy": {
      "title": "Fill Strategy",

      "description": "determines how fill color for each layer should be selected. Possible values are exported as constants:\n\n- `FILL_DOMINANT` (`dominant`) - most frequent color in range (used by default), \n\n- `FILL_MEAN` (`mean`) - arithmetic mean (average), \n\n- `FILL_MEDIAN` (`median`) - median color, \n\n- `FILL_SPREAD` (`spread`) - ignores color information of the image and just spreads colors equally in range\n   0..threshold (or threshold..255 if`blackOnWhite` is set to `false`),\n\n- `none` \n\n(default: PotraceFillPolicy.FILL_DOMINANT).",
      "enum": [
        "dominant",
        "mean",
        "median",
        "none",
        "spread"
      ],
      "type": "string",
      default: 'dominant'
    },
    "noCurveOptimization": {
      "title": "No Curve Optimizations",
      "description": "Disable curve optimization (default false).",
      "type": "boolean",
      default: false
    },
    "optTolerance": {
      "description": "curve optimization tolerance (default 0.2).",
      "title": "Optimizations tolerance",
      "type": "number",
      default: 0.2
    },
    "rangeDistribution": {
      "title": "Range Distribution",
      "description": "How to choose thresholds in-between - after equal intervals or automatically balanced. (default:\nPotraceRangeDistributionPolicy.RANGES_AUTO). Ignored if `steps` is an array. Possible values are:\n\n  - `RANGES_AUTO` (`auto`) - Performs automatic thresholding (using [Algorithm For Multilevel\n    Thresholding][multilevel-thresholding]). Preferable method for already posterized sources, but takes\n    long time to calculate 5 or more thresholds (exponential time complexity)  \n    *(used by default)*\n\n  - `RANGES_EQUAL`  (`equal`)  - Ignores color information of the image and breaks available color space into equal\n    chunks",
      "enum": [
        "auto",
        "equal"
      ],
      "type": "string",
      default: 'auto'
    },
    "steps": {
      "title": "Steps",
      "anyOf": [
        {
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        {
          "type": "number"
        }
      ],
      "description": "Number of samples that needs to be taken (and number of layers in SVG). (default: Posterizer.STEPS_AUTO,\nwhich most likely willresult in 3, sometimes 4). Threshold computation for more than 5 levels may take\na long time. \n\nSpecifies desired number of layers in resulting image. Ifa number provided - thresholds for each layer\nwill be automatically calculated according to `rangeDistribution` parameter. \n\nIf an array provided it expected to be an array with pre computed thresholds for each layer (in range\n0..255)  \n\n(default: `STEPS_AUTO` which will result in `3` or `4`, depending on `threshold` value)",
      default: 4
    },
    "threshold": {
      "title": "threshold",
      "description": "- Breaks image into foreground and background (and only foreground being broken into desired number of\n   layers). Basically when provided it becomes a threshold for last (least opaque) layer and then `steps\n   - 1` intermediate thresholds calculated. If **steps** is an array of thresholds and every value from\n   the array is lower (or larger if **blackOnWhite** parameter set to `false`) than threshold - threshold\n   will be added to the array, otherwise just ignored.  Default: `PotraceTurnPolicy.THRESHOLD_AUTO`",
      "type": "number",
      default: -1
    },
    "turdSize": {
      "title": "size tolerance",
      "description": "suppress speckles of up to this size (default 2).",
      "type": "number",
      default: 2
    },
    "turnPolicy": {
      "title": "Turn policy",
      "description": "how to resolve ambiguities in path decomposition. Possible values are exported as constants:\n`TURNPOLICY_BLACK`, `TURNPOLICY_WHITE`, `TURNPOLICY_LEFT`, `TURNPOLICY_RIGHT`, `TURNPOLICY_MINORITY`,\n`TURNPOLICY_MAJORITY`. (`black`, `white`, `left`, `right`, `minority`, `majority`)\n\nRefer to [this document](http://potrace.sourceforge.net/potrace.pdf) for more\ninformation (page 4)  .  (default PotraceTurnPolicy.TURNPOLICY_MINORITY).",
      "enum": [
        "black",
        "left",
        "majority",
        "minority",
        "right",
        "white"
      ],
      "type": "string",
      default: "minority"
    },
    "alphaMax": {
      "description": "corner threshold parameter (default 1).",
      "title": "Alpha Max",
      "type": "number",
      "default": 1
    },
    "debug": {
      "description": "Node.js and CLI only. Prints debug messages.",
      "title": "debug   ",
      "type": "boolean",
      default: false
    }
  },
  "type": "object"
}


      // "input": {
      //     "anyOf": [
      //         {
      //             "additionalProperties": false,
      //             "description": "A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the\nrequested number of bytes could not be allocated an exception is raised.",
      //             "patternProperties": {
      //                 "^[0-9]+$": {
      //                     "type": "number"
      //                 }
      //             },
      //             "type": "object"
      //         },
      //         {
      //             "$ref": "#/definitions/Blob"
      //         },
      //         {
      //             "additionalProperties": false,
      //             "description": "Raw data is stored in instances of the Buffer class.\nA Buffer is similar to an array of integers but corresponds to a raw memory allocation outside the V8 heap.  A Buffer cannot be resized.\nValid string encodings: 'ascii'|'utf8'|'utf16le'|'ucs2'(alias of 'utf16le')|'base64'|'binary'(deprecated)|'hex'",
      //             "patternProperties": {
      //                 "^[0-9]+$": {
      //                     "type": "number"
      //                 }
      //             },
      //             "type": "object"
      //         },
      //         {
      //             "type": "string"
      //         }
      //     ],
      //     "description": "PNG/JPEG file content encoded as dataURL. \n\nFor CLi and Node.js, it can also be a path or glob file pattern to .png / .jpg files, relative to current dir."
      // },
