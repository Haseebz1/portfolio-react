import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className=" text-center footer">
      <a href="url" _target="blank">
        <img
          src={process.env.PUBLIC_URL + "/Assets/images/linkedin-icon.png"}
          alt="linkedin icon"
          width="50px"
        />{" "}
      </a>

      <a
        href="https://docs.google.com/document/d/1X1pVj4e_XiJGudsw5z5wvFH7thSTk29CkaS0l8CdU4M/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/images/cv-icon1.png"}
          alt="cvicon"
          width="50px"
        />{" "}
      </a>
      <span>&copy; Copyright 2020 Haseeb Zubair</span>
    </footer>
  );
}

export default Footer;
