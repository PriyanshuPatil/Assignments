import { GET_OEM_LOADING, GET_OEM_SUCCESS, SEARCH_OEM_SUCCESS } from "./oem.actiontypes";

const initState = {
 oem_data: [],
  Data: [],
  loading: false,
  error: false,
};

export const oemReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_OEM_SUCCESS: {
      return {
        ...state,
        oem_data: payload,
        Data: payload,
        error: false,
        loading: false,
      };
    }
    case SEARCH_OEM_SUCCESS: {
      return {
        ...state,
        oem_data: payload,
        error: false,
        loading: false,
      };
    }
    case GET_OEM_LOADING: {
      return { ...state, loading: true, error: false };
    }

    case GET_OEM_SUCCESS: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};
