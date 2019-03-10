import { SORT_BY_ASCENDING, SORT_BY_DESCENDING } from "./constants";

const initialState = {
  randomNumbers: [],
  randomNumbersAsc: [],
  randomNumbersDesc: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
