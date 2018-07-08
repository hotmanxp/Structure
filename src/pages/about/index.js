import React, { Component } from 'react'

import { withRouter } from 'HOC'

class About extends Component {
  render() {
    const { nav } = this.props
    return (
      <div>
        <div>this is about page</div>
        <button onClick={() => nav.go(nav.APP_PATH.PRODUCT_DETAIL, {name: 'Ethan', tab: 'mathc'})}>GO</button>
      </div>
    )
  }
}

export default withRouter(About)
