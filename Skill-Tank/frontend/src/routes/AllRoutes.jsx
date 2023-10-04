import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import UserLogin from '../pages/UserLogin'
import AdminLogin from '../pages/AdminLogin'
import Mentors from '../pages/Mentors'
import Appoinment from '../pages/Appoinment'
import BookAppoinment from '../pages/BookAppoinment'

const AllRoutes = () => {
  return (
    <Routes>
      <Route  path='/' element={<Homepage/>}/>
      <Route  path='/user/authentication' element={<UserLogin/>}/>
      <Route  path='/admin/authentication' element={<AdminLogin/>}/>
      <Route  path='/mentors' element={<Mentors/>}/>
      <Route  path='/book-appoinment' element={<BookAppoinment/>}/>
      <Route  path='/appoinment' element={<Appoinment/>}/>
    </Routes>
  )
}

export default AllRoutes