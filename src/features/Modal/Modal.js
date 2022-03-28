import React from 'react'
import './modal.scss'
import closeVec from '../../Assets/Icons/healthicons_x.svg'
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
        <h1>Shop</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div className='buttons--container'>
          <button className='buttons button-cancel' onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className='buttons button-send' onClick={() => alert('Pay')}>
            Pay
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
