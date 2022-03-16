import { Homepage } from '../Homepage'
import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// TODO: Add react router
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/homepage' element={<Homepage />} />

        <Route path='*' element={<Navigate to='/homepage' />} />
      </Routes>
    </BrowserRouter>
  )
}

export { Router }
