import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
//import imgCarousel1 from '../../Assets/images/tpl-1.png'
import imgCarosuel1 from '../../Assets/images/tpl-1.png'
import './gallery.scss'

const Gallery = () => {
  return (
    <div className='gallery--container'>
      <Carousel>
        <div>
          <img src={imgCarosuel1} />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src={imgCarosuel1} />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src={imgCarosuel1} />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Gallery
