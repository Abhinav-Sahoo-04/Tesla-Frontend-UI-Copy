import React, { useState ,useEffect} from "react";
import "../assets/styles/Carosel.css";

export default function Carosel() {
  const [show1,setShow1]=useState("none");
  const [show2,setShow2]=useState("block");
  const [nav1,setNav1]=useState("white");
  const [nav2,setNav2]=useState("lightgrey");


  function showHomepage(){
    if(show1=="none"){
      setShow1("block");
      setShow2("none");
      setNav1("lightgrey");
      setNav2("white");
    }
    else{
      setShow1("none");
      setShow2("block");
      setNav2("lightgrey");
      setNav1("white");
    }
  }
// setInterval(() => {
//   showHomepage()
// }, 7000);

  return (
    <div className="carosel-wrap">
      <div className="carosel">
        <div className="homepage" id="homepage1" style={{display:show1}}>
          <div className="info-box box1">
            <div className="model-name">
              <h1>Model Y</h1>
            </div>
            <div className="btn-wrap">
            <button className="btn-buy">Order Now</button>
            <button>Learn More</button>
            </div>
          </div>
          <img src="/Homepage1.avif" alt="Homepage1" />
        </div>
        <div className="homepage" id="homepage2" style={{display:show2}}>
          <div className="info-box box2">
            <div className="model-name">
                <h1>Model 3</h1>
            </div>
            <div className="btn-wrap">

            <button className="btn-buy">Order Now</button>
            <button>Learn More</button>
            </div>
          </div>
          <img src="/Homepage2.avif" alt="Homepage1" />
        </div>

        
      </div>

      <button className="left-arr arr" onClick={showHomepage}>
        <i class="ri-arrow-left-wide-line"></i>
      </button>
      <button className="right-arr arr" onClick={showHomepage}>
        <i class="ri-arrow-right-wide-line"></i>
      </button>
      <div className="nav-link-indicator">
        <button className="nav-btn home1" style={{backgroundColor:nav1}}>.</button>
        <button className="nav-btn home2" style={{backgroundColor:nav2}}>.</button>
      </div>
    </div>
  );
}
