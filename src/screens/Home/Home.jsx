import React from "react";
import "./Home.css";

export default function Home() {
  const data1 = [
    {
      img: require("../../assets/images/lockIcon.png"),
      text1: "Secure Payment",
      text2: "Morem ipsum",
    },
    {
      img: require("../../assets/images/clockIcon.png"),
      text1: "24/7 Support",
      text2: "Morem ipsum dolor",
    },
    {
      img: require("../../assets/images/cartIcon.png"),
      text1: "Town Delivery",
      text2: "Morem ipsum dolor sit ",
    },
  ];

  const data2 = [
    { img: require("../../assets/images/shoes3.png"), text: "Jordans" },
    { img: require("../../assets/images/shoes4.png"), text: "Sneakers" },
    { img: require("../../assets/images/shoes5.png"), text: "Nike Air" },
    { img: require("../../assets/images/shoes6.png"), text: "Joggers" },
  ];

  const data3 = [
    {
      img: require("../../assets/images/shoes7.png"),
      text: "Nike Jordan 1",
      price: "$199",
    },
    {
      img: require("../../assets/images/shoes8.png"),
      text: "Air Jordan Max",
      price: "$230",
    },
    {
      img: require("../../assets/images/shoes9.png"),
      text: "Air Jordan 1",
      price: "$250",
    },
  ];

  const data4 = [
    {
      img: require("../../assets/images/shoes10.png"),
      text: "Nike Air One",
      price: "$100",
    },
    {
      img: require("../../assets/images/shoes11.png"),
      text: "Nike Air Max",
      price: "$135",
    },
    {
      img: require("../../assets/images/shoes12.png"),
      text: "Nike Air Take",
      price: "$125",
    },
  ];

  const data5 = [
    {
      img: require("../../assets/images/shoes14.png"),
      text: "Nike",
    },
    {
      img: require("../../assets/images/shoes15.png"),
      text: "Shoes",
    },
    {
      img: require("../../assets/images/shoes16.png"),
      text: "Jordan",
    },
    {
      img: require("../../assets/images/shoes17.png"),
      text: "Sneakers",
    },
  ];

  const data6 = [
    {
      img: require("../../assets/images/user1.png"),
      desc: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Matt henry",
      country: "Matt henry",
    },
    {
      img: require("../../assets/images/user2.png"),
      desc: "Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Neil John",
      country: "United States",
    },
  ];

  return (
    <div className="homeMainContainer">
      <div className="homeContainer">
        <div className="homeSection1">
          <div className="homeSection1a">
            <p className="homeSection1aText1">Find your dream sneakers</p>
            <p className="homeSection1aText2">
              Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio
            </p>
            <div className="homeSection1BtnContainer">
              <button className="homeSection1Btn">SHOP NOW</button>
            </div>
            <div>
              <img
                className="homeSectionImgStyling"
                src={require("../../assets/images/shoes1.png")}
                alt="shoes cover"
              />
            </div>
          </div>
        </div>

        <div className="homeSection2">
          {data1.map((item) => {
            return (
              <>
                <div className="homeSection2IconContainer">
                  <img
                    className="homeSection2IconStyling"
                    src={item.img}
                    alt={item.text}
                  />
                </div>
                <div className="homeSection2TextContainer">
                  <p className="homeSection2Text1">{item.text1}</p>
                  <p className="homeSection2Text2">{item.text2}</p>
                </div>
              </>
            );
          })}
        </div>

        <p className="homeSection3Heading">Our Top Categories</p>

        <div className="homeSection3">
          <div className="homeSection3TextContainer">
            <p className="homeSection3Text">S</p>
            <p className="homeSection3Text">A</p>
            <p className="homeSection3Text">L</p>
            <p className="homeSection3Text">E</p>
          </div>
          <div className="homeSection3TextContainer">
            <p className="homeSection3Text">S</p>
            <p className="homeSection3Text">A</p>
            <p className="homeSection3Text">L</p>
            <p className="homeSection3Text">E</p>
          </div>
          <div className="homeSection3TextContainer">
            <p className="homeSection3Text">S</p>
            <p className="homeSection3Text">A</p>
            <p className="homeSection3Text">L</p>
            <p className="homeSection3Text">E</p>
          </div>
          <div className="homeSection3ImgContainer">
            <img
              className="homeSection3ImgStyling"
              src={require("../../assets/images/shoes2.png")}
              alt="shoes cover"
            />
          </div>
        </div>

        <div className="homeSection4">
          {data2.map((item, index) => {
            return (
              <div className="homeSection4CardContainer" key={index}>
                <img
                  className="homeSection4CardImg"
                  src={item.img}
                  alt={item.text}
                />
                <p className="homeSection4CardText">{item.text}</p>
              </div>
            );
          })}
        </div>

        <p className="homeSection5Heading">Our Collection</p>

        <div className="homeSection5">
          {data3.map((item, index) => {
            return (
              <div className="homeSection5CardContainer" key={index}>
                <img
                  className="homeSection5CardImg"
                  src={item.img}
                  alt={item.text}
                />
                <p className="homeSection5CardText">{item.text}</p>
                <p className="homeSection5CardText">{item.price}</p>
              </div>
            );
          })}
        </div>

        <p className="homeSection6Heading">Top Selling Products</p>
        <div className="homeSection6">
          {data4.map((item, index) => {
            return (
              <div className="homeSection6CardContainer" key={index}>
                <div className="homeSection6CardImgContainer">
                  <img
                    className="homeSection6CardImg"
                    src={item.img}
                    alt={item.text}
                  />
                </div>

                <p className="homeSection6CardText">{item.text}</p>
                <p className="homeSection6CardText">{item.price}</p>
              </div>
            );
          })}
        </div>

        <p className="homeSection7Heading">Deals Countdown Timer</p>
        <p className="homeSection7Text">
          Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio
        </p>

        <div className="homeSection7Container">
          <div className="homeSection7MainContainer">
            <div className="homeSection7a">
              <img
                className="homeSection7aImgStyling"
                src={require("../../assets/images/shoes13.png")}
                alt=""
              />
            </div>
            <div className="homeSection7b">
              <div className="homeSection7bHeadingContainer">
                <p className="homeSection7bHeadingText">Deal of the day</p>
              </div>
              <div className="homeSection7bTimeContainer">
                <p className="homeSection7bTimeText">204 : 21 : 43 : 18</p>
              </div>
              <div className="homeSection7bTimeFormatContainer">
                <p className="homeSection7bTimeFormatText">M Min</p>
                <p className="homeSection7bTimeFormatText">Min</p>
                <p className="homeSection7bTimeFormatText">Sec</p>
                <p className="homeSection7bTimeFormatText">M Sec</p>
              </div>
              <div className="homeSection7bBtnContainer">
                <button className="homeSection7bBtn">EXPLORE NOW</button>
              </div>
            </div>
          </div>
        </div>

        <div className="homeSection8Container">
          <div className="homeSection8MainContainer">
            <div className="homeSection8a">
              <div className="homeSection8a1">
                <p className="homeSection8a1Text1">
                  Top Categories on this week
                </p>
                <p className="homeSection8a1Text2">
                  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                </p>
              </div>
              <div className="homeSection8a2">
                {data5.map((item, index) => {
                  return (
                    <div className="homeSection8a2CardContainer" key={index}>
                      <img
                        className="homeSection8a2CardImgStyling"
                        src={item.img}
                        alt="shoes"
                      />
                      <p className="homeSection8a2CardText">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="homeSection8bMainContainer">
              <div className="homeSection8bContainer">
                {data3.map((item, index) => {
                  return (
                    <div className="homeSection8CardContainer" key={index}>
                      <img
                        className="homeSection8CardImg"
                        src={item.img}
                        alt={item.text}
                      />
                      <p className="homeSection8CardText">{item.text}</p>
                      <p className="homeSection8CardText">{item.price}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <p className="homeSection9Heading">What our customers say</p>

        <div className="homeSection9CardMainContainer">
          {data6.map((item, index) => {
            return (
              <div className="homeSection9CardContainer">
                <div className="homeSection9CardSection1">
                  <img
                    className="homeSection9CardSection1Img1Styling"
                    src={item.img}
                    alt="user"
                  />
                  <img
                    className="homeSection9CardSection1Img2Styling"
                    src={require("../../assets/images/quoteIcon.png")}
                    alt="quote"
                  />
                </div>
                <div className="homeSection9CardSection2">
                  <p className="homeSection9CardSection2Text">{item.desc}</p>
                </div>
                <div className="homeSection9CardSection3">
                  <p className="homeSection9CardSection3Text">{item.name}</p>
                </div>
                <div className="homeSection9CardSection4">
                  <p className="homeSection9CardSection4Text">{item.country}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="homeSection10MainContainer">
          <div className="homeSection10Section1">
            <p className="homeSection10Section1Text">
              Subscribe for our shoes update
            </p>
          </div>
          <div className="homeSection10Section2">
            <p className="homeSection10Section2Text">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora
            </p>
          </div>
          <div className="homeSection10Section3">
            <div className="homeSection10Section3Card">
              <p className="homeSection10Section3CardText">
                Enter your mail here
              </p>
              <button className="homeSection10Section3CardBtn">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
