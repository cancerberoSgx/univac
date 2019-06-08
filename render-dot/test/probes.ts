import { writeFileSync, readFile } from 'fs';

// var  jsdom = require("jsdom").jsdom;

// jsdom().documentElement
// // var body = d3.select(jsdom().documentElement).select("body");

// var width = 1000,
//     height = 500;

// var svg = body.append("svg");

// var svg = body.append("svg")
//     .attr("version", "1.1")
//     .attr("xmlns", d3.namespaces.svg)
//     .attr("xmlns:xlink", d3.namespaces.xlink)
//     .attr("width", width)
//     .attr("height", height)
//     .attr("viewBox", "0 0 " + width + " " + height);

// process.stdout.write(body.node().innerHTML);



import {fabric, } from 'fabric'

function fabricTest() {
 var canvas = new fabric.Canvas('c');
 canvas.add(new fabric.Circle({
  left: 100,
  top: 100,
  radius: 50,
  fill: 'red'
}));
// console.log(JSON.stringify(canvas.toDataURL('png')))

let s = canvas.toDataURL({format: 'png'})
var base64Data = s.substring(s.indexOf(';base64,')+';base64,'.length)
writeFileSync("tmp.png", base64Data, 'base64')

s = canvas.toDataURL({format: 'jpeg'})
var base64Data = s.substring(s.indexOf(';base64,')+';base64,'.length)
writeFileSync("tmp.jpeg", base64Data, 'base64')

writeFileSync("tmp.svg", canvas.toSVG())
}

// fabricTest()


import { promisify } from 'util';
import { Image, IImageOptions } from 'fabric/fabric-impl';
export const fabricImageToUrl = promisify (
  function (url: string,  imgOptions: IImageOptions, callback: (err: NodeJS.ErrnoException | null, data: Image) => void): void {
    fabric.Image.fromURL(url, ( image)=>{
      callback(null, image)
    }, imgOptions)
   })


import { decode, encode } from "universal-base64";
// import { prom } from "misc-utils-of-mine-generic";
async function fabricTest2() {
const svg = `<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="300" height="150" viewBox="0 0 300 150" xml:space="preserve">
<desc>Created with Fabric.js 3.1.0</desc>
<defs>
</defs>
<g transform="matrix(1 0 0 1 150.5 150.5)"  >
<circle style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,0,0); fill-rule: nonzero; opacity: 1;"  cx="0" cy="0" r="50" />
</g>
</svg>`

  var canvas = new fabric.Canvas('c')
  canvas.add( await fabricImageToUrl('data:image/svg;base64,'+encode(svg), {}))
  let s = ''
s = canvas.toDataURL({format: 'jpeg'})
var base64Data = s.substring(s.indexOf(';base64,')+';base64,'.length)
writeFileSync("tmp2.jpeg", base64Data, 'base64')
}
fabricTest2()
