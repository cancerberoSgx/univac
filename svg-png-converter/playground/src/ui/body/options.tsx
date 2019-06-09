import { JSONSchema6 } from 'json-schema'
import React from "react"
import Form, { IChangeEvent, UiSchema } from "react-jsonschema-form"
import { PNG2SVGOptions, SVG2PNGOptions } from '../../../../dist/src'
import { convert } from '../../app/dispatchers'
import { Example } from '../../examples/examples'
import { PNG2SVGOptionsSchema } from '../../options/PNG2SVGOptions.schema'
import { SVG2PNGOptionsSchema } from '../../options/SVG2PNGOptionsSchema'
import { AbstractComponent } from '../component'

const png2svgUISchema = {
  "color": {
    "ui:widget": "color"
  }
  ,
  "background": {
    "ui:widget": "color"
  }
}

export class Options extends AbstractComponent {
  render() {
    let schema: JSONSchema6 = this.state.example.svg2png ? SVG2PNGOptionsSchema : PNG2SVGOptionsSchema
    let uiSchema: UiSchema = this.state.example.svg2png ? {} : png2svgUISchema
    console.log(schema)

    return (
      <Form<SVG2PNGOptions | PNG2SVGOptions>
        schema={schema}
        formData={this.state.example.svg2png || this.state.example.png2svg as any}
        onChange={e => console.log("changed", e)}
        onSubmit={e => this.submit(e)}
        uiSchema={uiSchema}
        noValidate={true}
        onError={e => console.log("errors", e)} />)
  }

  protected async submit(e: IChangeEvent<SVG2PNGOptions | PNG2SVGOptions>) {
    let example: Example
    if (e.formData.input) {

    }
    // debugger
    // if(isSVT2PNGOptions(e.formData)){
    if (this.state.example.svg2png) {
      example = { ...this.state.example, code: (e.formData.input || this.state.example.code) as any, svg2png: { ...this.state.example.svg2png, ...e.formData } }
    }
    else {
      example = { ...this.state.example, code: (e.formData.input || this.state.example.code) as any, png2svg: { ...this.state.example.png2svg, ...e.formData } }
    }
    this.setState({ example, output: await convert(example) })
  }
}

// function isSVT2PNGOptions(o: any): o is SVG2PNGOptions {
//   return !!o && !!o.input && !o.format && !o.encoding && !!o.steps & !o.quality
// }
