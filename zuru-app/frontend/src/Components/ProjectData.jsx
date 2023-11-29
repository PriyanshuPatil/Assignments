import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import style from './css/ProjectData.module.css'
const ProjectData = ({Data}) => {
    const name_logo=[] ;
  return (
    <Box  className={style.project_parent}>
    {Data.map((el,index)=>{
   return <Box className={style.project_child}>
   <Box backgroundColor={index%4==0?"blue":index%3==0?"orange":index%2==0?"purple":"gray"} >{el.name.split(" ").length==1 ? <Box>{el.name.split(" ")[0][0].toUpperCase()}</Box> :<Box>{el.name.split(" ")[0][0].toUpperCase()+el.name.split(" ")[1][0].toUpperCase()}</Box>} </Box>
    <Box className={style.project_data}>
        <Box>{el.name}</Box>
        <Box>{el.episodes} Episodes</Box>
        <Box>Last Edited on {el.last_edit}</Box>
    </Box>
   </Box>
    })}
    </Box>
  )
}

export default ProjectData