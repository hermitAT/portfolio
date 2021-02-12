import React from "react";

import useVisualMode from "hooks/useVisualMode";
import Intro from "./Intro";
import Education from "./Education";
import Hobbies from "./Hobbies";

import "./index.scss";

export default function Home() {

  const INTRO = "INTRO";
  const EDU = "EDU";
  const HOBBIES = "HOBBIES";

  const { mode, transition, back } = useVisualMode(INTRO);

  return (
    <main className="about">   
        {mode === INTRO && (
          <Intro onNext={() => transition(EDU)} />
        )}
        {mode === EDU && (
          <Education onBack={back} onNext={() => transition(HOBBIES)} />
        )}
        {mode === HOBBIES && (
          <Hobbies onBack={back} />
        )}
    </main>
  )
};