import * as React from 'react'
import { base64ToUrl, PNG2SVGOptions } from 'svg-png-converter'
import { createImage, prepareDownload } from '../app/convert'
import { AbstractComponent } from './component'

declare const M: any
export class Editor extends AbstractComponent {
  render() {
    return (

      <div className="container">
        <div className="row">

          <div className="col s3">

            <ul className="tabs" ref={c => M.Tabs.init(c, {
              onShow: (e: any) => {
                this.options({ tracer: e.id })
              }
            })
            }>

              <li className="tab col s3"><a className="small" href="#potrace">Monochromatic</a></li>

              <li className="tab col s3"><a className=" small active" href="#imagetracer">colors</a></li>

            </ul>


            <div id="potrace" className="col s12">
              <h5>Monochromatic</h5>

              <p>Info: this method draws optimally, but only support two colors. Powered by <a href="https://github.com/tooolbox/node-potrace">PoTrace</a>. </p>
              <form action="#">
                <label>Foreground <input type="color" onChange={e => { this.options({ color: e.currentTarget.value }) }} value={this.state.options.color}></input> </label>
                <label>Background <input type="color" onChange={e => { this.options({ background: e.currentTarget.value }) }} value={this.state.options.background} ></input> </label>

                <label>Steps  <input type="number" max={4} min={1} onChange={e => { this.options({ steps: e.currentTarget.valueAsNumber }) }}
                  value={this.state.options.steps + ''}></input></label>
                <label>Smallest  <input type="number" onChange={e => { this.options({ turdSize: e.currentTarget.valueAsNumber }) }} value={this.state.options.turdSize}></input></label>
              </form>
            </div>


            <div id="imagetracer" className="col s12">
              <h5>Colors</h5>

              <p>Info: this method will respect original colors but output size will be aprox double as potrace. Powered by <a href="https://github.com/jankovicsandras/imagetracerjs">imagetracerjs</a>.</p>

              <form action="#">
                <label title="Error threshold for straight lines">Straight lines <input type="number" min={1} onChange={e => { this.options({ ltres: e.currentTarget.valueAsNumber }) }} value={this.state.options.ltres}></input> </label>

                <label title="Error threshold for curve lines">Curve lines <input type="number" min={1} onChange={e => { this.options({ qtres: e.currentTarget.valueAsNumber }) }} value={this.state.options.qtres} ></input> </label>

                <label title="Edge node paths shorter than this will be discarded for noise reduction. ">Omit Small <input type="number" min={0} onChange={e => { this.options({ pathomit: e.currentTarget.valueAsNumber }) }} value={this.state.options.pathomit} ></input> </label>

                <br />
                <label>
                  <input type="checkbox" onChange={e => { this.options({ rightangleenhance: !!e.currentTarget.checked }) }} checked={!!this.state.options.rightangleenhance} />
                  <span title="Enhance right angles. ">Right angles  </span>
                </label>
                <br />

                {/* TODO : colorsampling?: 0 | 1 | 2; */}

                <label title="">Number of colors <input type="number" min={1} max={256} onChange={e => { this.options({ numberofcolors: e.currentTarget.valueAsNumber }) }} value={this.state.options.numberofcolors} ></input> </label>

                <label title="Color quantization will randomize a color if fewer pixels than (total pixels*mincolorratio) has it.">Color Round<input type="number" min={0} onChange={e => { this.options({ mincolorratio: e.currentTarget.valueAsNumber }) }} value={this.state.options.mincolorratio} ></input> </label>

                <label title="Color quantization will be repeated this many times.">Color repeat<input type="number" min={0} onChange={e => { this.options({ colorquantcycles: e.currentTarget.valueAsNumber }) }} value={this.state.options.colorquantcycles} ></input> </label>
 

                {/*          
      <label>
        <input type="checkbox"  onChange={e => { this.options({ layering: !e.currentTarget.checked ? 0 : 1}) }} checked={!!this.state.options.layering} />
        <span title="Enhance right angles. ">Parallel or serial Layers? </span>
      </label> */}


                <label title="SVG stroke-width.">Stroke width<input type="number" min={1} onChange={e => { this.options({ strokewidth: e.currentTarget.valueAsNumber }) }} value={this.state.options.strokewidth} ></input> </label>



                <br />
                <label>
                  <input type="checkbox" onChange={e => { this.options({ linefilter: !!e.currentTarget.checked }) }} checked={!!this.state.options.linefilter} />
                  <span title="Enable or disable line filter for noise reduction ">Filter Lines</span>
                </label>
                <br />


                <label title="Every coordinate will be multiplied with this, to scale the SVG. Default value: 1.">Zoom<input type="number" min={0} step={.1} onChange={e => { this.options({ scale: e.currentTarget.valueAsNumber }) }} value={this.state.options.scale} ></input> </label>


                <label title="rounding coordinates to a given decimal place. 1 means rounded to 1 decimal place like 7.3 ; 3 means rounded to 3 places, like 7.356. Default value: 1.">round Coordinates<input type="number" min={1} onChange={e => { this.options({ roundcoords: e.currentTarget.valueAsNumber }) }} value={this.state.options.roundcoords} ></input> </label>


                {/* numberofcolors */}

                {/* rightangleenhance */}

                {/* <label>Steps  <input type="number" max={4} min={1} onChange={e => { this.options({ steps: e.currentTarget.valueAsNumber }) }}  */}
                {/* value={this.state.options.steps + ''}></input></label> */}
                {/* <label>Smallest  <input type="number" onChange={e => { this.options({ turdSize: e.currentTarget.valueAsNumber }) }} value={this.state.options.turdSize}></input></label> */}
              </form>
            </div>
          </div>

          <div className="col s9">
            <div className="row">

              <div className="col s6">
                <a href="">{this.state.input.name} - {Math.round(this.state.input.size / 1000)}KB</a>
              <img src={base64ToUrl(this.state.input.content.toString('base64'), 'image/png')} />
              </div>


            <div className="col s6">

              <div>
                <a href="#" onClick={e => {
                  prepareDownload()             
                  // var blob = new Blob([this.state.output.content], { type: 'image/svg+xml;charset=utf-8' })
                  // FileSaver.saveAs(blob, this.state.output.name)
                }}>
                  {this.state.output.name}
                </a>

                <div>{Math.round(this.state.output.size / 1000)}KB</div>
                <div dangerouslySetInnerHTML={{ __html: this.state.output.content.toString() }}></div>
              </div>

                </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
  async   options(s: Partial<PNG2SVGOptions>) {
    Object.assign(this.state.options, s)
    await createImage(this.state.input)
  }
}
