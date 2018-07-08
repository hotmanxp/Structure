import React from 'react'
import { withRouter as reactWithRouter } from 'react-router'
import { makeUrl } from 'Lib/navigation'
import PATH from '../../routes/path'

const withRouter = Cmp => {
  const WrapedRouterComponent = ({match, history, ...props}) => {
    const {path, params, url} = match
    const route = {
      path: path,
      url: url
    }
    const nav = {
      APP_PATH: PATH,
      go: (next, params) => history.push({pathname: makeUrl(next, params)}),
      goForward: history.goForward,
      goBack: history.goBack
    }
    return (
      <Cmp
        {...props}
        route={route}
        params={params}
        nav={nav}
      />
    )
  }
  return reactWithRouter(WrapedRouterComponent)
}

export default withRouter

