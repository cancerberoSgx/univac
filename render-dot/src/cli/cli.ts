import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { sync as glob } from 'glob'
import { serial, sleep } from 'misc-utils-of-mine-generic'
import { basename, join } from 'path'
import { terminateLibrary } from '../library'
import { renderDot } from '../renderDot'
import { Options } from '../types'

export async function cliMain(o: Options) {
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
        const result = {
          name: input.name + `.${o.format || 'svg'}`,
          content: await renderDot({ ...o, input: input.content })
        }
        // o.debug && console.log('Rendered ' + input.name)
        if (o.output) {
          const file = join(o.output, basename(result.name))
          // o.debug && console.log('Writing ' + file)
          if(!o.format||o.format==='svg'){
            writeFileSync(file, result.content)
          }
          else {
            writeFileSync(file, result.content, 'binary')
          }
        }
        else {
          process.stdout.write(result.content)
        }
        // return result
      } catch (error) {
        console.error('ERROR while rendering file ' + input.name)
        console.error(error)
        //         return { name: input.name + `.${o.format || 'svg'}`, content: await renderDot({ ...o, input: `
        // digraph ATN {
        //   rankdir=LR;
        //   s2[fontsize=11, label="error", shape=doublecircle, fixedsize=true, width=.6];
        // }`}) }
      }
      await sleep(10)
    }))

    o.debug && console.log('Terminating Library')
    terminateLibrary()

  } catch (error) {
    fail(error)
  }
}

function preconditions(options: Options) {
  if (options.help) {
    printHelp()
    terminateLibrary()
    process.exit(0)
  }
  if (!options.input) {
    fail(`--input is mandatory but one was not given. Aborting.`)
  }
  if (options.nop) {
    options.nop = parseInt(options.nop + '')
  }
}

function fail(s: string | Error) {
  console.error(s)
  terminateLibrary()
  process.exit(1)
}

function printHelp() {
  console.log(`
Usage: 

render-dot --input "**/*go*/*.dot" --output ../svgs
render-dot --input graph1.dot --format ps > graph1.ps
`)
}
