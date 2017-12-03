import React, { Component } from 'react';

export default class photoModal extends Component {

  componentWillReceiveProps(next){
    this.setState({
      photoNumber: next.photo.id,
    })
  }

  openModal(){
    var currentPhoto = this.props.photos.filter( photo => photo.id === this.state.photoNumber)[0]
    return (
      <div className="modal-content">
        <span onClick={this.closeModal.bind(this)} className="close">&times;</span>
        <img key={currentPhoto.id} className="photo-top" src={currentPhoto.src} alt={currentPhoto.alt}/>
        {/* should add description */}
        <p className="" onClick={this.nextSlide.bind(this)}>{'>'}</p>
          <br/>
          <br/>
        <p className="" onClick={this.prevSlide.bind(this)}>{'<'}</p>
      </div>
    )
  }

  closeModal() {
    this.setState({ photoNumber: false})
  }

  nextSlide(){
    var num;
    this.state.photoNumber + 1 > this.props.photos.length ? num = 1 : num = this.state.photoNumber + 1

    this.setState({ photoNumber: num})
  }

  prevSlide(){
    var num;
    this.state.photoNumber - 1 === 0 ? num = this.props.photos.length : num = this.state.photoNumber - 1

    this.setState({ photoNumber: num})
  }


  render(){
    if( !this.props.photo || !this.state.photoNumber ){
    return (
      <div className="modal-closed"> </div>
    )
    } else {
      return (
        <div className="modal">
          {this.openModal()}
        </div>
      )
    }
  }
}


// if a photo is clicked, a new mdoal should open displaying the photo. there should also be a way to close the modal
//  click a photo, open a modal, so if the photo is clicked launch modal, if the exit button is clicked close modal
//
//
//
//
//


// *******next make it so one can cycle in between the modals
