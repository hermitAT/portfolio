import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useVisualMode from "hooks/useVisualMode";

import sass from "./images/sass.jpg";
import css from "./images/css.png";
import express from "./images/ExpressJS.png";
import heroku from "./images/heroku.svg";
import jest from "./images/jest.png";
import jquery from "./images/jquery.jpg";
import mocha from "./images/mocha.svg";
import netlify from "./images/netlify.png";
import rspec from "./images/rspec.png";
import cypress from "./images/cypress.jpg";
import storybook from "./images/storybook.png";
import tailwind from "./images/tailwind.png";
import material from "./images/material-ui.png";
import react from "./images/react.png";
import node from "./images/nodejs.png";
import psql from "./images/postgresql.png";
import ror from "./images/ror.png";
import mysql from "./images/mysql.png";
import bootstrap from "./images/bootstrap.png";
import html from "./images/html5.png";
import "./index.scss";

export default function Intro(props) {

  const STYLE = "STYLE";
  const FRAMEWORKS = "FRAMEWORKS";
  const DB = "DB";
  const TESTING = "TESTING";

  const { mode, transition } = useVisualMode(STYLE);

  return (
    <section className="portfolio-container">
      <h1>PROJECTS:</h1>
      <div className="portfolio-links">
        <span onClick={props.onCSage}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />CocktailSage</span>
        <span onClick={props.onDevtips}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />DevTips</span>
        <span onClick={props.onSched}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Scheduler</span>
        <span onClick={props.onTweet}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Tweeter</span>
        <span onClick={props.onTiny}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />tinyApp</span>
      </div>
      <h1>TOOLS & TECHNOLOGIES</h1>
      <div className="portfolio-stats">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=hermitat&show_icons=true&locale=en&layout=compact&theme=tokyonight" alt="languages" />
        <img src="https://github-readme-stats.vercel.app/api?username=hermitat&show_icons=true&theme=tokyonight&locale=en" alt="stats" />
      </div>
      <div className="portfolio-tools">
        <span onClick={() => transition(STYLE)}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Style</span>
        <span onClick={() => transition(FRAMEWORKS)}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Frameworks</span>
        <span onClick={() => transition(DB)}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Databases</span>
        <span onClick={() => transition(TESTING)}><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Testing</span>
      </div>
        {mode === STYLE && (
          <>
          <h2>STYLE:</h2>
          <div className="portfolio-skills">
            <span><img id="skill" src={html} alt="html5" />HTML5</span>
            <span><img id="skill" src={css} alt="css" />CSS</span>
            <span><img id="skill" src={sass} alt="sass" />SASS</span>
            <span><img id="skill" src={bootstrap} alt="bootstrap" />Bootstrap</span>
            <span><img id="skill" src={tailwind} alt="tailwind" />Tailwind.css</span>
            <span><img id="skill" src={material} alt="material-ui" />Material-UI</span>
          </div>
          </>
        )}
        {mode === FRAMEWORKS && (
          <>
          <h2>FRAMEWORKS && LIBRARIES:</h2>
          <div className="portfolio-skills">
            <span><img id="skill" src={react} alt="react.js" />React.js</span>
            <span><img id="skill" src={node} alt="node.js" />Node.js</span>
            <span><img id="skill-e" src={express} alt="express" />Express.js</span>
            <span><img id="skill" src={jquery} alt="jquery" />jQuery</span>
            <span><img id="skill-r" src={ror} alt="ruby on rails" />Ruby on Rails</span>
          </div>
          </>
        )}
        {mode === DB && (
          <>
          <h2>DATABASES && CMSs</h2>
          <div className="portfolio-skills">
            <span><img id="skill" src={heroku} alt="heroku" />Heroku</span>
            <span><img id="skill" src={netlify} alt="netlify" />Netlify</span>
            <span><img id="skill" src={mysql} alt="mysql" />MySQL</span>
            <span><img id="skill" src={psql} alt="psql" />PostgreSQL</span>
          </div>
          </>
        )}
        {mode === TESTING && (
          <>
          <h2>TESTING FRAMEWORKS:</h2>
          <div className="portfolio-skills">
            <span><img id="skill" src={mocha} alt="mocha" />Mocha & Chai</span>
            <span><img id="skill" src={jest} alt="jest" />Jest</span>
            <span><img id="skill" src={cypress} alt="cypress" />Cypress</span>
            <span><img id="skill" src={storybook} alt="storybook" />Storybook</span>
            <span><img id="skill" src={rspec} alt="rspec" />RSpec</span>
          </div>
          </>
        )}
      <div className="portfolio-buttons">
        <Link to="/">
            <FontAwesomeIcon icon="home" size="2x" />
        </Link>
        <FontAwesomeIcon onClick={props.onNext} icon="caret-right" size="3x" />
      </div>
    </section>
  )
}