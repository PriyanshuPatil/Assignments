import React, { useState } from 'react'
import "../AdmissionForm/AdmissionForm.css";
import { useNavigate } from 'react-router-dom';
import yoga_logo from "../../assets/yoga_logo.jpg"

const AdmissionForm = () => {
    const navigate = useNavigate()
    const [user_data, setUserData] = useState({ email: "", password: "" });
    const onchange_input = (e) => {
        let value = e.target.name;
        if (e.target.name == "name") {
            setUserData({ ...user_data, name: e.target.value })
        } else if (e.target.name == "email") {
            setUserData({ ...user_data, email: e.target.value })
        } else if (e.target.name == "age") {
            setUserData({ ...user_data, age: e.target.value })
        } else if (e.target.name == "batch") {
            setUserData({ ...user_data, batch: e.target.value })
        } else if (e.target.name == "date") {
            setUserData({ ...user_data, date: e.target.value })
        } else if (e.target.name == "weight") {
            setUserData({ ...user_data, weight: e.target.value })
        } else {
            setUserData({ ...user_data })
        }

    }
    return (
        <div className='admission_form_div' h='700px' pt='30px'>
            <div className='admission_form_parent'>
                <div className='admission_form_heading'>Admission Form</div>
                <img className='admission_form_image' src={yoga_logo} style={{ width: "150px", margin: "auto" }} />
                <div className='admission_form_input_parent'>

                    <input onChange={(e) => { onchange_input(e) }} name='name' placeholder='Enter your Name' />
                    <input onChange={(e) => { onchange_input(e) }} name='email' placeholder='Enter Your Email Address' />
                    <input onChange={(e) => { onchange_input(e) }} type='number' name='age' placeholder='Enter Your Age' />
                    <select onChange={(e) => { onchange_input(e) }} name='batch' placeholder='Select Batch'>
                        <option value={""}>Select Batch</option>
                        <option value={"6-7 AM"}>6-7 AM</option>
                        <option value={"7-8 AM"}>7-8 AM</option>
                        <option value={"8-9 AM"}>8-9 AM</option>
                        <option value={"5-6 AM"}>5-6 AM</option>
                    </select>
                    <input onChange={(e) => { onchange_input(e) }} type='date' name='date' placeholder='Enter Your Joining Date' />
                    <input onChange={(e) => { onchange_input(e) }} type='number' name='weight' placeholder='Enter Your Weight in Kg' />

                </div>

                <button style={{ width: "100%", backgroundColor: "gray" }} onClick={() => { console.log(user_data) }}>Submit</button>
                <div style={{ textAlign: "center" }} >"Anybody can brethe therefore anybody can practice yoga"

                </div>

            </div>
        </div>
    )
}

export default AdmissionForm;