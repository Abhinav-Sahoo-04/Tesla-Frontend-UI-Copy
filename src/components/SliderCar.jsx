import React from "react";
import "../assets/styles/SliderCar.css";
export default function SliderCar() {
  return (
    <div className="slider-car-wrap">
      <div className="slider-car">
        <div className="car" id="car1">
          <img src="/car1.avif" alt="car1" />
          <span>Utility Truck</span>
          <div className="car-info">
            <h1>CYBER TRUCK</h1>
            <a href="#">Lease from $699/mo</a>
            <h5>Price increase in November</h5>
            <div className="car-btn-wrap">
                <button className="btn-buy">Buy Now</button>
                <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="car" id="car2">
          <img src="/car2.avif" alt="car2" />
          <span>Luxury SUV</span>
          <div className="car-info">
            <h1>Model X</h1>
            <a href="#" className="line-anchor">3.99% APR Available</a>
            <div className="car-btn-wrap">
                <button className="btn-buy">Buy Now</button>
                <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="car" id="car3">
          <img src="/car3.avif" alt="car3" />
          <span>Luxury Sedan</span>
          <div className="car-info">
            <h1>Model S</h1>
            <a href="#">3.99% APR Available</a>
            <div className="car-btn-wrap">
                <button className="btn-buy">Buy Now</button>
                <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="car" id="car4">
          <img src="/car4.avif" alt="car4" />
          <span>New Sport Sedan</span>
          <div className="car-info">
            <h1>Model 3</h1>
            <h4>Starting at $36,999<sup>1</sup></h4>
            <div className="car-btn-wrap">
                <button className="btn-buy">Buy Now</button>
                <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="car" id="car5">
          <img src="/car5.avif" alt="car5" />
          <span>New Midsize SUV</span>
          <div className="car-info">
            <h1>Model Y</h1>
            <h4>Starting at $36,999<sup>2</sup> </h4>
            <div className="car-btn-wrap">
                <button className="btn-buy">Buy Now</button>
                <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="slider-nav-link-indicator">
        <a href="#car1">.</a>
        <a href="#car2">.</a>
        <a href="#car3">.</a>
        <a href="#car4">.</a>
        <a href="#car5">.</a>
      </div>
      <button className="arr left-arr"><i class="ri-arrow-left-s-line"></i></button>
      <button className="arr right-arr"><i class="ri-arrow-right-s-line"></i></button>
    </div>
  );
}
