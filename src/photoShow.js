import React from 'react';

export default function PhotoShow(props){
  if( !props.photo ){
      return (
        <div> </div>
      )
    } else {
    return (
      <div>
        <img key={props.photo.id} className="photo-top"  src={props.photo.src} alt={props.photo.alt}/>
        <h2 className="photo-top-text">{props.photo.alt}</h2>
      </div>
    );
  }
}
