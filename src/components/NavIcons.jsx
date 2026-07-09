import React from 'react'
import "../assets/styles/NavIcon.css"
export default function NavIcons({name,imgPath}) {
  return (
    <div  className='nav-icon'>
      <img src={imgPath} alt="namw" />
      <h1>{name}</h1>
      <span><a href="#">learn</a> <a href="#">order</a></span>
    </div>
  )
}
