import React from "react";
import TextLoop from "react-text-loop";

import Dropdown from "./Dropdown";
import "./index.scss";

export default function NavBar(props) {

  return (
    <nav className="navbar">
      <h1 className="navbar__title-h">Adam Thorne</h1>
      <div className="navbar__aside">
        <img className="navbar__pic" src="https://media.giphy.com/media/TZco470UACpNK/source.gif" alt="profile pic" />
        <h1 className="navbar__title">Adam Thorne,</h1>
        <h2 className="text">
          <TextLoop interval={2500}>
            <span>full-stack developer</span>
            <span>bartender and mixologist</span>
            <span>artist and musician</span>
            <span>competitive CCG player</span>
            <span>NHL superfan</span>
            <span>avid manga reader</span>
          </TextLoop>{" "}
        </h2>
      </div>
      <Dropdown />
    </nav>
  )
}