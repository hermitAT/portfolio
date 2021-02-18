import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import pika from "./pika.gif";
import "./index.scss";

export default function Home() {

  return (
    <main className="home">
      <section className="home-container">
        <img src={pika} alt="hello" />
        <h3>Hi! I'm Adam Thorne, full-stack developer!</h3>
        <div className="home-links">
            <Link to="/about"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />About</Link>
            <Link to="/projects"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Projects</Link>
            <Link to="/contact"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Contact</Link>
        </div>
      </section>
    </main>
  )
}