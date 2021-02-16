import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Intro(props) {
  return (
    <section className="portfolio-container">
      <div className="portfolio-skills">
        <span>HTML5</span>
        <span>CSS</span>
        <span>SASS</span>
        <span>Bootstrap</span>
        <span>Tailwind.css</span>
        <span>Material-UI</span>
        <span>React.js</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>jQuery</span>
        <span>Ruby on Rails</span>
        <span>Heroku</span>
        <span>Netlify</span>
        <span>MySQL</span>
        <span>PostgreSQL</span>
        <span>Mocha & Chai</span>
        <span>Jest</span>
        <span>Cypress</span>
        <span>Storybook</span>
        <span>RSpnec</span>
      </div>
      <div className="portfolio-stats">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=hermitat&show_icons=true&locale=en&layout=compact&theme=tokyonight" alt="languages" />
        <img src="https://github-readme-stats.vercel.app/api?username=hermitat&show_icons=true&theme=tokyonight&locale=en" alt="stats" />
      </div>
      <div className="portfolio-links">
            <Link to="/about"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />CocktailSage</Link>
            <Link to="/projects"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />DevTips</Link>
            <Link to="/contact"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Scheduler</Link>
            <Link to="/contact"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Tweeter</Link>
            <Link to="/contact"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />tinyApp</Link>
        </div>
      <div className="portfolio-buttons">
        <Link to="/">
            <FontAwesomeIcon icon="home" size="2x" />
        </Link>
        <FontAwesomeIcon onClick={props.onNext} icon="caret-right" size="3x" />
      </div>
    </section>
  )
}