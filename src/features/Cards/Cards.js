import React from 'react'
import './card.scss'
import vecProfile from '../../Assets/Icons/gg_profile.svg'
import Card from 'react-bootstrap/Card'

const Cards = () => {
  return (
    <div className='cards--container'>
      <Card className='cards--input' style={{ width: '18rem' }}>
        <Card.Img variant='top' src={vecProfile} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            <p>{}</p>
            <p>{}</p>
          </Card.Text>
          <button>Download CV</button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards
