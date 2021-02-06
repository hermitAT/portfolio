import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Intro(props) {

  return (
    <>
      <div className="about-intro">
        <img src="https://www.ilterrazzo.com/uploads/_CGSmartImage/img-80f687abb052ce9df8dddf754801402f" alt="terrazzo" />
        <h3>Worked for nearly five years at Il Terrazzo Ristorante in Victoria, BC</h3>
      </div>
      <p>Worked as a bartender-server.</p>
      <div className="about-buttons">
        <FontAwesomeIcon onClick={props.onBack} icon="backward" size="2x" />
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </>
  )
}