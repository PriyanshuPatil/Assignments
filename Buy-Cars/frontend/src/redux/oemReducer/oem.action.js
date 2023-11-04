import axios from "axios";
import { GET_OEM_ERROR, GET_OEM_LOADING, GET_OEM_SUCCESS, SEARCH_OEM_SUCCESS } from "./oem.actiontypes";

export const getOemData = () => (dispatch) => {
  dispatch({ type: GET_OEM_LOADING });
  axios
    .get(`https://enchanting-teal-llama.cyclic.cloud/oemspecs`)
    .then((res) => {
      dispatch({ type: GET_OEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_OEM_ERROR });
    });
};

export const searchOemData = (queryy) => (dispatch) => {
  dispatch({ type: GET_OEM_LOADING });
  axios
    .get(`https://enchanting-teal-llama.cyclic.cloud/oemspecs`,{ params:queryy })
    .then((res) => {
      dispatch({ type: SEARCH_OEM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_OEM_ERROR });
    });
};




