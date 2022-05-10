import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer--container'>
      <div className='footer--align-text'>
        <button className='footer--btn' style={{ cursor: 'pointer' }}>
          Log in
        </button>
        <b>
          Transport Public Local Suceava Pagina oficială a societății de transport public - TPL SA
        </b>
        Suceava - dezvoltată pentru TPL Suceava Str. Traian Vuia nr. 5 A, Suceava, ROMÂNIA -
        Tel/Fax(secretariat): 0330 401 442 - pagina de contact
      </div>
    </footer>
  )
}

export default Footer
