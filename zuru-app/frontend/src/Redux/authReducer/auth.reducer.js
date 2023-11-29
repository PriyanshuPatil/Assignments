import { LOGIN_USERS_ERROR, LOGIN_USERS_LOADING, LOGIN_USERS_SUCCESS, LOGOUT_USERS_SUCCESS, REGISTER_USERS_ERROR, REGISTER_USERS_LOADING, REGISTER_USERS_SUCCESS } from "./auth.actionType";

const initState = {
    isAuth:  false,
    userData: {name:"",email:""},
    loading: false,
    error: false,
  };
  
  export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case LOGOUT_USERS_SUCCESS: {
            return {
              ...state,
              loading: false,
              error: false,
              token: "",
              userData:{name:"",email:""},
              isAuth: false,
            };
          }
      case REGISTER_USERS_LOADING: {
        return { ...state, loading: true, error: false };
      }
      case REGISTER_USERS_ERROR: {
        return { ...state, loading: false, error: true };
      }
      case REGISTER_USERS_SUCCESS: {
        return { ...state, loading: false, error: false };
      }
      case LOGIN_USERS_LOADING: {
        return { ...state, loading: true, error: false };
      }
      case LOGIN_USERS_ERROR: {
        return { ...state, loading: false, error: true };
      }
      case LOGIN_USERS_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          isAuth: true,
          userData:{name:payload.name,email:payload.email},
        };
      }
    
      default: {
        return state;
      }
    }
  };