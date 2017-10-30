import React, { Component } from 'react'
import MenuList from './menuList'

class Menu extends Component {

  render(){
    const courses = ['Lunch', 'Dinner', 'Bar Snacks', 'Late Night', 'Wine List']
    return (
      <MenuList courses={courses} />
    )
  }
}

export default Menu;
