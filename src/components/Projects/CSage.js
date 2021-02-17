import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/sagelogo.png";
import gif from "./images/cocktailsage.gif";

import "./index.scss";

export default function CSage(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-left" size="3x" />
        <FontAwesomeIcon onClick={props.onNext} icon="caret-right" size="3x" />
      </div>  
      <div className="portfolio-details">
        <a href="https://github.com/hermitAT/react-sage" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
          <img id="logo" src={logo} alt="sage logo" />
        </a>
        <p>CocktailSage was the capstone project built by my team and I during the Lighthouse Labs bootcamp.
        A cocktail recipe app designed and developed with a deep and detailed database of ingredients and recipe characteristics, complimented by a fluid and intuitive user experience for browsing, creating, editing and searching for recipes.</p>
        <img id="csage" src={gif} alt="cocktail sage" />
        <p>TECH STACK: React.js, React Router and pure CSS/SASS for the front-end, with Ruby on Rails and PSQL for the back-end.</p>
        <p>TEAM MEMBERS: Pavel Piatetskii and Molly Sutthasilp.</p>
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-left" size="3x" />
        <FontAwesomeIcon onClick={props.onNext} icon="caret-right" size="3x" />
      </div>     
    </section>
  )
}