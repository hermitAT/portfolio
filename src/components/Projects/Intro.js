import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Select from "react-select";

import useVisualMode from "hooks/useVisualMode";
import ProjectSelector from "./ProjectSelector";


import python from "./images/python.webp";
import ruby from "./images/ruby.png";
import js from "./images/js.png";
import ts from "./images/ts.png";
import sass from "./images/sass.png";
import css from "./images/css.png";
import express from "./images/ExpressJS.png";
import heroku from "./images/heroku.webp";
import jest from "./images/jest.png";
import jquery from "./images/jquery.png";
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
import mongo from "./images/mongodb.png";
import "./index.scss";

export default function Intro(props) {
  
  const LANG = "LANG";
  const STYLE = "STYLE";
  const FRAMEWORKS = "FRAMEWORKS";
  const DB = "DB";
  const TESTING = "TESTING";

  const options = [
    { value: LANG, label: "Languages" },
    { value: FRAMEWORKS, label: "Frameworks" },
    { value: STYLE, label: "Style && Frontend" },
    { value: DB, label: "Database && Deployment" },
    { value: TESTING, label: "Testing" },
  ];
  
  const customStyle = {
    option: (provided, state) => ({
      ...provided,
      color: 'black',
      backgroundColor: state.isSelected ? '#fdc029' : 'white'
    }),
    control: (provided) => ({
      ...provided
    })
  };

  const [tech, setTech] = useState(LANG);
  
  const { mode, transition } = useVisualMode();

  useEffect(() => {
    transition(tech);
  }, [tech])

  return (
    <section className="portfolio-container">
      <div class="portfolio--radio">
        <h1>SKILLS:</h1>
        {options && (
          <Select
            styles={customStyle}
            className="portfolio--select"
            options={options}
            defaultValue={{ value: LANG, label: "Languages" }}
            onChange={(e) => setTech(e.value)}
          />
        )}
        <div
          class="portfolio--radio-container"
          value={tech}
          onChange={e => setTech(e.target.value)}
        >
          <input id="languages" name="tech" type="radio" value="LANG" checked={tech === LANG} />
          <label for="languages">Languages</label>
          <input id="Frameworks" name="tech" type="radio" value="FRAMEWORKS" checked={tech === FRAMEWORKS} />
          <label for="Frameworks">Frameworks</label>
          <input id="style" name="tech" type="radio" value="STYLE" checked={tech === STYLE} />
          <label for="style">Style</label>
          <input id="databases" name="tech" type="radio" value="DB" checked={tech === DB} />
          <label for="databases">Databases</label>
          <input id="testing" name="tech" type="radio" value="TESTING" checked={tech === TESTING} />
          <label for="testing">Testing</label>
        </div>
      </div>
      {mode === LANG && (
        <>
        <h2>LANGUAGES:</h2>
        <div className="portfolio-skills">
          <span><img id="skill" src={html} alt="html5" />HTML5</span>
          <span><img id="skill" src={css} alt="css" />CSS</span>
          <span><img id="skill" src={js} alt="js" />Javascript</span>
          <span><img id="skill" src={ts} alt="ts" />Typescript</span>
          <span><img id="skill" src={ruby} alt="ruby" />Ruby</span>
          <span><img id="skill" src={python} alt="python" />Python</span>
        </div>
        </>
      )}
      {mode === STYLE && (
        <>
        <h2>STYLE:</h2>
        <div className="portfolio-skills">
          <span><img id="skill" src={sass} alt="sass" />SASS</span>
          <span><img id="skill" src={bootstrap} alt="bootstrap" />Bootstrap</span>
          <span><img id="skill" src={tailwind} alt="tailwind" />Tailwind</span>
          <span><img id="skill" src={material} alt="material-ui" />Material-UI</span>
        </div>
        </>
      )}
      {mode === FRAMEWORKS && (
        <>
        <h2>FRAMEWORKS && LIBRARIES:</h2>
        <div className="portfolio-skills">
          <span><img id="skill-r" src={ror} alt="ruby on rails" />Ruby on Rails</span>
          <span><img id="skill" src={jquery} alt="jquery" />jQuery</span>
          <span><img id="skill" src={react} alt="react.js" />React.js</span>
          <span><img id="skill" src={node} alt="node.js" />Node.js</span>
          <span><img id="skill-e" src={express} alt="express" />Express.js</span>
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
          <span><img id="skill" src={mongo} alt="mongo" />MongoDB</span>
        </div>
        </>
      )}
      {mode === TESTING && (
        <>
        <h2>TESTING:</h2>
        <div className="portfolio-skills">
          <span><img id="skill" src={mocha} alt="mocha" />Mocha & Chai</span>
          <span><img id="skill" src={jest} alt="jest" />Jest</span>
          <span><img id="skill" src={cypress} alt="cypress" />Cypress</span>
          <span><img id="skill" src={storybook} alt="storybook" />Storybook</span>
          <span><img id="skill" src={rspec} alt="rspec" />RSpec</span>
        </div>
        </>
      )}
      <div className="portfolio-stats">
        <img src="https://github-readme-stats.vercel.app/api?username=hermitat&show_icons=true&theme=tokyonight&locale=en" alt="stats" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=hermitat&show_icons=true&locale=en&layout=compact&theme=tokyonight" alt="languages" />
      </div>
      <div className="portfolio-buttons">
        <Link to="/">
            <FontAwesomeIcon icon="home" size="2x" />
        </Link>
        <a href="https://github.com/hermitAT/" target="_blank" rel="noopener noreferrer external">
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        </a>
      </div>
        <ProjectSelector
        onCSage={props.onCSage}
        onDevtips={props.onDevtips}
        onSched={props.onSched}
        onTweet={props.onTweet}
        onTiny={props.onTiny}
      />
    </section>
  )
}
