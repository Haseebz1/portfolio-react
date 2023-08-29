import React from "react";
import "./portfolio.css";
import "bootstrap/dist/css/bootstrap.min.css";
let wearCoPic = '/Assets/images/WearCoSC.png';
let noteTakerPic = '/Assets/images/NotetakerSC.png';
let textEditorPic = '/Assets/images/textEditor-PWA.png';
let weatherDashPic = '/Assets/images/weatherDashSc.png';
let readmeGeneratorPic = '/Assets/images/readMeGenerator.png';
let DailyPlanerPic ='/Assets/images/dailyPlannerSc.png';

export default function Portfolio() {
  return (
    <div className="myportfolio">
      <h1>Portfolio Page</h1>
      <p className="portfolioParagraph">
      "I'm excited to showcase my IT portfolio on GitHub, a curated collection of my projects, skills,
       and accomplishments in the world of technology. 
      This portfolio reflects my journey as an IT enthusiast, highlighting the innovative solutions.
       I've crafted using JavaScript ES6+, CSS3, and HTML5, along with my proficiency in working with SQL and NoSQL databases like MongoDB and MySQL. 
      You'll find projects demonstrating my expertise in web development technologies such as Express, React, Node, and Handlebars, as well as my ability to design responsive interfaces with Bootstrap.
      Moreover, my knowledge extends to creating Restful APIs and GraphQL endpoints,
       and I have experience with Object-Oriented Programming (OOP) principles and working with Object-Relational Mapping (ORM) systems. 
      Feel free to explore this repository and witness my commitment to excellence in the digital realm,
       backed by a robust skill set that encompasses the latest in IT and software development."
      </p>
      <div className="row">
        <div className="col-md-5">
        <p className="projectText">Project 1</p>
          <img
            width="475px"
            src={process.env.PUBLIC_URL + wearCoPic}
            alt="WearCoPic"
          />
          <a href="https://github.com/cckinwest/Project2-WearCorp.git" target="_blank" rel="noopener noreferrer">
          <p className="code-link">Click here for code</p>
          </a>
        </div>
        <div className="col-md-5">
        <p className="projectText">Project 2</p>
          <img
            width="475px"
            src={process.env.PUBLIC_URL + noteTakerPic}
            alt="NotetakerPic"
          />
           <a href="https://github.com/Haseebz1/NoteTaker.git" target="_blank" rel="noopener noreferrer">
          <p className="code-link">click here for code</p>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
        <p className="projectText">Project 3</p>
          <img
            width="475px"
            src={process.env.PUBLIC_URL + textEditorPic}
            alt="WearCoPic"
          />
          <a href="https://github.com/Haseebz1/textEditor-PWA.git" target="_blank" rel="noopener noreferrer">
          <p className="code-link">click here for code</p>
          </a>
        </div>
        <div className="col-md-5">
        <p className="projectText">Project 4</p>
          <img
            width="475px"
            src={process.env.PUBLIC_URL + weatherDashPic}
            alt=" WeatherDash"
          />
           <a href="https://github.com/Haseebz1/weatherDash.git" target="_blank" rel="noopener noreferrer">
          <p className="code-link">click here for code</p>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
        <p className="projectText">Project 5</p>
          <img
            width="475px"
            src={process.env.PUBLIC_URL + readmeGeneratorPic}
            alt="Readme Genrator"
          />
          <a href="https://github.com/Haseebz1/ReadmeGenerator.git" target="_blank" rel="noopener noreferrer">
          <p className="code-link">click here for code</p>
          </a>
        </div>
        <div className="col-md-5">
        <p className="projectText">Project 6</p>
          <img
            width="475px"
            src={process.env.PUBLIC_URL + DailyPlanerPic}
            alt="DailyPlaner"
          />
           <a href="https://github.com/Haseebz1/Daily-Planner.git" target="_blank" rel="noopener noreferrer">
          <p className="code-link">click here for code</p>
          </a>
        </div>
      </div>

    </div>
  );
}
