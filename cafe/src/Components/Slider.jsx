import React from 'react';
import './Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BlurText from './BlurText'; 



export default function Slider() {
  return (
   <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
      data-bs-pause="false"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active position-relative">
          <img
            src="https://recipesblob.oetker.in/assets/9447029b80054ee49f3ac21841884874/1272x764/dabeli.webp"
            className="d-block w-100 blurred-background"
            alt="Slide 1"
          />
          
  
        </div>


        <div className="carousel-item position-relative">
          <img src="https://res.cloudinary.com/deu26betq/image/upload/v1749194347/pizza2_xyc1hs.jpg" className="d-block w-100 blurred-background" alt="Slide 2" />
          <div className="carousel-caption custom-caption">
            {/* <h2 className="bg-dark bg-opacity-75 text-white px-4 py-3 rounded">Tasty Pizza</h2> */}
          </div>
        </div>

        <div className="carousel-item position-relative">
          <img src="https://res.cloudinary.com/deu26betq/image/upload/v1749195404/burger2_grbqla.jpg" className="d-block w-100 blurred-background" alt="Slide 3" />
          <div className="carousel-caption custom-caption">
            {/* <h2 className="bg-dark bg-opacity-75 text-white px-4 py-3 rounded">Juicy Burger</h2> */}
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev top-50 translate-middle-y"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next top-50 translate-middle-y"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
