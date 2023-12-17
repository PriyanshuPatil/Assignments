import React from 'react'
import yogaa from "../assets/yogaa.jpg"
import '../css/login.css'
import LoginForm from '../components/LoginForm/LoginForm'
const Login = () => {
  return (
    <div className='login'>
      <div className='nav_block_area'>.</div>
      <div className='login_parent' style={{ "background": `url(${yogaa})`, "background-size": "100%" }}>
        <LoginForm />
      </div>
    </div>
  )
}

export default Login