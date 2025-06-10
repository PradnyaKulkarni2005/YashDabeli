import React from "react";
import "./AboutUs.css";
import founder1 from "../assets/logo.png";
import founder2 from "../assets/logo.png"; // Replace with actual founder images

export default function AboutUs() {
  return (
    <section className="about-us-wrapper">
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Yash Dabeli & Fast Food</h1>
          <p className="hero-subtitle">
            Where every bite tells a story of flavor, love, and tradition.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="about-section fade-in">
        <h2 className="section-title">Our Story</h2>
        <p>
          Founded by <strong>Mandar Pujari</strong> and <strong>Shruti Pujari</strong>, Yash Dabeli started with a simple goal — to bring joy through delicious, affordable food. 
          From <strong>classic Dabelis</strong> to mouth-watering <strong>burgers, pizzas, sandwiches</strong>, and refreshing <strong>ice creams & shakes</strong>, our menu caters to every taste.
        </p>
        <p>
          We believe food should be served with love in a <strong>clean, hygienic, and happy space</strong>. Our cafe is a hub for families, students, and foodies alike.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="mv-section">
        <div className="mv-box fade-in-up delay-1">
          <h3>🎯 Our Mission</h3>
          <p>
            To serve hygienic, fast, and flavorful food that satisfies cravings of all age groups, while keeping it affordable and delightful.
          </p>
        </div>
        <div className="mv-box fade-in-up delay-2">
          <h3>🌟 Our Vision</h3>
          <p>
            To become the most loved quick-bite café in town, known for positive vibes, customer-first service, and irresistible combos.
          </p>
        </div>
      </div>

      {/* Founders */}
      <div className="founder-section fade-in">
        <h2 className="section-title">Meet the Founders</h2>
        <div className="founder-cards">
          <div className="founder-card">
            <img src={founder1} alt="Mandar Pujari" />
            <h4>Mandar Pujari</h4>
            <p>Creative mind behind the café menu and customer service expert.</p>
          </div>
          <div className="founder-card">
            <img src={founder2} alt="Shruti Pujari" />
            <h4>Shruti Pujari</h4>
            <p>Ensures a pleasant environment and efficient workflow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
