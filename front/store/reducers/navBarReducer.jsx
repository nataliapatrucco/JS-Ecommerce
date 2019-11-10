import { CHECK_IS_HOME } from '../constants/index';

const initialState = {
  home: true
};

export default (state = initialState, action) => {
  console.log('Im in the reducer!, and Im an action!', action);
  switch (action.type) {
    case CHECK_IS_HOME:
      return Object.assign({}, state, { home: action.home });

    default:
      return state;
  }
};
