import React, { useState } from "react";
import Card from "../../components/Card";
import data from "./data";
import "./testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { EffectCoverflow, Pagination } from 'swiper/modules'

const Testimonials = () => {
  
  return (
    <section className="container" id="testimonials">
      <h2>What My Clients Say</h2>
      <p>These are unbaised testimonials from some of my clients</p>

      <Swiper
        spaceBetween={50}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 20,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        {data.map((item) => (
          <SwiperSlide>
            <Card classsName="testimonial_item" key={item.id}>
              <span>{item.desc}</span>
              <div className="testimonial_image">
                <img src={item.image} alt="client-image" />
                <div>
                  <span>{item.name}</span>
                  <small>{item.title}</small>
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      </section>
  );
};

export default Testimonials;
