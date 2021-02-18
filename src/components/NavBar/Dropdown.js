import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Dropdown.scss";

export default function Dropdown(props) {

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <div onClick={onClick} className="menu-trigger">
        <FontAwesomeIcon icon="bars" size="4x" />
      </div>
      <nav className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul onClick={onClick} >
          <li><Link to="/about"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />About</Link></li>
          <li><Link to="/projects"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Projects</Link></li>
          <li><Link to="/contact"><FontAwesomeIcon className="hide-icon" icon="caret-right" size="2x" />Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};