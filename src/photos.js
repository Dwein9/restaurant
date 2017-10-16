import React, { Component } from 'react'
import PhotoList from './photoList'
import foodBurger from './img/food-burger.jpg'
import foodFries from './img/food-fries.jpg'
import restaurantAbove from './img/restaurant-above.jpg'


class Photos extends Component {

  render(){
    const data = [ { id: 1, dsc: foodBurger}, { id: 2, dsc: foodFries}, { id: 1, dsc: restaurantAbove} ]
    return (
      <PhotoList photos = {data}/>
    )
  }
}

export default Photos;
