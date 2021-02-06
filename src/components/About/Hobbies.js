import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Intro(props) {

  return (
    <>
      <p>I am a musician, casual athlete, and will play any game I can get my hands on.</p>
      <div className="about-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <Link to="/">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
      </div>
    </>
  )
}