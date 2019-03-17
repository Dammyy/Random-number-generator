import reducer, { initialState } from './reducers';
import { ADD_NUMBERS_TO_STATE, CLEAR_STATE } from './constants'

const reducerData = {
  data: [{number: 123456789}]
}

it('should return default state ', () => {

  expect(reducer(undefined, {})).toEqual(initialState)
})

it('should trigger the add numbers to state action', () => {
  const action = {
    type: ADD_NUMBERS_TO_STATE,
    randomNumbers: [{number: 123456789}]
  };

  expect(reducer(initialState, action)).toEqual(reducerData)
});

it('should trigger the clear state action', () => {
  const action = {
    type: CLEAR_STATE,
  };

  expect(reducer(initialState, action)).toEqual(initialState)
});
