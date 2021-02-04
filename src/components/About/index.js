import React from "react";

import useVisualMode from "hooks/useVisualMode";

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
          <>
          <img src="https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/90174233_10163067610045534_410187875192143872_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=XpjF01Vw_E8AX9RZQkZ&_nc_ht=scontent.fyvr4-1.fna&oh=ed0076cf41ab481242a73bd96eef27d7&oe=6041CE15" alt="profile pic" />
          <div className="about-desc">
            <h3>Hi! I'm Adam Thorne,</h3>
            <h4>a full-stack web developer living in Victoria, BC.</h4>
          </div>
          </>
        )}

      </section>
    </main>
  )
};