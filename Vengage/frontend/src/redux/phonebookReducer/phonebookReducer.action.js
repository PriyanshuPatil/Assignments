import axios from "axios";
import {
  DELETE_CONTACT_ERROR,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACT_ERROR,
  GET_CONTACT_LOADING,
  GET_CONTACT_SUCCESS,
  GET_SINGLE_CONTACT_ERROR,
  GET_SINGLE_CONTACT_LOADING,
  GET_SINGLE_CONTACT_SUCCESS,
  POST_CONTACT_ERROR,
  POST_CONTACT_LOADING,
  POST_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
  UPDATE_CONTACT_LOADING,
  UPDATE_CONTACT_SUCCESS,
} from "./phonebookReducer.type";
import { GET_PROJECT_ERROR } from "../../../../../zuru-app/frontend/src/Redux/projectReducer/project.actionType";

export const add_Contact_Axios = (data, toast, setEdit) => async (dispatch) => {
  const datais = {
    storage: data.storage,
    first_name: data.first_name,
    last_name: data.last_name,
    phone_number: data.phone_number,
    email: data.email,
    home: data.home,
    image:
      data.image == ""
        ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaHmgseRqO6CI14XWSh5swCN19tzNhtgptvg&usqp=CAU"
        : data.image,
    mobile_number: data.mobile_number,
  };
  if (datais.first_name == "" || datais.phone_number == "") {
    toast({
      title: "Alert",
      description: "Please Provide All Credentials",
      status: "info",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  } else if (datais.phone_number.length != 10) {
    toast({
      title: "Alert",
      description: "Plese Provide 10 digit mobile number",
      status: "info",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  } else {
    dispatch({ type: POST_CONTACT_LOADING });
    try {
      await axios.post(
        `https://enchanting-teal-llama.cyclic.cloud/contact`,
        datais
      );
      dispatch({
        type: POST_CONTACT_SUCCESS,
        payload: datais,
      });
      setEdit(false);
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
  }
};

export const delete_Contact_Axios =
  (id, toast, setchangeDetails) => async (dispatch) => {
    dispatch({ type: DELETE_CONTACT_LOADING });
    try {
      await axios.delete(`https://enchanting-teal-llama.cyclic.cloud/contact/${id}`);
      dispatch({ type: DELETE_CONTACT_SUCCESS, payload: id });
      toast({
        title: "Success",
        description: "Contact SuccesFully Deleted.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setchangeDetails(false);
    } catch {
      dispatch({ type: DELETE_CONTACT_ERROR });
    }
  };

export const update_Contact_Axios =
  (id, data, toast, setchangeDetails) => async (dispatch) => {
    if (data.first_name == "" || data.phone_number == "") {
      toast({
        title: "Alert",
        description: "Please Provide All Credentials",
        status: "info",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } else {
      dispatch({ type: UPDATE_CONTACT_LOADING });
      try {
        await axios.patch(
          `https://enchanting-teal-llama.cyclic.cloud/contact/${id}`,
          data
        );
        dispatch({
          type: UPDATE_CONTACT_SUCCESS,
          payload: { id: id, data: data },
        });
        toast({
          title: "Success",
          description: "Contact SuccesFully Updated.",
          status: "success",
          duration: 2000,
          position: "top",
          isClosable: true,
        });
        setchangeDetails(false);
      } catch {
        dispatch({ type: UPDATE_CONTACT_ERROR });
      }
    }
  };

export const get_Contact_Axios = (query) => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOADING });
  await axios
    .get(`https://enchanting-teal-llama.cyclic.cloud/contact`)
    .then((res) => {
      if (query != "hello") {
        let filter_data = res.data.filter((el) => {
          if (el.first_name.includes(query)) {
            return el;
          }
        });
        dispatch({ type: GET_CONTACT_SUCCESS, payload: filter_data });
      } else {
        dispatch({ type: GET_CONTACT_SUCCESS, payload: res.data });
      }
    })
    .catch((err) => {
      dispatch({ type: GET_CONTACT_ERROR });
    });
};

export const get_Single_Contact_Axios = (id) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_CONTACT_LOADING });
  await axios
    .get(`https://enchanting-teal-llama.cyclic.cloud/contact/${id}`)
    .then((res) => {
      dispatch({ type: GET_SINGLE_CONTACT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_SINGLE_CONTACT_ERROR });
    });
};
