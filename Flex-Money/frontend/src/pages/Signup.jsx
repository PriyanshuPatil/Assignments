import React from 'react'
import SignupForm from '../components/SignupForm/SignupForm'
import yogaa from "../assets/yogaa.jpg"
const Signup = () => {
  return (
    <div className='signup'>
      <div className='nav_block_area'>.</div>
      <div className='signup_parent' style={{ "background": `url(${yogaa})`, "background-size": "100%" }}>
        <SignupForm />
      </div>
    </div>
  )
}

export default Signup