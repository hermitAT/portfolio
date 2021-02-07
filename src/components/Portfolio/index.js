import React from "react";

// import useVisualMode from "hooks/useVisualMode";

import "./index.scss";

export default function Portfolio(props) {

  // const { mode, transition, back } = useVisualMode();

  return (
    <main className="portfolio">
      <section className="portfolio-container">
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=hermitat&show_icons=true&locale=en&layout=compact&theme=tokyonight" alt="languages" />
        <img src="https://github-readme-stats.vercel.app/api?username=hermitat&show_icons=true&theme=tokyonight&locale=en" alt="stats" />
      </section>
    </main>
  )
}