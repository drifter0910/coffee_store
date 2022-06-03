import React from "react";
import Detail from "../../HomeComponents/Detail/Detail";
import Gallery from "../../HomeComponents/Gallery/Gallery";
import Guide from "../../HomeComponents/Guide/Guide";
import Maxim from "../../HomeComponents/Maxim/Maxim";
import Menu from "../../HomeComponents/Menu/Menu";
import Slider from "../../HomeComponents/Slider/Slider";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="home-container no-gutters ">
      {/* <div className="container"> */}
      <Slider />
      <Detail />
      <Gallery />
      <Menu />
      <Guide />
      <Maxim />
      {/* </div> */}
    </div>
  );
};

export default Homepage;
