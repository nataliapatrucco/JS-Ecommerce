import { GET_PRODUCTS, SEARCH_PRODUCTS } from "../constants/index";

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.products };

    case SEARCH_PRODUCTS:
      return { ...state, products: action.products };
    default:
      return state;
  }
};
