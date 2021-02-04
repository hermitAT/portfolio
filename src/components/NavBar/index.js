import React from "react";

import sprites from "./sprites.png";
import "./index.scss";

export default function NavBar(props) {

  return (
    <nav className="navbar">
      <div className="navbar__aside">
        <img className="navbar__pic" src={sprites} alt="profile pic" />
        <h1 className="navbar__title">Adam Thorne</h1>
      </div>
    </nav>
  )
}