import React, { Component } from 'react'

export default class ModuleLoader extends Component {
  state = {
    Cmp: null
  }
  loadComponent = (loader) => {
    if (typeof loader === 'function') {
      loader()
      .then(Cmp => {
        this.setState({Cmp: Cmp.default})
      })
    } else {
      this.setState({Cmp: loader})
    }
  }
  componentWillMount () {
    this.loadComponent(this.props.children)
  }
  
  render() {
    const { Cmp } = this.state
    const { children, ...props} = this.props
    if (!Cmp) return <div className='loading full-page' />
    return (
      <Cmp {...props} />
    )
  }
}
