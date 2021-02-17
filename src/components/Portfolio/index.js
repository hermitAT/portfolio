import React from "react";

import useVisualMode from "hooks/useVisualMode";

import Intro from "./Intro";
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
        <Intro
          onNext={() => transition(CSAGE)}
          onCSage={() => transition(CSAGE)}
          onDevtips={() => transition(DEVTIPS)}
          onSched={() => transition(SCHEDULER)}
          onTweet={() => transition(TWEETER)}
          onTiny={() => transition(TINYAPP)}
        />
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