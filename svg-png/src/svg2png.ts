import {  Options } from './types'
import {fabric, } from 'fabric'
import { fabricImageFromData } from "./fabric";
import { Base64 } from 'js-base64';

export async function svg2png(options: Options) {
  var canvas = new fabric.Canvas('c');
  canvas.add(await fabricImageFromData(options.input, 'svg'));
  const s =  canvas.toDataURL({ format: options.format||'png'})
  if(  options.encoding==='dataURL') {
  return s
  }else  if(options.encoding==='base64'){
    return s.substring(s.indexOf(';base64,')+';base64,'.length)
  }
  else {
    return Base64.atob(s.substring(s.indexOf(';base64,')+';base64,'.length))
  }
}
