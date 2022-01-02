import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Former{" "}
          <span className="info-name">NFL Professional Football Player</span>,
          retired federal law enforcment officer, turned full stack developer.
          <br />I can be located in front of the computer, on the tennis court
          or out riding my motorcycle.
          <br />I have the answers to your web development needs.
        </div>
        <div className="about-photo">
          <img
            alt="AB-in-DC-Pic"
            src={require("../../../assets/ABinDC.jpeg")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
