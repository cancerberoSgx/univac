import * as React from 'react'
import { AbstractComponent } from './component'

export class Header extends AbstractComponent {

  render() {
    return (
      <nav className="brown darken-3" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo">
            <img src="static/svg-png-converter.png"></img>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a onClick={e => this.setState({ page: 'home' })} href="#"  >Home</a>
            </li>
            <li>
              <a onClick={e => this.setState({ page: 'loadImage' })} href="#"  >Load Image</a>
            </li>
            <li>
              <a onClick={e => this.setState({ page: 'editor' })} href="#"  >Edit</a>
            </li>
            <li>
              <a onClick={e => this.setState({ page: 'download' })} href="#" >Download</a>
            </li>


            <li><a href="https://www.npmjs.com/package/svg-png-converter">
              <img src="https://img.shields.io/npm/v/svg-png-converter.svg?label=Powered%20by%20svg-png-converter"></img></a></li>
          </ul>
          <ul id="nav-mobile" className="sidenav">
            <li><a href="https://www.npmjs.com/package/svg-png-converter">Powered by<img src="static/svg-png-converter.png"></img></a></li>
          </ul>
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    )
  }
}
