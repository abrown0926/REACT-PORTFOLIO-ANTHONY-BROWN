import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>&copy;</p> 2022 Created By
      <img
        alt="logo"
        src={require("../../assets/Oculus.png")}
        className="footer-logo"
      />{" "}
      OneOculus, LLC WebDev
    </div>
  );
}

export default Footer;
