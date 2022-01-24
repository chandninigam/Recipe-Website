import React from "react";
import img from '../../Image/foodHome.jpg';
export const Card = ({ title, mainContent }) => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <div className="cardTitle">{title}</div>
        <div className="cardDesc">{mainContent}</div>
      </div>
      <div className="cardImg">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};
