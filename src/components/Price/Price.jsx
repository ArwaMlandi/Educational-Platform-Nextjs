import React from "react";
import { useState } from "react";
import "./Price.css";
const Price = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Starter",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. t",
      price: "$50.99",
      span: "/month",
    },
    {
      id: 2,
      title: "Busniess",
      description: " Lorem ipsum dolor sit amet consectetur, adipisicing eli",
      price: "$99.99",
      span: "/month",
    },
    {
      id: 3,
      title: "Premium",
      description:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
      price: "$14.99",
      span: "/month",
    },
  ]);
  return (
    <div className="price-container">
      <h3 className="price-container-h3">Pricing</h3>
      <p className="best-p">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, <br />{" "}
        dolorum maxime minus libero ab recusandae delectus exercitation
      </p>

      <div className="course">
        {cards.map((card) => (
          <div className="course-card" key={card.id}>
            <div className="price-card-content">
              <h3 className="price-title">{card.title}</h3>
              <p>
                <span className="price-price">{card.price}</span>
                <span className="price-priceSpan">{card.span}</span>
              </p>

              <span className="course-p">
                {card.description} <br /> {card.description}
              </span>
              <div>
                <button className="becom-button">ADDMITION</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
