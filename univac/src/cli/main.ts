import { cliMain } from './cli'

cliMain(require('minimist')(process.argv.slice(2)))
