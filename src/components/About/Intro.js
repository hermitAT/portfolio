import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./index.scss";

export default function Intro(props) {

  return (
    <>
      <div className="about-intro">
        <img src="https://scontent.fyvr4-1.fna.fbcdn.net/v/t1.0-9/90174233_10163067610045534_410187875192143872_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=XpjF01Vw_E8AX9RZQkZ&_nc_ht=scontent.fyvr4-1.fna&oh=ed0076cf41ab481242a73bd96eef27d7&oe=6041CE15" alt="profile pic" />
        <div>
          <h3>Hi! My name is Adam Thorne,</h3>
          <h4>I'm a full-stack web developer living on Vancouver Island, BC.</h4>
        </div>
      </div>
      <p>After spending several years in the hospitality industry, I lept into a career change during the fall of 2020.</p>
      <p>I'm currently looking for full-time work as a developer and in the meantime I have been busy working on personal projects, like this site!</p>
      <div className="about-buttons">
        <Link to="/">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
        <FontAwesomeIcon onClick={props.onNext} icon="forward" size="2x" />
      </div>
    </>
  )
}