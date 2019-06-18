import * as React from 'react'
import { AbstractComponent } from './component';
import { PotraceTraceOptions, SVG2PNGOptions, PNG2SVGOptions } from 'svg-png-converter/dist/src/types';
import { convert, createImage } from '../app/convert';
import { base64ToUrl } from 'svg-png-converter';

declare const M : any
export class Editor extends AbstractComponent {
  // outputContainer: HTMLDivElement | null = null;

  // componentWillMount(){

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelector('.sidenav')!
  //   var instance = M.Sidenav.init(elems, {draggable: true, isOpen: true});
  //   instance.isOpen = true
  //   instance.open()
  // });
  // }
  // componentDidUpdate(){
  //   // debugger
  //   var elem = document.querySelector('.sidenav')
  //    M.Sidenav.init(elem, {draggable: true, isOpen: true});
  //    var instance = M.Sidenav.getInstance(elem)
  //   instance.isOpen = true
  //   instance.open()
  // }
  render() {
    return (

        <div className="container">


<div className="row">
      <div className="col s8 push-s4"><span className="flow-text">This div is 8-columns wide on pushed to the right by 4-columns.</span>
  <img src={base64ToUrl(this.state.input.content.toString('base64'), 'image/png')} />
  <div dangerouslySetInnerHTML={{__html: this.state.output.content.toString()}}></div>
      </div>
      <div className="col s4 pull-s8"><span className="flow-text">5-columns wide pulled to the left by 7-columns.</span>
      
      {/* <ul className="tabs" ref={c=>M.Tabs.init(c, {onShow: (e:any)=>{
        this.setState({options: {...this.state.options, tracer: e.id}})}})
        // Object.assign(this.state, {editorTracer: e.id})}, swipeable: true})
      }> */}

<ul className="tabs" ref={c=>M.Tabs.init(c, {onShow: (e:any)=>{
        this.options({ tracer: e.id})}})
      }>

        <li className="tab col s3"><a href="#potrace">monochromatic</a></li>
        <li className="tab col s3"><a className="active" href="#imagetracer">colors</a></li>
      </ul>
      <div id="potrace" className="col s12">
      <h5>Monochromatic</h5>
      
      <p>Info: this method draws pretty well, but only support two colors</p>
      <form action="#">
      <label>Foreground <input type="color" onChange={e=>{this.options({color: e.currentTarget.value})}} value={this.state.options.color}></input> </label>
      <label>Background <input type="color" onChange={e=>{this.options({background: e.currentTarget.value})}}  value={this.state.options.background} ></input> </label>
     
      <label>Steps  <input type="number" max={4} min={1} onChange={e=>{this.options({steps: e.currentTarget.valueAsNumber})}} value={this.state.options.steps+''}></input></label>
      <label>Smallest  <input type="number" onChange={e=>{this.options({turdSize: e.currentTarget.valueAsNumber})}} value={this.state.options.turdSize}></input></label>
      </form>
      </div>


      
    <div id="imagetracer" className="col s12">
      <p>Info: this method doesn't draw very pretty but it will respect original colors</p>
      
      </div>
    </div>


    </div>

    
        {/* <ul id="slide-out" className="sidenav">
        <li>klasdjflaksdj flkasj kldf alks dfjlas dfl </li>
    <li>
      <div className="user-view">
      <div className="background">
        <img src="images/office.jpg"/>
      </div>
      <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
      <a href="#name"><span className="white-text name">John Doe</span></a>
      <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
    </div>
    </li>
    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a> */}
        </div>
    )
  }
  async   options(s: Partial<PNG2SVGOptions>)  {
    Object.assign(this.state.options, s)
      const out = await createImage(this.state.input)
    }
}
