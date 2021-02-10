import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import image from "./images/devtips.png";

import "./index.scss";

export default function DevTips(props) {
  return (
    <section className="portfolio-project">
      <img id="devtips" src={image} alt="devtips" />
      <div className="portfolio-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </section>
  )
}