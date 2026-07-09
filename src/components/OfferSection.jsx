import React from 'react'
import "../assets/styles/OfferSection.css"
export default function OfferSection() {
  return (
    <div className='offer-section'>
      <div className="left-section">
        <div className="offer-info">
          <h1>Current Offers</h1>
          <h4>Limited inventory. Take delivery today.</h4>
          <button className="btn-offer">Learn More</button>
        </div>
        <img src="/offer1.avif" alt="offer1"/>
      </div>
      <div className="right-section">
        <div className="offer-info">
          <h1>Annual Shareholder Meeting</h1>
          <h4>The future of Tesla is in your hands. Learn why your vote matters.</h4>
          <button className="btn-offer">Learn More</button>
        </div>
        <img src="/offer2.avif" alt="offer1"/>
      </div>
    </div>
  )
}
