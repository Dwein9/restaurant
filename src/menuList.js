import React, { Component } from 'react'

class MenuList extends Component {

createCourses = () => {
  let courses = this.props.courses.map((course, i) => {
    return (
      <li className="courses" key={i}>
        <a> {course} </a>
      </li>
    )
  })
  return courses
}


  render(){
    return (
      <div>
        <h1>Menus</h1>
        <ul>
          {this.createCourses()}
        </ul>
      </div>
    )
  }
}

export default MenuList;
