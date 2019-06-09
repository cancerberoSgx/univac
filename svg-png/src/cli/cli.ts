import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { sync as glob } from 'glob'
import { serial } from 'misc-utils-of-mine-generic'
import { basename, join } from 'path'
import { svg2png } from '../svg2png'
import { SVG2PNGOptions } from '../types'

export async function cliMain(o: SVG2PNGOptions) {
  try {

    preconditions(o)

    const files = glob(o.input).filter(existsSync)

    const input = files.length ? files.map(f => ({
      name: f,
      content: readFileSync(f).toString()
    })) : [{
      name: 'input.dot',
      content: o.input
    }]

    if (o.output && !existsSync(o.output)) {
      mkdirSync(o.output, { recursive: true })
    }

    await serial(input.map(input => async () => {
      try {
        o.debug && console.log('Rendering ' + input.name)
        const result = ({ name: input.name + '.svg', content: await svg2png({ ...o, input: input.content }) })
        if (o.output) {
          const file = join(o.output, basename(result.name))
          o.debug && console.log('Writing ' + file)
          writeFileSync(file, result.content)
        }
        else {
          process.stdout.write(result.content)
        }
        return result
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

render-dot --input "**/*go*/*.dot" --output ../svgs
render-dot --input graph1.dot > graph1.svg
`)
}
