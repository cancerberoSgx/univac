import { yao_jpg } from '../examples/files/yao_jpg';
import { JSONSchema6 } from 'json-schema';

export const PNG2SVGImageTracerOptionsSchema: JSONSchema6 = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    input: {
      type: 'string',
      title: "Input",
      format: "data-url",
      description: "PNG/JPEG file content encoded as dataURL.",
      default: yao_jpg.trim()
    },
    // "output": {
    //   "type": "string",
    //   "description": "Folder for output files. If it doesn't exists it will be created. If none, output files will be written\nin current folder."
    // },
    // "help": {
    //   "type": "boolean",
    //   "description": "Print usage information, then exit."
    // },
    // "debug": {
    //   "type": "boolean",
    //   "description": "Prints debug messages."
    // },
    "format": {
      "type": "string",
      "enum": [
        "svg"
      ],
      "description": "output file format. Currently only svg is supported",
      default: 'svg'
    },
    "ltres": {
      "type": "number",
      "description": "Error threshold for straight lines. Default value: 1.",
      default: 1
    },
    "qtres": {
      "type": "number",
      "description": "Error threshold for quadratic splines. Default value: 1.",
      default: 1
    },
    "pathomit": {
      "type": "number",
      "description": "Edge node paths shorter than this will be discarded for noise reduction. Default value: 8.",
      default: 8
    },
    "rightangleenhance": {
      "type": "boolean",
      "description": "Enhance right angle corners. Default value: 1.",
      default: 1
    },
    "colorsampling": {
      "type": "number",
      "enum": [
        0,
        1,
        2
      ],
      "description": "0: disabled, generating a palette; 1: random sampling; 2: deterministic sampling. Default value: 2.",
      default: 2
    },
    "numberofcolors": {
      "type": "number",
      "description": "Number of colors to use on palette if pal object is not defined. Default value: 16.",
      default: 16
    },
    "mincolorratio": {
      "type": "number",
      "description": "Color quantization will randomize a color if fewer pixels than (total pixels*mincolorratio) has it.\nDefault value: 0.",
      default: 0
    },
    "colorquantcycles": {
      "type": "number",
      "description": "Color quantization will be repeated this many times. Default value: 3.",
      default: 3
    },
    "layering": {
      "type": "number",
      "enum": [
        0,
        1
      ],
      "description": "0: sequential ; 1: parallel"
    },
    "strokewidth": {
      "type": "number",
      "description": "SVG stroke-width. Default value: 1.",
      default: 1
    },
    "linefilter": {
      "type": "boolean",
      "description": "Enable or disable line filter for noise reduction. Default value: false.",
      default: false
    },
    "scale": {
      "type": "number",
      "description": "Every coordinate will be multiplied with this, to scale the SVG. Default value: 1.",
      default: 1
    },
    "roundcoords": {
      "type": "number",
      "description": "rounding coordinates to a given decimal place. 1 means rounded to 1 decimal place like 7.3 ; 3 means\nrounded to 3 places, like 7.356. Default value: 1.",
      default: 1
    },
    "viewbox": {
      "type": "boolean",
      "description": "Enable or disable SVG viewbox. Default value: false.",
      default: false
    },
    "desc": {
      "type": "boolean",
      "description": "Enable or disable SVG descriptions. Default value: false.",
      default: false
    },
    "blurradius": {
      "type": "number",
      "description": "Set this to 1..5 for selective Gaussian blur preprocessing. Default value: 0.",
      default: 0
    },
    "blurdelta": {
      "type": "number",
      "description": "RGBA delta treshold for selective Gaussian blur preprocessing. Default value: 20.",
      default: 20
    }
  },
  "required": [
    "input"
  ],
  "additionalProperties": false
}