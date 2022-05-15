import './Anunturi.scss'
import React, { useState, useEffect, useRef } from 'react'
import { getNews } from '../../../services/api'

const Anunturi = () => {
  const [news, setNews] = useState([])

  useEffect(async () => {
    const newNews = await getNews()
    setNews(newNews)
  }, [])

  return (
    <div className='anunturi'>
      <div className='anunturi__title'>Anunturi</div>
      <div className='anunturi__content'>
        {news.map((anunt, index) => (
          <div key={index} className='anunt'>
            <div className='anunturi__content-title'>{anunt.title}</div>
            {/* <img src={anunt.photo} /> */}
            {anunt.description}
            <div className='anunturi__content-date'>
              {new Date(anunt.publication_date).toDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export { Anunturi }
