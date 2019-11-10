import { CHECK_IS_HOME } from "../constants/index";

const initialState = {
  isHome: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_IS_HOME:
      return { ...state, isHome: action.isHome };

    default:
      return state;
  }
};
