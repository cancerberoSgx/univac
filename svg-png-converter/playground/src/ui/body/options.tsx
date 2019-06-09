import { JSONSchema6 } from 'json-schema'
import React from "react"
import Form, { IChangeEvent, UiSchema} from "react-jsonschema-form"
import { PNG2SVGOptions, SVG2PNGOptions,getDataUrlFileName  } from 'svg-png-converter'
import { convert } from '../../app/dispatchers'
import { Example } from '../../examples/examples'
import { PNG2SVGOptionsSchema } from '../../options/PNG2SVGOptions.schema'
import { SVG2PNGOptionsSchema } from '../../options/SVG2PNGOptionsSchema'
import { AbstractComponent } from '../component'
import { changeText, getFileExtension } from 'misc-utils-of-mine-generic';
import { unwatchFile } from 'fs';

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
      <Form<SVG2PNGOptions | PNG2SVGOptions>
        schema={schema}
        formData={this.state.example.svg2png || this.state.example.png2svg as any}
        onChange={e => this.change(e)}
        onSubmit={e => this.submit(e)}
        uiSchema={uiSchema}
        noValidate={true}
        onError={e => console.log("errors", e)} />)
  }
  async change(e: IChangeEvent<SVG2PNGOptions | PNG2SVGOptions>) {
    if(e.formData.input && typeof e.formData.input  === 'string' && e.formData.input !== this.state.example.code) {
      const name = getDataUrlFileName(e.formData.input)
      if(name!==this.state.example.name){
        const ext = getFileExtension(name)
        const svg2png = ext==='svg'
        // create another model, convert and setState so possible the editor changes mode.
        const example = {
          name, 
          code: e.formData.input,
          description: 'new input',
          outputName: name+(svg2png ? '.png' : '.svg'),
          inputSize: e.formData.input.length,
          svg2png : svg2png ? e.formData : undefined,
          png2svg: svg2png ? undefined : e.formData
        }
        this.setState({example, output: await convert(example)})
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
    this.setState({ example})
    this.setState({ example,  output: await convert(example) })
  }
}

