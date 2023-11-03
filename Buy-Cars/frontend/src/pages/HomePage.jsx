import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Image } from '@chakra-ui/react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
const HomePage = () => {
  return (
   <>
   <Navbar/>
   <Image src={img1} h={'720px'} w='100%' />
   </>
  )
}

export default HomePage