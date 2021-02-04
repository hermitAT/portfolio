import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Dropdown.scss";

export default function Dropdown(props) {
  return (
    <ul className="menu-level__top">
      <li><FontAwesomeIcon icon="bars" size="3x" />
      <ul className='menu-level__second'>
        <li>About</li>
        <li>Portfolio</li>
        <li>Gaming</li>
        <li>Contact</li>
      </ul>
      </li>
    </ul>
  )
}