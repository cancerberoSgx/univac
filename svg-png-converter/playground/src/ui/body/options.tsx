import { JSONSchema6 } from 'json-schema'
import React from "react"
import Form, { IChangeEvent, UiSchema } from "react-jsonschema-form"
import { Segment } from 'semantic-ui-react'
import { getDataUrlFileName, PNG2SVGOptions, SVG2PNGOptions } from 'svg-png-converter'
import { convert, createExample, getCode } from '../../app/convert'
import { Example } from '../../examples/examples'
import { PNG2SVGOptionsSchema } from '../../options/PNG2SVGOptions.schema'
import { SVG2PNGOptionsSchema } from '../../options/SVG2PNGOptionsSchema'
import { AbstractComponent } from '../component'
import fileType = require('file-type')

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
    let uiSchema: UiSchema = png2svgUISchema//this.state.example.svg2png ? {} : png2svgUISchema
    return (
      <Segment className="optionsContainer">
        <Form<SVG2PNGOptions | PNG2SVGOptions>
          schema={schema}
          formData={this.state.example.svg2png || this.state.example.png2svg as any}
          onChange={e => this.change(e)}
          onSubmit={e => this.submit(e)}
          uiSchema={uiSchema}
          noValidate={true}
          onError={e => console.log("errors", e)} />
      </Segment>)
  }
  async change(e: IChangeEvent<SVG2PNGOptions | PNG2SVGOptions>) {
    if (e.edit && e.formData.input && typeof e.formData.input === 'string' && e.formData.input !== getCode(this.state.example)) {
      const name = getDataUrlFileName(e.formData.input)
      if (!this.state.examples.find(e => e.name === name)) {
        await createExample({
          dataUrl: e.formData.input,
          extra: e.formData,
          convert: true,
          name
        })
      }
    }
  }

  protected async submit(e: IChangeEvent<SVG2PNGOptions | PNG2SVGOptions>) {
    let example: Example
    if (this.state.example.svg2png) {
      example = {
        ...this.state.example,
        svg2png: { ...this.state.example.svg2png, ...e.formData, input: e.formData.input || getCode(this.state.example) as any }
      }
    }
    else {
      example = {
        ...this.state.example,
        png2svg: { ...this.state.example.png2svg, ...e.formData, input: e.formData.input || getCode(this.state.example) as any }
      }
    }
    this.setState({ example, output: await convert(example) })
  }
}

