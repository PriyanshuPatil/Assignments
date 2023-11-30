import axios from "axios";
import {
  DELETE_SUB_PROJECT_ERROR,
  DELETE_SUB_PROJECT_LOADING,
  DELETE_SUB_PROJECT_SUCCESS,
  GET_SUB_PROJECT_ERROR,
  GET_SUB_PROJECT_LOADING,
  GET_SUB_PROJECT_SUCCESS,
  POST_SUB_PROJECT_ERROR,
  POST_SUB_PROJECT_LOADING,
  POST_SUB_PROJECT_SUCCESS,
  UPDATE_SUB_PROJECT_ERROR,
  UPDATE_SUB_PROJECT_LOADING,
  UPDATE_SUB_PROJECT_SUCCESS,
} from "./subProjectReducerTypes";

export const Add_sub_project_axios = (data,id,toast) => async (dispatch) => {
  dispatch({ type: POST_SUB_PROJECT_LOADING });
  try {
    await axios.post(`http://localhost:3400/podcast`, data);
    dispatch({
      type: POST_SUB_PROJECT_SUCCESS,
      payload: data,
    });
    dispatch(Get_sub_project_axios(id));
    toast({
      title: "Success",
      description: "New Poadcast Uploaded.",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  } catch (err) {
    dispatch({ type: POST_SUB_PROJECT_ERROR });
  }
};

export const Delete_sub_project_axios =
  (id, project_id,toast) => async (dispatch) => {
    dispatch({ type: DELETE_SUB_PROJECT_LOADING });
    try {
      await axios.delete(`http://localhost:3400/podcast/${id}`);
      dispatch({ type: DELETE_SUB_PROJECT_SUCCESS, payload: id });
      dispatch(Get_sub_project_axios(project_id));
      toast({
        title: "Success",
        description: "Poadcast SuccessFully Deleted",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    } catch {
      dispatch({ type: DELETE_SUB_PROJECT_ERROR });
    }
  };

export const Update_sub_project_axios = (id, data,toast) => async (dispatch) => {
  dispatch({ type: UPDATE_SUB_PROJECT_LOADING });
  try {
    await axios.patch(`http://localhost:3400/podcast/${id}?text=${data}`);
    dispatch({ type: UPDATE_SUB_PROJECT_SUCCESS, payload: data.link });
    toast({
      title: "Success",
      description: "Poadcast Details SuccessFully Updated",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  } catch {
    dispatch({ type: UPDATE_SUB_PROJECT_ERROR });
  }
};

export const Get_sub_project_axios = (id) => async (dispatch) => {
  dispatch({ type: GET_SUB_PROJECT_LOADING });
  await axios
    .get(`http://localhost:3400/podcast?id=${id}`, )
    .then((res) => {
      dispatch({ type: GET_SUB_PROJECT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_SUB_PROJECT_ERROR });
    });
};
