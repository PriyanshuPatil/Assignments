import React, { useState } from 'react'
import "../SignupForm/SignupForm.css";
import { useNavigate } from 'react-router-dom';
import yoga_logo from "../../assets/yoga_logo.jpg"

const SignupForm = () => {
    const navigate = useNavigate()
    const [user_data, setUserData] = useState({ email: "", password: "" });
    const onchange_input = (e) => {
        let value = e.target.name;
        if (e.target.name == "username") {
            setUserData({ ...user_data, username: e.target.value })
        } else if (e.target.name == "email") {
            setUserData({ ...user_data, email: e.target.value })
        } else {
            setUserData({ ...user_data, password: e.target.value })
        }

    }
    return (
        <div className='signup_form_div' h='700px' pt='30px'>
            <div className='signup_form_parent'>
                <div className='signup_form_heading'>Signup Form</div>
                <img className='signup_form_image' src={yoga_logo} style={{ width: "150px", margin: "auto" }} />
                <input onChange={(e) => { onchange_input(e) }} name='username' placeholder='Enter your Name' />
                <input onChange={(e) => { onchange_input(e) }} name='email' placeholder='Enter Your Email Address' />
                <input onChange={(e) => { onchange_input(e) }} name='password' placeholder='Create New Password' />
                <button style={{ width: "100%", backgroundColor: "gray" }} onClick={() => { }}>Signup</button>
                <div style={{ textAlign: "center" }} >Already Account?
                    <div style={{ textAlign: "center", color: "blue", display: "inline" }} onClick={() => { navigate("/login") }}> Login Now</div>
                </div>

            </div>
        </div>
    )
}

export default SignupForm;