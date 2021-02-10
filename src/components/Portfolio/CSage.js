import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import image from "./images/cocktailsage.png";

import "./index.scss";

export default function CSage(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-project-desc">
        <div className="portfolio-project-header">
          <img id="csage" src={image} alt="cocktail sage" />
          <p>TECH STACK: React.js, React Router and SASS for the front-end, with Ruby on Rails for the back-end.</p>
        </div>
        <div className="portfolio-details">
          <p>CocktailSage was the capstone project built during Lighthouse Labs bootcamp, designed to provide users with an more fluid and intuitive user experience compared to other cocktail companion apps on the market.</p>
          <p>We also tried to add some features that we had not seen in other similar apps, such as our calculated alcohol strength percentage based on the ingredients used and their strengths and volumes.</p>
          <p>Additionally, we implemented a 'reMix' feature (heavily inspired by GitHub's 'fork' feature), where users can use an existing recipe as a template to add their own twist on the cocktail.</p>
        </div>
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </section>
  )
}