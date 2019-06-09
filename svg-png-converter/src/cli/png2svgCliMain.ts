import { png2svgCli } from './png2svgCli'

png2svgCli(require('minimist')(process.argv.slice(2)))
