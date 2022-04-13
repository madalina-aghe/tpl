import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import imgCarousel1 from '../../assets/images/tpl-1.png'
import './Gallery.scss'

const Gallery = () => {
  return (
    <div className='gallery--container'>
      <div style={{ width: '120px', margin: '0 auto' }}>
        <h1 style={{ borderBottom: '1px solid black' }}>Gallery</h1>
      </div>

      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={imgCarousel1} />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={imgCarousel1} />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src={imgCarousel1} />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Gallery
