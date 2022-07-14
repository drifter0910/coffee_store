import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiperproduct.scoped.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
export default function App(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        spaceBetween={10}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {props.images.map((image, index) => (
          <div className="slider-wrapper-detail">
            <SwiperSlide style={{ width: "100%" }} key={index}>
              <img src={image} alt="" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {props.images.map((image, index) => (
          <div className="slider-wrapper-detail">
            <SwiperSlide style={{ width: "100%" }} key={index}>
              <img src={image} alt="" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
