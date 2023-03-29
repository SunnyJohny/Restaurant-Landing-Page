import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseMeals,
      title: "Order For A meal",
      text: "Its an easy-to-use service that allows users to quickly and easily order delicious and satisfying meals for delivery. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: " With a focus on speed and efficiency, we strive to get your meals to you as quickly as possible, without compromising on quality or taste.",
    },
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "You can pick Your Meals right at to your door step, so you can enjoy your perfect meal from the comfort of your own home.",
    },
   
   
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Delivery Service</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Our Delivery Service is a platform that provides users with fast and reliable food delivery services. The process of using the platform is straightforward , with three simple steps: Order your meals, enjoying fast deliveries,
         and sit back relax and enjoy your wonderful meal .
         It might also interest you to know that we have <b>Special Dietary Options </b>, or any additional perks for users.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
