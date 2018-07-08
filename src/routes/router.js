import React, { Component } from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import ModuleLoader from './module-loader'
import routes from './routes'
import { initPath } from 'Lib/navigation'

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            {
              routes.map(route => <Route
                exact
                key={route.name}
                path={initPath(route.path)}
                component={() => <ModuleLoader children={route.page} />}
                />)
            }
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
/* <Redirect to='/' /> */
