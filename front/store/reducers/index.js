import { combineReducers } from "redux";
import productsReducer from "../reducers/productsReducer";
import userReducer from "../reducers/userReducer";

export default combineReducers({
  products: productsReducer,
  user: userReducer
});
