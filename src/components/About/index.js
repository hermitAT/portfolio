import React from "react";

import useVisualMode from "hooks/useVisualMode";
import Intro from "./Intro";

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
          <Intro />
        )}

      </section>
    </main>
  )
};