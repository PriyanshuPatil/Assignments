import { Box, Button, Grid, Heading, Toast, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Mentors = () => {
const toast=useToast()
  const [profesor_data,setdata]=useState([]) ; 
  const getMentor=async(cred)=>{
    axios
    .get(`https://enchanting-teal-llama.cyclic.cloud/appoinment`)
    .then((res) => {
     setdata(res.data)
    })
    .catch((err) => {
        toast({
            title: 'Error.',
            description: err.message,
            status: 'error',
            duration: 2000,
            position:"top",
            isClosable: true,
          })
    });
  }
 useEffect(()=>{getMentor()},[])
  const navigate=useNavigate()
  return (
    <Box pt={"130px"} w={"80%"} m="auto">
     <Heading w='30%' m='auto' fontSize={'16px'} backgroundColor={'yellow'} p='10px' textAlign={'center'} >Appoinment Available:-</Heading>
    <Grid mt='20px'  gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap="50px">
     {profesor_data.map((el)=>{
   return (
   <Box id={el.title} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
   <Box>
    <img src={el.img} />
   </Box>
   <Box textAlign={'center'} p='30px'>
   <Heading fontSize={'23px'} mt='10px'>{el.username}</Heading>
   <Box mt='10px'>{el.title}</Box>
   <Box mt='10px'>{el.location}</Box>
   <Box mt='10px'>{el.rating}</Box>
   <Button mt='10px' onClick={()=>{navigate(`/book-appoinment/${el._id}`)}}>Book Appointment</Button>
   </Box>
   </Box>)
     })}
      </Grid>
      </Box>
  )
}

export default Mentors