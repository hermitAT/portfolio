import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/schedulerlogo.png";
import gif from "./images/scheduler.gif";

import "./index.scss";

export default function Scheduler(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
      <div className="portfolio-details">
        <a href="https://github.com/hermitAT/scheduler" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
          <img id="logo-s" src={logo} alt="scheduler logo" />
        </a>
        <p><h3><a href="https://gracious-benz-e196c3.netlify.app/" target="_blank" rel="noopener noreferrer external">This app has been deployed! Take a look HERE!</a></h3>However, it may take several seconds for the API to wake up. Just a heads up!</p>
        <p>Interview Scheduler was designed to enable students to book, edit details, or cancel mock technical interviews with mentors or teachers.</p>
        <p>This project was my first React app built with intense focus on test driven development using Jest, Storybook and Cypress.</p>
        <img id="sched" src={gif} alt="scheduler" />
        <p>TECH STACK: React.js application, utilizing Axios and SASS. Deployed via Heroku+Netlify.</p>
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </section>
  )
}