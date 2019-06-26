import { existsSync, mkdirSync, readFileSync, writeFileSync, statSync } from 'fs'
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

    const input = files.length ? files.filter(f=>statSync(f).isFile()).map(f => ({
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
          if (!o.format || o.format === 'svg') {
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

Options:

 * --input: string;: .dot code to render. For Command line, it can also be path to .dot files or glob pattern to many .dot files, relative to current dir.
 * --width?: number;: Output image width. 
 * --height?: number;: Output image height. 
 * --format?: 'svg' | 'png' | 'jpeg' | 'gif' | 'json' | 'xdot' | 'plain' | 'ps' | 'eps' | 'ps2' | 'pic' | 'vml' | 'xdot_json' | 'plain_ext' | 'pov': Output format. One of:  'svg' | 'png' | 'jpeg' | 'gif' | 'json' | 'xdot' | 'plain' | 'ps'|   'eps'| 'ps2'| 'pic'| 'vml'| 'xdot_json'| 'plain_ext'| 'pov'. By default: svg.
 * --engine?: Engine;: Graph layout implementation. One of : dot, circo, fdp, neato, asage, twopi, patchwork, sfdp. By default: dot.
 * --quality?: number;: Quality of output image.
 * --scale?: number;: Set input scale to scale. If this value is omitted, 72.0 is used. This number is used to convert the point coordinate units used in the pos attribute into inches, which is what is expected by neato and fdp. Thus, feeding the output of a graph laid out by one program into neato or fdp almost always requires this flag. Ignored if the -n flag is used.
 * --yInvert?: boolean: By default, the coordinate system used in generic output formats, such as attributed dot, extended dot, plain and plain-ext, is the standard cartesian system with the origin in the lower left corner, and with increasing y coordinates as points move from bottom to top. If the -y flag is used, the coordinate system is inverted, so that increasing values of y correspond to movement from top to bottom.
 * --nop?: number;: Sets no-op flag in neato. If set, neato assumes nodes have already been positioned and all nodes have a pos attribute giving the positions. It then performs an optional adjustment to remove node-node overlap, depending on the value of the overlap attribute, computes the edge layouts, depending on the value of the splines attribute, and emits the graph in the appropriate format. If num is supplied, the following actions occur: 
   - num = 1 : Equivalent to -n.
   - num > 1: Use node positions as specified, with no adjustment to remove node-node overlaps, and use any edge layouts already specified by the pos attribute. neato computes an edge layout for any edge that does not have a pos attribute. As usual, edge layout is guided by the splines attribute.
 * --output?: string: Folder for output files. If it doesn't exists it will be created. If none, output will be written to stdout.
 * --help?: boolean: Print usage information, then exit.
 * --debug?: boolean: Prints debug messages.

`)
}
