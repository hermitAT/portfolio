import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import player from "./nhl94player.png";
import "./index.scss";

export default function Hobbies(props) {

  return (
    <>
    <section className="about-container">
      <p>I love a good story. I'm an avid reader, huge fan of movies and TV, and will play any video game of any genre if the narrative is engaging enough.</p>
      <p>I am also highly competitive! I  have played in tournaments and conferences all across western Canada and the US for games like Magic: the Gathering and Hearthstone, and I love to compete (even if I'm not very good).</p>
      <p>I bring this competitive nature to sports as well, where I've recently gotten into golf and played in my first Men's tournament in the summer of 2023. I also play hockey and love to watch and play fantasy sports of all kinds.</p>  
    <div className="about-intro">
        <img src={player} alt="nhl player" />
        <h3>A short summary doesn't do enough to describe who I am and what I love, so please <Link to="/contact">CONNECT</Link> with me if you want to chat!</h3>
      </div>
      <div className="about-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="caret-square-left" size="2x" />
        <Link to="/">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
      </div>
    </section>
    </>
  )
}
