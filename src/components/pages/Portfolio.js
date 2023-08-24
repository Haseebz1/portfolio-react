import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
let wearCoPic = '/Assets/images/WearCoSC.png';
let noteTakerPic = '/Assets/images/NotetakerSC.png';
let textEditorPic = '/Assets/images/textEditor-PWA.png';
let weatherDashPic = '/Assets/images/weatherDashSc.png';
let readmeGeneratorPic = '/Assets/images/readMeGenerator.png';
let DailyPlanerPic ='/Assets/images/dailyPlannerSc.png';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <div className="row">
        <div className="col-md-5">
        <p>Project 1</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + wearCoPic}
            alt="WearCoPic"
          />
          <a href="https://github.com/cckinwest/Project2-WearCorp.git" target="_blank" rel="noopener noreferrer">
          <p>click here for code</p>
          </a>
        </div>
        <div className="col-md-5">
        <p>Project 2</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + noteTakerPic}
            alt="NotetakerPic"
          />
           <a href="https://github.com/Haseebz1/NoteTaker.git" target="_blank" rel="noopener noreferrer">
          <p>click here for code</p>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
        <p>Project 3</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + textEditorPic}
            alt="WearCoPic"
          />
          <a href="https://github.com/Haseebz1/textEditor-PWA.git" target="_blank" rel="noopener noreferrer">
          <p>click here for code</p>
          </a>
        </div>
        <div className="col-md-5">
        <p>Project 4</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + weatherDashPic}
            alt=" WeatherDash"
          />
           <a href="https://github.com/Haseebz1/weatherDash.git" target="_blank" rel="noopener noreferrer">
          <p>click here for code</p>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
        <p>Project 5</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + readmeGeneratorPic}
            alt="Readme Genrator"
          />
          <a href="https://github.com/Haseebz1/ReadmeGenerator.git" target="_blank" rel="noopener noreferrer">
          <p>click here for code</p>
          </a>
        </div>
        <div className="col-md-5">
        <p>Project 6</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + DailyPlanerPic}
            alt="DailyPlaner"
          />
           <a href="https://github.com/Haseebz1/Daily-Planner.git" target="_blank" rel="noopener noreferrer">
          <p>click here for code</p>
          </a>
        </div>
      </div>

    </div>
  );
}
