import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contact.scss";

export default function Contact(props) {

  return (
    <main className="contact">
      <section className="contact-container">
        <h2>Connect with me!</h2>
        <div className="contact-email">
          <h3>Email:</h3>
          <FontAwesomeIcon icon="paper-plane" size="2x" />
          <p>ahthornev2@gmail.com</p>
        </div>
        <div className="contact-email">
          <h3>LinkedIn:</h3>
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" onClick={() => window.open("https://www.linkedin.com/in/ahthornev2/", "_blank")} />
          <p><a href="https://www.linkedin.com/in/ahthornev2/" target="_blank" rel="noopener noreferrer external">Adam Thorne</a></p>
        </div>
        <div className="contact-email">
          <h3>GitHub:</h3>
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" onClick={() => window.open("https://github.com/hermitAT", "_blank")} />
          <p><a href="https://github.com/hermitAT" target="_blank" rel="noopener noreferrer external">hermitAT</a></p>
        </div>
        <div className="contact-email">
          <h3>Linktree:</h3>
          <FontAwesomeIcon icon="passport" size="2x" onClick={() => window.open("https://linktr.ee/hermitAT", "_blank")} />
          <p><a href="https://linktr.ee/hermitAT" target="_blank" rel="noopener noreferrer external">Social media!</a></p>
        </div>
        <div className="contact-buttons">
        <Link to="/">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon="passport" size="2x" />
        </Link>
      </div>
      </section>
    </main>
  )
}