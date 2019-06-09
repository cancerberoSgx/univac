import { readFileSync, writeFileSync } from 'fs'
import { svg2png } from '../src/svg2png'

async function base55() {
  writeFileSync('tmp.txt', readFileSync('/Users/sebastiangurin/Downloads/chart2.pngw').toString('base64'))
}
base55()

async function test22() {
  let s = await svg2png({
    input: readFileSync('test/assets/tmp2.svg'),
    encoding: 'buffer',
    format: 'png',
  })
  writeFileSync('test/assets/tmp25.png.buffer', s)
  writeFileSync("tmp25.png", s)
}
// test22()
// function fabricTest() {
//   var canvas = new fabric.Canvas('c')
//   canvas.add(new fabric.Circle({
//     left: 100,
//     top: 100,
//     radius: 50,
//     fill: 'red'
//   }))
//   let s = canvas.toDataURL({ format: 'png' })
//   var base64Data = s.substring(s.indexOf(';base64,') + ';base64,'.length)
//   writeFileSync("tmp.png", base64Data, 'base64')
//   s = canvas.toDataURL({ format: 'jpeg' })
//   var base64Data = s.substring(s.indexOf(';base64,') + ';base64,'.length)
//   writeFileSync("tmp.jpeg", base64Data, 'base64')
//   writeFileSync("tmp.svg", canvas.toSVG())
// }

// // fabricTest()

// async function fabricTest2() {
//   var canvas = new fabric.Canvas('c')
//   canvas.add(await fabricImageFromData(svg, 'svg'))
//   let s = ''
//   s = canvas.toDataURL({ format: 'png' })
//   var base64Data = s.substring(s.indexOf(';base64,') + ';base64,'.length)
//   writeFileSync("tmp2.png", base64Data, 'base64')
// }
// // fabricTest2()


// async function fabricTest22() {
//   let s = await svg2png({ input: svg.trim(), encoding: 'raw' })
//   writeFileSync("tmp22.png", BufferClass.isBuffer(s) ? s : BufferClass.from(s, 'binary'))
//   s = await svg2png({ input: svg.trim(), encoding: 'raw', format: 'jpeg' })
//   writeFileSync("tmp22.jpeg", BufferClass.isBuffer(s) ? s : BufferClass.from(s, 'binary'))
// }
// fabricTest22()



// async function fabricTest3() {

//   var canvas = new fabric.Canvas('c')
//   canvas.add(await fabricImageFromUrl('data:image/svg+xml;base64,' + Base64.encode(svg.trim()), {}))
//   let s = ''
//   s = canvas.toDataURL({ format: 'jpeg' })
//   // var base64Data = s.substring(s.indexOf(';base64,')+';base64,'.length)
//   const i = document.createElement('img')
//   i.src = s
//   document.body.append(i)
//   // writeFileSync("tmp2.jpeg", base64Data, 'base64')
// }
// // fabricTest3()  

// async function fabricTest4() {

//   var canvas = new fabric.Canvas('c')
//   canvas.add(await fabricImageFromUrl('data:image/png;base64,' + readFileSync('test/assets/tmp2.png').toString('base64'), {}))
//   let s = ''
//   s = canvas.toSVG()
//   // console.log(s);

//   // var svg = s.substring(s.indexOf(';base64,')+';base64,'.length)
//   writeFileSync("tmp3.svg", s)
// }
// fabricTest4()



// var potrace = require('potrace')

// async function potraceTest() {
//   potrace.trace('test/assets/tmp2.png', { threshold: 180 }, function(err: any, svg: any) {
//     if (err) throw err
//     writeFileSync('tmpPotrace.svg', svg)
//   })
//   potrace.posterize('test/assets/tmp2.png', { threshold: 180, steps: 4 }, function(err: any, svg: any) {
//     if (err) throw err
//     writeFileSync('tmpPotrace2.svg', svg)
//   })
// }
// // potraceTest()

// async function potraceTest2() {
//   writeFileSync('tmpPotrace21.svg', await potraceTrace('test/assets/tmp2.png', { threshold: 180 }))
//   writeFileSync('tmpPotrace22.svg', await potracePosterize('test/assets/tmp2.png', { threshold: 180, steps: 4 }))
//   writeFileSync('tmpPotrace23.svg', await potracePosterize('test/assets/tmp2.png', { threshold: 180, steps: 6 }))
// }
// potraceTest2()
