import axios from "axios";
import {
  LOGIN_USERS_ERROR,
  LOGIN_USERS_LOADING,
  LOGIN_USERS_SUCCESS,
  LOGOUT_USERS_SUCCESS,
  REGISTER_USERS_ERROR,
  REGISTER_USERS_LOADING,
  REGISTER_USERS_SUCCESS,
} from "./auth.actionType";
import { Get_project_axios } from "../projectReducer/project.action";

export const login = (cred, toast) => (dispatch) => {
  dispatch({ type: LOGIN_USERS_LOADING });
  localStorage.setItem(
    "userData",
    JSON.stringify({ name: cred.name, email: cred.email })
  );
  dispatch({
    type: LOGIN_USERS_SUCCESS,
    payload: { name: cred.name, email: cred.email },
  });
  dispatch(Get_project_axios({ email: cred.email }));
  toast({
    title: "Success",
    description: "Login Success.",
    status: "success",
    duration: 2000,
    position: "top",
    isClosable: true,
  });
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_USERS_SUCCESS });
};
