import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useVisualMode from "hooks/useVisualMode";
import csage from "./images/cocktailsage.png";
import devs from "./images/devtips.png";
import sched from "./images/scheduler.png";
import tweets from "./images/tweeter.png";
import tiny from "./images/tinyapp.png";

import "./index.scss";

export default function Portfolio(props) {

  const STATS = "STATS";
  const CSAGE = "CSAGE";
  const DEVTIPS = "DEVTIPS";
  const SCHEDULER = "SCHEDULER";
  const TWEETER = "TWEETER";
  const TINYAPP = "TINYAPP";

  const { mode, transition, back } = useVisualMode(STATS);

  return (
    <main className="portfolio">
      {mode === STATS && (
        <section className="portfolio-container">
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=hermitat&show_icons=true&locale=en&layout=compact&theme=tokyonight" alt="languages" />
          <img src="https://github-readme-stats.vercel.app/api?username=hermitat&show_icons=true&theme=tokyonight&locale=en" alt="stats" />
          <div className="portfolio-buttons">
            <Link to="/">
              <FontAwesomeIcon icon="home" size="2x" />
            </Link>
            <FontAwesomeIcon onClick={() => transition(CSAGE)} icon="forward" size="2x" />
          </div>
        </section>
      )}
      {mode === CSAGE && (
        <section className="portfolio-project">
          <div className="portfolio-project-desc">
            <div className="portfolio-project-header">
              <img id="csage" src={csage} alt="cocktail sage" />
              <p>TECH STACK: React.js, React Router and SASS for the front-end, with Ruby on Rails for the back-end.</p>
            </div>
            <div className="portfolio-details">
              <p>CocktailSage was the capstone project built during Lighthouse Labs bootcamp, designed to provide users with an more fluid and intuitive user experience compared to other cocktail companion apps on the market.</p>
              <p>We also tried to add some features that we had not seen in other similar apps, such as our calculated alcohol strength percentage based on the ingredients used and their strengths and volumes.</p>
              <p>Additionally, we implemented a 'reMix' feature (heavily inspired by GitHub's 'fork' feature), where users can use an existing recipe as a template to add their own twist on the cocktail.</p>
            </div>
          </div>
          <div className="portfolio-buttons">
            <FontAwesomeIcon onClick={back} icon="backward" size="2x" />
            <FontAwesomeIcon onClick={() => transition(DEVTIPS)} icon="forward" size="2x" />
          </div>
        </section>
      )}
      {mode === DEVTIPS && (
        <section className="portfolio-project">
          <img id="devtips" src={devs} alt="devtips" />
          <div className="portfolio-buttons">
            <FontAwesomeIcon onClick={back} icon="backward" size="2x" />
            <FontAwesomeIcon onClick={() => transition(SCHEDULER)} icon="forward" size="2x" />
          </div>
        </section>
      )}
      {mode === SCHEDULER && (
        <section className="portfolio-project">
          <img id="sched" src={sched} alt="scheduler" />
          <div className="portfolio-buttons">
            <FontAwesomeIcon onClick={back} icon="backward" size="2x" />
            <FontAwesomeIcon onClick={() => transition(TWEETER)} icon="forward" size="2x" />
          </div>
        </section>
      )}
      {mode === TWEETER && (
        <section className="portfolio-project">
          <img id="tweets" src={tweets} alt="tweeter" />
          <div className="portfolio-buttons">
            <FontAwesomeIcon onClick={back} icon="backward" size="2x" />
            <FontAwesomeIcon onClick={() => transition(TINYAPP)} icon="forward" size="2x" />
          </div>
        </section>
      )}
      {mode === TINYAPP && (
        <section className="portfolio-project">
          <img id="tiny" src={tiny} alt="tinyapp" />
          <div className="portfolio-buttons">
            <FontAwesomeIcon onClick={back} icon="backward" size="2x" />
            <FontAwesomeIcon onClick={() => transition(STATS)} icon="book-open" size="2x" />
          </div>
        </section>
      )}
    </main>
  )
}