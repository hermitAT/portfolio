import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/sagelogo.png";
import gif from "./images/cocktailsage.gif";

import "./index.scss";

export default function CSage(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>  
      <div className="portfolio-details">
        <img id="csage-logo" src={logo} alt="sage logo" />
        <p>CocktailSage - a cocktail app with a fluid and intuitive user experience for browsing, creating and finding recipes with particular characteristics.</p>
        <p>Noteworthy and unique features include our calculated alcohol strength percentage (based on the ingredients used) and the 'reMix' feature, where users can use an existing recipe as a template to add their own twist to it.</p>
        <p>TECH STACK: React.js, React Router and SASS for the front-end, with Ruby on Rails for the back-end.</p>
        <p>TEAM MEMBERS: Pavel Piatetskii and Molly Sutthasilp</p>
        <img id="csage" src={gif} alt="cocktail sage" />
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>     
    </section>
  )
}