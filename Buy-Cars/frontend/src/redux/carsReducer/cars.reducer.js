import { GET_CARS_ERROR, GET_CARS_LOADING, GET_CARS_SUCCESS, filter_CARS_SUCCESS } from "./cars.actiontypes";

const initState = {
   cars_data:[],
   Data:[],
   loading:false,
   error:false
  };
  
  export const carsReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_CARS_SUCCESS: {
            return {
              ...state,
             cars_data:payload,
             Data:payload,
             error:false,
             loading:false
            };
          }
      case GET_CARS_LOADING: {
        return { ...state, loading: true, error: false };
      }
      
      case GET_CARS_ERROR: {
        return { ...state, loading: false, error: true };
      }
      case filter_CARS_SUCCESS: {
        return { ...state, loading: false, error: false,cars_data:payload };
      }
      default: {
        return state;
      }
    }
  };