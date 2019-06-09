import { svg2pngCli } from './svg2pngCli'

svg2pngCli(require('minimist')(process.argv.slice(2)))
