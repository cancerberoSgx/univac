import * as React from 'react'

interface S {
  onClient?: boolean
}

interface P {
  placeholder: JSX.Element
  html: string
  afterRender(): void
}

export class GraphViewCanvas extends React.Component<P, S> {

  shouldComponentUpdate() {
    return !this.state.onClient
  }

  componentDidUpdate() {
    this.props.afterRender()
  }

  componentDidMount() {
    this.setState({
      onClient: true
    })
  }

  state = {
    onClient: false
  }

  render() {
    if (!this.state.onClient) {
      return this.props.placeholder
    }
    return <div dangerouslySetInnerHTML={{ __html: this.props.html }} />
  }

}

