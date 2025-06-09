import React, { useEffect } from "react";
import "./Menu.css";

const menuImages = [
  { src: "https://res.cloudinary.com/deu26betq/image/upload/v1749457857/menu1_vydpc5.jpg", alt: "Menu Page 1" },
  { src: "https://res.cloudinary.com/deu26betq/image/upload/v1749457857/menu2_vztcly.jpg", alt: "Menu Page 2" },
  { src: "https://res.cloudinary.com/deu26betq/image/upload/v1749457857/menu3_jaywdt.jpg", alt: "Menu Page 3" },
];

const specialOffers = [
  { src: "https://res.cloudinary.com/deu26betq/image/upload/v1749457858/offer1_sjzzh5.jpg", alt: "Special Dabeli Offer" },
];

export default function Menu() {
  useEffect(() => {
    const items = document.querySelectorAll(".menu-item, .offer-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = "running";
          }
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="menu-section">
      <h2 className="menu-title">Our Delicious Menu 🍽️</h2>

      <div className="menu-gallery">
        {menuImages.map((img, idx) => (
          <div
            className="menu-item"
            key={idx}
            style={{ animationDelay: `${idx * 0.3}s` }}
          >
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

      <div className="offers-section">
        <h3 className="offers-title">🔥 Today's Special Offers</h3>
        <div className="offers-gallery">
          {specialOffers.map((offer, idx) => (
            <div
              className="offer-item"
              key={idx}
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <img src={offer.src} alt={offer.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
