import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className=" text-center footer">
      <a
        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/images/linkedin-icon.png"}
          alt="linkedin-icon"
          className="icon"
        />
      </a>

      <a
        href="https://docs.google.com/document/d/1X1pVj4e_XiJGudsw5z5wvFH7thSTk29CkaS0l8CdU4M/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/images/cv-icon1.png"}
          alt="cvicon"
          className="icon"
        />
      </a>

      <a
        href="https://instagram.com/has_jatt?utm_source=qr&igshid=MzNINGNkZWQ4Mg%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/images/insta-icon.jpg"}
          alt="cvicon"
          className="icon"
        />
      </a>

      <span className="copyright">&copy; Copyright 2020 Haseeb Zubair</span>
    </footer>
  );
}

export default Footer;
