import React, { useState } from "react";
import "../assets/styles/Navbar.css";
import NavIcons from "./NavIcons";
import FeatureList from "./FeatureList";
export default function Navbar() {
  const [openSection, setOpenSection] = useState(null);
  const descNames = [
    "vehicle-desc",
    "energy-desc",
    "charging-desc",
    "shop-desc",
    "discover-desc",
  ];
  const [vehicle, setVehicle] = useState({
    vehicle: [
      ["Model S", "/vehicle1.avif"],
      ["Model 3", "/vehicle2.avif"],
      ["Model Y", "/vehicle3.avif"],
      ["Model X", "/vehicle4.avif"],
      ["cybertruck", "/vehicle5.avif"],
      ["Inventory", "/vehicle6.avif"],
    ],
    vehicleDetails: [
      "Current Offers",
      "Demo Drive",
      "Trade-in",
      "Pre-Owned",
      "Features",
      "Help Me Choose",
      "Compare",
      "Workshops",
      "Help Me Charge",
      "Fleet",
      "Semi",
      "Roadster",
    ],
  });
  const [energy, setEnergy] = useState({
    energy: [["solar panels","/energy1.avif"],["solar roof","/energy2.avif"],["powerwall","/energy3.avif"],["mega pack","/energy4.avif"]],
    energyDesc: [
      "Schedule a Consultation",
      "Why Solar",
      "Incentives",
      "Support",
      "Partner with Tesla",
      "Commercial",
      "Utilities",
    ],
  });
  const [charging, setCharging] = useState({
    charging: [["Charging","/charge1.avif"],["Home Charging","/charge2.avif"],["Supercharging","/charge3.avif"],["Wall connector fo business","/charge4.avif"],["Superchargers for business","/charge5.avif"]],
    chargingDesc: [
      "Help Me Charge",
      "Charging Calculator",
      "Charging With NACS",
      "Supercharger Voting",
      "Host a Supercharger",
    ],
  });
  const [discover, setDiscover] = useState({
    Resources: [
      "Demo Drive",
      "Insurance",
      "Current Offers",
      "Learn",
      "Video Guides",
      "Customer Stories",
      "Events",
      "Workshops/",
    ],
    LocationServices: [
      "Find Us",
      "Find a Collision Center",
      "Find a Certified Installer/",
    ],
    Company: ["About", "Careers", "Investor Relations/"],
  });
  const [shop,setShop]=useState({
    shop:[["Charging","/shop1.avif"],["Vehicle Assesories","/shop2.avif"],["Apparel","/shop3.avif"],["Lifestyle","/shop4.avif"]]
  })

  function toggleSection(sectionClass) {
    const dropdown = document.querySelector(`.${sectionClass}`);
    if (!dropdown) return;

    if (openSection === sectionClass) {
      dropdown.style.display = "none";
      setOpenSection(null); // ✅ close if already open
    } else {
      closeAll();
      dropdown.style.display = "block";
      setOpenSection(sectionClass); // ✅ open new section
    }
  }

  function vehicleToggle() {
    toggleSection("vehicle-desc");
  }
  function energyToggle() {
    toggleSection("energy-desc");
  }
  function chargingToggle() {
    toggleSection("charging-desc");
  }
  function shopToggle() {
    toggleSection("shop-desc");
  }
  function discoverToggle() {
    toggleSection("discover-desc");
  }

  function closeAll() {
    descNames.forEach((dname) => {
      const el = document.querySelector(`.${dname}`);
      if (el) {
        el.style.display = "none";
      }
    });
  }

  return (
    <header>
      <nav className="navbar">
        <div className="nav-logo">
          <img src="/navlogo.png" alt="TESLA" />
        </div>
        <div className="nav-options">
          <ul className="list">
            <li className="vehicle-wrap wrapper">
              <button className="vehicle" onMouseOver={vehicleToggle}>
                Vehicle
              </button>
              <div className="container-desc vehicle-desc">
                <div className="container-desc-inner">
                  <div className="left-desc">
                    {vehicle.vehicle.map(([name, imgPath]) => (
                      <NavIcons key={name} name={name} imgPath={imgPath} />
                    ))}
                  </div>
                  <ul className="right-desc">
                    {vehicle.vehicleDetails.map((featureName) => {
                      return (
                        <FeatureList
                          key={featureName}
                          featureName={featureName}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
            <li className="Enery-wrap wrapper">
              <button className="energy" onMouseOver={energyToggle}>
                Energy
              </button>
              <div className="container-desc energy-desc">
                <div className="container-desc-inner">
                  <div className="left-desc">
                    {energy.energy.map(([name, imgPath]) => (
                      <NavIcons key={name} name={name} imgPath={imgPath} />
                    ))}
                  </div>
                  <ul className="right-desc">
                    {energy.energyDesc.map((featureName) => {
                      return (
                        <FeatureList
                          key={`${featureName}`}
                          featureName={featureName}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
            <li className="charging-wrap wrapper">
              <button className="discover" onMouseOver={chargingToggle}>
                Charging
              </button>
              <div className="container-desc charging-desc">
                <div className="container-desc-inner">
                  <div className="left-desc">
                    {charging.charging.map(([name, imgPath]) => (
                      <NavIcons key={name} name={name} imgPath={imgPath} />
                    ))}
                  </div>
                  <ul className="right-desc">
                    {charging.chargingDesc.map((featureName) => {
                      return (
                        <FeatureList
                          key={`${featureName}`}
                          featureName={featureName}
                        />
                      );
                    })}
                  </ul>
                </div>
              </div>
            </li>
            <li className="discover-wrap wrapper">
              <button className="charging" onMouseOver={discoverToggle}>
                Discover
              </button>
              <div className="container-desc discover-desc">
                <div className="container-desc-inner">
                  <div className="middle-desc">
                    <div className="middle-l">
                      <li>
                        <strong>Resources</strong>
                      </li>
                      {discover.Resources.map((res) => {
                        return <FeatureList key={`${res}`} featureName={res} />;
                      })}
                    </div>
                    <div className="middle-m">
                      <li>
                        <strong>Location Services</strong>
                      </li>
                      {discover.LocationServices.map((res) => {
                        return <FeatureList key={`${res}`} featureName={res} />;
                      })}
                    </div>
                    <div className="middle-r">
                      <li>
                        <strong>Company</strong>
                      </li>
                      {discover.Company.map((res) => {
                        return <FeatureList key={`${res}`} featureName={res} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="shop-wrap wrapper">
              <button className="shop" onMouseOver={shopToggle}>
                Shop
              </button>
              <div className="container-desc shop-desc">
                <div className="container-desc-inner">
                  <div className="left-desc">
                    {shop.shop.map(([name, imgPath]) => (
                      <NavIcons key={name} name={name} imgPath={imgPath} />
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-user-features">
          <ul className="nav-icons">
            <li>
              <i className="fas fa-question-circle"></i>
            </li>
            <li>
              <i className="ri-global-line"></i>
            </li>
            <li>
              <i className="ri-account-circle-2-line"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
