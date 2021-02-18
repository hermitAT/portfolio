import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/tweeterlogo.png";
import gif from "./images/tweeter.gif";

import "./index.scss";

export default function Tweeter(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-square-left" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="caret-square-right" size="2x" />
      </div>  
      <div className="portfolio-details">
        <a href="https://github.com/hermitAT/tweeter" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
          <img id="logo" src={logo} alt="tweeter logo" />
        </a>
        <p>Tweeter was developed to get some experience with the basics of jQuery and Ajax while also introducing the CSS proprocessor SASS.</p>
        <img id="tweets" src={gif} alt="tweeter" />
        <p>TECH STACK: Express, CSS, SASS, jQuery, Ajax.</p>
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-square-left" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="caret-square-right" size="2x" />
      </div>  
    </section>
  )
}