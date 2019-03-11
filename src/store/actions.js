import { ADD_NUMBERS_TO_STATE, CLEAR_STATE } from "./constants";

export const addNumbersToState = (randomNumbers) => ({
  type: ADD_NUMBERS_TO_STATE,
  randomNumbers
})

export const clearRandomNumbers = () => ({
  type: CLEAR_STATE,
})
