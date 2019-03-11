import { connect } from "react-redux";
import RandomNumbers from "./RandomNumbers";
import { addNumbersToState, clearRandomNumbers } from "../../store/actions";
import {
  getRandomNumbers,
  sortPhoneNumbersAsc,
  sortPhoneNumbersDesc,
  getMaxNumber,
  getMinNumber
} from "../../store/selectors";

export const mapStateToProps = state => ({
  randomNumbers: getRandomNumbers(state),
  randomNumbersAsc: sortPhoneNumbersAsc(state),
  randomNumbersDesc: sortPhoneNumbersDesc(state),
  maximumNumber: getMaxNumber(state),
  minimumNumber: getMinNumber(state)
});

export const mapDispatchToProps = dispatch => ({
  addNumbersToState: randomNumbers => {
    dispatch(addNumbersToState(randomNumbers));
  },
  clearRandomNumbers: () => {
    dispatch(clearRandomNumbers());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomNumbers);
