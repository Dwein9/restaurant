import React, { Component } from 'react'
import PhotoList from './photoList'
import foodBurger from './img/food-burger.jpg'
import foodFries from './img/food-fries.jpg'
import restaurantAbove from './img/restaurant-above.jpg'


class Photos extends Component {

  render(){
    const data = [
      { id: 1, src: foodBurger, alt:"Food: Burger"},
      { id: 2, src: foodFries, alt:"Food: French fries"},
      { id: 3, src: restaurantAbove, alt:"Restarant tables from above"},
      { id: 4, src: foodBurger, alt:"Food: Burger"},
      { id: 5, src: foodBurger, alt:"Food: Burger"},
      { id: 6, src: foodBurger, alt:"Food: Burger"},
      { id: 7, src: foodBurger, alt:"Food: Burger"},
      { id: 8, src: foodBurger, alt:"Food: Burger"},
      { id: 9, src: foodBurger, alt:"Food: Burger"},
      { id: 10, src: foodBurger, alt:"Food: Burger"},
    ]
    return (
      <PhotoList photos = {data}/>
    )
  }
}

export default Photos;
