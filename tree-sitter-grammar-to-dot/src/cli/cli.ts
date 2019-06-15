import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { sync as glob } from 'glob'
import { serial, sleep } from 'misc-utils-of-mine-generic'
import { basename, join } from 'path'
import { Options } from '../types'
import { buildDot } from '../buildDot';

export interface CliOptions {
  input: string
  output: string
  help?: boolean
  debug?: boolean
}
export async function cliMain(o: CliOptions) {
  try {

    preconditions(o)

    const files = glob(o.input).filter(existsSync)

    const input =files.map(f => ({
      name: f,
      content: readFileSync(f).toString()
    }))
    if(input.length===0){
      fail('No input files found matching '+o.input+'. Aborting. ')
    }
    if (  !existsSync(o.output)) {
      mkdirSync(o.output, { recursive: true })
    }

    await serial(input.map(input => async () => {
      try {
        o.debug && console.log('Rendering ' + input.name)
         const result = buildDot({  input: JSON.parse(input.content)  })

         result.rules.forEach(rule =>{
           const file = join(o.output, basename(input.name))+'.'+rule.name+'.dot'
           writeFileSync(file, rule.dot)
         })
        // o.debug && console.log('Rendered ' + input.name)
        // if (o.output) {
          // o.debug && console.log('Writing ' + file)
          // if(!o.format||o.format==='svg'){
          // }
          // else {
          //   writeFileSync(file, result.content, 'binary')
          // }
        // }
        // else {
        //   process.stdout.write(result.content)
        // }
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

  } catch (error) {
    fail(error)
  }
}

function preconditions(options: CliOptions) {
  if (options.help) {
    printHelp()
    process.exit(0)
  }
  if (!options.input||!options.output) {
    fail(`--input and --output are mandatory but where not given. Aborting.`)
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
render-dot --input graph1.dot --format ps > graph1.ps
`)
}
