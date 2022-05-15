import './Homepage.scss'
import React from 'react'
import busesImage from '../../assets/images/autobuze-electrice.jpeg'
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

      <div className='homepage__info'>
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

export { Homepage }
