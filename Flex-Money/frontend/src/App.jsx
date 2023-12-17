import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './routes/AllRoutes'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <>
    <Navbar/>
    <AllRoutes/>
    </>
  )
}

export default App
