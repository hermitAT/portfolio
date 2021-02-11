import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/tweeterlogo.png";
import gif from "./images/tweeter.gif";

import "./index.scss";

export default function Tweeter(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
      <div className="portfolio-details">
        <a href="https://github.com/hermitAT/tweeter" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
          <img id="logo-s" src={logo} alt="tweeter logo" />
        </a>
        <p>Tweeter - an obvious clone of Twitter - was developed to get some experience with the basics of jQuery functionality, while also introducing SASS and Ajax.</p>
        <p>A fairly simple app, but it was a great exercise to learn how to handle events on a webpage and was my first real taste of client-server interaction.</p>
        <img id="tweets" src={gif} alt="tweeter" />
        <p>TECH STACK: An Express.js server utilizing CSS/SASS and jQuery+Ajax.</p>
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </section>
  )
}