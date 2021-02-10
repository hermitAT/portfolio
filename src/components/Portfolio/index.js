import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useVisualMode from "hooks/useVisualMode";

import CSage from "./CSage";
import DevTips from "./DevTips";
import Scheduler from "./Scheduler";
import Tweeter from "./Tweeter";
import TinyApp from "./TinyApp";

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
        <CSage
          onBack={back}
          onNext={() => transition(DEVTIPS)}
        />
      )}
      {mode === DEVTIPS && (
        <DevTips
          onBack={back}
          onNext={() => transition(SCHEDULER)}
        />
      )}
      {mode === SCHEDULER && (
        <Scheduler
          onBack={back}
          onNext={() => transition(TWEETER)}
        />
      )}
      {mode === TWEETER && (
        <Tweeter
          onBack={back}
          onNext={() => transition(TINYAPP)}
        />
      )}
      {mode === TINYAPP && (
        <TinyApp
          onBack={back}
          onNext={() => transition(STATS)}
        />
      )}
    </main>
  )
}