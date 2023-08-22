import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
let myPic = '/Assets/images/placeholder.webp';

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
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
        </div>
        <div className="col-md-5">
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
        </div>
        <div className="col-md-5">
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
        </div>
        <div className="col-md-5">
          <img
            width="175px"
            src={process.env.PUBLIC_URL + myPic}
            alt="Haseeb"
          />
        </div>
      </div>
      
    </div>
  );
}
