import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Dropdown.scss";

export default function Dropdown(props) {
  return (
    <ul className="menu-level__top">
      <li><FontAwesomeIcon icon="bars" size="3x" />
      <ul className='menu-level__second'>
        <Link to="/about"><li><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />About</li></Link>
        <Link to="/projects"><li><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Projects</li></Link>
        <Link to="/contact"><li><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Contact</li></Link>
      </ul>
      </li>
    </ul>
  )
}