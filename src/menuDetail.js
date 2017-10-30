// import React, { Component } from 'react'
//
// class MenuDetail extends Component {
//
//   render(){
//     return (
//       <div>
//         <h1>Hi</h1>
//       </div>
//     )
//   }
// }
//
// export default MenuDetail;

import React from 'react';

export default function MenuDetail (props) {
  return (
    <h1>
      {props.selection}
    </h1>
  );
}
