import React, { Component } from "react";
import MinMax from "../MinMax";
import FileSaver from "file-saver";
import find from "lodash/find";
import "./Styles.css";

class RandomNumbers extends Component {
  state = {
    value: "",
    sortType: "",
    generated: false
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  onSelectChange = event => {
    this.setState({ sortType: event.target.value });
  };

  generateNumbers = event => {
    event.preventDefault();
    const { value } = this.state;
    let randomNumbers = [];

    if (value < 8001) {
      while (value > randomNumbers.length) {
        const randomNumber = Math.floor(Math.random() * 90000) + 1000000;

        !find(randomNumbers, ["number", randomNumber]) &&
          randomNumbers.push({ number: randomNumber });
      }

      this.setState({
        generated: true,
        message: ""
      });

      this.props.addNumbersToState(randomNumbers);
    } else {
      this.setState({
        message: "Number exceeds the maximum allowed"
      });
    }
  };

  getDataTomap = () => {
    const { sortType } = this.state;
    const { randomNumbers, randomNumbersAsc, randomNumbersDesc } = this.props;

    return sortType === "asc"
      ? randomNumbersAsc
      : sortType === "desc"
      ? randomNumbersDesc
      : randomNumbers;
  };

  downloadNumbers = () => {
    const dataToMap = this.getDataTomap();
    const phoneNumbers = dataToMap.map(phoneNumber => phoneNumber.number);
    const blob = new Blob([phoneNumbers], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "phoneNumbers.txt");
  };

  displayNumbers = () => {
    const dataToMap = this.getDataTomap();

    return dataToMap.map(data => (
      <div key={data.number} className="listItem">
        080{data.number}
      </div>
    ));
  };

  clearList = () => {
    this.setState({
      generated: false,
      value: "",
      sortType: ""
    });

    this.props.clearRandomNumbers();
  };

  render() {
    const { value, sortType, generated, message } = this.state;
    const { maximumNumber, minimumNumber } = this.props;
    return (
      <React.Fragment>
        <div className="header">
          <h1>RANDOM PHONE NUMBER GENERATOR</h1>
        </div>
        <div className="wrap">
          <div className="display-left">
            <div className="title-text">Enter Number (Max allowed - 8000)</div>
            <form className="input-form" onSubmit={this.generateNumbers}>
              <input
                type="number"
                value={value}
                placeholder={"Enter a number"}
                onChange={this.handleChange}
              />
              <input type="submit" value="Generate Numbers" />
              <button className="clear-button" onClick={this.clearList}>
                Clear
              </button>
            </form>
            <MinMax
              title={"Min Number"}
              value={minimumNumber && `080${minimumNumber}`}
            />
            <MinMax
              title={"Max Number"}
              value={maximumNumber && `080${maximumNumber}`}
            />
          </div>
          <div className="generated-numbers">
            <div className="title-text">
              Generated Numbers {generated && value ? `(${value})` : ""}
            </div>
            <select
              className="sort-type"
              value={sortType}
              onChange={this.onSelectChange}
            >
              <option value="unsorted">unsorted</option>
              <option value="asc">ascending</option>
              <option value="desc">descending</option>
            </select>
            <div className="display-numbers">
              {message ? message : this.displayNumbers()}
            </div>
            <div className="download-button">
              <button className="download-btn" onClick={this.downloadNumbers}>
                Download Numbers
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RandomNumbers;
