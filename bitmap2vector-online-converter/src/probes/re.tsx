import * as React from 'react'
import { AbstractComponent } from '../ui/component';
const { Button, Card, Row, Col, Collapsible, CollapsibleItem } = require( 'react-materialize')

export class Ccc extends AbstractComponent {

  render() {
    return (

      <Collapsible popout>
      <CollapsibleItem header="Better safe than sorry. That's my motto." icon="filter_drama">
      Better safe than sorry. That's my motto.
      </CollapsibleItem>
      <CollapsibleItem header="Yeah, you do seem to have a little 'shit creek' ac…" icon="place">
      Yeah, you do seem to have a little 'shit creek' action going.
      </CollapsibleItem>
      <CollapsibleItem header="You know, FYI, you can buy a paddle. Did you not p…" icon="whatshot">
      You know, FYI, you can buy a paddle. Did you not plan for this contingency?
      </CollapsibleItem>
      </Collapsible>
    )
  }
}
