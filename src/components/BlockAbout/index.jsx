import React from "react";
import "./style.css";
// import catalog from "./img/catalog.png";
// import delivery from "./img/delivery.png";
// import guarantee from "./img/guarantee.png";

export const BlockAbout = () => {
  return ( 
    <div className="about">
      <div className="about__catalog">
        <a className="about" href="#">
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">КАТАЛОГ</div>
          </div>
        </a>
      </div>
      <div className="about__delivery">
      <a className="about" href="#">
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">ДОСТАВКА</div>
          </div>
        </a>
      </div>
      <div className="about__guarantee">
      <a className="about" href="#">
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">ГАРАНТИЯ</div>
          </div>
        </a>
      </div>
      <div className="about__us">
      <a className="about" href="#">
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">О НАС</div>
          </div>
        </a>
      </div>
      <div className="about__contacts">
      <a className="about" href="#">
          <div className="svg-wrapper">
            <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
              <rect className="shape" height="60" width="320" />
            </svg>
            <div className="text">КОНТАКТЫ</div>
          </div>
        </a>
      </div>
    </div>
  );
};
