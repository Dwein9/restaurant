import React, { Component } from 'react';
// import PhotoShow from './photoShow';
import PhotoModal from './photoModal';

class PhotoList extends Component {

  componentWillMount(){
    this.setState({ selection: false,
      // isModalOpen: false
    })
  }

  // showPhotos = () => {
  //   let photos = this.props.photos.map((photo) => {
  //     return (
  //       <div className="photo-square" key={photo.id}>
  //         <a href="#top" onClick={this.selectPhoto.bind(this, photo.id)} >
  //           <img className="photos" src={photo.src} alt={photo.alt}/>
  //         </a>
  //         <p className="photo-desc">{photo.alt}</p>
  //       </div>)
  //   })
  //   return photos
  // }


  showPhotosWithModal = () => {
    let photos = this.props.photos.map((photo) => {
      return (
        <div className="photo-square" key={photo.id}>
          <a onClick={this.selectPhoto.bind(this, photo.id)} >
            <img className="photos" src={photo.src} alt={photo.alt}/>
          </a>
          <p className="photo-desc">{photo.alt}</p>
        </div>)
    })
    return photos
  }



  selectPhoto(photoId){
  let selectedPhoto = this.props.photos.filter( photo => photo.id === photoId)[0]

  this.setState({
    selection: selectedPhoto,
    // isModalOpen: !this.state.isModalOpen
  })
}

  // closeModal(){
  //   debugger;
  //   // this.setState({
  //   //   selection: false,
  //   //   // isModalOpen: !this.state.isModalOpen
  //   // })
  // }

  render(){
    return (
      <div>
        <h1>Photos</h1>
          {/* <PhotoShow photo={this.state.selection} photos={this.props.photos}/> */}


          {/*  state includes the photo selection and conditional re modal open/closed */}
          {/*  props is the photo list */}

          <PhotoModal
            // isModalOpen={this.state.isModalOpen}
            photo={this.state.selection}
            photos={this.props.photos}
            // closeModal={this.closeModal}
          />


          <div>
          {this.showPhotosWithModal()}
          </div>
      </div>
    )
  }
}

export default PhotoList;
