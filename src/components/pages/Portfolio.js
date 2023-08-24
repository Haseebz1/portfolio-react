import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
let myPic = '/Assets/images/placeholder.webp';
let wearCoPic = '/Assets/images/WearCo.png'

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
            alt="Haseeb"
          />
          <a href="https://github.com/cckinwest/Project2-WearCorp.git" target="_blank" rel="noopener noreferrer">
          <p>click here for code</p>
          </a>
        </div>
        <div className="col-md-5">
        <p>Project 2</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
          <p>click here for code</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
        <p>Project 3</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
          <p>click here for code</p>
        </div>
        <div className="col-md-5">
        <p>Project 4</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
          <p>click here for code</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <p>Project 5</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
          <p>click here for code</p>
        </div>
        <div className="col-md-5">
          <p>Project 6</p>
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
          <p>click here for code</p>
        </div>
      </div>

    </div>
  );
}
