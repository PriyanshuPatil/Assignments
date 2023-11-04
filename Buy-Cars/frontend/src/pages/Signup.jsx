import { Box, Button, Heading, Image, Input, Spinner, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector ,useDispatch} from "react-redux";
import logo from "../assets/logo.jpg"
import img2 from "../assets/img2.jpg"
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../redux/authReducer/auth.action';
const Signup = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {loading,isAuth}=useSelector((store)=>store.Auth)
    const [user_data,setUserData]=useState({email:"",password:"",username:""});
    const toast=useToast()
    const onchange_input=(e)=>{
        let value=e.target.name;
        if(e.target.name=="username"){
    setUserData({...user_data,username:e.target.value})
        }else if(e.target.name=="email"){
          setUserData({...user_data,email:e.target.value})
        }else{
          setUserData({...user_data,password:e.target.value})
        }
       
    }
  return (
    <Box backgroundImage={`url(${img2})`}  h='700px' pt='30px'>
    <Box backgroundColor={'white'} borderRadius={'5%'} boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"} w='35%' p='30px' m='auto'  mt='5%' display={'grid'} gap='20px'>
    <Heading backgroundColor={'gray'} p='20px 10px' borderRadius={'50%'} color='white' w='80%' margin={'auto'} textAlign={'center'} fontSize={'30px'} fontWeight={'500px'}>Signup Form</Heading>
    <Image  src={logo} w='150px' m={'auto'} />
    <Input onChange={(e)=>{onchange_input(e)}} name='username' placeholder='Enter your Name'/>
    <Input onChange={(e)=>{onchange_input(e)}} name='email' placeholder='Enter your email Id'  />
    <Input onChange={(e)=>{onchange_input(e)}} name='password' placeholder='Create New Password'/>
    <Button w='100%' backgroundColor={'gray'} onClick={()=>{signup_fun(dispatch,registerUser,user_data,toast,navigate)}}>{!loading && "Signup"} {loading && <Spinner/>}</Button>
    <Box textAlign={'center'}>Already Account? 
   <Box display={'inline'} color='blue.600' textAlign={'center'} onClick={()=>{navigate("/login")}}> Login Now</Box>     
    </Box>
    
    </Box> 
 </Box>
  )
}

export default Signup ;

const signup_fun=(dispatch,registerUser,user_data,toast,navigate)=>{
  if(user_data.username!= "" && user_data.email!="" && user_data.password!=""){
dispatch(registerUser(user_data,toast,navigate))
  }else{
    toast({
      title: 'Empty Input.',
      description:'Please Provide all credentials',
      status:'error' ,
      duration: 2000,
      position:"top",
      isClosable: true,
    })
  }
  
}