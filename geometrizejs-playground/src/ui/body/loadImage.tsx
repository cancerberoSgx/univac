import { Bitmap, ImageRunner, ShapeTypes, SvgExporter } from 'geometrizer-js'
import Jimp from 'jimp'
import { enumNoValueKeys, sleep } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Button, Segment } from 'semantic-ui-react'
import { blobToBuffer, BufferClass } from '../../app/buffer'
import { getStore } from '../../app/store'
import { AbstractComponent } from '../component'

export class Options extends AbstractComponent {
  svg: string = ''

  render() {
    return (
      <Segment basic className="loadImage">
        {/* <Header as="h3">Load Image</Header> */}
        <label>Choose file
        <input type="file" onChange={async e => {
            if (e.currentTarget.files && e.currentTarget.files.length) {
              //  debugger
              const size = e.currentTarget.files[0].size
              const name = e.currentTarget.files[0].name
              const content = await blobToBuffer(e.currentTarget.files[0])
              //TODO verify correct format
              this.setState({ input: { name, size, content } })
            }
          }}></input>
        </label><br />
        <label>Iterations<input type="number" min="1" value={this.state.iterations} onChange={e => {
          this.setState({ iterations: e.currentTarget.valueAsNumber })
        }} /></label><br />
        <label>candidateShapesPerStep<input type="number" min="1" value={this.state.candidateShapesPerStep} onChange={e => {
          this.setState({ candidateShapesPerStep: e.currentTarget.valueAsNumber })
        }} /></label><br />
        <label>Alpha<input type="number" min="1" value={this.state.alpha} onChange={e => {
          this.setState({ alpha: e.currentTarget.valueAsNumber })
        }} /></label><br />
        <label>shapeMutationsPerStep<input type="number" min="1" value={this.state.shapeMutationsPerStep} onChange={e => {
          this.setState({ shapeMutationsPerStep: e.currentTarget.valueAsNumber })
        }} /></label><br />
        <label>stepInterval<input type="number" min="1" value={this.state.stepInterval} onChange={e => {
          this.setState({ stepInterval: e.currentTarget.valueAsNumber })
        }} /></label><br />
        <label>Shapes: <br /><select multiple onChange={e => {
          this.setState({ shapeTypes: Array.from(e.currentTarget.selectedOptions).map(o => parseInt(o.value)) })
        }}>
          {enumNoValueKeys(ShapeTypes).map((shape, i) => <option value={i} selected={this.state.shapeTypes.includes(i)}>{shape}</option>)}
        </select></label><br />
        <Button onClick={async e => {
          this.setState({ working: true })
          this.svg = await geometrize(s => {
            this.svg = this.state.svgContainer!.innerHTML = s
          })
          this.state.svgContainer!.innerHTML = this.svg
          this.setState({
            output: {
              name: 'output.svg',
              content: BufferClass.from(this.svg),
              size: this.svg.length
            },
            working: false
          })
        }}>Geometrize!</Button><br />

        {this.state.working ? <Button onClick={e => {
          this.setState({
            output: {
              name: 'output.svg',
              content: BufferClass.from(this.svg),
              size: this.svg.length
            },
            working: false
          })
        }}>Stop</Button> : ''}
        <br />
        <div>Status: {this.state.working ? 'Working' : 'Idle'}</div>
      </Segment>)
  }
}

async function geometrize(onStep?: (svg: string) => void) {
  const state = getStore().getState()
  const image = await Jimp.read(state.input.content)
  const bitmap = Bitmap.createFromRawBytes(image.bitmap.width, image.bitmap.height, image.bitmap.data)
  const runner = new ImageRunner(bitmap)
  const svgData = []
  for (let i = 0;i < state.iterations && getStore().getState().working;i++) {
    svgData.push(SvgExporter.exportShapes(runner.step(state)))
    if (state.stepTimeout && onStep) {
      const svg = SvgExporter.getSvgPrelude() + SvgExporter.getSvgNodeOpen(bitmap.width, bitmap.height) + svgData.join('\n') + SvgExporter.getSvgNodeClose()
      onStep(svg)
    }
    await sleep(state.stepTimeout || 1)
  }
  const svg = SvgExporter.getSvgPrelude() + SvgExporter.getSvgNodeOpen(bitmap.width, bitmap.height) + svgData.join('\n') + SvgExporter.getSvgNodeClose()
  return svg
}
