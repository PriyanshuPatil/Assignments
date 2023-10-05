import { Box, Button, Grid, Heading, Input, Select, Spinner, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useSelector ,useDispatch} from "react-redux";
import{ login,registerUser} from '../redux/authReducer/auth.action' ;
import { useNavigate } from 'react-router-dom';
const UserLogin = () => {
  const dispatch=useDispatch();
  const {loading,isAuth}=useSelector((store)=>store.Auth)
  const [login_active,setlogin]=useState(true);
  const [user_data,setUserData]=useState({email:"",password:"",username:"",admin:false});
  const toast=useToast()
  const navigate=useNavigate()
  const changeStatus=()=>{
    setlogin(!login_active)
  }
  const change_input=(e)=>{
    let value=e.target.name;
    if(e.target.name=="username"){
setUserData({...user_data,username:e.target.value})
    }else if(e.target.name=="email"){
      setUserData({...user_data,email:e.target.value})
    }else if(e.target.name=="category"){
      setUserData({...user_data,admin:e.target.value})
    }else{
      setUserData({...user_data,password:e.target.value})
    }
   
}
if(isAuth){
  navigate("/")
}
const login_call=()=>{
 if(login_active){
  dispatch(login(user_data,toast))
 }else{
  dispatch(registerUser(user_data,toast))
 }
}

  return (
   <Box pt={"60px"}  backgroundImage={"linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)"}>
   <Box h="530px">
   <Box borderRadius={'10px'} backgroundColor={'white'} w='30%' m='auto' mt='120px' p='30px'>
   <Heading textAlign={'center'} p={'10px'} fontSize={'30px'} fontWeight={'600'}>{login_active?"Loging Form":"Signup Form"}</Heading>
  <Grid w='90%' m='auto' gridTemplateColumns={'repeat(2,1fr)'}>
  <Button onClick={()=>{changeStatus()}} mt='20px' w='100%' textAlign={'center'} color={!login_active?"black":"white"} p='25px' _hover={{color:!login_active?"black":"white"}} backgroundColor={"white"} fontSize={'18px'} backgroundImage={!login_active?"white":"linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)"} border={"0.1px solid gray"} borderRadius={'2px'}>Login</Button> 
  <Button onClick={()=>{changeStatus()}}  mt='20px' w='100%'  textAlign={'center'} color={login_active?"black":"white"} p='25px' _hover={{color:login_active?"black":"white"}} fontSize={'18px'} backgroundImage={login_active?"none":"linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)"} border={"0.1px solid gray"}  borderRadius={'2px'}>Signup</Button>   
  </Grid>
  <Box w="90%" m='auto' mt='20px'>
   <Input name='email'  onChange={(e)=>{change_input(e)}} placeholder='Email Address' mt='10px' p='20px' />
   {!login_active && 
  <Input name='username'  onChange={(e)=>{change_input(e)}} placeholder='Username' mt='10px' p='20px' />
  }
  <Input name='password' onChange={(e)=>{change_input(e)}} placeholder='Password' mt='10px' p='20px' />
  {!login_active && 
  <Select name='category' placeholder='Select Category'  onChange={(e)=>{change_input(e)}}  mt='10px'>
  <option value='false'>Student</option>
  <option value='true'>Company</option>
</Select>
}
  {login_active && 
  <Box  mt='10px' fontSize={'16px'} color='gray' ml='10px' fontWeight={'450'} onClick={() =>
    toast({
      title: 'New Message',
      description: "We are working on it.",
      status: 'info',
      position:"top",
      duration: 2000,
      isClosable: true,
    })
  }>Forget password?</Box>
  }
  <Button onClick={()=>{login_call()}} mt='20px' w='100%' textAlign={'center'} color={"white"} p='25px' _hover={"white"} backgroundColor={"white"} fontSize={'18px'} backgroundImage={"linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)"} border={"0.1px solid gray"} borderRadius={'2px'}>{!loading && login_active?"Login":"Signup"} {loading && <Spinner/>} </Button> 
  {login_active && 
  <Box mt='20px' textAlign={'center'}>Not a member?<span onClick={()=>{changeStatus()}} style={{color:"gray"}} > Signup now</span> </Box> 
  }
  {!login_active && 
  <Box mt='20px' textAlign={'center'}>Allready a member?<span onClick={()=>{changeStatus()}} style={{color:"gray"}} > Login now</span> </Box> 
  }
  
  </Box>
  
   </Box>
    </Box>
   </Box>
  )
}

export default UserLogin