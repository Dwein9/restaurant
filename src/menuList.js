import React, { Component } from 'react'
import MenuDetail from './menuDetail'

class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = { selection: false }
  }

  onClick(course){
    this.setState({
      selection: course
    })
  }

  createCourses = () => {
    let courses = this.props.courses.map((course, i) => {
      return (
        <li className="courses" key={i}>
          <a onClick={this.onClick.bind(this, course)}> {course} </a>
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
        <div>
          <MenuDetail selection={this.state.selection} />
        </div>
      </div>
    )
  }
}

export default MenuList;
