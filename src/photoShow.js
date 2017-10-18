import React from 'react';

export default function PhotoShow(props){
  if( !props.photo ){
      return (
        <div> </div>
      )
    } else {
    return (
      <img key={props.photo.id} className="photo-show"  src={props.photo.src} alt={props.photo.alt}/>
    );
  }
}
