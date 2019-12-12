import React from "react";

import "./Card.scss";

const Card = ({ card, clickCard }) => {
  return (
    <div className={card.animation} onClick={() => clickCard(card)}>
      <img src="juice.jpg" alt="vitamin juice" className="card-image" />
      <div className="card-container">
        <h3>
          Vitamin Juice <span className="price">$24.99</span>{" "}
        </h3>
        <p>
          Need a jum on your vitamins while drinking? Tired of popping pills?
          Drink our vitamin enhanced juice!
        </p>
      </div>
    </div>
  );
};

export default Card;
