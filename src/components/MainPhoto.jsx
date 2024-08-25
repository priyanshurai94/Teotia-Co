import React from 'react'
import dummy from '../assets/photo/Home2.jpg'

const MainPhoto = () => {
  return (
    <div>
      <img class="object-cover object-center rounded" alt="hero" src={dummy}/>
    </div>
  )
}

export default MainPhoto
