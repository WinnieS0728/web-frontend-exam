import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Deco from "../deco";

import "swiper/css";

export default function Photos({ imgList }) {
  const [nowSlider, setNowSlider] = useState(0);
  const [isImgLoading, setIsImgLoading] = useState(true);
  return (
    <section>
      <Swiper
        modules={[Pagination]}
        loop
        onSlideChange={(swiper) => {
          setNowSlider(swiper.realIndex);
        }}
      >
        {imgList.map((img, index) => (
          <SwiperSlide key={index}>
            <div>
              {isImgLoading && (
                <div className='w-full aspect-video flex justify-center items-center border-2'>
                  loading
                </div>
              )}
              <img
                onLoad={() => {
                  setIsImgLoading(false);
                }}
                src={img}
                alt={`company -${index}}`}
                className='w-full'
                loading='lazy'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='flex justify-center items-center gap-2 py-2'>
        {imgList.map((_, index) => (
          <Deco
            key={index}
            active={index === nowSlider}
          />
        ))}
      </div>
    </section>
  );
}
