import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const data = ["Home", "Shop", "Collection", "About", "Gallery"];
  return (
    <div className="navbarMainContainer">
      <div className="navbarContainer">
        <div className="navbarSection1">
          <div className="navbarSection1TextContainer">
            <p className="navbarSection1Text">SHOE FLY</p>
          </div>
        </div>
        <div className="navbarSection2">
          <ul className="navbarSection2ListContainer">
            {data.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.toLowerCase().split(" ")[0]}
                  className={({ isActive }) =>
                    `navbarListItem ${isActive ? "active" : ""}`
                  }
                >
                  <li>{item}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
        <div className="navbarSection3">
          <img
            className="navbarIconStyling"
            src={require("../../assets/images/favouritesIcon.png")}
            alt=""
          />
          <img
            className="navbarIconStyling"
            src={require("../../assets/images/searchIcon.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
