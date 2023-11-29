import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import style from './Css/home.module.css'
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io"
import { BsFillPlusCircleFill } from "react-icons/bs";
import ProjectData from '../Components/ProjectData';
const Home = () => {
    const [isActive, toggleProject] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [project_name,set_project_name] = useState("")
    const [project_data, setProjectData] = useState([])
    return (
        <>
            <Box className={style.nav_parent} >
                <Box className={style.nav_logo_div}><img src={"https://i.postimg.cc/nc5LXz1k/logois3.png"} /></Box>
                <Box className={style.nav_icon_div}>
                    <IoSettingsOutline size={'35'} />
                    <IoMdNotificationsOutline size={'35'} />
                </Box>
            </Box>
            {/* Default HomePage Data if initial Project Data Is Not Present */}
            {project_data.length==0 &&
            <Box>
                <Heading className={style.heading}>Create a New Project</Heading>
                <Box className={style.metting_image}><img src={"https://i.postimg.cc/mrf7Gsg2/logois2.png"} /></Box>
                <Box className={style.metting_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labons nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</Box>
                <Box className={style.project_button}><Button onClick={onOpen} w='100%' color={'white'} backgroundColor={'black'} padding='25px' fontSize={'21px'} _hover={{ backgroundColor: "gray.300" }}><Box><BsFillPlusCircleFill color='white' /></Box>Create New Project</Button></Box>
            </Box> }
          {/* Default HomePage Data if initial Project Data Is Not Present */}
          {project_data.length!=0 &&
            <Box className={style.project_parent}>
                <Box>
               <Box className={style.project_heading_parent}>
               <Heading className={style.project_heading}>Projects</Heading>
               <Box className={style.project_heading_button}><Button onClick={onOpen} w='100%' color={'white'} backgroundColor={'black'} padding='22px' fontSize={'19px'} _hover={{ backgroundColor: "gray.300" }}><Box><BsFillPlusCircleFill color='white' /></Box>Create New Project</Button></Box>
              </Box>
              <Box><ProjectData Data={project_data}/></Box>
            </Box> 
            </Box>
             }

           {/* Add New Project Popup Model*/}
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent mt='200px'>
                    <ModalHeader fontWeight={'700'}>Create Project</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel color={'gray'} fontSize={'13px'}>Enter Project Name</FormLabel>
                            <Input onChange={(e)=>set_project_name(e.target.value)} placeholder='Type Name' fontSize={'15px'} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter gap={'20px'}>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button colorScheme='blue' mr={3} onClick={()=>{setProjectData([...project_data,{name:project_name,episodes:0,last_edit:Date.now()}]),onClose()}}>
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    )
}

export default Home