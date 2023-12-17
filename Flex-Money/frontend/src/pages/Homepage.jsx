import React from 'react'
import Navbar from '../components/Navbar'
import yogaa from "../assets/yogaa.jpg"
import '../css/homepage.css'
const Homepage = () => {
    return (
        <div>
            <div className='home_parent'>
                <img src={yogaa} />
            </div>
        </div>
    )
}

export default Homepage