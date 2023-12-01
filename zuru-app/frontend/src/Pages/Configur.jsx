import React, { useEffect, useState } from "react";
import SideMenu from "../Components/SideMenu";
import {
  Box,
  Button,
  Flex,
  Input,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";

import style from "./css/configur.module.css";
import DashBoard from "../Components/DashBoard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Get_project_axios } from "../Redux/projectReducer/project.action";
import { useNavigate, useParams } from "react-router-dom";
const Configur = () => {
  const toast = useToast()
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [projectData, setprojectData] = useState({});
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(true);
  const [image_url, setImageUrl] = useState("h");
  const [changeProjectData, setData] = useState({ welcome_message: "", chatbot_name: "", input_placeholder: "" });
  const { id } = useParams()
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const navigate = useNavigate()
  const handleUpload = async () => {
    setLoading(true)
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', "qvw8nfib");

    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dzo614gts/image/upload', formData);
      setImageUrl(response.data.secure_url);

      ; update_project(id, response.data.secure_url);
      setLoading(false)
    } catch (error) {
      console.error('Error uploading image:', error);
      setLoading(false)
    }
  };
  useEffect((id) => { if (id != undefined) { get_project(id) } }, [])

  const get_project = async () => {
    try {
      let res = await axios.get(`https://enchanting-teal-llama.cyclic.cloud/project/${id}`);
      setprojectData(res.data);
    } catch (err) {
      console.log(err.data)
    }
  }

  const update_project = async (id, link) => {
    if (id != undefined) {
      try {
        let res = await axios.get(`https://enchanting-teal-llama.cyclic.cloud/project/${id}?link=${link}`);
      } catch (err) {
        console.log(err.data)
      }
    }

  }

  if (loading) {
    return <Box><Spinner size='lg' mt={'30%'} ml={'40%'} /></Box>
  }
  return (
    <Box className={style.config_parent}>
      <Box position={"static"}>
        <SideMenu select_option={2} />
      </Box>
      <Box>
        <Box>
          <DashBoard
            Heading={projectData.name ? projectData.name : "Sample Project"}
            SubHeading={"Widget Configuration"}
          />
        </Box>
        <Box className={style.config_heading_parent}>
          <Box className={style.config_heading}>Configuration</Box>
          <Tabs>
            <TabList mt="3px" fontSize={"21px"}>
              <Tab fontWeight={"600"} mt="20px">
                General
              </Tab>
              <Tab fontWeight={"600"} mt="20px">
                Display
              </Tab>
              <Tab fontWeight={"600"} mt="20px">
                Advanced
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box className={style.general_parent}>
                  <label>Chatbot Name</label>
                  <Input onChange={(e) => { setprojectData({ ...projectData, chatbot_name: e.target.value }) }} value={projectData.chatbot_name} />
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  <label> Welcome Message</label>
                  <Input onChange={(e) => { setprojectData({ ...projectData, welcome_message: e.target.value }) }} value={projectData.welcome_message} />
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  <label>Input Placeholder</label>
                  <Input onChange={(e) => { setprojectData({ ...projectData, input_placeholder: e.target.value }) }} value={projectData.input_placeholder} />
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box className={style.general_parent2}>
                  <Box>
                    <label>Primary Color</label>
                    <Input value={"#000"} />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Font Color</label>
                    <Input value={"green"} />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Font Size</label>
                    <Input value={"22px"} />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Chat Height (in % of total screen)</label>
                    <Input value={"50px"} />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Show Sources</label>
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                </Box>

                <Box className={style.config_heading1}>Bot Icon</Box>
                <Box className={style.general_parent2}>
                  <Box>
                    <Box display={"flex"} gap={"10px"}>
                      {active && <Box w={"50px"}
                        h="50px"
                        backgroundColor={"gray"}
                        borderRadius={"50%"}
                      ></Box>}
                      {!active && <img
                        width={"100px"}
                        height="100px" src={image_url}
                        backgroundColor={"gray"}
                        style={{ borderRadius: "100%" }}
                      ></img>}
                      {active &&
                        <input type="file" w='10px' onChange={handleFileChange} />}
                      <Button backgroundColor={'blueviolet'} _hover={{ backgroundColor: 'black' }} color={'white'} onClick={() => {
                        if (selectedFile == null) {
                          toast({
                            title: "Error",
                            description: "Plz Select File ",
                            status: "error",
                            duration: 2000,
                            position: "top",
                            isClosable: true,
                          });
                        } else {
                          handleUpload(); setActive(false)
                        }
                      }}>Upload Image</Button>
                    </Box>
                    <p style={{ fontSize: "10px", marginLeft: "70px", marginTop: "-20px" }}>Recommended Size 48x48px </p>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <p>Thanks For giving Your Precious Time!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default Configur;
