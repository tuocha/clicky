import React from "react";
import "./style.css";

function Click(props) {
  return (
    <div
      role="img"
      aria-label="click pic"
      onClick={() => props.handleItemClick(props.id)}
      className="card blue-grey darken-1 hoverable left"
    >
      <img alt={props.name} src={props.image} />
    </div>
  );
}

export default Click;
