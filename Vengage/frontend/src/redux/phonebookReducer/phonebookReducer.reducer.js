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

const initState = {
  contactData: [],
  loading: false,
  error: false,
  single: {},
};

export const contactReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_CONTACT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_SINGLE_CONTACT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case GET_SINGLE_CONTACT_SUCCESS: {
      return { ...state, loading: false, error: false, single: payload };
    }
    case GET_CONTACT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_CONTACT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case GET_CONTACT_SUCCESS: {
      return { ...state, loading: false, error: false, contactData: payload };
    }

    case UPDATE_CONTACT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case UPDATE_CONTACT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case UPDATE_CONTACT_SUCCESS: {
      let updated_data = state.contactData.map((el) => {
        if (el._id != payload.id) {
          return el;
        } else {
          return payload.data;
        }
      });
      return {
        ...state,
        loading: false,
        error: false,
        contactData: updated_data,
      };
    }

    case POST_CONTACT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case POST_CONTACT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case POST_CONTACT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        contactData: [...state.contactData, payload],
      };
    }
    case DELETE_CONTACT_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case DELETE_CONTACT_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case DELETE_CONTACT_SUCCESS: {
      let deleted_data = state.contactData.filter((el) => {
        if (el._id != payload) {
          return el;
        }
      });
      return {
        ...state,
        loading: false,
        error: false,
        contactData: deleted_data,
      };
    }

    default: {
      return state;
    }
  }
};
