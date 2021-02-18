import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/devtipslogo.png";
import gif from "./images/devtips.gif";

import "./index.scss";

export default function DevTips(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-square-left" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="caret-square-right" size="2x" />
      </div>  
      <div className="portfolio-details">
        <a href="https://github.com/hermitAT/devtips-midterm" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
          <img id="logo" src={logo} alt="devtips logo" />
        </a>
        <p>DevTips was developed to be used by web developers to share tips, links and other helpful resources with each other, split by resource type and hashtags.</p>
        <p>TECH STACK: PSQL, Express, Bootstrap, CSS.</p>
        <img id="devtips" src={gif} alt="devtips" />
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-square-left" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="caret-square-right" size="2x" />
      </div>  
    </section>
  )
}