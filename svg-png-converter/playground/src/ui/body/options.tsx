import { JSONSchema6 } from 'json-schema'
import { getFileExtension } from 'misc-utils-of-mine-generic'
import React from "react"
import Form, { IChangeEvent, UiSchema } from "react-jsonschema-form"
import { getDataUrlFileName, PNG2SVGOptions, SVG2PNGOptions } from 'svg-png-converter'
import { convert, createExample } from '../../app/convert'
import { Example } from '../../examples/examples'
import { PNG2SVGOptionsSchema } from '../../options/PNG2SVGOptions.schema'
import { SVG2PNGOptionsSchema } from '../../options/SVG2PNGOptionsSchema'
import { AbstractComponent } from '../component'
import { Segment } from 'semantic-ui-react';
import fileType = require('file-type');

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
      <Segment className="optionsContainer"><Form<SVG2PNGOptions | PNG2SVGOptions>
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
    // debugger
    console.log('CHANGED', this.state.example, e);
    
    if (e.edit && e.formData.input && typeof e.formData.input === 'string' && e.formData.input !== this.state.example.code) {
      const name = getDataUrlFileName(e.formData.input)
      if (!this.state.examples.find(e=>e.name===name)){//} !== this.state.example.name) {
        // create another model, convert and setState so possible the editor changes mode.
          // const ext = getFileExtension(name)
          // const fileNme = getFileNameFromUrl(url)
          // let t = fileType(buffer)
          // const mimeType = name && getFileExtension(fileNme) && getFileNameFromUrl(getFileExtension(fileNme))

          await createExample({
          dataUrl: e.formData.input, extra: e.formData, convert: true
        })        
      }
    }
  }

  protected async submit(e: IChangeEvent<SVG2PNGOptions | PNG2SVGOptions>) {
    let example: Example
    if (this.state.example.svg2png) {
      example = { ...this.state.example, code: (e.formData.input || this.state.example.code) as any, svg2png: { ...this.state.example.svg2png, ...e.formData } }
    }
    else {
      example = { ...this.state.example, code: (e.formData.input || this.state.example.code) as any, png2svg: { ...this.state.example.png2svg, ...e.formData } }
    }
    this.setState({ example })
    this.setState({ example, output: await convert(example) })
  }
}

