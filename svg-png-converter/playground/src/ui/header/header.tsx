import * as React from 'react'
import { Button, Header as H, Icon, Input, Modal, ModalProps, Segment } from 'semantic-ui-react'
import { Examples } from '../body/examples'
import { fetchImageDocument } from '../common/uiUtil'
import { AbstractComponent } from '../component'
import { About } from './about'

const statics = ['wolverine.jpg', 'tololo1.jpeg', 'xmen.jpeg', 'star-trek-next-generation.jpg']
export class Header extends AbstractComponent {
  loadImageModal: React.Component<ModalProps, any, any> | null = null;
  render() {
    return (
      <Segment className="mainHeader" fluid >
        <H as="h1" className="header-main">SVG <Icon name="arrows alternate horizontal" /> PNG Converter </H>
        <Examples />

        <Modal ref={current => this.loadImageModal = current} trigger={<Button as='a' icon="help" floated="right">About</Button>}>
          <Modal.Header>About</Modal.Header>
          <Modal.Content>
            <About />
          </Modal.Content>
        </Modal>
        <Modal
          open={this.state.loadImageFromUrlModalOpen}
          onClose={e => this.setState({ loadImageFromUrlModalOpen: false })}
          trigger={<Button
            onClick={(e: any) => this.setState({ loadImageFromUrlModalOpen: true })}
            as='a' icon="load" floated="right">Load Image</Button>}
        >
          <Modal.Header>Load Image form Url</Modal.Header>
          <Modal.Content>
            <p>These are a couple of test images you can try:</p>
            <ul>
              {statics.map(s => `static/${s}`).map(s => <li>
                <a onClick={e => this.loadImage(s)} href="#">{s}</a>
              </li>)}

            </ul>

            {/* <Header>Load Image form Url</Header> */}
            <Input
              float="right" action='Load'
              // fluid focus 
              label="Image Url to load"
              //  as="input"  
              placeholder='https://i.imgur.com/FVKBIJ7.png'
              onChange={e => {

                this.loadImage(e.currentTarget.value)

              }} />
          </Modal.Content>
        </Modal>
      </Segment>
    )
  }

  private async loadImage(url: string) {
    return await fetchImageDocument({
      url,
      convert: true,
      extraState: { loadImageFromUrlModalOpen: false }
    })
  }
}

