import React from "react";
import "./Header.css";
const Header = props => (
  <nav className="header navbar sticky-top">
    <h4 className="logo" onClick={props.reloadPage}>Clicky Memory Game</h4>
    <h4 className={`message ${props.message.color}`}>{props.message.text}</h4>
    <div className="score">Current Score: {props.score.current} | Top Score: {props.score.top}</div>
  </nav>
);

export default Header;