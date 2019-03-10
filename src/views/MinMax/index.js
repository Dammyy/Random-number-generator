import React from "react";
import './Styles.css'

const MinMax = props => {
  return (
    <div class="min-max-card">
      <div class="title-text">{props.title}</div>
      <div class="min-max-value">{props.value}</div>
    </div>
  );
};

export default MinMax
