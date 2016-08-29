import React from 'react'

function Cats (props) {
  return (
    <ul>
      {props.catsfoobar.map(function (cat, index) {
         return (
           <li key={index}>
             {cat.name}
           </li>
         )
       })}
    </ul>
  )
}

export default Cats
