import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import PhoneBook from '../pages/PhoneBook'
import Calender from '../pages/Calender'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/phonebook' element={<PhoneBook />} />
      <Route path='/calender' element={<Calender />} />
    </Routes>
  )
}

export default AllRoutes