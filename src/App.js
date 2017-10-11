import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './style/index.css'
import Nav from './nav'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav header={"The Best Restaurant"}/>
              <div className='container'>
                <div className="row"></div>
              </div>
          </div>
      </Router>
    </div>
    )
  }
}

export default App;
