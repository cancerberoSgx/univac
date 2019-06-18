import * as React from 'react'
import { AbstractComponent } from './component';

export class Header extends AbstractComponent { 

  render() {
    return (
      <nav className="light-blue lighten-1" role="navigation">
    <div className="nav-wrapper container"><a id="logo-container" onClick={e => this.setState({ page: 'home' })} href="#" className="brand-logo">Logo</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
      </ul>

      <ul id="nav-mobile" className="sidenav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
  </nav>
    )
  }
}
