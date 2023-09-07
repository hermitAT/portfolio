import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import profile from "./profile.jpg";
import "./index.scss";

export default function Intro(props) {

  return (
    <>
    <section className="about-container">
      <div className="about-intro">
        <img id="selfie" src={profile} alt="profile pic" />
        <div>
          <h3>My name is Adam Thorne,</h3>
          <h4>I'm a technical support and product ownership professional living on Vancouver Island, BC.</h4>
        </div>
      </div>
      <p>After spending several years in the hospitality industry, I lept into a career change during the fall of 2020.</p>
      <p>After spending the last two and a half years at Cuboh Software, I am now looking for work in a role where I can contribute technically on solutions in the software-as-a-service industry!</p>
      <div className="about-buttons">
        <Link to="/">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
        <FontAwesomeIcon onClick={props.onNext} icon="caret-square-right" size="2x" />
      </div>
    </section>
    </>
  )
}
