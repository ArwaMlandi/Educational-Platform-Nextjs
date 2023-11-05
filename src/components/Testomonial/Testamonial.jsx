import React from "react";
import styleTesta from "./styleTesta.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { TestimonialsData } from "../../const/Testamonial";


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image";

const Testamonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            arrows: false,
            fade: true,
          }
        }
      ]
  };

  return(
    <div className={styleTesta.containerTesta}>
      <Slider {...settings} className={styleTesta.testiContent}>
      {TestimonialsData.map((testimonial, index) => (
          <div key={index} className={styleTesta.testiBoxContainer}>
          <div  className={styleTesta.testiBox}>
              <q>{testimonial.comment}</q>
              <div className={styleTesta.image}>
                <Image
                  src={testimonial.image} alt="" />
              </div>
              <h3>{testimonial.name}</h3>
              <p>{testimonial.job}</p>
          </div>
          </div>
      ))}
      </Slider>
    </div>

);
}

export default Testamonial;
