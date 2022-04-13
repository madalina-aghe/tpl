import React from 'react'
import './Card.scss'
import vecProfile from '../../assets/Icons/gg_profile.svg'
import Card from 'react-bootstrap/Card'
import downloadvec from '../../assets/Icons/akar-icons_download.svg'

/* eslint-disable react/prop-types */
const Cards = ({ firstName, lastName, cardTitle }) => {
  return (
    <div className='cards--container'>
      <Card className='cards--input' style={{ width: '18rem' }}>
        <div className='cards--content'>
          <Card.Img variant='top' src={vecProfile} />
          <Card.Body>
            <Card.Title>{cardTitle}</Card.Title>
            <Card.Text>
              {firstName}
              <p style={{ margin: '1px' }}>{lastName}</p>
            </Card.Text>

            <button style={{ cursor: 'pointer', borderRadius: '10px' }}>
              Download
              <p style={{ margin: '1px' }}>
                <img src={downloadvec} />
              </p>
            </button>
          </Card.Body>
        </div>
      </Card>
    </div>
  )
}

export default Cards
