import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">"I've been using the delivery service for a few weeks now and I'm blown away by the quality of their meals and the speed of their deliveries. It's made my life so much easier and I highly recommend it to anyone looking for a reliable food delivery service."
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>"I recently started using the Delivery Service and I'm impressed with how easy it is to order meals and get them delivered quickly. The food always arrives hot and fresh, and the delivery drivers are friendly and professional. I highly recommend this service to anyone looking for a convenient and reliable food delivery option!".
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
};

export default Testimonial;
