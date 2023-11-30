import React, { useEffect, useState } from 'react'
import SideMenu from '../Components/SideMenu'
import { Box, Button, Input, Textarea } from '@chakra-ui/react'
import style from './css/edit.module.css'
import DashBoard from '../Components/DashBoard'
import { BiSolidPencil } from "react-icons/bi";
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Update_sub_project_axios } from '../Redux/subProjectReducer/subProjectReducer.action'
const Edit = () => {
  const [editActive,setEditActive]=useState(false);
  const { id } = useParams(); 
  const dispatch=useDispatch() ;
  const [edittext,setEdittext]=useState("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates maxime velit accusamus eligendi eius. Dolores perferendis officiis reiciendis repudiandae officia ex voluptatem repellat rerum veniam obcaecati, architecto nesciunt ad aspernatur?");
  useEffect(()=>{
 dispatch(Update_sub_project_axios(id,edittext))
  },[edittext])
  return (
    <Box className={style.edit_parent}>
    <Box><SideMenu select_option={"1"} /></Box>
    <Box  className={style.edit_heading_parent}>
    <DashBoard Heading={'Sample Project'} SubHeading="Transcript" />
    <Box className={style.edit_heading}>Edit Transcript
    {editActive && <Box className={style.edit_button}>
      <Button  onClick={()=>{setEditActive(!editActive)}}>Discard</Button>
      <Button  onClick={()=>{setEditActive(!editActive)}}>Save & edit</Button>
    </Box>}
    </Box>
    <Box  className={style.edit_box}>
      <Box className={style.edit_mode} onClick={()=>{setEditActive(!editActive)}}><BiSolidPencil color='white' size={"20"} />Edit Mode</Box>
   <input width={"700px"} height={'700px'} value={'hello'} />
   <Textarea  className={style.edit_textarea} value={edittext} variant={'filled'} placeholder='Here is a sample placeholder' />
    </Box>
    </Box>
 </Box>
  )
}

export default Edit