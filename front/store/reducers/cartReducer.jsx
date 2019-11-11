import { SET_CART, LOG_OUT_CART } from "../constants/index";

const initialState = {
    cart: []
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_CART:
        return {...state, cart: action.cart};
      case LOG_OUT_CART:
        return {...state, cart: action.cart}
      default:
        return state;
    }
  };
