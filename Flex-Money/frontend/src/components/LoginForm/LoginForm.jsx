import React, { useState } from 'react'
import "../LoginForm/LoginForm.css";
import { useNavigate } from 'react-router-dom';
import yoga_logo from "../../assets/yoga_logo.jpg"

const LoginForm = () => {
    const navigate = useNavigate()
    const [user_data, setUserData] = useState({ email: "", password: "" });
    const onchange_input = (e) => {
        let value = e.target.name;
        if (e.target.name == "email") {
            setUserData({ ...user_data, email: e.target.value })
        } else {
            setUserData({ ...user_data, password: e.target.value })
        }

    }
    return (
        <div className='login_form_div' h='700px' pt='30px'>
            <div className='login_form_parent'>
                <div className='login_form_heading'>Login Form</div>
                <img className='login_form_image' src={yoga_logo} style={{ width: "150px", margin: "auto" }} />
                <input onChange={(e) => { onchange_input(e) }} name='email' placeholder='Enter Your Email Address' />
                <input onChange={(e) => { onchange_input(e) }} name='password' placeholder='Create New Password' />
                <button style={{ width: "100%", backgroundColor: "gray" }} onClick={() => { }}>Login</button>
                <div style={{ textAlign: "center" }} >Not Have account?
                    <div style={{ textAlign: "center", color: "blue", display: "inline" }} onClick={() => { navigate("/register") }}> Signup Now</div>
                </div>

            </div>
        </div>
    )
}

export default LoginForm;