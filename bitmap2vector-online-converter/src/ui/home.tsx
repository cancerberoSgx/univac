import * as React from 'react'
import { AbstractComponent } from './component';

export class Home extends AbstractComponent {

  render() {
    return (

      <>
        <div className="container">
          <br />
          <h1 className="header center orange-text">Bitmap to Vector</h1>
          <div className="row center">
            <h5 className="header col s12 light">A modern responsive front-end framework based on Material Design</h5>
          </div>
          <div className="row center">
            <a href="#" onClick={e => this.setState({ page: 'loadImage' })} className="btn-large waves-effect waves-light orange">Get Started</a>
          </div>
          <br />
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  <img src="static/to-vector-0.png" />
                  {/* <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2> */}
                  <h5 className="center">Load an Image</h5>
                  <p>From your computer or internet, most common formats accepted PNG, JPEG, TIFF, BMP, etc.</p>
                  {/* <div className="light">Drag and drop HERE</div> */}
                  {/* <div className="light">From hard drive <input type="file"></input></div> */}
                  {/* <div className="light">From URL: <input type="text"></input></div> */}
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  {/* <h2 className="center light-blue-text"><i className="material-icons">group</i></h2> */}
                  <img src="static/to-vector-1.png" />
                  <h5 className="center">Review, edit and experiment</h5>
                  <p className="light">There are several possible configurations. Do you want a realistic output, or perhaps want to get artistic?</p>
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  {/* <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2> */}
                  <img src="static/to-vector-2.png" />
                  <h5 className="center">Download vector image</h5>

                  <p className="light">Download the result as a vector graphic in SVG, PDF, EPS formats. 100% Free and locally in your computer, without any third party server!</p>
                </div>
              </div>
            </div>

          </div>
          <br />
        </div>
      </>
    )
  }
}
