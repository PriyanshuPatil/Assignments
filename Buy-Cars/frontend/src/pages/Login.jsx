import { Box, Button, Heading, Image, Input, Spinner, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector ,useDispatch} from "react-redux";
import logo from "../assets/logo.jpg"
import img2 from "../assets/img2.jpg"
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {loading,isAuth}=useSelector((store)=>store.Auth)
    const [user_data,setUserData]=useState({email:"",password:""});
    const toast=useToast()
    const onchange_input=(e)=>{
        let value=e.target.name;
     if(e.target.name=="email"){
          setUserData({...user_data,email:e.target.value})
        }else{
          setUserData({...user_data,password:e.target.value})
        }
       
    }
  return (
    <Box backgroundImage={`url(${img2})`}  h='700px' pt='30px'>
    <Box backgroundColor={'white'} borderRadius={'5%'} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"} w='35%' p='30px' m='auto'  mt='5%' display={'grid'} gap='20px'>
    <Heading backgroundColor={'gray'} p='20px 10px' borderRadius={'50%'} color='white' w='80%' margin={'auto'} textAlign={'center'} fontSize={'30px'} fontWeight={'500px'}>Login Form</Heading>
    <Image  src={logo} w='150px' m={'auto'} />
    <Input onChange={(e)=>{onchange_input(e)}} name='email' placeholder='Enter Your Email Address'  />
    <Input onChange={(e)=>{onchange_input(e)}} name='password' placeholder='Create New Password'/>
    <Button w='100%' backgroundColor={'gray'} onClick={()=>{console.log(user_data)}}>{!loading && "Login"} {loading && <Spinner/>}</Button>
    <Box textAlign={'center'}>Not Have account? 
   <Box display={'inline'} color='blue.600' textAlign={'center'} onClick={()=>{navigate("/register")}}> Signup Now</Box>     
    </Box>
    
    </Box> 
 </Box>
  )
}

export default Login