import React, { Component } from 'react';
import PhotoShow from './photoShow';

class PhotoList extends Component {

  componentWillMount(){
      this.setState({ selection: false})
  }

  showPhotos = () => {
    let photos = this.props.photos.map((photo) => {
      return (
        <li key={photo.id}>
          <a onClick={this.selectPhoto.bind(this, photo.id)} >
            <img className="photos"  src={photo.src} alt={photo.alt}/>
          </a>
        </li>)
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
        <div>
          {this.showPhotos()}
        </div>
        <div>
          <PhotoShow photo={this.state.selection} />
        </div>
      </div>
    )
  }
}

export default PhotoList;
