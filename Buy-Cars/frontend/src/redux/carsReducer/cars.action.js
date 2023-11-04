import axios from "axios";
import {
  GET_CARS_ERROR,
  GET_CARS_LOADING,
  GET_CARS_SUCCESS,
  filter_CARS_SUCCESS,
} from "./cars.actiontypes";

export const getCarsData = () => (dispatch) => {
  dispatch({ type: GET_CARS_LOADING });
  axios
    .get(`http://localhost:3600/marketplaceinventory`)
    .then((res) => {
      dispatch({ type: GET_CARS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_CARS_ERROR });
    });
};

export const applyFilter = (value, Data) => (dispatch) => {
  let ans = Data.filter((el) => {
    if (value == "1-3" && el.price <= 3) {
      return el;
    }
    if (value == "3-5" && el.price > 3 && el.price <= 5) {
      return el;
    }
    if (value == "5-8" && el.price > 5 && el.price <= 8) {
      return el;
    }
    if (value == "8-10" && el.price > 8) {
      return el;
    }
    if (value == "1-10" && el.mileage <= 10) {
      return el;
    }
    if (value == "10-15" && el.mileage > 10 && el.mileage <= 15) {
      return el;
    }
    if (value == "15-20" && el.mileage > 15 && el.mileage <= 20) {
      return el;
    }
    if (value == "20-30" && el.mileage > 20) {
      return el;
    }

    if (value == "white" && el.color =="white") {
      return el;
    }
    if (value == "black" && el.color =="black") {
      return el;
    }
    if (value == "blue" && el.color =="blue") {
      return el;
    }
    if (value == "red" && el.color =="red") {
      return el;
    }
  });

  dispatch({ type: filter_CARS_SUCCESS, payload: ans });
};
