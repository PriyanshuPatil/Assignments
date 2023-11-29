import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Edit from '../Pages/Edit'
import Configur from '../Pages/Configur'
import Profile from '../Pages/Profile'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:id' element={<Projects/>}/>
        <Route path='/editpage/:id' element={<Edit/>}/>
        <Route path='/configur' element={<Configur/>}/>
        <Route path='/setting' element={<Profile/>}/>
    </Routes>
  )
}

export default AllRoutes