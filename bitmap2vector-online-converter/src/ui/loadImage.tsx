import * as React from 'react'
import { AbstractComponent } from './component';
import { blobToBuffer } from 'svg-png-converter';

export class LoadImage extends AbstractComponent {

  render() {
    return (

      <>
        <div className="container">



          <br />
          <h1 className="header center orange-text">Load an image</h1>
          <div className="row center">
            <h5 className="header col s12 light">from your computer, or internet</h5>
            {this.state.input.size!==0 ? 
                 <div className="row center"> 
                 <a href="#" onClick={e => this.setState({ page: 'loadImage' })} className="btn-large waves-effect waves-light orange">Convert to vector!</a> 
               </div> : ''}
          </div>
     
          <br />
        </div>

        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m4">
                <div className="icon-block">
                  {/* <img src="static/to-vector-0.png" /> */}
                  <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                  <h5 className="center">Pick a file</h5>
                  {/* <p>From your computer or internet, most common formats accepted PNG, JPEG, TIFF, BMP, etc.</p> */}
                  {/* <div className="light">Drag and drop HERE</div> */}
                  <div className="light">

                  <form action="#">
    <div className="file-field input-field">
      <div className="btn">
        <span>File</span>
        {/* <input type="file"> */}
        <input type="file" onChange={async e=>{
                     if(e.currentTarget.files && e.currentTarget.files.length){
                      //  debugger
                       const size = e.currentTarget.files[0].size
                       const name =  e.currentTarget.files[0].name
                       const content = await                      blobToBuffer(e.currentTarget.files[0])
                       //TODO verify correct format
                       this.setState({input:{name, size, content } , page: 'editor'})
                     }
                     
                   }}></input>

      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
  </form>


                   {/* <input type="file" onChange={async e=>{
                     if(e.currentTarget.files && e.currentTarget.files.length){
                      //  debugger
                       const size = e.currentTarget.files[0].size
                       const name =  e.currentTarget.files[0].name
                       const content = await                      blobToBuffer(e.currentTarget.files[0])
                       //TODO verify correct format
                       this.setState({input:{name, size, content } , page: 'editor'})
                     }
                     
                   }}></input> */}
                   </div>
                  {/* <div className="light">From URL: <input type="text"></input></div> */}
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                  {/* <img src="static/to-vector-1.png" /> */}
                  <h5 className="center">Drag {'&'} Drop file</h5>
                  <div className="drop-file">Into this box</div>
                  {/* <p className="light">There are several possible configurations. Do you want a realistic output, or perhaps want to get artistic?</p> */}
                </div>
              </div>

              <div className="col s12 m4">
                <div className="icon-block">
                  <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                  {/* <img src="static/to-vector-2.png" /> */}
                  <h5 className="center">From Internet</h5>
                  <div className="light">Image Url
                  <input type="text"></input>
                   <button>PASTE</button></div>
                  <p>(TODO: take into a count that many sites won't allow to use their images directly, you might have to download it)</p>
                  {/* <p className="light">Download the result as a vector graphic in SVG, PDF, EPS formats. 100% Free and locally in your computer, without any third party server!</p> */}
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
