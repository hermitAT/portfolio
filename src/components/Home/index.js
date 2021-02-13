import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default function Home() {

  return (
    <main className="home">
      <section className="home-container">
        <img src="https://media1.tenor.com/images/23aeae55097e92934edf083da2e2099a/tenor.gif?itemid=15767473" alt="hello" />
        <h1>Welcome!</h1>
        <h3>Thanks for visiting my page!</h3>
        <div className="home-links">
          <p>
            <Link to="/about">About</Link>
            {" | "}
            <Link to="/projects">Projects</Link>
            {" | "}
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </section>
    </main>
  )
}