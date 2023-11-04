import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import OemSpecs from '../pages/OemSpecs'
import AddCars from '../pages/AddCars'
import SecondCars from '../pages/SecondCars'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path={"/"} element={<HomePage/>} />
    <Route path={"/login"} element={<Login/>} />
    <Route path={"/register"} element={<Signup/>} />
    <Route path={"/oemspecs"} element={<OemSpecs/>} />
    <Route path={"/addcar"} element={<AddCars/>} />
    <Route path={"/secind-hand-cars"} element={<SecondCars/>} />
   </Routes>
  )
}

export default AllRoutes