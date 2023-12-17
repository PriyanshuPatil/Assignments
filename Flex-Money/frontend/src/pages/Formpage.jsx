import React from 'react'
import AdmissionForm from '../components/AdmissionForm/AdmissionForm'
import yogaa from "../assets/yogaa.jpg"
const Formpage = () => {
  return (
    <div className='admissions'>
      <div className='nav_block_area'>.</div>
      <div className='admission_parent' style={{ "background": `url(${yogaa})`, "background-size": "100%" }}>
        <AdmissionForm />
      </div>
    </div>
  )
}

export default Formpage