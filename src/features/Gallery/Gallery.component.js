import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import imgCarousel1 from '../../assets/images/tpl-1.png'
import imgAutobuz1 from '../../assets/images/imgTpl1.jpeg'
import imgAutobuz2 from '../../assets/images/autobuz-TPL-4.jpeg'
import './Gallery.scss'

const Gallery = () => {
  return (
    <div className='gallery--container'>
      <div style={{ width: '120px', margin: '0 auto' }}>
        <h1 style={{ borderBottom: '1px solid black' }}>Galerie</h1>
      </div>

      <Carousel autoPlay infiniteLoop>
        <div>
          <img src={imgCarousel1} />
          <p className='legend'>Autobuzele noi la statiile de incarcare electrice</p>
        </div>
        <div>
          <img src={imgAutobuz1} />
          <p className='legend'>NOU!!! Autobuz electric</p>
        </div>
        <div>
          <img src={imgAutobuz2} />
          <p className='legend'>Autobuz vechi in drift</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Gallery
