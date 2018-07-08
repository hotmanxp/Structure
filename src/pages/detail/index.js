import React, { Component } from 'react'
import { withRouter } from 'HOC'

class Detail extends Component {
  render() {
    const { nav, params } = this.props
    const { name } = params
    return (
      <div>
        {
          `Show me the name: ${name}`
        }
        <div>
          <button onClick={() => nav.go(nav.APP_PATH.HOME)}>Home</button>
        </div>
      </div>
    )
  }
}
export default withRouter(Detail)

