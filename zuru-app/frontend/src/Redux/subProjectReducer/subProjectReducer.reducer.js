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

const initState = {
  subProjectData: [],
  loading: false,
  error: false,
};

export const subProjectDataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SUB_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        subProjectData: payload,
      };
    }
    case GET_SUB_PROJECT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_SUB_PROJECT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case DELETE_SUB_PROJECT_SUCCESS: {
      let deleted_data = state.subProjectData.filter((el) => {
        if (el._id != payload) {
          return el;
        } else {
          console.log(el._id, payload);
        }
      });
      return {
        ...state,
        loading: false,
        error: false,
        subProjectData: deleted_data,
      };
    }
    case DELETE_SUB_PROJECT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case DELETE_SUB_PROJECT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case UPDATE_SUB_PROJECT_SUCCESS: {
      let deleted_data = state.subProjectData.map((el) => {
        if (el._id == payload) {
          return { ...el, link: payload };
        } else {
          return el;
        }
      });
      return {
        ...state,
        loading: false,
        error: false,
        subProjectData: deleted_data,
      };
    }
    case UPDATE_SUB_PROJECT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case UPDATE_SUB_PROJECT_ERROR: {
      return { ...state, loading: false, error: true };
    }

    case POST_SUB_PROJECT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case POST_SUB_PROJECT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case POST_SUB_PROJECT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        subProjectData: [...state.subProjectData, payload],
      };
    }
    default: {
      return state;
    }
  }
};
