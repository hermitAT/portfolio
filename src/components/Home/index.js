import React from "react";

import useVisualMode from "hooks/useVisualMode";

import sword from "./image.gif";
import "./index.scss";

export default function Home() {

  const WELCOME = "WELCOME";
  const SWORD = "SWORD";
  const INFO = "INFO";

  const { mode, transition, back } = useVisualMode(WELCOME);

  return (
    <main className="home">
      <section className="home-container">
        {mode === WELCOME && (
          <>
            <h1>Welcome!</h1>
            <h3>Thanks for visiting my page! However, you should be aware that it is dangerous to explore alone...</h3>
            <h3>Take this, it will keep you safe!</h3>
            <img onClick={() => transition(SWORD)} src="https://content.instructables.com/ORIG/FUJ/FT4P/IMAVPPWC/FUJFT4PIMAVPPWC.png?auto=webp&frame=1&width=320&md=6096fa1c819cad253de8564b2d58b6eb" alt="chest" />
          </>
        )}
        {mode === SWORD && (
          <>
            <img onClick={() => back()} src={sword} alt="link with sword" />
            <h3>There! With this sword you are free to roam this wasteland...</h3>
            <h3>Why not get started by learning a bit about me and my journey towards becoming a full-stack developer?</h3>
            <h3>About me!</h3>
          </>
        )}
      </section>
    </main>
  )
}