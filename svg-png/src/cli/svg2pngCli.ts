import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { sync as glob } from 'glob'
import { serial } from 'misc-utils-of-mine-generic'
import { basename, join } from 'path'
import { BufferClass } from '../buffer'
import { svg2png } from '../svg2png'
import { SVG2PNGOptions } from '../types'

export async function svg2pngCli(o: SVG2PNGOptions) {
  try {

    preconditions(o)
    o.debug && console.log(`CLI Options: ${JSON.stringify({ ...o, input: null })}`)

    const files = typeof o.input === 'string' ? glob(o.input).filter(existsSync) : [o.input]

    const input = (files as any).length ? (files as (string | Buffer)[]).map(f => ({
      name: typeof f === 'string' ? f : 'input.svg',
      content: typeof f === 'string' ? readFileSync(f) : f
    })) : [{
      name: 'input.svg',
      content: typeof o.input === 'string' ? BufferClass.from(o.input) : o.input
    }]

    if (o.output && !existsSync(o.output)) {
      mkdirSync(o.output, { recursive: true })
    }

    await serial(input.map(input => async () => {
      try {
        o.debug && console.log('Rendering ' + input.name)
        const result = ({ name: input.name + '.' + (o.format || 'png'), content: await svg2png({ ...o, input: input.content }) })
        if (o.output) {
          const file = join(o.output, basename(result.name))
          o.debug && console.log('Writing ' + file)
          writeFileSync(file, result.content, 'binary')
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

function preconditions(options: SVG2PNGOptions) {
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

svg2png --input "**/*pics*/*.svg" --output ../bitmaps
svg2png --input graph1.svg > graph1.png
`)
}
