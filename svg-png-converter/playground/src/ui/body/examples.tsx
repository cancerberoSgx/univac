import { asArray, notUndefined } from 'misc-utils-of-mine-generic'
import * as React from 'react'
import { Grid, Segment, Select } from 'semantic-ui-react'
import { isArray } from 'util'
import { AbstractComponent } from '../component'
import { examples } from '../../app/examples';
import { convert } from '../../app/dispatchers';

export class Examples extends AbstractComponent {
  render() {
    return (
      <Segment basic className="appBody">
      <Select search 
      selectedLabel={this.state.example.name} value={this.state.example.name} 
      
      onChange={async (e, props)=>{
        const example = examples.find(e=>e.name===props.value)
        if(example){
          const output = await convert(example)
            this.setState({example, output })
        }
      }}
      options={examples.map(e=>({
        // label: e.name, 
        value: e.name,
         text: e.name
        // active: e.name===this.state.example.name, selected: e.name===this.state.example.name})
        }))}
      >
  {/* <Select.Item>asdsd</Select.Item>
      <Select.Item selected={true} value={'flskdf'}></Select.Item> */}
      </Select>


       <ul>{this.state.examples.map(e=><li>e</li>)}</ul>
       <textarea value={this.state.example.code}></textarea>
      </Segment>)
  }
}
