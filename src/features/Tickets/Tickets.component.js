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
      <h1>Bilete</h1>
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
        {/* {TicketsMock.map((bilet, index) => (
          <div key={index} className='Tickets--Info'>
            {bilet.id === info && bilet.info}
          </div>
        ))} */}
        <p>&nbsp;</p>
        <h1>
          <span>PUNCTELE DE ELIBERARE A ABONAMENTELOR</span>
        </h1>
        <p>
          <span>
            <strong>1. CENTRU</strong>&nbsp;- Staţia de autobuz&nbsp;
          </span>
          <br />
          <span>Program:</span>
          <br />
          <span>
            <strong>
              Luni-Vineri 7.00 - 18.00;&nbsp; Sâmbăta, Duminica şi sărbătorile legale închis
            </strong>
          </span>
          <br />
          <span>
            Se eliberează abonamente lunare, de 15 zile, de 7 zile, de o zi, nenominale, pentru
            elevi/studenţi, legitimaţii speciale
            <br />
          </span>
        </p>
        <p>
          <span>
            <strong>2. OBCINI</strong>&nbsp;- Staţia de autobuz Flori
          </span>
          <br />
          <span>Program:</span>
          <br />
          <span>
            <strong>
              Luni-Vineri&nbsp; 7.00 - 15.00;&nbsp; Sâmbăta, Duminica şi sărbătorile legale închis
            </strong>
          </span>
          <br />
          <span>
            Se eliberează abonamente lunare, de 15 zile, de 7 zile, de o zi, nenominale, pentru
            elevi/studenţi
          </span>
        </p>
        <p>
          <span>
            <strong>3. BURDUJENI</strong>&nbsp;- Dispecerat capăt linie Gara Burdujeni
          </span>
          <br />
          <span>Program:</span>
          <br />
          <span>
            <strong>
              Luni-Vineri&nbsp; 5.00 - 22.00;&nbsp; Sâmbăta şi Duminica&nbsp; 8.00 - 16.00
            </strong>
          </span>
          <br />
          <span>
            Se eliberează abonamente lunare, de 15 zile, de 7 zile, de o zi, nenominale
            <br />
          </span>
        </p>
        <p>
          <span>
            <strong>4. BURDUJENI</strong>&nbsp;- Dispecerat capăt linie Cinema Burdujeni
          </span>
          <br />
          <span>Program:</span>
          <br />
          <span>
            <strong>
              Luni-Vineri&nbsp; 5.00 - 22.00;&nbsp; Sâmbăta şi Duminica&nbsp; 8.00 - 16.00
            </strong>
          </span>
          <br />
          <span>
            Se eliberează abonamente lunare, de 15 zile, de 7 zile, de o zi, nenominale
            <br />
          </span>
        </p>
        <p>
          <span>
            <strong>5. SEDIUL TPL </strong>&nbsp;- str. Traian Vuia nr. 5A
          </span>
          <br />
          <span>Program:</span>
          <br />
          <span>
            <strong>
              Luni-Vineri&nbsp; 7.00 - 15.00;&nbsp; Sâmbăta, Duminica şi sărbătorile legale închis
            </strong>
          </span>
          <br />
          <span>
            Se eliberează&nbsp;
            <span>
              pe bază de comandă scrisă pentru decont cu factură şi chitanţă următoarele&nbsp;
            </span>
            abonamente: pentru o lună, de 15 zile, de 7 zile,{' '}
          </span>
          <span>precum şi&nbsp;</span>
          <span>abonamente cu 50% reducere pentru donatorii de sânge</span>
        </p>
      </div>
    </div>
  )
}

export default Tickets
