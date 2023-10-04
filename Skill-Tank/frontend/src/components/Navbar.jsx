import { Box, Flex, Grid, Heading, Img } from '@chakra-ui/react'
import React from 'react'
import {RxHamburgerMenu} from "react-icons/rx";
const Navbar = () => {
  return (
    <Box w={'80%'} position={'fixed'} marginLeft={'10%'}>

 
    <Grid  w={'100%'} m={'auto'} p={'30px'}  gridTemplateColumns={'repeat(3,1fr)'} backgroundColor={'white'} >
      <Flex gridTemplateColumns={'repeat(2,1fr)'} gap={'5px'} w={'100%'}>
        <Box><Img w={'30px'} src={'https://i.postimg.cc/jqm3zCcP/List-of-Top-10-Universities.webp'}/></Box>
        <Box><Heading fontSize={'24px'} fontWeight={'750'} >MR</Heading></Box>
        <Box><Heading fontSize={'23px'} fontWeight={'300'} marginLeft={'10px'} >|</Heading></Box>
        <Box fontSize={'11px'} w={'23%'} fontWeight={'500'}>Part of Times Higher Education</Box>
      </Flex>
      <Grid gridTemplateColumns={'repeat(4,1fr)'} fontWeight={'480'}>
        <Box>Home</Box>
        <Box>Mentors</Box>
        <Box>Compete</Box>
        <Box>Jobs</Box>
      </Grid>
      <Flex gap={'40px'} justifyContent={'end'} px={'30px'}>
        <Box>Login/Signup</Box>
        <RxHamburgerMenu size={'25'}/>
      </Flex>
        
     
    </Grid> 
      </Box>
  )
}

export default Navbar