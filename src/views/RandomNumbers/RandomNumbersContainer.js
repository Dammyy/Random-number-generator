import { connect } from "react-redux";
import RandomNumbers from "./RandomNumbers";

export const mapStateToProps = state => ({
  RandomNumbers: [
    "004956594304956",
    "4576584932834",
    "4576584932834",
    "4576584932834",
    "004956594304956",
    "4576584932834",
    "4576584932834",
    "004956594304956",
    "4576584932834",
    "004956594304956"
  ]
});

export const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomNumbers);
