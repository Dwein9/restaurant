import React, { Component } from 'react';

class PhotoList extends Component {

  showPhotos = () => {
    let photos = this.props.photos.map((photo) => {
      return ( <li> <img key={photo.id} className="photos"  src={photo.src} alt={photo.alt}/></li>)
    })
    return photos
  }

  render(){
    return (
      <div>
        <h1>Photos</h1>
        <div>
          {this.showPhotos()}
        </div>
      </div>
    )
  }
}

export default PhotoList;
