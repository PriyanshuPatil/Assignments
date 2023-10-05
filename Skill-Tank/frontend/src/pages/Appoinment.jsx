import { Box, Button, Grid, Heading, Input, Select, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate ,useParams} from 'react-router-dom';
const Appoinment = () => {
  const { id } = useParams(); 
  const [booking_data,setdata]=useState([]) ;  


const get_data=async()=>{
  axios
  .get(`https://enchanting-teal-llama.cyclic.cloud/booking`)
  .then((res) => {
  setdata(res.data)
  })
  .catch((err) => {
      toast({
          title: 'Data Loading Failed.',
          description: err.message,
          status: 'error',
          duration: 2000,
          position:"top",
          isClosable: true,
        })
  });
}
useEffect(()=>{get_data()},[])
const {loading,isAuth}=useSelector((store)=>store.Auth)
 
  const [appoinment,setAppinment]=useState({username:"",date:"",time:"",user:"demo",title:""});
  const navigate=useNavigate();
  const toast=useToast()
  return (
    <Box pt={"130px"} w={"80%"} m="auto">
     <Heading w='30%' m='auto' fontSize={'16px'} backgroundColor={'yellow'} p='10px' textAlign={'center'} >Appoinment Booked By user:-</Heading>
    <Grid mt='20px'  gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="50px">
     {booking_data.map((el)=>{
   return (
   <Box id={el.title} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
   <Box>
    {/* <img src={el.img} /> */}
   </Box>
   <Box textAlign={'center'} p='30px'>
   <Heading fontSize={'23px'} mt='10px'>{el.username}</Heading>
   <Box mt='10px'>{el.date}</Box>
   <Box mt='10px'>{el.time}</Box>
   <Box mt='10px'>{el.name}</Box>
   </Box>
   </Box>)
     })}
      </Grid>
      </Box>
  )
}

export default Appoinment ;