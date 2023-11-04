import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dealers from '../pages/Dealers'
import AddCars from '../pages/AddCars'
import SecondCars from '../pages/SecondCars'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path={"/"} element={<HomePage/>} />
    <Route path={"/login"} element={<Login/>} />
    <Route path={"/register"} element={<Signup/>} />
    <Route path={"/dealers"} element={<Dealers/>} />
    <Route path={"/addcar"} element={<AddCars/>} />
    <Route path={"/secind-hand-cars"} element={<SecondCars/>} />
   </Routes>
  )
}

export default AllRoutes