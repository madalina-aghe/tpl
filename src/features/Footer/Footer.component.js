import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer--container'>
      <div className='footer--align-text'>
        <button className='footer--btn' style={{ cursor: 'pointer' }}>
          Log in
        </button>
      </div>
    </footer>
  )
}

export default Footer
