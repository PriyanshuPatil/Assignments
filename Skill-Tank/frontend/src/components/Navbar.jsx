import { Box, Flex, Grid, Heading, Img, Menu, MenuButton, MenuItem, MenuList, useToast } from '@chakra-ui/react'
import React from 'react'
import {RxHamburgerMenu} from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/authReducer/auth.action';
import { LOGOUT_USERS_SUCCESS } from '../redux/authReducer/auth.actionType';
const Navbar = () => {
  const navigate=useNavigate();
  const {loading,isAuth,userData}=useSelector((store)=>store.Auth);
  const toast=useToast();
  const dispatch=useDispatch()
  return (
    <Box w="100%" backgroundColor={'white'} position={'fixed'} >
<Box  w={'80%'} ml={'10%'}>
 
    <Grid  w={'100%'} m={'auto'} p={'30px'}  gridTemplateColumns={'repeat(3,1fr)'} backgroundColor={'white'} >
      <Flex gridTemplateColumns={'repeat(2,1fr)'} gap={'5px'} w={'100%'} onClick={()=>{navigate("/")}}>
        <Box><Img w={'30px'} src={'https://i.postimg.cc/jqm3zCcP/List-of-Top-10-Universities.webp'}/></Box>
        <Box><Heading fontSize={'24px'} fontWeight={'750'} >MR</Heading></Box>
        <Box><Heading fontSize={'23px'} fontWeight={'300'} marginLeft={'10px'} >|</Heading></Box>
        <Box fontSize={'11px'} w={'23%'} fontWeight={'500'}>Part of Times Higher Education</Box>
      </Flex>
      <Grid gridTemplateColumns={'repeat(4,1fr)'} fontWeight={'480'}>
        <Box>Home</Box>
        <Box onClick={()=>{
          if(!isAuth){
             toast({
              title: 'Login First',
              description: "Please Login First",
              status: 'info',
              position:"top",
              duration: 2000,
              isClosable: true,
            })
             navigate('/user/authentication') ;
          }else{
            navigate('/mentors') ;
          }
         
          
          }}>Mentors</Box>
        <Box onClick={()=>{navigate('/appoinment')}}>Compete</Box>
        <Box>Jobs</Box>
      </Grid>
      <Flex gap={'40px'} justifyContent={'end'} px={'30px'}>
        <Box>
        {!isAuth &&
        <Menu >
  <MenuButton _hover={"active"}>Login/Signup</MenuButton>
  <MenuList>
    <MenuItem as='a' onClick={()=>{navigate('/user/authentication')}}>Student Login/Signup</MenuItem>
    <MenuItem as='a'  onClick={()=>{navigate('/admin/authentication')}}>Company Login/Signup</MenuItem>
  </MenuList>
</Menu>}
{isAuth && <Box>{userData.email}</Box>}

        </Box>
        {isAuth && <Box onClick={()=>{dispatch({ type: LOGOUT_USERS_SUCCESS }) }}>Logout</Box>}
        {!isAuth &&  <Menu mt='-40px'>
  <MenuButton ><RxHamburgerMenu size={'25'}/></MenuButton>
  <MenuList>
    <MenuItem as='a' onClick={()=>{navigate('/user/authentication')}}>Student Login/Signup</MenuItem>
    <MenuItem as='a'  onClick={()=>{navigate('/admin/authentication')}}>Company Login/Signup</MenuItem>
  </MenuList>
</Menu>}
      </Flex>
        
     
    </Grid> 
    </Box>  </Box>
  )
}

export default Navbar