import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import player from "./nhl94player.png";
import "./index.scss";

export default function Hobbies(props) {

  return (
    <>
    <section className="about-container">
      <p>I play the drums, have an endless list of things to watch and read (big manga fan!), and love hockey - go Flyers!</p>
      <p>I will play any game I can get my hands on, and have some background in competitive gaming and eSports.</p>
      <div className="about-intro">
        <img src={player} alt="nhl player" />
        <h3>A short summary doesn't do enough to describe who I am and what I love, so please <Link to="/contact">CONNECT</Link> with me if you want to know more!</h3>
      </div>
      <div className="about-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-square-left" size="3x" />
        <Link to="/">
          <FontAwesomeIcon icon="home" size="3x" />
        </Link>
      </div>
    </section>
    </>
  )
}