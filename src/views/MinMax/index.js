import React from "react";
import './Styles.css'

const MinMax = props => {
  return (
    <div className="min-max-card">
      <div className="title-text">{props.title}</div>
      <div className="min-max-value">{props.value}</div>
    </div>
  );
};

export default MinMax
