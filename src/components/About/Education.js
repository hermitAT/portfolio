import React from "react";
import { FontAwesomeIcon }  from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Intro(props) {

  return (
    <>
    <section className="about-container">
      <div className="about-intro">
        <a href="https://www.lighthouselabs.ca/" target="_blank" rel="noopener noreferrer external">
          <img src="https://www.lighthouselabs.ca/assets/lighthouselabs-logo-d5df6d383f7466b06a64de9561fd537493502eafe78bbf3bcd3de82884e5dd85.png" alt="LHL" />
        </a>
        <h3>In January 2021, I recieved a Diploma in Web Development from <a href="https://www.lighthouselabs.ca/" target="_blank" rel="noopener noreferrer external">Lighthouse Labs</a>.</h3>
      </div>
      <p>Prior to this program I had limited experience with code or software, but I was able to pick up new skills and tools with great aptitude.</p>
      <p>This was a great environment to start my journey, but my love of technology and work ethic has allowed me to push myself further and grow independently as a developer and also contribute more in developer-adjacent roles.</p>
      <div className="about-buttons">
        <FontAwesomeIcon icon="caret-square-left" size="2x" onClick={props.onBack} />
        <FontAwesomeIcon icon="caret-square-right" size="2x" onClick={props.onNext} />
      </div>
    </section>
    </>
  )
}
