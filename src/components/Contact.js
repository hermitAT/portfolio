import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Contact.scss";

export default function Contact() {

  return (
    <main className="contact">
      <section className="contact-container">
        <h3>{"Feel free to connect with me!"}</h3>
        <div className="contact-email">
          <h3>LinkedIn:</h3>
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" onClick={() => window.open("https://www.linkedin.com/in/ahthornev2/", "_blank")} />
          <p><a href="https://www.linkedin.com/in/ahthornev2/" target="_blank" rel="noopener noreferrer external">Adam Thorne</a></p>
        </div>
        <div className="contact-email">
          <h3>Instagram:</h3>
          <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" onClick={() => window.open("https://www.linkedin.com/in/ahthornev2/", "_blank")} />
          <p>@hermit_at</p>
        </div>
        <div className="contact-email">
          <h3>Twitter:</h3>
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" onClick={() => window.open("https://www.linkedin.com/in/ahthornev2/", "_blank")} />
          <p>@hermitAT</p>
        </div>
        <div className="contact-email">
          <h3>GitHub:</h3>
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" onClick={() => window.open("https://github.com/hermitAT", "_blank")} />
          <p><a href="https://github.com/hermitAT" target="_blank" rel="noopener noreferrer external">hermitAT</a></p>
        </div>
        <div className="contact-email">
          <h3>Email:</h3>
          <FontAwesomeIcon icon="paper-plane" size="2x" />
          <p>ahthornev2@gmail.com</p>
        </div>
      </section>
    </main>
  )
}