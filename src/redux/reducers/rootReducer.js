import { combineReducers } from "redux";
import { getProductReducer } from "./productReducer";

export const rootReducer = combineReducers({
  products: getProductReducer
})