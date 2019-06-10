import * as React from 'react'
import { Button, Modal, Icon, Header as H, Segment, Input, ModalProps } from 'semantic-ui-react'
import { Examples } from '../body/examples'
import { AbstractComponent } from '../component'
import { About } from './about'
import { fetchAsBuffer } from '../common/uiUtil';
import { getFileExtension, getFileNameFromUrl } from 'misc-utils-of-mine-generic';
import { base64ToUrl } from '../../../../dist/src';
import fileType from 'file-type'
import { createExample } from '../../app/convert';

export class Header extends AbstractComponent {
  loadImageModal:  React.Component<ModalProps, any, any> |null = null;
  render() {
    return (
      <Segment className="mainHeader" fluid >
        <H as="h1" className="header-main">SVG <Icon name="arrows alternate horizontal" /> PNG Converter </H>
        <Examples />

        <Modal  ref={current=> this.loadImageModal = current }trigger={<Button as='a' icon="help" floated="right">About</Button>}>
          <Modal.Header>About</Modal.Header>
          <Modal.Content>
            <About />
          </Modal.Content>
        </Modal>
        <Modal
        open={this.state.loadImageFromUrlModalOpen} 
        onClose={e=>this.setState({loadImageFromUrlModalOpen: false})}

        trigger={<Button
         
          onClick={(e: any)=>this.setState({loadImageFromUrlModalOpen: true})}
          
        as='a' icon="load" floated="right">Load Image</Button>}
        >
          <Modal.Header>Load Image form Url</Modal.Header>
          <Modal.Content>
            {/* <Header>Load Image form Url</Header> */}
            <Input float="right" action='Image Address' input='https://i.imgur.com/FVKBIJ7.png' onChange={async e => {
              const url = e.currentTarget.value
              // if(!fileNme){

              //   // throw new Error('Sorry, a file Name cannot be extracted from t')
              // }
              // const u = new URL(val)
              const buffer = await fetchAsBuffer(url)

              const fileNme = getFileNameFromUrl(url)
              let t = fileType(buffer)
              const mimeType = t && t.mime || fileNme && getFileExtension(fileNme) && getFileNameFromUrl(getFileExtension(fileNme))

              const dataUrl = base64ToUrl(buffer.toString('base64'), mimeType, fileNme)
              
              await createExample({
                dataUrl, convert: false, extraState: {loadImageFromUrlModalOpen: false}
              })

              // self.loadImageModal && self.loadImageModal.sprops.open = true
              
              // .setState({}).forceUpdate()
              // debugger

              // const result = await convertImage({
              //   dataUrl, fileName, mimeType
              // })
              //  const ext = getFileExtension( u.pathname.toLowerCase())
              // const dataUrl = base64ToUrl( buffer.toString('base64'))
              //  const svg2png = ext === 'svg'
              //  const example = {
              //    name,
              //    code: e.formData.input,
              //    description: 'new input',
              //    outputName: name + (svg2png ? '.png' : '.svg'),
              //    inputSize: e.formData.input.length,
              //    svg2png: svg2png ? e.formData : undefined,
              //    png2svg: svg2png ? undefined : e.formData
              //  }
              debugger
            }} />
          </Modal.Content>
        </Modal>


      </Segment>

    )
  }
}

