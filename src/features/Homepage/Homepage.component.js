import './Homepage.scss'
import React from 'react'
import busesImage from '../../Assets/images/autobuze-electrice.jpeg'
import { Anunturi } from './Anunturi'

const Homepage = () => {
  const handleClickAnunturi = () => {
    document.getElementsByClassName('anunturi')?.[0].scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='homepage'>
      <div className='homepage__banner'>
        <img src={busesImage} />
        <div className='homepage__banner-logo' />
        <div className='homepage__banner-button' onClick={handleClickAnunturi}>
          Anunturi
        </div>
      </div>
      <Anunturi />
    </div>
  )
}

export { Homepage }
