"use client"

import clsx from "clsx";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

export const Promo = () => {
  const sliderRef = useRef<Slider>(null);

  const [activeSlide, setActiveSlide] = useState<number>(0);

  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: "250px",
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveSlide(next)
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleDotClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div className="pb-20">
      <div className="px-[120px]">
        <h1 className="text-[32px] font-bold">Latest Promo 🔥</h1>
        <p className="text-[#959595] mb-[46px]">Dont miss out! Limited time offer inside!</p>
      </div>
      <div className="slider-container">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img alt="Image" src="/images/promo1.png" />
          </div>
          <div>
            <img alt="Image" src="/images/promo1.png" />
          </div>
          <div>
            <img alt="Image" src="/images/promo1.png" />
          </div>
          <div>
            <img alt="Image" src="/images/promo1.png" />
          </div>
          <div>
            <img alt="Image" src="/images/promo1.png" />
          </div>
          <div>
            <img alt="Image" src="/images/promo1.png" />
          </div>
        </Slider>

        <div className="mt-[46px] flex justify-center items-center">
          <button className="" onClick={handlePrevClick}>
            <Image
              alt="Icon"
              height={44}
              width={44}
              src="/icons/chevronLeft.svg"
            />
          </button>
          {Array.from({ length: 6 }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={clsx("p-3 bg-[#C1C1C1] mx-3 rounded-full", activeSlide === index && 'py-3 px-10 bg-[#007DFC]')}
            />
          ))}
          <button className="" onClick={handleNextClick}>
            <Image
              alt="Icon"
              height={44}
              width={44}
              src="/icons/chevronRight.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
