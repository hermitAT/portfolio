import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/devtipslogo.png";
import gif from "./images/devtips.gif";

import "./index.scss";

export default function DevTips(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div> 
      <div className="portfolio-details">
        <a href="https://github.com/hermitAT/devtips-midterm" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
          <img id="logo" src={logo} alt="devtips logo" />
        </a>
        <p>DevTips was developed as a midterm project during Lighthouse Labs' bootcamp, to be used by web developers to share tips, links and other helpful resources.
        Users can browse or search through resources based on associated hashtags, and add their own resources split in several different categories.</p>
        <img id="devtips" src={gif} alt="devtips" />
        <p>TECH STACK: Express.js using an EJS view engine and PSQL for the database.</p>
        <p>TEAM MEMBERS: Pavel Piatetskii and Jeremy Dombrowski.</p>
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </section>
  )
}