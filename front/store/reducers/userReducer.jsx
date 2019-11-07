import { LOG_USER, REG_USER, LOG_OUT } from "../constants/index";

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REG_USER:
      return state;
    case LOG_USER:
      return { ...state, user: action.user };
    case LOG_OUT:
      return { ...state, user: {} };
    default:
      return state;
  }
};
