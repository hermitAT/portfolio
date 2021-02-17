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
          <a href="mailto:ahthornev2@gmail.com" target="_blank" rel="noopener noreferrer external">
            <div className="contact-link">
              <FontAwesomeIcon icon="paper-plane" size="2x" />
              <p>ahthornev2</p>
            </div>
          </a>
        </div>
        <div className="contact-email">
          <h3>LinkedIn:</h3>
          <a href="https://www.linkedin.com/in/ahthornev2/" target="_blank" rel="noopener noreferrer external">
            <div className="contact-link">
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" onClick={() => window.open("https://www.linkedin.com/in/ahthornev2/", "_blank")} />
              <p>Adam Thorne</p>
            </div>
          </a>
        </div>
        <div className="contact-email">
          <h3>GitHub:</h3>
          <a href="https://github.com/hermitAT" target="_blank" rel="noopener noreferrer external">
            <div className="contact-link">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              <p>@hermitAT</p>
            </div>
          </a>
        </div>
        <div className="contact-email">
          <h3>Linktree:</h3>
          <a href="https://linktr.ee/hermitAT" target="_blank" rel="noopener noreferrer external">
            <div className="contact-link">
              <FontAwesomeIcon icon="passport" size="2x" />
              <p>All my socials!</p>
            </div>
          </a>
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