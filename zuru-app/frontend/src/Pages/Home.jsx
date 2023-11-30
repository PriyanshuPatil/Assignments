import { Box, Button, FormControl, FormLabel, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import style from './Css/home.module.css'
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io"
import { BsFillPlusCircleFill } from "react-icons/bs";
import ProjectData from '../Components/ProjectData';
import { useSelector ,useDispatch} from "react-redux";
import { Add_project_axios, Get_project_axios } from '../Redux/projectReducer/project.action';
import { login } from '../Redux/authReducer/auth.action';
const Home = () => {
    const [isActive, toggleProject] = useState(false);
    const [login_model, modelStatus] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [login_data, setLoginData] = useState({email:"",name:""});
    const { isOpen1, onOpen1, onClose1 } = useDisclosure()
    const toast = useToast()
    const [singleProject, setSingleProject] = useState({ name:"Sample Project",
    episodes:"0",
    chatbot_name:"xyz",
    welcome_message:"hey!",
    input_placeholder:"whats up ?",
     image_url:"https://i.postimg.cc/nc5LXz1k/logois3.png"}) ;
    const {loading,projectData}=useSelector((store)=>store.Project)
    const dispatch=useDispatch()
    useEffect(()=>{
   dispatch(Get_project_axios())
    },[])
    if(loading){
        return <Spinner/>
    }
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
            {projectData.length==0 &&
            <Box>
                <Heading className={style.heading}>Create a New Project</Heading>
                <Box className={style.metting_image}><img src={"https://i.postimg.cc/mrf7Gsg2/logois2.png"} /></Box>
                <Box className={style.metting_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labons nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</Box>
                <Box className={style.project_button}><Button onClick={onOpen} w='100%' color={'white'} backgroundColor={'black'} padding='25px' fontSize={'21px'} _hover={{ backgroundColor: "gray.300" }}><Box><BsFillPlusCircleFill color='white' /></Box>Create New Project</Button></Box>
            </Box> }
          {/* Default HomePage Data if initial Project Data Is Not Present */}
          {projectData.length!=0 &&   <Box className={style.project_parent}>
                <Box>
               <Box className={style.project_heading_parent}>
               <Heading className={style.project_heading}>Projects</Heading>
               <Box className={style.project_heading_button}><Button onClick={onOpen} w='100%' color={'white'} backgroundColor={'black'} padding='22px' fontSize={'19px'} _hover={{ backgroundColor: "gray.300" }}><Box><BsFillPlusCircleFill color='white' /></Box>Create New Project</Button></Box>
              </Box>
              <Box><ProjectData Data={projectData}/></Box>
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
                            <Input onChange={(e)=>setSingleProject({...singleProject,name:e.target.value})} placeholder='Type Name' fontSize={'15px'} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter gap={'20px'}>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button colorScheme='blue' mr={3} onClick={()=>{dispatch(Add_project_axios(singleProject)),onClose()}}>
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
           {login_model && 
           <Modal     isOpen={login_model}
           onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent mt='200px'>
                    <ModalHeader fontWeight={'700'}>Create Project</ModalHeader>
                    <ModalCloseButton  onClick={()=>{modelStatus(false)}} />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel color={'gray'} fontSize={'13px'}>Enter Email</FormLabel>
                            <Input onChange={(e)=>{setLoginData({...login_data,email:e.target.value})}} placeholder='Type Email' fontSize={'15px'} />
                            <FormLabel color={'gray'} fontSize={'13px'}>Enter Name</FormLabel>
                            <Input onChange={(e)=>{setLoginData({...login_data,name:e.target.value})}} placeholder='Type Name' fontSize={'15px'} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter gap={'20px'}>
                        <Button colorScheme='blue' mr={3} onClick={()=>{modelStatus(false);dispatch(login(login_data,toast))}}>
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
           } 
        </>
    )
}

export default Home

// { "name":"Sample Project",
//     "episodes":"4",
//     "chatbot_name":"xyz",
//     "welcome_message":"hey!",
//     "input_placeholder":"whats up ?",
//     "image_url":""}