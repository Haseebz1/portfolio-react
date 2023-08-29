import React from "react";
import "./footer.css";

function Footer() {
    return (
      <footer className=" text-center footer">
        <a href="url" _target="blank"  > <img src={process.env.PUBLIC_URL + "/Assets/images/linkedin-icon.png"} alt="linkedin con" width="50px"/> </a>
        <span>&copy; Copyright 2020 Haseeb Zubair</span>
      </footer>
    );
  }
  
  export default Footer;