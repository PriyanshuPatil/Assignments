import React, { useState } from "react";
import style from "./css/profile.module.css";
import SideMenu from "../Components/SideMenu";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import DashBoard from "../Components/DashBoard";
import { useSelector } from "react-redux";
const Profile = () => {
  const { loading, userData } = useSelector((store) => store.Auth);
  const [userdata, setUserData] = useState({
    name: userData.name,
    email: userData.email,
  });
  return (
    <Box className={style.profile_parent}>
      <Box>
        <SideMenu select_option={5} />
      </Box>
      <Box>
        <Box>
          <DashBoard Heading={"Account Setting"} SubHeading={""} />
        </Box>
        <Box className={style.profile_heading_parent}>
          <Box className={style.profile_heading}>Account Settings</Box>
          <Box className={style.profile_content}>
            <Box>
              <img src="data:image/png;base64,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" />
            </Box>
            <Box>
              {" "}
              <Text mb="8px">Name: </Text>
              <Input
                fontSize={"16px"}
                h={"50px"}
                placeholder="Enter Name"
                size="sm"
                value={userdata.name}
                onChange={(e) => {
                  setUserData({ ...userdata, name: e.target.value });
                }}
              />
            </Box>
            <Box>
              {" "}
              <Text mb="8px">Email: </Text>
              <Input
                fontSize={"16px"}
                h={"50px"}
                placeholder="Enter Email"
                size="sm"
                value={userdata.email}
                onChange={(e) => {
                  setUserData({ ...userdata, email: e.target.value });
                }}
              />
            </Box>
          </Box>
          <Box className={style.profile_heading2}>Subscriptions</Box>
          <Box className={style.profile_heading2_content}>
            You are currently on the Ques
            <label className={style.profile_heading2_label}>
              {" "}
              AI Basic Plan!
            </label>{" "}
            <Button ml="400px">Upgrade</Button>
          </Box>
          <Box
            color={"red"}
            mt="10px"
            fontWeight={"500"}
            textDecoration={"underline"}
          >
            Cancel Subscription
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
