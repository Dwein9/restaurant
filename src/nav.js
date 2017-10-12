// import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom'
//
// class Nav extends Component {
//   render(){
//     return (
//       <nav>
//         <NavLink to="/" exact activeStyle={{ background: 'darkblue' }}>{this.props.header}</NavLink>
//         <NavLink to="/about" exact activeStyle={{ background: 'darkblue'}}>About</NavLink>
//         <NavLink to="/menus" exact activeStyle={{ background: 'darkblue' }}>Menus</NavLink>
//       </nav>
//
//     )
//   }
// }
//
// export default Nav;


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
