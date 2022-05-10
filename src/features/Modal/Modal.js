import React from 'react'
import './Modal.scss'
import closeVec from '../../assets/Icons/healthicons_x.svg'
/* eslint-disable react/prop-types */
const Modal = ({ closeModal }) => {
  return (
    <div className='modal--background--container'>
      <div className='modal--container'>
        <div style={{ marginLeft: 'auto', transform: 'translate(-6px, -17px)' }}>
          <img
            src={closeVec}
            alt='close'
            style={{ cursor: 'pointer' }}
            onClick={() => closeModal(false)}
          />
        </div>
        <h1>Cos de cumparaturi</h1>
        <div>
          <p>Este necesar un card valid pentru a continua plata.</p>
          <p>Sunteti sigur ca doriti sa continuati?</p>
        </div>
        <div className='buttons--container'>
          <button className='buttons button-cancel' onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button
            className='buttons button-send'
            onClick={() => window.open('https://www.revolut.com/', '_blank')}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
