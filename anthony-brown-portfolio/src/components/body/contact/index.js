import React from "react";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Take a business card! Reach out! Let's connect!</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../../assets/resume.pdf")}>
            <i class="fi fi-rr-download download-icon" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
