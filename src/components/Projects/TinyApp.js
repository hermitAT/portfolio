import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "./images/tinyapplogo.png";
import gif from "./images/tinyapp.gif";

import "./index.scss";

export default function TinyApp(props) {
  return (
    <section className="portfolio-project">
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="book-open" size="2x" />
      </div>
      <div className="portfolio-details">
        <a href="https://github.com/hermitAT/tinyapp" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="5x" />
          <img id="logo-t" src={logo} alt="tweeter logo" />
        </a>
        <p>TinyApp was my first real web dev project, in which users can create short URLs for their favorite sites, much like bit.ly.
        Middleware to assist with user authentication and password security (bcrypt) and cookies were also introduced during this project.</p>
        <img id="tiny" src={gif} alt="tinyapp" />
        <p>TECH STACK: Express.js server utilizing an EJS engine, leveraging Bootstrap for styling.</p>
      </div>
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="book-open" size="2x" />
      </div>
    </section>
  )
}