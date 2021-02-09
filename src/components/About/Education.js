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
      <p>This was a great environment to start my journey, but my passion and drive has allowed me to push myself and grow independently as a developer.</p>
      <div className="about-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </>
  )
}