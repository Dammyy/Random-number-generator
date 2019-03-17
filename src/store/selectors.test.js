import { expect } from "chai";
import {
  getRandomNumbers,
  sortPhoneNumbersAsc,
  sortPhoneNumbersDesc,
  getMaxNumber,
  getMinNumber
} from "./selectors";

describe("Random numbers selectors", () => {
  const state = {
    data: [{ number: 12345 }, { number: 54321 }]
  };

  it("should return random numbers generated", () => {

    expect(getRandomNumbers(state).length).to.equal(2);
  });

  it("should return random numbers sorted in ascending order", () => {

    expect(sortPhoneNumbersAsc(state).length).to.equal(2);
    expect(sortPhoneNumbersAsc(state)[0].number).to.equal(12345);
  });

  it("should return random numbers sorted in descending order", () => {

    expect(sortPhoneNumbersAsc(state).length).to.equal(2);
    expect(sortPhoneNumbersDesc(state)[1].number).to.equal(12345);
  });

  it("should return the maximum number", () => {

    expect(getMaxNumber(state)).to.equal(54321);
  });

  it("should return the minimum number", () => {

    expect(getMinNumber(state)).to.equal(12345);
  });

  it("should return empty string for max number when data array is empty", () => {
    const state = { data: [] }
    expect(getMaxNumber(state)).to.equal('');
  });

  it("should return empty string for min number when data array is empty", () => {
    const state = { data: [] }

    expect(getMinNumber(state)).to.equal('');
  });
});
