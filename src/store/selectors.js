import orderBy from "lodash/orderBy";
import maxBy from 'lodash/maxBy'
import minBy from 'lodash/minBy'

export const getRandomNumbers = state => {
  const randomNumbers = state.data;

  return randomNumbers;
};

export const sortPhoneNumbersAsc = state => {
  const phoneNumbers = getRandomNumbers(state);
  const sorted = orderBy(phoneNumbers, ['number'], ['asc']);

  return sorted;
};

export const sortPhoneNumbersDesc = state => {
  const phoneNumbers = getRandomNumbers(state);
  const sorted = orderBy(phoneNumbers, ['number'], ['desc']);

  return sorted;
};

export const getMaxNumber = state => {
  const phoneNumbers = getRandomNumbers(state);
  const max = maxBy(phoneNumbers, 'number');

  return max ? max.number : ''
}

export const getMinNumber = state => {
  const phoneNumbers = getRandomNumbers(state);
  const min = minBy(phoneNumbers, 'number');

  return min ? min.number : ''
}
