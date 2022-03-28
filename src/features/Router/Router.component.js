import { Homepage } from '../Homepage'
import Aboutus from '../AboutUs/Aboutus.component'
import Contact from '../Contact/Contact.component'
import Gallery from '../Gallery/Gallery.component'
import Management from '../Management/Management.component'
import Trails from '../Trails/Trails.component'
import Tickets from '../Tickets/Tickets.component'
import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar.component'
import Footer from '../Footer/Footer.component'
// TODO: Add react router
const Router = () => {
  return (
    <div className='page'>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/homepage' element={<Homepage />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/trails' element={<Trails />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/management' element={<Management />} />
          <Route path='/tickets' element={<Tickets />} />

          <Route path='*' element={<Navigate to='/homepage' />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export { Router }
