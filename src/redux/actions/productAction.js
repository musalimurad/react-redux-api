import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
} from "../actionTypes/productActionType";
import axios from "axios";

export const getProductAction = () => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS_START,
  });
  axios
    .get(`https://fakestoreapi.com/products`)
    .then((response) => {
      setTimeout(() => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      }, 1000);
    })
    .catch((error) => {
      dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: error,
      });
    });
};
