import * as React from 'react'
import { AbstractComponent } from './component';
import { PotraceTraceOptions, SVG2PNGOptions, PNG2SVGOptions } from 'svg-png-converter/dist/src/types';
import { convert, createImage } from '../app/convert';
import { base64ToUrl } from 'svg-png-converter';

declare const M: any
export class Editor extends AbstractComponent {
  render() {
    return (

      <div className="container">


        <div className="row">
          <div className="col s8 push-s4">
            <div className="row">
              <div className="col s6">
              <div>{Math.round(this.state.input.size/1000)}KB</div>

                <img src={base64ToUrl(this.state.input.content.toString('base64'), 'image/png')} />
              </div>

              <div className="col s6">
              <div>{Math.round(this.state.output.size/1000)}KB</div>
                <div dangerouslySetInnerHTML={{ __html: this.state.output.content.toString() }}></div>
              </div>

            </div>

          </div>
          <div className="col s4 pull-s8">

            <ul className="tabs" ref={c => M.Tabs.init(c, {
              onShow: (e: any) => {
                this.options({ tracer: e.id })
              }
            })
            }>

              <li className="tab col s3"><a href="#potrace">monochromatic</a></li>
              <li className="tab col s3"><a className="active" href="#imagetracer">colors</a></li>
            </ul>


            <div id="potrace" className="col s12">
              <h5>Monochromatic</h5>

              <p>Info: this method draws optimally, but only support two colors. Powered by <a href="https://github.com/tooolbox/node-potrace">PoTrace</a>. </p>
              <form action="#">
                <label>Foreground <input type="color" onChange={e => { this.options({ color: e.currentTarget.value }) }} value={this.state.options.color}></input> </label>
                <label>Background <input type="color" onChange={e => { this.options({ background: e.currentTarget.value }) }} value={this.state.options.background} ></input> </label>

                <label>Steps  <input type="number" max={4} min={1} onChange={e => { this.options({ steps: e.currentTarget.valueAsNumber }) }} value={this.state.options.steps + ''}></input></label>
                <label>Smallest  <input type="number" onChange={e => { this.options({ turdSize: e.currentTarget.valueAsNumber }) }} value={this.state.options.turdSize}></input></label>
              </form>
            </div>

            <div id="imagetracer" className="col s12">
              <p>Info: this method will respect original colors but output size will be aprox double as potrace. Powered by <a href="https://github.com/jankovicsandras/imagetracerjs">imagetracerjs</a>.</p>

            </div>
          </div>
        </div>
      </div>
    )
  }
  async   options(s: Partial<PNG2SVGOptions>) {
    Object.assign(this.state.options, s)
    const out = await createImage(this.state.input)
  }
}
