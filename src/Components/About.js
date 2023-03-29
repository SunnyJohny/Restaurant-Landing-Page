import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import Logo from "../Assets/Logo.svg";


import { BsFillPlayCircleFill } from "react-icons/bs";
import Navbar from "./Navbar";
import Work from "./Work";

const About = () => {
  return (
<>
    <div className="about-section-container">
      
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About  Us</p>
        <h1 className="primary-heading">
       Here We believe that dining should be an experience that engages all the senses.
        </h1>
        <p className="primary-text"> From the aroma of our freshly baked bread to the visual appeal of our beautifully presented dishes, we strive to create a memorable experience that leaves our guests feeling satisfied and happy.


        </p>
        <p className="primary-text">
        We are open 8am-9pm Every Day, and we invite you to come and experience our hospitality and exceptional cuisine for yourself. Thank you for considering   <img src={Logo} alt="" /> <br/> 
    for your next dining experience.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>

    </div>
    <Work />
    </>
    
  );
};

export default About;
