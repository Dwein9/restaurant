import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style/index.css'
import Nav from './nav'
import Photos from './photos'
import Menu from './menu'

class App extends Component {

  createRoutes = () => {
    const paths = ['/', '/about', '/menus', '/events', '/press', '/photos', '/contact']

    let routes = paths.map((p, i) => {
      if (p === '/'){
        return (<Route exact path={p} render={() => <h1>The Best Restaurant</h1> } key={i}/>)
      } else if (p === '/photos') {
        return (<Route exact path={p} component={Photos} key={i} />)
      } else if (p === '/menus') {
        return (<Route exact path={p} component={Menu} key={i} />)
      } else {
        let heading = p.charAt(1).toUpperCase()+p.slice(2)
        return (<Route exact path={p} render={() => <h1>{heading}</h1> } key={i}/>)
      }
    })

    return routes
  }

  render() {
    // const paths = ['/', 'about', 'menus', 'events', 'press', 'photos']
    return (
      <Router>
        <div>
          <Nav header={"The Best Restaurant"}
            // items ={paths}
           />
          {this.createRoutes()}
        </div>
      </Router>
    )
  }
}

export default App;
