import React from 'react'
import "../assets/styles/MapSection.css"
export default function MapSection() {
  return (
    <div className='map-section'>
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11801809.455541447!2d-98.19169746232876!3d40.051948095428266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1761315094746!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="map-info">
        <div className="map-info-left">
            <h1>Find Your Charge</h1>
            <h4>View the network of Tesla Superchargers and Destination Chargers available near you.</h4>
            <div className="map-info-left-btn-wrap">
                <button className='btn-net'><strong>View Network</strong></button>
                <button><strong>Learn More</strong></button>
            </div>
        </div>
        <div className="map-info-right">
            <span>
                <h1>3,168<i class="ri-flashlight-fill"></i></h1>
                <h3>Superchargers</h3>
            </span>
            <span>
                <h1>1,885<i class="ri-plug-fill" id="charge"></i></h1>
                <h3>Destination Chargers</h3>
            </span>

        </div>
      </div>
    </div>
  )
}
