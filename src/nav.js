import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render(){
    return (
      <nav>
        <NavLink to="/" exact activeStyle={{ background: 'darkblue' }}>{this.props.header}</NavLink>
        <NavLink to="/about" exact activeStyle={{ background: 'darkblue'}}>About</NavLink>
        <NavLink to="/menus" exact activeStyle={{ background: 'darkblue' }}>Menus</NavLink>
      </nav>

    )
  }
}

export default Nav;
