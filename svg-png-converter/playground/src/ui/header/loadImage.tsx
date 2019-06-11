import * as React from 'react'
import { Button, Input, Modal } from 'semantic-ui-react'
import { fetchImageDocument } from '../common/uiUtil'
import { AbstractComponent } from '../component'

const statics = ['wolverine.jpg', 'tololo1.jpeg', 'xmen.jpeg', 'star-trek-next-generation.jpg', 'lisa.png']
export class LoadImage extends AbstractComponent {
  render() {
    return (<Modal open={this.state.loadImageFromUrlModalOpen} onClose={e => this.setState({ loadImageFromUrlModalOpen: false })} trigger={<Button onClick={(e: any) => this.setState({ loadImageFromUrlModalOpen: true })} as='a' icon="load" floated="right">Load Image</Button>}>
      <Modal.Header>Load Image form Url</Modal.Header>
      <Modal.Content>
        <p>These are a couple of test images you can try:</p>
        <ul>
          {statics.map(s => `static/${s}`).map(s => <li>
            <a onClick={e => this.loadImage(s)} href="#">{s}</a>
          </li>)}
        </ul>
        <Input float="right" action='Load' label="Image Url to load"
          placeholder='https://i.imgur.com/FVKBIJ7.png' onChange={e => {
            this.loadImage(e.currentTarget.value)
          }} />
      </Modal.Content>
    </Modal>)
  }
  private async loadImage(url: string) {
    return await fetchImageDocument({
      url,
      convert: true,
      extraState: { loadImageFromUrlModalOpen: false }
    })
  }
}
