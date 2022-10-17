import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />

        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
            <span></span>
          </div>

          <div>
            <span>
              In here we will help you to shape and build Ideal body and live up
              your lile to fullest
            </span>
          </div>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;