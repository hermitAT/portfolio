import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import player from "./nhl94player.png";
import "./index.scss";

export default function Hobbies(props) {

  return (
    <>
    <section className="about-container">
      <div className="about-intro">
        <img src={player} alt="nhl player" />
        <h3>When I'm not working on code I spend my time indulging in my many, many hobbies.</h3>
      </div>
      <p>I play the drums, have an endless list of things to watch and read (big manga fan!), and love hockey - go Flyers!</p>
      <p>I will play any game I can get my hands on, and have quite a background in competitive gaming - eSports. Check out my <a href="https://twitter.com/hermitAT" target="_blank" rel="noopener noreferrer external">Twitter here!</a></p>
      <p>A short summary doesn't do enough to describe who I am and what I love, so please <Link to="/contact">CONNECT</Link> with me if you want to know more!</p>
      <div className="about-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <Link to="/">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
      </div>
    </section>
    </>
  )
}