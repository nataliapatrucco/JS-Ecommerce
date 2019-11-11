import { SET_CART } from "../constants/index";

const initialState = {
    cart: []
  };

  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_CART:
        return {...state, cart: action.cart};
      default:
        return state;
    }
  };
