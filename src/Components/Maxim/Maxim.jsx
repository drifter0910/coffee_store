import React from "react";
import "./Maxim.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

const Maxim = () => {
  return (
    <div className="maxim">
      <div className="maxim-label">”</div>
      <div className="maxim-swiper-wrapper">
        <Swiper
          pagination={true}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="maxim-wrapper">
              <p>
                Dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
              <h2>LISA HEART</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="maxim-wrapper">
              <p>
                Dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
              <h2>JOHN SNOW</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="maxim-wrapper">
              <p>
                Dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam.
                Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Maecenas sed diam eget risus varius blandit sit amet non magna.
              </p>
              <h2>TRUMP</h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Maxim;
