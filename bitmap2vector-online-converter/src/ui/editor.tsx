import * as React from 'react'
import { AbstractComponent } from './component';

declare const M : any
export class Editor extends AbstractComponent {

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
  
      </div>
      <div className="col s4 pull-s8"><span className="flow-text">5-columns wide pulled to the left by 7-columns.</span>
      
      <ul className="tabs" ref={c=>M.Tabs.init(c, {})}>
        <li className="tab col s3"><a href="#test1">monochromatic</a></li>
        <li className="tab col s3"><a className="active" href="#test2">colors</a></li>
      </ul>
      <div id="test1" className="col s12">
      <h5>Monochromatic</h5>
      
      <p>Info: this method draws pretty well, but only support two colors</p>
      
      <label>Foreground <input type="color" onChange={e=>{}} color="#ffffff"></input> </label>
      <label>Background <input type="color" onChange={e=>{}}  color="#000000" ></input> </label>
      </div>


      
    <div id="test2" className="col s12">
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
}
