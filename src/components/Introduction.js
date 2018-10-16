import React from "react";
import "./Introduction.css";

const Introduction = () => (
  <div className="intro-container d-flex align-items-center">
    <div className="intro-text text-center">
        <h2 className="intro-title">Clicky Game!</h2>
        <h3 className="intro-message">Click on an image to earn points, but don't click on any more than once!</h3>
    </div>
  </div>
);

export default Introduction;