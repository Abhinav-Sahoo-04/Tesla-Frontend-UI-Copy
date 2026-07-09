import React from "react";
import "../assets/styles/OtherSection.css";
export default function OtherSection() {
  return (
    <div className="other-section">
      <div className="other-section-container">
        <div className="other-sec-card" id="other-card1">
          <img src="/otherSec1.avif" alt="OtherSEction" />
          <div className="other-sec-info-box">
            <h1>Solar Panels</h1>
            <p>Use Solar Energy to Power Your Home and Charge Your Tesla</p>
            <div className="other-sec-btn-warp">
              <button className="btn-buy">
                <strong>Order Now</strong>
              </button>
              <button>
                <strong>Learn More</strong>
              </button>
            </div>
          </div>
        </div>
        <div className="other-sec-card" id="other-card2">
          <img src="/otherSec2.avif" alt="OtherSEction" />
          <div className="other-sec-info-box">
            <h1>Powerwall</h1>
            <p>Keep Your Lights On During Outages</p>
            <div className="other-sec-btn-warp">
              <button className="btn-buy">
                <strong>Order Now</strong>
              </button>
              <button>
                <strong>Learn More</strong>
              </button>
            </div>
          </div>
        </div>
        <div className="other-sec-card" id="other-card3">
          <img src="/otherSec3.avif" alt="OtherSEction" />
          <div className="other-sec-info-box">
            <h1>Solar Roof</h1>
            <p>Generate Clean Energy With Your Roof</p>
            <div className="other-sec-btn-warp">
              <button className="btn-buy">
                <strong>Order Now</strong>
              </button>
              <button>
                <strong>Learn More</strong>
              </button>
            </div>
          </div>
        </div>
        <div className="other-sec-card" id="other-card4">
          <img src="/otherSec4.avif" alt="OtherSEction" />
          <div className="other-sec-info-box">
            <h1>Megapack</h1>
            <p>Massive Batteries for Massive Energy Support</p>
            <div className="other-sec-btn-warp">
              <button className="btn-buy">
                <strong>Learn More</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="other-sec-nav-link">
        <a href="#other-card1">.</a>
        <a href="#other-card2">.</a>
        <a href="#other-card3">.</a>
        <a href="#other-card4">.</a>
      </div>
      <button className="arr left-arr">
        <i class="ri-arrow-left-s-line"></i>
      </button>
      <button className="arr right-arr">
        <i class="ri-arrow-right-s-line"></i>
      </button>
      <div className="credit-sec">
        <a href="#">Tesla © 2025</a> <a href="#">Privacy & Legal</a> <a href="#"> Vehicle Recalls</a> <a href="#"> Contact</a> <a href="#">News</a> <a href="#">Get Updates</a>
        <a href="#">Locations</a> <a href="#">Learn</a>
      </div>
    </div>
  );
}
