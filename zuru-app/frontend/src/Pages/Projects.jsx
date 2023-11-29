import React from 'react'
import SideMenu from '../Components/SideMenu'
import style from './css/project.module.css'
import { Box } from '@chakra-ui/react'
const Projects = () => {
  return (
   <Box className={style.project_parent}>
   <Box><SideMenu/></Box>
   <Box>hello</Box>
   </Box>
  )
}

export default Projects