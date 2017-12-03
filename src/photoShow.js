import React, { Component } from 'react';

export default class PhotoShow extends Component {

  componentWillReceiveProps(next){
    this.setState({ slideNumber: next.photo.id })
  }

  showPhoto(){
    var currentPhoto = this.props.photos.filter( photo => photo.id === this.state.slideNumber)[0]
    return (
      <div>
        <img id="top" key={currentPhoto.id} className="photo-top"  src={currentPhoto.src} alt={currentPhoto.alt}/>
        <h2 className="photo-top-text">{currentPhoto.alt}</h2>
        <p className="" onClick={this.nextSlide.bind(this)}>{'>'}</p>
          <br/>
          <br/>
        <p className="" onClick={this.prevSlide.bind(this)}>{'<'}</p>
      </div>
    )
  }

  nextSlide(){
    var num;
    this.state.slideNumber + 1 > this.props.photos.length ? num = 1 : num = this.state.slideNumber + 1

    this.setState({ slideNumber: num})
  }

  prevSlide(){
    var num;
    this.state.slideNumber - 1 === 0 ? num = this.props.photos.length : num = this.state.slideNumber - 1

    this.setState({ slideNumber: num})
  }

  render(){
    if( !this.props.photo ){
    return (
      <div> </div>
    )
  } else {
    return (
      <div>
      {this.showPhoto()}
    </div>
      )
    }
  }
}
