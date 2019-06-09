import { JSONSchema6 } from 'json-schema'
import React from "react"
import Form, { UiSchema } from "react-jsonschema-form"
import { PNG2SVGOptionsSchema } from '../../options/PNG2SVGOptions.schema'
import { SVG2PNGOptionsSchema } from '../../options/SVG2PNGOptionsSchema'
import { AbstractComponent } from '../component'

const png2svgUISchema = {
  // "string": {
  //   "textarea": {
  //     "ui:widget": "textarea",
  //     "ui:options": {
  //       "rows": 5
  //     }
  //   },
  "color": {
    "ui:widget": "color"
  }
  ,
  "background": {
    "ui:widget": "color"
  }
}
export class FormTest extends AbstractComponent {
  render() {
    let schema: JSONSchema6 = this.state.example.svg2png ? SVG2PNGOptionsSchema : PNG2SVGOptionsSchema
    let uiSchema: UiSchema = this.state.example.svg2png ? {} : png2svgUISchema

    return (
      <Form schema={schema}
        onChange={e => console.log("changed")}
        onSubmit={e => console.log("submitted")}
        uiSchema={uiSchema}
        onError={e => console.log("errors")} />)
  }
}

