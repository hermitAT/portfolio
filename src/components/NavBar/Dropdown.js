import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Dropdown.scss";

export default function Dropdown(props) {
  return (
    <ul className="top-level-menu">
      <li><FontAwesomeIcon icon="bars" size="3x" />
      </li>
    </ul>
  )
}