import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import style from "./css/Homepage.module.css";
const HomePage = () => {
    const navigate=useNavigate()
  return (
    <Box>
        <Box className={style.home_heading}>Web Application :-</Box>
        <Box className={style.home_parent}>
            <Button onClick={()=>{navigate("/phonebook")}}>PhoneBook Application</Button>
            <Button  onClick={()=>{navigate("/calender")}}>Appoinment Application</Button> 
        </Box>

    </Box>
  )
}

export default HomePage