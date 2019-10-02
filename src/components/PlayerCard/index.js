import React from "react";
import "./style.css";

function PlayerCard(props) {
  return (
    <div
      className="card blue-grey darken-1 hoverable left"
      onClick={() => props.clicker(props.id)}
    >
      <div className="card-content white-text">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default PlayerCard;
