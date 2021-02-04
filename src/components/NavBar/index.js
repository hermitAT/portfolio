import React from "react";

import Dropdown from "./Dropdown";
import "./index.scss";

export default function NavBar(props) {

  return (
    <nav className="navbar">
      <div className="navbar__aside">
        <img className="navbar__pic" src="https://media.giphy.com/media/TZco470UACpNK/source.gif" alt="profile pic" />
        <h1 className="navbar__title">Adam Thorne</h1>
      </div>
      <Dropdown />
    </nav>
  )
}