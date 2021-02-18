import React from "react";
import TextLoop from "react-text-loop";

import pkmn from "./pkmn.gif";
import Dropdown from "./Dropdown";
import "./index.scss";

export default function NavBar(props) {

  return (
    <nav className="navbar">
      <div className="navbar__aside">
        <img className="navbar__pic" src={pkmn} alt="profile pic" />
        <h1 className="navbar__title">Adam Thorne,</h1>
        <h1 className="navbar__title-b">Adam Thorne</h1>
        <h2 className="text">
          <TextLoop interval={2500}>
            <span>full-stack developer</span>
            <span>bartender and mixologist</span>
            <span>amateur designer</span>
            <span>competitive CCG player</span>
            <span>pixel artist</span>
            <span>avid manga reader</span>
            <span>musician and drummer</span>
            <span>hobbyist and collector</span>
            <span>NHL superfan</span>
            <span>barista extrordinaire</span>
            <span>Nintendo fanboy</span>
          </TextLoop>{" "}
        </h2>
      </div>
      <Dropdown />
    </nav>
  )
}