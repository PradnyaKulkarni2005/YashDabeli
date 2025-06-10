import React from "react";
import "./Contact.css";
import "./ContactHero.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

export default function Contact({ variant }) {
  const isHero = variant === "hero";

  return (
    <div className={`contact-container ${isHero ? "hero-variant" : ""}`}>
      <div className="contact-content">
        <h2 className="contact-title animate-fade">
          {isHero ? "Your Smile Starts Here 💫" : "We’d ❤️ to Hear From You"}
        </h2>

        <p className="contact-message animate-slide">
          {isHero
            ? "Have a craving? Let’s make your taste buds dance! At Yash Dabeli, every flavor tells a story. 💬"
            : "Whether you’re craving a delicious Dabeli or planning a surprise treat for your loved ones, reach out to us! At Yash Dabeli & Fastfood, we believe every bite should bring a smile 😊."}
        </p>

        <div className="contact-info animate-fade-up">
          <div><FaMapMarkerAlt /> &nbsp;Raigad Colony, Near Bharat Bakery, Panchgaon, Kolhapur</div>
          <div><FaEnvelope /> &nbsp;yashmandar@gmail.com</div>
          <div><FaPhone /> &nbsp;+91 98765 43210</div>
        </div>

        <div className="social-icons animate-fade-up">
          <a href="https://www.instagram.com/yashdabeli?utm_source=qr&igsh=eGg3bWhpMmZ3czZh" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/share/1BvF65hyDg/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>

        <div className="map-container animate-zoom-in">
          <iframe
            title="Yash Dabeli Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.269000080836!2d74.22378379999999!3d16.6634171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc0ff5bd0c74199%3A0x772d1406c76ae7a8!2sYash%20Dabeli%20%26%20Fast%20food!5e0!3m2!1sen!2sin!4v1749552917728!5m2!1sen!2sin"
            width="100%"
            height="300"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
