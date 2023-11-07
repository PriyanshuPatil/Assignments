import { Box, Image, useToast } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.jpg"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../redux/authReducer/auth.action"
const Navbar = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const toast = useToast()
    const {loading,isAuth}=useSelector((store)=>store.Auth)
  return (
    <Box w={'100%'} position="fixed" backgroundColor={'white'} >
    <Box p='10px 10px' fontSize={'15px'} fontWeight={'600'} display={"grid"} gridTemplateColumns={"1fr 2fr 1fr"}  w="70%" m='auto'>
    <Box   cursor={'pointer'}   >
    <Image onClick={()=>{navigate("/")}} src={logo} w="100px"/>    
    </Box>
    <Box p='20px' display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} >
    <Box  cursor={'pointer'}     onClick={()=>{navigate("/secind-hand-cars")}}>BUY A CAR</Box>
    <Box   cursor={'pointer'}    onClick={()=>{navigate("/addcar")}}>Sell A CAR</Box>
    <Box  cursor={'pointer'}    onClick={()=>{navigate("/oemspecs")}}> OEM SPECS</Box>    
    </Box>
    {!isAuth && 
     <Box   cursor={'pointer'}    p='20px' textAlign={'center'} onClick={()=>{navigate("/login")}}>
    Login/Signup
    </Box>
    }
    {isAuth && 
     <Box   cursor={'pointer'}    p='20px' textAlign={'center'} onClick={()=>{dispatch(logout(navigate)); toast({
      title: 'success',
      description: "Logout Done",
      status: 'success',
      position:"top",
      duration: 2000,
      isClosable: true,
    })}}>
    Logout
    </Box>
    }
    </Box>
    </Box>
  )
}

export default Navbar