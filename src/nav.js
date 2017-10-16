import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  createLinks = () => {
    const paths = ['/', 'about', 'menus', 'events', 'press', 'photos']

    let routes = paths.map((path) => {
      if (path === '/'){
        return (<NavLink to={'/'} exact activeStyle={{ background: 'darkblue'}}>{this.props.header}</NavLink>)
      } else {
        return (<NavLink to={path} exact activeStyle={{ background: 'darkblue'}}>{path}</NavLink>)
      }
    })
    return routes
  }
  render(){
    return (
      <nav>
        {this.createLinks()}
      </nav>

    )
  }
}

export default Nav;
