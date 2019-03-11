import {
  ADD_NUMBERS_TO_STATE,
  CLEAR_STATE
} from "./constants";

export const initialState = {
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBERS_TO_STATE:
      return {
        data: action.randomNumbers
      };
    case CLEAR_STATE:
      return {
        data: []
      }
    default:
      return state;
  }
};

export default reducer;
