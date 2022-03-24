import './Navbar.scss'
import React from 'react'
import { useNavigate } from 'react-router'
//import vec1 from '../../assets/Icons/search.svg'
import vec1 from '../../Assets/Icons/search.svg'
//import vec2 from '../../assets/Icons/akar-icons_cart.svg'
import vec2 from '../../Assets/Icons/akar-icons_cart.svg'
const Navbar = () => {
  const history = useNavigate()
  const URL = window.location.pathname.split('/')[1]
  return (
    <div className='NavBar--container'>
      <ul className='NavBar--btns'>
        <li className={URL === 'homepage' && 'active-link'} onClick={() => history('/homepage')}>
          Home
        </li>
        <li className={URL === 'aboutus' && 'active-link'} onClick={() => history('/aboutus')}>
          Aboutus
        </li>
        <li className={URL === 'contact' && 'active-link'} onClick={() => history('/contact')}>
          Contact
        </li>
        <li className={URL === 'trails' && 'active-link'} onClick={() => history('/trails')}>
          Routes
        </li>
        <li className={URL === 'gallery' && 'active-link'} onClick={() => history('/gallery')}>
          Gallery
        </li>
        <li
          className={URL === 'management' && 'active-link'}
          onClick={() => history('/management')}
        >
          Management
        </li>
        <li className={URL === 'tickets' && 'active-link'} onClick={() => history('/tickets')}>
          Tickets
        </li>
        <img height={30} src={vec2} alt='shop' />
        <img height={30} src={vec1} alt='search' />
      </ul>
    </div>
  )
}

export { Navbar }
