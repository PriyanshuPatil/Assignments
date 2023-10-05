import { Box, Button, Grid, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Appoinment = () => {

  let data=[
    {"username":"Arun Sharma",
    "img":"https://media.istockphoto.com/id/1278976696/photo/mature-man-professor-standing-in-class.jpg?s=612x612&w=0&k=20&c=BBfO7aVkYBTNJ__MbRPXs2apYb4cyI3kJl9MZ2_alvc=",
    "title":"English Professor",
    "rating":"3.5/5",
    "location":"Indore"
  },
  {"username":"Vijay Rajput",
    "img":"https://media.istockphoto.com/id/1128666909/photo/portrait-of-smiling-professor-in-the-amphitheater.jpg?s=612x612&w=0&k=20&c=VPmUAihjhK99nA8nWjQKqontmylmDLbc1B5dl0E7rrc=",
    "title":"Biology Professor",
    "rating":"4.5/5",
    "location":"Bhopal"
  },
  {"username":"Amit Patel",
  "img":"https://media.istockphoto.com/id/1089058072/photo/adult-teacher-posing-on-blackboard.jpg?s=612x612&w=0&k=20&c=1Tc-vTDV3OjRI-nbtaKb2u-RTdw5FuTVxvKgW1sNJfE=",
  "title":"Maths Professor",
  "rating":"4.2/5",
  "location":"Ujjain"
},
{"username":"Zoya Khan",
"img":"https://media.istockphoto.com/id/1201409295/photo/smiling-university-professor-in-library.jpg?s=612x612&w=0&k=20&c=aY0VED-dvus24-4NQM5A0A-IhA5YLzItdDmPmlC7mNY=",
"title":"Computer Professor",
"rating":"4.5/5",
"location":"Banglore"
},
{"username":"Pooja Arora",
"img":"https://media.istockphoto.com/id/1286519342/photo/english-teacher-standing-at-board-explaining-lesson-to-students.jpg?s=612x612&w=0&k=20&c=CYOYfvkAeEtbF6dKKHahwZZntKGDeGUUposqH3jVKLk=",
"title":"English Professor",
"rating":"3.3/5",
"location":"Pune"
},
{"username":"Sunil Solanki",
"img":"https://media.istockphoto.com/id/675926198/photo/male-manager-taking-notes-in-home-office.jpg?s=612x612&w=0&k=20&c=xx2DsyGRfffRQhyuExx0Myt4HauIBKsJZZ5CkMsoXuA=",
"title":"Physics Professor",
"rating":"4.7/5",
"location":"Indore"
},
{"username":"Neha Jha",
"img":"https://media.istockphoto.com/id/1366724990/photo/smiling-computer-science-teacher-using-laptop-during-a-class-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=zVHFiRTY0aSu3zpDGM3jWV1sXBkPurXfr4GmClgvsiI=",
"title":"Biology Professor",
"rating":"4.9/5",
"location":"Delhi"
}

  ]

  const [profesor_data,setdata]=useState(data) ;  
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
   <Button mt='10px' onClick={()=>{navigate(`/book-appoinment/${"123"}`)}}>Book Appointment</Button>
   </Box>
   </Box>)
     })}
      </Grid>
      </Box>
  )
}

export default Appoinment