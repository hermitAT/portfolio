import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import gameboy from "./gameboy.gif";
import drums from "./drums.gif";
import player from "./nhl94player.png";
import "./index.scss";

export default function Hobbies(props) {

  return (
    <>
    <section className="about-container">
      <p className="about-head">MY HOBBIES!</p>
      <div className="about-intro">
        <img src={player} alt="nhl player" />
        <img id="drums" src={drums} alt="drums" />
        <img id="gameboy" src={gameboy} alt="gameboy" />
      </div>
      <p>When I'm not working on code I spend my time indulging in my many, many hobbies. I play the drums, have an endless list of things to watch and read (big manga fan!), and love hockey - go Flyers!</p>
      <p>I will play any game I can get my hands on, check out my gaming page HERE!</p>
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