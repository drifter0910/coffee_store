import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../../img/slider1.jpg";
import slide2 from "../../../../img/slider2.jpg";
import slide3 from "../../../../img/slider3.jpg";
import slide4 from "../../../../img/slider4.jpg";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import { ButtonTrans } from "../../../../Components/Button.style";
const Slider = () => {
  return (
    <div className="wrapper-slider">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        className="slider"
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        effect="cards"
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <div className="slider__content">
            <h2>FRIENDLY ATMOSPHERE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonTrans>READ MORE</ButtonTrans>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <div className="slider__content">
            <h2>FRIENDLY ATMOSPHERE</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonTrans>READ MORE</ButtonTrans>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <div className="slider__content">
            <h2>SOME TIME FOR YOURSELF</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonTrans>READ MORE</ButtonTrans>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <div className="slider__content">
            <h2>SPECIAL COFFEE BEANS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ButtonTrans>READ MORE</ButtonTrans>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
