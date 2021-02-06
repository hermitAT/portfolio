import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Intro(props) {

  return (
    <>
      <div className="about-intro">
        <img src="https://pbs.twimg.com/profile_images/1197911268939550720/33RhGxsO_400x400.jpg" alt="LHL" />
        <h3>In January 2021, I recieved a Diploma in Web Development from Lighthouse Labs.</h3>
      </div>
      <p>I was able to start my portfolio thanks to their hands-on teaching methods, applying the skills I was learning immediately on new projects.</p>
      <p>Lighthouse was a great environment to build my foundation of knowledge, but my passion allowed me to excel even after the course has finished.</p>
      <div className="about-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </>
  )
}