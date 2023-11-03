import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.jpg"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate()
  return (
    <Box w={'100%'} position={'fixed'} backgroundColor={'white'}>
    <Box p='10px 10px' fontSize={'15px'} fontWeight={'600'} display={"grid"} gridTemplateColumns={"1fr 2fr 1fr"}  w="70%" m='auto'>
    <Box>
    <Image src={logo} w="100px"/>    
    </Box>
    <Box p='20px' display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} >
    <Box>BUY A CAR</Box>
    <Box>Sell A CAR</Box>
    <Box>CAR FINANCE</Box>    
    </Box>
    <Box p='20px' textAlign={'center'} onClick={()=>{navigate("/login")}}>
    Login/Signup
    </Box>
    </Box>
    </Box>
  )
}

export default Navbar