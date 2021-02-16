import React from "react";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Intro(props) {

  return (
    <>
    <section className="about-container">
      <div className="about-intro">
        <a href="https://www.lighthouselabs.ca/" target="_blank" rel="noopener noreferrer external">
          <img src="https://pbs.twimg.com/profile_images/1197911268939550720/33RhGxsO_400x400.jpg" alt="LHL" />
        </a>
        <h3>In January 2021, I recieved a Diploma in Web Development from <a href="https://www.lighthouselabs.ca/" target="_blank" rel="noopener noreferrer external">Lighthouse Labs</a>.</h3>
      </div>
      <p>I was able to start my portfolio thanks to their hands-on teaching methods, applying the skills I was learning immediately on new projects.</p>
      <p>This was a great environment to start my journey, but my love of technology and drive to learn has allowed me to push myself even further and grow independently as a developer.</p>
      <div className="about-buttons">
        <FontAwesomeIcon icon="caret-left" size="3x" onClick={props.onBack} />
        <FontAwesomeIcon icon="caret-right" size="3x" onClick={props.onNext} />
      </div>
    </section>
    </>
  )
}