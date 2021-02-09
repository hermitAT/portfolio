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
          <a href="mailto:ahthornev2@gmail.com" target="_blank" rel="noopener noreferrer external"><FontAwesomeIcon icon="paper-plane" size="2x" /></a>
          <p><a href="mailto:ahthornev2@gmail.com" target="_blank" rel="noopener noreferrer external">ahthornev2@gmail.com</a></p>
        </div>
        <div className="contact-email">
          <h3>LinkedIn:</h3>
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" onClick={() => window.open("https://www.linkedin.com/in/ahthornev2/", "_blank")} />
          <p><a href="https://www.linkedin.com/in/ahthornev2/" target="_blank" rel="noopener noreferrer external">Adam Thorne</a></p>
        </div>
        <div className="contact-email">
          <h3>GitHub:</h3>
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" onClick={() => window.open("https://github.com/hermitAT", "_blank")} />
          <p><a href="https://github.com/hermitAT" target="_blank" rel="noopener noreferrer external">@hermitAT</a></p>
        </div>
        <div className="contact-email">
          <h3>Linktree:</h3>
          <FontAwesomeIcon icon="passport" size="2x" onClick={() => window.open("https://linktr.ee/hermitAT", "_blank")} />
          <p><a href="https://linktr.ee/hermitAT" target="_blank" rel="noopener noreferrer external">All my socials!</a></p>
        </div>
        <div className="contact-buttons">
        <Link to="/">
          <FontAwesomeIcon icon="home" size="2x" />
        </Link>
        <a href="https://resume.creddle.io/resume/b0kn7m0zgm3" target="_blank" rel="noopener noreferrer external">
          Resume <FontAwesomeIcon icon="file-alt" size="2x" />
        </a>
      </div>
      </section>
    </main>
  )
}