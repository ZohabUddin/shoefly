import React from "react";
import "./Footer.css";

export default function Footer() {
  const data1 = [
    "Search Shop",
    "For Sellers",
    "For Buyers",
    "Search Shoes",
    "Shop Online",
  ];

  const data2 = ["Our Story", "Careers", "Meet the team"];

  const data3 = [
    "29/a taha st",
    "California , US",
    "California , US",
    "Visit us",
  ];

  return (
    <div className="footerMainContainer">
      <div className="footerContainer">
        <div className="footerSection1">
          <p className="footerSection1Heading">SHOE FLY</p>
          <p className="footerSection1Text">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur
            adipiscing elit.
          </p>
          <div className="footerSocialIconsContainer">
            <img
              className="footerSocialIconStyling"
              src={require("../../assets/images/facebookIcon.png")}
              alt=""
            />

            <img
              className="footerSocialIconStyling"
              src={require("../../assets/images/instagramIcon.png")}
              alt=""
            />

            <img
              className="footerSocialIconStyling"
              src={require("../../assets/images/twitterIcon.png")}
              alt=""
            />
          </div>
        </div>
        <div className="footerSection2">
          <p className="footerSection2Heading">Community</p>
          {data1.map((item, index) => {
            return (
              <p className="footerSection2Item" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <div className="footerSection3">
          <p className="footerSection2Heading">About</p>
          {data2.map((item, index) => {
            return (
              <p className="footerSection2Item" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <div className="footerSection4">
          <p className="footerSection2Heading">Contact</p>
          {data3.map((item, index) => {
            return (
              <p className="footerSection2Item" key={index}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="footerDividerContainer">
        <div className="footerDivider"></div>
      </div>
      <div className="footerContainer2">
        <div className="footerContainer2TextContainer">
          <p className="footerContainer2Text">
            © Copyright 2023 Shoe fly - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
