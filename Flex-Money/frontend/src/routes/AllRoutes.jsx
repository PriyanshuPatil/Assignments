import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import App from '../App'
import Homepage from '../pages/Homepage'
import Formpage from '../pages/Formpage'
import Payment from '../pages/Payment'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Homepage />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<Signup />} />
      <Route path={"/form"} element={<Formpage />} />
      <Route path={"/payment"} element={<Payment />} />
    </Routes>
  )
}

export default AllRoutes