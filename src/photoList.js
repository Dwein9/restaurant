import React, { Component } from 'react';
import PhotoShow from './photoShow';

class PhotoList extends Component {

  componentWillMount(){
      this.setState({ selection: false})
  }

  showPhotos = () => {
    let photos = this.props.photos.map((photo) => {
      return (
        <div className="photo-square" key={photo.id}>
          <a href="#top" onClick={this.selectPhoto.bind(this, photo.id)} >
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
  })
}

  render(){
    return (
      <div>
        <h1>Photos</h1>
          <PhotoShow photo={this.state.selection} photos={this.props.photos}/>
          <div>
          {this.showPhotos()}
          </div>
      </div>
    )
  }
}

export default PhotoList;
