import * as React from 'react'
import { AbstractComponent } from '../component'
export class About extends AbstractComponent {

  render() {
    return (
      <>
        <h3>About</h3>
        <p>Welcome to SVG-PNG Converter Playground, a place to experiment with [SVG-PNG converter](https://github.com/cancerberoSgx/univac/tree/master/svg-png-converter) converting SVG vector images to PNG/JPEG bitmaps and viceversa, converting PNG bitmap images to SVG vector images. </p>

        <p>At the top right you have a collection of examples to try.</p>

        <p>Alternatively you can load images from you local system by using "Choose file" from the right form. </p>

        <p>Also you can load images from URLs (just make sure image's servers allows it. This website has tons of bitmap images and allows to load them: https://imgur.com</p>

        <p>Although SVG-PNG converter converts both to and form SVG in this playground the most interesting transformations are from bitmap to SVG so most of the examples focus on that.  </p>

        <p>Hope you enjoy</p>
      </>
    )
  }
}
