import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {

  createLinks = () => {
    const paths = ['/about', '/menus', '/events', '/', '/press', '/photos', '/contact']

    let routes = paths.map((path,i) => {
      if (path === '/'){
        return (<NavLink className="nav" to={'/'} exact activeStyle={{ background: 'darkblue', color: 'hotpink'}} key={i}>{this.props.header}</NavLink>)
      } else {
        let pathFormatted = path.charAt(1).toUpperCase()+path.slice(2)
        return (<NavLink className="nav" to={path} exact activeStyle={{ background: 'darkblue', color: 'hotpink'}} key={i}>{pathFormatted}</NavLink>)
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
