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

        <div>
          <h2>
            Pre??ul biletelor ??i abonamentelor de c??l??torie pentru&nbsp;
            <br />
            mijloacele de transport ale &nbsp;SC TPL SA &nbsp;este stabilit&nbsp;
            <br />
            prin &nbsp;Hot??r??rea Consiliului Local Suceava&nbsp;
          </h2>
          <p>
            <strong>
              <span>
                ??? Pre??ul unui bilet pentru o persoan?? pentru o singur?? c??l??torie <span>este </span>
                2,50 lei
              </span>
            </strong>
            <br />
            <strong>
              <span>??? Biletul se procur?? la urcarea ??n mijlocul de transport de la taxator</span>
              <span>&nbsp;??i este valabil doar ??n mijlocul de transport respectiv</span>
            </strong>
            <br />
            <strong>
              <span>
                ??? C??l??torii au obliga??ia de a solicita ??i p??stra biletul de c??l??torie&nbsp;
              </span>
              <span>
                asupra lor pe toat?? durata c??l??toriei ??i de a-l prezenta organelor de control
              </span>
            </strong>
          </p>
          <br />
          <h3>
            <span>
              Societatea noastr?? ofer?? spre v??nzare publicului c??l??tor urm??toarele tipuri de
              abonamente:
            </span>
          </h3>
          <p>
            <span>
              <span>
                ???{' '}
                <strong>
                  Abonament lunar -&nbsp; 75 lei
                  <br />
                </strong>
                <br />
              </span>
              ??? <strong>Abonament 15 zile -&nbsp; 46 lei</strong>
            </span>
            <br />
            <span>
              <strong>
                <br />??? Abonament 7 zile -&nbsp; 27 lei
              </strong>
            </span>
          </p>
          <p>
            <span>
              <strong>??? Abonament pentru o zi -&nbsp; 6 lei</strong>
            </span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </p>
          <p>
            <span>
              <strong>
                <span>
                  <strong>??? Abonament nenominal -&nbsp; 115 lei</strong>
                </span>
              </strong>
            </span>
            <br />
            <span>
              <br />
              <strong>
                <span>
                  <strong>??? Abonament</strong>
                </span>{' '}
                subven??ionat pentru elevi*&nbsp; - &nbsp;Gratuit
                <br />
                <br />
                <span>???&nbsp;</span>
                <strong>
                  Abonament subven??ionat pentru studen??i**&nbsp; - &nbsp;37,50 lei
                  <br />
                </strong>
              </strong>
            </span>
            <br />
            <span>
              <span>
                <strong>*</strong> &nbsp;abonamentul subven??ionat pentru elevi se elibereaz??
                elevilor care urmeaz?? cursurile unei unit????i de ??nv??????m??nt de stat din municipiul
                Suceava&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;<strong>**</strong> &nbsp;abonamentul subven??ionat pentru
                studen??i se elibereaz?? numai studen??ilor la zi cu domiciliul stabil ??n municipiul
                Suceava <br />
              </span>
              <span>
                - &nbsp;acte necesare pentru eliberare: adeverin???? de elev/student pe anul ??colar ??n
                curs&nbsp;
                <br />
              </span>
              <span>
                <span>-&nbsp;</span> abonamentul pentru elevi/studen??i trebuie ??nso??it de unul din
                urm??toarele documente: actul de identitate ??n copie sau original; copie dup??
                certificatul de na??tere; carnetul de elev/legitima??ia de student
                <br />
                <br />
                <span>???&nbsp;</span>
                <strong>Abonament subven??ionat pentru pensionari&nbsp; -&nbsp; 37,50 lei</strong>
                <br /> <span>&nbsp; -&nbsp;</span>
                <span>
                  acte necesare: actul de identitate, cuponul de pensie ??n original si ??n copie
                </span>
                <br />
                <br />
              </span>
              ??? <strong>Abonament cu reducere 50% pentru donatorii de s??nge</strong>
            </span>
            <br />
            <span>
              <span>&nbsp; -&nbsp;</span>acte necesare: actul de identitate, adeverin??a de donator
            </span>
          </p>
          <br />
          <h3>
            <span>IMPORTANT!</span>
          </h3>
          <p>
            <span>
              ???{' '}
              <strong>
                Abonamentul este valabil pe toate traseele ??i mijloacele de transport ale TPL!
              </strong>
            </span>
            <br />
            <span>
              ???{' '}
              <strong>
                Abonamentul poate fi folosit pentru un num??r nelimitat de c??l??torii zilnice!&nbsp;
              </strong>
            </span>
            <br />
            <span>
              ??? <strong>Abonamentul</strong> <strong>NU este transmisibil!</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tickets
