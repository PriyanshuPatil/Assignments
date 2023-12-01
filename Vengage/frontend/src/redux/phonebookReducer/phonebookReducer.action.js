import axios from "axios";
import { DELETE_CONTACT_ERROR, DELETE_CONTACT_LOADING, DELETE_CONTACT_SUCCESS, GET_CONTACT_LOADING, GET_CONTACT_SUCCESS, GET_SINGLE_CONTACT_ERROR, GET_SINGLE_CONTACT_LOADING, GET_SINGLE_CONTACT_SUCCESS, POST_CONTACT_ERROR, POST_CONTACT_LOADING, POST_CONTACT_SUCCESS, UPDATE_CONTACT_ERROR, UPDATE_CONTACT_LOADING, UPDATE_CONTACT_SUCCESS } from "./phonebookReducer.type";
import { GET_PROJECT_ERROR } from "../../../../../zuru-app/frontend/src/Redux/projectReducer/project.actionType";

export const add_Contact_Axios = (data,toast) => async (dispatch) => {
  dispatch({ type: POST_CONTACT_LOADING});
  try {
    await axios.post(
      `http://localhost:3600/contact`,
      data
    );
    dispatch({
      type: POST_CONTACT_SUCCESS,
      payload: data,
    });
    toast({
      title: "Success",
      description: "New Contact SuccesFully Added.",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  } catch (err) {
    dispatch({ type: POST_CONTACT_ERROR });
  }
};




export const delete_Contact_Axios = (id,toast) => async (dispatch) => {
  dispatch({ type: DELETE_CONTACT_LOADING });
  try {
    await axios.delete(
      `http://localhost:3600/contact/${id}`
    );
    dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id });
    toast({
        title: "Success",
        description: "Contact SuccesFully Deleted.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
  } catch {
    dispatch({ type: DELETE_CONTACT_ERROR });
  }
};

export const update_Contact_Axios = (id, data,toast) => async (dispatch) => {
  dispatch({ type: UPDATE_CONTACT_LOADING });
  try {
    await axios.patch(
      `http://localhost:3600/contact/${id}`,
      data
    );
    dispatch({ type: UPDATE_CONTACT_SUCCESS,payload:{id:id,data:data} });
    toast({
        title: "Success",
        description: "Contact SuccesFully Updated.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
  } catch {
    dispatch({ type: UPDATE_CONTACT_ERROR });
  }
};

export const get_Contact_Axios = () => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOADING });
  await axios
    .get(
      `http://localhost:3600/contact`
    )
    .then((res) => {
      dispatch({ type: GET_CONTACT_SUCCESSS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PROJECT_ERROR });
    });
};

export const get_Single_Contact_Axios = (id) => async (dispatch) => {
    dispatch({ type: GET_SINGLE_CONTACT_LOADING });
    await axios
      .get(
        `http://localhost:3600/contact/${id}`
      )
      .then((res) => {
        dispatch({ type: GET_SINGLE_CONTACT_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_SINGLE_CONTACT_ERROR });
      });
  };
  