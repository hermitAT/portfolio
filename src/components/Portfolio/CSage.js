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
        <img id="logo" src={logo} alt="sage logo" />
        <p>CocktailSage was the capstone project during the Lighthouse Labs bootcamp. With a fluid and intuitive user experience for browsing, creating and searching for cocktail recipes with particular characteristics.</p>
        <p>With a detailed database of ingredients, strengths, flavours and categories, recipes can be sorted and viewed based on all of the different attributes possible.</p>
        <p>Noteworthy and unique features include our calculated alcohol strength percentage (based on the ingredients used) and the 'reMix' feature, where users can use an existing recipe as a template to add their own twist to it.</p>
        <img id="csage" src={gif} alt="cocktail sage" />
        <p>TECH STACK: React.js, React Router and SASS for the front-end, with Ruby on Rails and PSQL for the back-end.</p>
        <p>TEAM MEMBERS: Pavel Piatetskii and Molly Sutthasilp.</p>
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>     
    </section>
  )
}