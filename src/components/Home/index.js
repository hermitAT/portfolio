import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Home() {

  return (
    <main className="home">
      <section className="home-container">
        <img src="https://media1.tenor.com/images/23aeae55097e92934edf083da2e2099a/tenor.gif?itemid=15767473" alt="hello" />
        <h3>I'm Adam Thorne, welcome to my portfolio!</h3>
        <div className="home-links">
            <Link to="/about"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />About</Link>
            <h1>|</h1>
            <Link to="/projects"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Projects</Link>
            <h1>|</h1>
            <Link to="/contact"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Contact</Link>
        </div>
      </section>
    </main>
  )
}