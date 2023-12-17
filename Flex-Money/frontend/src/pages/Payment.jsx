import React from 'react'
import '../css/payment.css'
import yoga_logo from "../assets/yoga_logo.jpg"
import yogaa from "../assets/yogaa.jpg"
import { useNavigate } from 'react-router-dom'


const Payment = () => {
    const navigate = useNavigate()
    let today = new Date().toLocaleDateString()

    return (
        <div className='payment_form_div' style={{ "background": `url(${yogaa})`, "background-size": "100%" }}>
            <div className='payment_form_parent'>
                <div className='payment_heading'>Payment In Progress...</div>
                <div className='payment_price'>INR ₹500/Month</div>
                <div className='payment_options'>
                    <div>Ref Number</div>
                    <div>JYKEU9394U93</div>
                    <div>Payment Time</div>
                    <div>{today}</div>
                    <div>Payment Method</div>
                    <div>Bank Transfer</div>
                    <div>Sender Name</div>
                    <div>{"Username"}</div>
                    <div>Amount</div>
                    <div>INR 500</div>
                </div>
                <div className='button_parent'>
                    <button onClick={() => { navigate("/form") }}>Cancel</button>
                    <button>Confirm</button>
                </div>

            </div>
        </div>
    )
}

export default Payment;
