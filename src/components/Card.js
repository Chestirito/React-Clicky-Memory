import React from "react";
import "./Card.css";

export const Card = props => (
  <div className="cards border">
    <img
      className="img-fluid thumbnail"
      alt={props.src}
      src={props.src}
      onClick={props.handleOnClick}
    />
  </div>
);

export default Card;