import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/sagelogo.png";
import gif from "./images/cocktailsage.gif";

import "./index.scss";

export default function CSage(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-square-left" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="caret-square-right" size="2x" />
      </div>  
      <div className="portfolio-details">
        <a href="https://github.com/hermitAT/react-sage" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
          <img id="logo" src={logo} alt="sage logo" />
        </a>
        <p>A cocktail recipe app designed and developed with a detailed database of ingredients and characteristics, complimented by a fluid and intuitive user experience.</p>
        <p>TECH STACK: React, React Router, CSS, SASS, Ruby on Rails, PSQL.</p>
        <img id="csage" src={gif} alt="cocktail sage" />
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-square-left" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="caret-square-right" size="2x" />
      </div>     
    </section>
  )
}