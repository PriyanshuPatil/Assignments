import axios from "axios";
import { DELETE_PROJECT_ERROR, DELETE_PROJECT_LOADING, DELETE_PROJECT_SUCCESS, GET_PROJECT_ERROR, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS, GET_SINGLE_PROJECT_SUCCESS, POST_PROJECT_ERROR, POST_PROJECT_LOADING, POST_PROJECT_SUCCESS, UPDATE_PROJECT_ERROR, UPDATE_PROJECT_LOADING, UPDATE_PROJECT_SUCCESS } from "./project.actionType";


export const Add_project_axios = (data) => (dispatch) => {
   dispatch({ type: POST_PROJECT_LOADING });
  try{
    axios.post(`http://localhost:3400/project`,data)
    dispatch({ type: POST_PROJECT_SUCCESS ,payload:{...data,last_edit: "2023-11-31",_id:"1234"}});
  }catch(err){
      dispatch({ type: POST_PROJECT_ERROR });
  }
  dispatch(Get_project_axios())
};

export const Delete_project_axios = (id) => (dispatch) => {
  dispatch({ type: DELETE_PROJECT_LOADING });
 try{
   axios.delete(`http://localhost:3400/project/${id}`)
   dispatch({ type: DELETE_PROJECT_SUCCESS,payload:id });
 }catch{
     dispatch({ type:DELETE_PROJECT_ERROR });
 }
};

export const Update_project_axios = (id,data) => (dispatch) => {
  dispatch({ type: UPDATE_PROJECT_LOADING });
 try{
   axios.patch(`http://localhost:3400/project/${id}`,data)
   dispatch({ type:UPDATE_PROJECT_SUCCESS});
 }catch{
     dispatch({ type:UPDATE_PROJECT_ERROR });
 }
};

export const Get_project_axios = () => (dispatch) => {
  dispatch({ type: GET_PROJECT_LOADING });
  axios
  .get(`http://localhost:3400/project`)
  .then((res) => {
    dispatch({ type: GET_PROJECT_SUCCESS, payload: res.data });
  })
  .catch((err) => {
     dispatch({ type:GET_PROJECT_ERROR });
  });
};





