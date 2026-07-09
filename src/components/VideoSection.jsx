import React from 'react'
import "../assets/styles/VideoSection.css"
export default function VideoSection() {
  function videoPause() {
  const vid = document.querySelector("video");
  const btnPP=document.querySelector(".pause-btn");
  if (vid.paused) {
    vid.play();
    btnPP.innerHTML=`<i class="ri-pause-mini-fill"></i>`;
  } else {
    vid.pause();
    btnPP.innerHTML=`<i class="ri-play-fill"></i>`;
  }
}

  return (
    <div className='video-section-wrap'>
        <div className="video-wrap">
          <button className="pause-btn" onClick={videoPause}><i className="ri-pause-mini-fill"></i></button>
          <video muted autoPlay loop src="/videoSection.mp4"></video>
          <div className="video-info-wrap">
            <h1>Full Self-Driving (Supervised)</h1>
            <div className="video-info-btn-wrap">
              <button className='btn-demo'><strong>Demo Drive</strong></button>
              <button><strong>Learn More</strong></button>
            </div>
          </div>
        </div>
        <div className="side-pan">
          <img src="/sidePan.avif" alt="Side Pannel" />
          <div className="panel-info-wrap">
            <h1>Features That Come Standard</h1>
          <button><strong>Discover</strong></button>
          </div>
        </div>
    </div>
  )
}
