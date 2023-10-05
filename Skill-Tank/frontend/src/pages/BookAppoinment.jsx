
import { Box, Button, Grid, Heading, Input, Select, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const BookAppoinment = () => {
  let data={"username":"Neha Jha",
  "img":"https://media.istockphoto.com/id/1366724990/photo/smiling-computer-science-teacher-using-laptop-during-a-class-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=zVHFiRTY0aSu3zpDGM3jWV1sXBkPurXfr4GmClgvsiI=",
  "title":"Biology Professor",
  "rating":"4.9/5",
  "location":"Delhi"}

const booking=async(cred)=>{
  axios
  .post(`http://localhost:3500/user`, cred)
  .then((res) => {
    toast({
      title: 'Booking Done',
      description: "Your Appoingment is Succesfully bookes.",
      status: 'success',
      duration:2000,
      position:"top",
      isClosable: true,
    })
  })
  .catch((err) => {
      toast({
          title: 'Booking Failed.',
          description: err.message,
          status: 'error',
          duration: 2000,
          position:"top",
          isClosable: true,
        })
  });
}
const {loading,isAuth}=useSelector((store)=>store.Auth)
  const [profesor_data,setdata]=useState(data) ;  
  const [appoinment,setAppinment]=useState({username:"",date:"",time:"",user:profesor_data.email,title:""});
  const navigate=useNavigate();
  const toast=useToast()
const on_change=(e)=>{
if(e.target.name=="date"){
  setAppinment({...appoinment,date:e.target.value,title:profesor_data.title,username:profesor_data.username})
}else if(e.target.name=="time"){
  setAppinment({...appoinment,time:e.target.value,title:profesor_data.title,username:profesor_data.username})
}else{
  console.log("hii")
}

}
  return (
    <Box pt={"100px"} w={"30%"} m="auto">
      <Heading w='70%' m='auto' fontSize={'16px'} backgroundColor={'yellow'} p='10px' textAlign={'center'} >Book Appoinment</Heading>
    <Grid mt='10px' gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(1,1fr)",lg:"repeat(1,1fr)"}} gap="50px">
     
   <Box id={profesor_data.title} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
   <Box>
    <img src={profesor_data.img} />
   </Box>
   <Box textAlign={'center'} p='20px'>
   <Heading fontSize={'23px'} mt='10px'>{profesor_data.username}</Heading>
   <Input type='date' mt='10px' name='date' onChange={(e)=>{on_change(e)}} />
   <Select mt='10px' name="time"  onChange={(e)=>{on_change(e)}} >
    <option value="9:00-10:00 am">9:00-10:00 am</option>
    <option value="10:00-11:00 am">10:00-11:00 am</option>
    <option value="11:00-12:00 pm">11:00-12:00 pm</option>
    <option value="12:00-1:00 pm">12:00-1:00 pm</option>
    <option value="1:00-2:00 pm">1:00-2:00 pm</option>
    <option value="2:00-3:00 pm">2:00-3:00 pm</option>
    <option value="3:00-4:00 pm">3:00-4:00 pm</option>
    <option value="4:00-5:00 pm">4:00-5:00 pm</option>
   </Select>
   <Button mt='10px' onClick={()=>{
  //  navigate("/");
  toast({
    title: 'Booked Successfully',
    description: "Your Appoinment is done",
    status: 'success',
    position:"top",
    duration: 2000,
    isClosable: true,
  })
  //  console.log(appoinment);

   }}>Confirm</Button>
   </Box>
   </Box>
      </Grid>
      </Box>
  )
}

export default BookAppoinment