import { existsSync, readFileSync, writeFileSync } from 'fs'
import { sync as glob } from 'glob'
import { serial } from 'misc-utils-of-mine-generic'
import { basename, join } from 'path'
import { terminateLibrary } from '../library'
import { renderDot } from '../renderDot'
import { Options } from '../types'

interface CliOptions extends Options {
  /**
   * Folder for output files. If none output will be written to stdout.
   */
  output?: string

  help?: boolean
}

export async function cliMain(o: CliOptions) {
  preconditions(o)
  const files = glob(o.input).filter(existsSync)

  let input = files.length ? files.map(f => ({
    name: basename(f),
    content: readFileSync(f).toString()
  })) : [{
    name: 'input.dot',
    content: o.input
  }]

  const results = await serial(input.map(input => async () => ({ name: input.name + '.svg', content: await renderDot({ ...o, input: input.content }) })))

  // const result = await renderDot({ ...o, input })
  if (o.output) {
    results.forEach(result => writeFileSync(join(o.output || '.', result.name), result.content))
  }
  else {
    results.forEach(result => process.stdout.write(result.content))
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
