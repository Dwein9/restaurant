import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/index.css'
import Nav from './nav'

class App extends Component {

  createRoutes = () => {
    const paths = ['/', '/about', '/menus', '/events', '/press', '/photos']

    let routes = paths.map((p) => {
      return (<Route exact path={p} render={() => <h1>{p.slice(1)}</h1> } />)
    })
    return routes
  }

  render() {
    const paths = ['/', 'about', 'menus', 'events', 'press', 'photos']
    return (
      <Router>
        <div>
          <Nav header={"The Best Restaurant"} items ={paths} />
          {this.createRoutes()}
        </div>
      </Router>
    )
  }
}

export default App;
