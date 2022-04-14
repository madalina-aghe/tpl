import React, { useState } from 'react'
import './Tickets.scss'

const TicketsMock = [
  {
    id: 0,
    name: 'Bilet',
    price: 2.5,
    info: '\t Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
  },
  {
    id: 1,
    name: 'Abonament 1 luna',
    price: 40,
    info: '\t 1Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
  },
  {
    id: 2,
    name: 'Abonament 6 luni',
    price: 100,
    info: '\t 2Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
  },
  {
    id: 3,
    name: 'Abonament Elevi',
    price: 20,
    info: '\t 3Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'
  }
]

const Tickets = () => {
  const [info, setInfo] = useState(0)
  return (
    <div className='Tickets--container'>
      <h1>Tickets</h1>
      <div className='Tickets--content'>
        {TicketsMock.map((bilet, index) => (
          <div
            key={index}
            className={`Tickets--cards${bilet.id === info ? '-active' : ''}`}
            onClick={() => setInfo(bilet.id)}
          >
            <div style={{ transform: 'translateY(25%)' }}>
              <div>{bilet.name}</div>
              <div>{bilet.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className='Tickets--Info-container'>
        {TicketsMock.map((bilet, index) => (
          <div key={index} className='Tickets--Info'>
            {bilet.id === info && bilet.info}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tickets
