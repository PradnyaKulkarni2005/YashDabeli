import React from "react";
import "./WhyChooseUs.css";
import { FaUtensils, FaSmile, FaShippingFast, FaHandHoldingUsd } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaUtensils />,
      title: "Authentic Taste",
      desc: "Crafted with secret spices & love in every bite.",
    },
    {
      icon: <FaSmile />,
      title: "Hygienic & Safe",
      desc: "We follow strict cleanliness standards.",
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Service",
      desc: "Delicious food, served super fast.",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Value Combos",
      desc: "Great taste, affordable prices every day.",
    },
  ];

  return (
    <div className="why-section">
      <h2 className="why-title">Why Choose Yash Dabeli & Fastfood?</h2>
      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="why-icon">{item.icon}</div>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
