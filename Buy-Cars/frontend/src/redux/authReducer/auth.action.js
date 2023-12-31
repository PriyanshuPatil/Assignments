import axios from "axios";
import {
  LOGIN_USERS_ERROR,
  LOGIN_USERS_LOADING,
  LOGIN_USERS_SUCCESS,
  LOGOUT_USERS_SUCCESS,
  REGISTER_USERS_ERROR,
  REGISTER_USERS_LOADING,
  REGISTER_USERS_SUCCESS,
} from "./auth.actiontypes";

export const login = (cred, toast, navigate) => (dispatch) => {
  dispatch({ type: LOGIN_USERS_LOADING });
  axios
    .post(`https://enchanting-teal-llama.cyclic.cloud/user/login`, cred)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: LOGIN_USERS_SUCCESS,
        payload: { token: res.data.token, user_data: cred },
      });
      toast({
        title: "Success",
        description: "Login Success.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      navigate("/secind-hand-cars");
    })
    .catch((err) => {
      dispatch({ type: LOGIN_USERS_ERROR });
      toast({
        title: "Login Failed.",
        description: "wrong Credentials",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    });
};

export const logout = (navigate) => (dispatch) => {
  dispatch({ type: LOGOUT_USERS_SUCCESS });
  navigate("/");
};

export const registerUser = (cred, toast, navigate) => (dispatch) => {
  dispatch({ type: REGISTER_USERS_LOADING });
  axios
    .post(`https://enchanting-teal-llama.cyclic.cloud/user/register`, cred)
    .then((res) => {
      dispatch({ type: REGISTER_USERS_SUCCESS });
      toast({
        title: "Account created.",
        description: "Register Success.",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      navigate("/login");
    })
    .catch((err) => {
      toast({
        title: "Register Failed.",
        description: "User Allready Present, Try To Login",
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      dispatch({ type: REGISTER_USERS_ERROR });
      navigate("/login");
    });
};
