import { DELETE_PROJECT_ERROR, DELETE_PROJECT_LOADING, DELETE_PROJECT_SUCCESS, GET_PROJECT_ERROR, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS, POST_PROJECT_ERROR, POST_PROJECT_LOADING, POST_PROJECT_SUCCESS, UPDATE_PROJECT_ERROR, UPDATE_PROJECT_LOADING, UPDATE_PROJECT_SUCCESS } from "./project.actionType";

const initState = {
  projectData:[],
  loading: false,
  error: false
};

export const projectReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        projectData:payload
      };
    }
    case GET_PROJECT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_PROJECT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case DELETE_PROJECT_SUCCESS: {
      let deleted_data=state.projectData.filter((el)=>{
    if(el._id==payload.id){return el }
      })
      return {
        ...state,
        loading: false,
        error: false,
        projectData:deleted_data
      };
    }
    case DELETE_PROJECT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case DELETE_PROJECT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case UPDATE_PROJECT_SUCCESS: {
      let deleted_data=state.projectData.map((el)=>{
    if(el._id==payload.id){return {...el} }else{return el }
      })
      return {
        ...state,
        loading: false,
        error: false,
        projectData:deleted_data
      };
    }
    case UPDATE_PROJECT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case UPDATE_PROJECT_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case POST_PROJECT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case POST_PROJECT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case POST_PROJECT_SUCCESS: {
      return { ...state, loading: false, error: false,projectData:[...state.projectData,payload] };
    }
    default: {
      return state;
    }
  }
};
