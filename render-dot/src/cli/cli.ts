import { existsSync, readFileSync, writeFileSync } from 'fs'
import { terminateLibrary } from '../library'
import { renderDot } from '../renderDot'
import { Options } from '../types'

interface CliOptions extends Options {
  help?: boolean
  output?: string
}

export async function cliMain(o: CliOptions) {
  preconditions(o)
  let input = existsSync(o.input) ? readFileSync(o.input).toString() : o.input
  const result = await renderDot({ ...o, input })
  if (o.output) {
    writeFileSync(o.output, result)
  }
  else {
    process.stdout.write(result)
  }
  terminateLibrary()
}

function preconditions(options: CliOptions) {
  if (options.help) {
    printHelp()
    terminateLibrary()
    process.exit(0)
  }
  if (!options.input) {
    fail(`--input is mandatory but one was not given. Aborting.`)
  }
}

function fail(s: string) {
  console.error(s)
  terminateLibrary()
  process.exit(1)
}

function printHelp() {
  console.log(`
Usage: 

univac --language python3 --input src/main.py --output main.py.ast

Options:
  `)
}
