import { JSONSchema6 } from 'json-schema'
import React from "react"
import Form, { UiSchema } from "react-jsonschema-form"
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

    return (
      <Form schema={schema}
        onChange={e => console.log("changed", e)}
        onSubmit={e => console.log("submitted", e)}
        uiSchema={uiSchema}
        onError={e => console.log("errors", e)} />)
  }
}

