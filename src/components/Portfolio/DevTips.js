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
        <img id="logo" src={logo} alt="devtips logo" />
        <p>DevTips was developed as a midterm project during Lighthouse Labs' bootcamp, designed for use by software and web developers to share tips, links and other helpful resources.</p>
        <p>Users can browse or search through resources based on associated hashtags, and add their own resources split in several different categories.</p>
        <p>Has support for YouTube, and also support for code snippets that can be viewed raw, copied or exported.</p>
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