import React from "react";
import SideMenu from "../Components/SideMenu";
import {
  Box,
  Flex,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import style from "./css/configur.module.css";
import DashBoard from "../Components/DashBoard";
const Configur = () => {
  return (
    <Box className={style.config_parent}>
      <Box position={"static"}>
        <SideMenu select_option={2} />
      </Box>
      <Box>
        <Box>
          <DashBoard
            Heading={"Sample Project"}
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
                  <Input />
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  <label> Welcome Message</label>
                  <Input />
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  <label>Input Placeholder</label>
                  <Input />
                  <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box className={style.general_parent2}>
                  <Box>
                    <label>Primary Color</label>
                    <Input />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Font Color</label>
                    <Input />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Font Size</label>
                    <Input />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Chat Height (in % of total screen)</label>
                    <Input />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Show Sources</label>
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                </Box>

                <Box className={style.config_heading1}>Chat Icon</Box>
                <Box className={style.general_parent2}>
                  <Box>
                    <label>Chat Icon Size</label>
                    <Input />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Position on Screen</label>
                    <Input />
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                  </Box>
                  <Box>
                    <label>Bot Icon</label>
                    <Box display={"flex"} gap={"10px"}>
                      <Box
                        w={"40px"}
                        h="40px"
                        backgroundColor={"gray"}
                        borderRadius={"50%"}
                      ></Box>
                      <Input type="file" />
                    </Box>
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
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
