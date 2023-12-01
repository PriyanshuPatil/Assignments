import axios from "axios";
import {
  DELETE_PROJECT_ERROR,
  DELETE_PROJECT_LOADING,
  DELETE_PROJECT_SUCCESS,
  GET_PROJECT_ERROR,
  GET_PROJECT_LOADING,
  GET_PROJECT_SUCCESS,
  GET_SINGLE_PROJECT_SUCCESS,
  POST_PROJECT_ERROR,
  POST_PROJECT_LOADING,
  POST_PROJECT_SUCCESS,
  UPDATE_PROJECT_ERROR,
  UPDATE_PROJECT_LOADING,
  UPDATE_PROJECT_SUCCESS,
} from "./project.actionType";

export const Add_project_axios = (data, name, toast) => async (dispatch) => {
  dispatch({ type: POST_PROJECT_LOADING });
  try {
    await axios.post(
      `https://enchanting-teal-llama.cyclic.cloud/project`,
      data
    );
    dispatch({
      type: POST_PROJECT_SUCCESS,
      payload: { ...data, last_edit: "2023-11-31", _id: "1234" },
    });
    toast({
      title: "Success",
      description: "New Project SuccesFully Added.",
      status: "success",
      duration: 2000,
      position: "top",
      isClosable: true,
    });
  } catch (err) {
    dispatch({ type: POST_PROJECT_ERROR });
  }
  const timeoutId = setTimeout(
    dispatch(Get_project_axios({ email: name })),
    1000
  );
  clearTimeout(timeoutId);
};

export const Delete_project_axios = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PROJECT_LOADING });
  try {
    await axios.delete(
      `https://enchanting-teal-llama.cyclic.cloud/project/${id}`
    );
    dispatch({ type: DELETE_PROJECT_SUCCESS, payload: id });
  } catch {
    dispatch({ type: DELETE_PROJECT_ERROR });
  }
};

export const Update_project_axios = (id, data) => async (dispatch) => {
  dispatch({ type: UPDATE_PROJECT_LOADING });
  try {
    await axios.patch(
      `https://enchanting-teal-llama.cyclic.cloud/project/${id}`,
      data
    );
    dispatch({ type: UPDATE_PROJECT_SUCCESS });
  } catch {
    dispatch({ type: UPDATE_PROJECT_ERROR });
  }
};

export const Get_project_axios = (data) => async (dispatch) => {
  dispatch({ type: GET_PROJECT_LOADING });
  await axios
    .get(
      `https://enchanting-teal-llama.cyclic.cloud/project?email=${data.email}`
    )
    .then((res) => {
      dispatch({ type: GET_PROJECT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PROJECT_ERROR });
    });
};
