import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render(){
    return (
      <nav className="">
        <div className="">
          <Link className="nav" to='/'>{this.props.header}</Link>
        </div>
      </nav>
    )
  }
}

export default Nav;
