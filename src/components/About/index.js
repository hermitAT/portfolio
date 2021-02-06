import React from "react";

import useVisualMode from "hooks/useVisualMode";
import Intro from "./Intro";
import Education from "./Education";
import Work from "./Work";

import "./index.scss";

export default function Home() {

  const INTRO = "INTRO";
  const EDU = "EDU";
  const WORK = "WORK";
  const HOBBIES = "HOBBIES";

  const { mode, transition, back } = useVisualMode(INTRO);

  return (
    <main className="about">
      <section className="about-container">
        {mode === INTRO && (
          <Intro onNext={() => transition(EDU)} />
        )}
        {mode === EDU && (
          <Education onBack={back} onNext={() => transition(WORK)} />
        )}
        {mode === WORK && (
          <Work onBack={back} onNext={() => transition(HOBBIES)} />
        )}

      </section>
    </main>
  )
};