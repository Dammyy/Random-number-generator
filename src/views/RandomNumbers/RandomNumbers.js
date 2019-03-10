import React, { Component } from "react";
import MinMax from "../MinMax";
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

  handleSelectChange = event => {
    this.setState({ sortType: event.target.value });
  };

  handleSubmit = event => {
    this.setState({
      generated: true
    })
    event.preventDefault();
  };

  sortNumbers = () => {};
  downloadNumbers = () => {

  }
  displayNumbers = () => {
    const { RandomNumbers } = this.props;

    return RandomNumbers.map(number => (
      <div className="listItem">{number}</div>
    ));
  };

  render() {
    const { value, sortType, generated } = this.state;

    return (
      <React.Fragment>
        <div className="header">
          <h1>RANDOM PHONE NUMBER GENERATOR</h1>
        </div>
        <div className="wrap">
          <div className="display-left">
            <form className="input-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={value}
                placeholder={"Enter a number"}
                onChange={this.handleChange}
              />
              <input type="submit" value="Generate Numbers" />
            </form>
            <MinMax title={"Min Number"} value={"0000000000"} />
            <MinMax title={"Max Number"} value={"111111111"} />
          </div>
          <div className="generated-numbers">
            <div className="title-text">Generated Numbers {generated ? `(${value})`: ''}</div>
            <form className="input-form" onSubmit={this.sortNumbers}>
              <select value={sortType} onChange={this.handleSelectChange}>
                <option value="unsorted">unsorted</option>
                <option value="lime">ascending</option>
                <option value="coconut">descending</option>
              </select>
              <input type="submit" value="Sort" />
            </form>
            {this.displayNumbers()}
            <div className="download-button">
              <button onclick={() => this.downloadNumbers()}>Download Numbers</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RandomNumbers;
