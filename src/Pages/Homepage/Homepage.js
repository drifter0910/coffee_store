import React from "react";
import "../../App";

import Detail from "../../HomeComponents/Detail/Detail";
import Gallery from "../../HomeComponents/Gallery/Gallery";
import Guide from "../../HomeComponents/Guide/Guide";
import Maxim from "../../HomeComponents/Maxim/Maxim";
import Menu from "../../HomeComponents/Menu/Menu";
import Slider from "../../HomeComponents/Slider/Slider";
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <Slider />
      <Detail />
      <Gallery />
      <Menu />
      <Guide />
      <Maxim />
    </>
  );
};

export default Homepage;
