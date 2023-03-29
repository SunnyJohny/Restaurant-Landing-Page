import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Logo from "../Assets/Logo.svg";


import BannerImage from "../Assets/home-banner-image.png";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
     {/* < Navbar/> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
        <h1 className="primary-heading">
  Welcome!<br />
  Here we offer an unforgettable dining experience.
</h1>
          <p className="primary-text">
          Our restaurant prides itself on serving 
          the freshest and highest quality ingredients in every dish we prepare..
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
