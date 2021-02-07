import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Dropdown.scss";

export default function Dropdown(props) {
  return (
    <ul className="menu-level__top">
      <li><FontAwesomeIcon icon="bars" size="3x" />
      <ul className='menu-level__second'>
        <Link to="/about"><li>About</li></Link>
        <Link to="/portfolio"><li>Portfolio</li></Link>
        <li>Gaming</li>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      </li>
    </ul>
  )
}