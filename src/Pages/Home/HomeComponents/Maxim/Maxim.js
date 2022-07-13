import React from "react";
import "./Maxim.scss";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Carousel } from "antd";
const Maxim = () => {
  const contentStyle = {
    textAlign: "center",
  };
  return (
    <div className="maxim">
      <div className="maxim-label">”</div>
      <div className="maxim-swiper-wrapper">
        <Carousel autoplay autoplaySpeed={3000}>
          <div>
            <h3 style={contentStyle}>
              <div className="maxim-wrapper">
                <p>
                  Dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
                  quam.
                </p>
                <h2>LISA HEART</h2>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <div className="maxim-wrapper">
                <p>
                  Dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
                  quam.
                </p>
                <h2>JOHN SNOW</h2>
              </div>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              {" "}
              <div className="maxim-wrapper">
                <p>
                  Dolor id nibh ultricies vehicula ut id elit. Aenean eu leo
                  quam.
                </p>
                <h2>TRUMP</h2>
              </div>
            </h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Maxim;
