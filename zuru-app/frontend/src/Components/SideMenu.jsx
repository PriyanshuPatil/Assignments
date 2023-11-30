import React, { useState } from 'react'
import style from './css/SideMenu.module.css'
import { Box, useToast } from '@chakra-ui/react'
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const SideMenu = ({ select_option = 0 }) => {
   const [active_number, set_active_number] = useState(select_option);
   const navigate = useNavigate();
   const toast=useToast()
   return (
      <Box className={style.sidemenu_parent}>
         <Box className={style.sidemenu_logo} >
            <Box className={style.sidemenu_logo_div}><img src={"https://i.postimg.cc/rFymdVwP/logois4.png"} /></Box>
         </Box>
         <Box className={style.sidemenu_child}>
            <Box className={style.sidemenu_option}>
               Podcast Upload Flow
            </Box>
            <Box className={style.sidemenu_list}>
               <Box className={active_number != 1 ? style.sidemenu_listitem : style.sidemenu_listitem2} onClick={() => { set_active_number(1);navigate("/") }}>
                  <Box className={active_number != 1 ? style.sidemenu_counting : style.sidemenu_counting2}>1</Box>
                  Projects
               </Box>
               <Box className={active_number != 2 ? style.sidemenu_listitem : style.sidemenu_listitem2} onClick={() => { set_active_number(2);navigate("/configur") }}>
                  <Box className={active_number != 2 ? style.sidemenu_counting : style.sidemenu_counting2}>2</Box>
                  Widget Configurations
               </Box>
               <Box className={active_number != 3 ? style.sidemenu_listitem : style.sidemenu_listitem1} onClick={() => { set_active_number(3); 
               toast({
                  title: "Not Lounched Yet",
                  description: "We are Working On It",
                  status: "info",
                  duration: 2000,
                  position: "top",
                  isClosable: true,
                }); }}>
                  <Box className={active_number != 3 ? style.sidemenu_counting : style.sidemenu_counting1}>3</Box>
                  Deployment
               </Box>
               <Box className={active_number != 4 ? style.sidemenu_listitem : style.sidemenu_listitem1} onClick={() => { set_active_number(4);toast({
        title: "Not Lounched Yet",
        description: "We are Working On It",
        status: "info",
        duration: 2000,
        position: "top",
        isClosable: true,
      }); }}>
                  <Box className={active_number != 4 ? style.sidemenu_counting : style.sidemenu_counting1}>4</Box>
                  Pricing
               </Box>
            </Box>
         </Box>

         <Box>
            <Box className={active_number == 5 ? style.sidemenu_listitem4 : style.sidemenu_listitem5} onClick={() => { set_active_number(5) }}>
               <Box onClick={() => { navigate("/setting") }} className={active_number == 5 ? style.sidemenu_counting4 : style.sidemenu_counting5}><Box><IoSettingsOutline size='20' width={"40px"} height={'10px'} color='white' />
               </Box>Settings
               </Box></Box>
         </Box>
      </Box>
   )
}

export default SideMenu