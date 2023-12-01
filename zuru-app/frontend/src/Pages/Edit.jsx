import React, { useEffect, useState } from "react";
import SideMenu from "../Components/SideMenu";
import { Box, Button, Input, Textarea, useToast } from "@chakra-ui/react";
import style from "./css/edit.module.css";
import DashBoard from "../Components/DashBoard";
import { BiSolidPencil } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Get_sub_project_axios,
  Update_sub_project_axios,
} from "../Redux/subProjectReducer/subProjectReducer.action";
import axios from "axios";
const Edit = () => {
  const [editActive, setEditActive] = useState(false);
  const { id } = useParams();
  const toast = useToast()
  const dispatch = useDispatch();
  const { subProjectData, single } = useSelector((store) => store.SubProject);
  const [edittext, setEdittext] = useState(single);
  useEffect(() => {
    axios
      .get(`https://enchanting-teal-llama.cyclic.cloud/podcast/${id}`)
      .then((res) => {
        setEdittext(res.data.link);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch(Get_sub_project_axios(id));
  }, []);
  return (
    <Box className={style.edit_parent}>
      <Box>
        <SideMenu select_option={"1"} />
      </Box>
      <Box className={style.edit_heading_parent}>
        <DashBoard Heading={"Sample Project"} SubHeading="Transcript" />
        <Box className={style.edit_heading}>
          Edit Transcript
          {editActive && (
            <Box className={style.edit_button}>
              <Button
                onClick={() => {
                  setEditActive(!editActive);
                }}
              >
                Discard
              </Button>
              <Button
                onClick={() => {
                  setEditActive(!editActive);
                  dispatch(Update_sub_project_axios(id, edittext, toast));
                }}
              >
                Save & edit
              </Button>
            </Box>
          )}
        </Box>
        <Box className={style.edit_box}>
          <Box
            className={style.edit_mode}
            onClick={() => {
              setEditActive(!editActive);
            }}
          >
            <BiSolidPencil color="white" size={"20"} />
            Edit Mode
          </Box>
          {editActive && (
            <textarea
              style={{
                width: "95%",
                marginLeft: "2%",
                marginTop: "2%",
                height: "80%",
                textAlign: "top",
                outline: "none",
              }}
              onChange={(e) => {
                setEdittext(e.target.value);
              }}
              value={edittext}
            />
          )}
          {editActive == false && (
            <Box
              style={{
                width: "95%",
                marginLeft: "2%",
                marginTop: "2%",
                height: "80%",
                textAlign: "top",
                border: "0px",
              }}
              onChange={(e) => {
                setEdittext(e.target.value);
              }}
            >
              {edittext}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Edit;
