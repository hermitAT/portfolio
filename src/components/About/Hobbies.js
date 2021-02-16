import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BackArrow from "components/BackArrow";
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
      <p>I will play any game I can get my hands on, and have some background in competitive gaming and eSports.</p>
      <p>I have competed in tournaments across western North America for many different games, including League of Legends, Pokemon and card games like Magic: the Gathering.</p>
      <p>A short summary doesn't do enough to describe who I am and what I love, so please <Link to="/contact">CONNECT</Link> with me if you want to know more!</p>
      <div className="about-buttons">
        <BackArrow onBack={props.onBack} />
        <Link to="/">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
      </div>
    </section>
    </>
  )
}