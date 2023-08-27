import React from "react";
import "./aboutme.css";
let myPic = "/Assets/images/placeholder.webp";

export default function AboutMe() {
  return (
    <div className="aboutme">
      <h1>AboutMe</h1>
      <img width="175px" src={process.env.PUBLIC_URL + myPic} alt="Haseeb" />
      <p>
        With a strong foundation in Agile methodologies, I thrive on
        organization, a skill that fuels my effective time management, ensuring
        I consistently meet project deadlines. My calm and focused demeanor in
        the face of challenges enables me to excel in high-pressure situations,
        where I leverage my natural talent for maintaining unwavering focus. I'm
        dedicated to upholding the highest quality standards in my work,
        consistently delivering exceptional results. My skill set includes
        crafting structured web content with HTML5, enhancing user experiences
        through CSS3, and passionate web development using JavaScript and DOM
        manipulation. I am proficient in the MERN (MongoDB, Express.js, React,
        Node.js) stack, enabling me to build powerful and responsive
        applications that captivate users. Additionally, my expertise extends to
        GraphQL, where I create efficient and flexible APIs to meet diverse data
        requirements. I have experience building responsive applications with
        Node.js and Express.js, guided by object-oriented principles for clean
        and reusable code. I'm adept in database management using Sequelize
        (MySQL) and MongoDB (Mongoose) and proficient in version control with
        Git for collaborative development. My strengths extend to working in
        fast-paced environments, proven management, communication, and people
        skills, proficiency in Microsoft Office Applications, strong
        problem-solving abilities, and a track record of coaching and developing
        team members in previous roles."
      </p>
    </div>
  );
}
