import './Homepage.scss'
import React from 'react'
import busesImage from '../../Assets/images/autobuze-electrice.jpeg'
import { Anunturi } from './Anunturi'

const Homepage = () => {
  return (
    <div className='homepage'>
      <img src={busesImage} />
      <Anunturi />
    </div>
  )
}

export { Homepage }
