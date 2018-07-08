import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withRouter } from 'HOC'

class App extends Component {
  render() {
    const { nav } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => nav.go(nav.APP_PATH.ABOUT)}>Go About</button>
      </div>
    );
  }
}

export default withRouter(App)

