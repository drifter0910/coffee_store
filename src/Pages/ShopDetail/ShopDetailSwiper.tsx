import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './swiperproduct.scoped.css';
import { FreeMode, Navigation, Thumbs } from 'swiper';
export default function ShopDetailSwiper(props: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { images } = props;
  return (
    <Fragment>
      <Swiper
        spaceBetween={10}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image: string | undefined, index: React.Key | null | undefined) => (
          <div key={image} className="slider-wrapper-detail">
            <SwiperSlide style={{ width: '100%' }}>
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
        {images.map((image: string | undefined, index: React.Key | null | undefined) => (
          <div key={index} className="slider-wrapper-detail">
            <SwiperSlide style={{ width: '100%' }}>
              <img src={image} alt="" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </Fragment>
  );
}
