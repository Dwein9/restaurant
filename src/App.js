import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './style/index.css'
import Nav from './nav'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav header={"The Best Restaurant"} />
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route exact path="/about" render={() => <h1>About</h1>} />
          <Route exact path="/menus" render={() => <h1>Menus</h1>} />
        </div>
      </Router>
    )
  }
}

export default App;
