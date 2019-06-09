import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { sync as glob } from 'glob'
import { serial } from 'misc-utils-of-mine-generic'
import { basename, join } from 'path'
import { png2svg } from '../png2svg'
import { PNG2SVGOptions } from '../types'

export async function png2svgCli(o: PNG2SVGOptions) {
  try {

    preconditions(o)
    o.debug && console.log(`CLI Options: ${JSON.stringify({ ...o, input: null })}`)

    const input = (typeof o.input === 'string' ? glob(o.input).filter(existsSync) : [])
      .map(f => ({
        name: f,
        content: readFileSync(f)
      }))

    if (o.output && !existsSync(o.output)) {
      mkdirSync(o.output, { recursive: true })
    }

    await serial(input.map(input => async () => {
      try {
        o.debug && console.log('Rendering ' + input.name)
        const result = ({ name: input.name + '.svg', content: await png2svg({ ...o, input: input.content }) })
        if (o.output) {
          const file = join(o.output, basename(result.name))
          o.debug && console.log('Writing ' + file)
          writeFileSync(file, result.content)
        }
        else {
          process.stdout.write(result.content)
        }
      } catch (error) {
        console.error('ERROR while rendering file ' + input.name)
        console.error(error)
      }
    }))
  } catch (error) {
    fail(error)
  }
}

function preconditions(options: PNG2SVGOptions) {
  if (options.help) {
    printHelp()
    process.exit(0)
  }
  if (!options.input) {
    fail(`--input is mandatory but one was not given. Aborting.`)
  }
}

function fail(s: string | Error) {
  console.error(s)
  process.exit(1)
}

function printHelp() {
  console.log(`
Usage: 

png2svg --input "**/*pics*/*.png" --output ../svgs
png2svg --input graph1.png > graph1.svg
`)
}
