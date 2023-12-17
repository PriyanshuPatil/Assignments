import React from 'react'
import yoga_logo from "../assets/yoga_logo.jpg"
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='nav'>
      <div className='nav_parent'>
        <div className='menu_image'><img src={yoga_logo} /></div>
        <div className='menu_item'>
          <div onClick={() => { navigate("/") }}>Home</div>
          <div onClick={() => { alert("Comming Soon") }}>About</div>
          <div onClick={() => { alert("Comming Soon") }}>Contact</div>
          <div onClick={() => { navigate("/login") }}>Login/Signup</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar