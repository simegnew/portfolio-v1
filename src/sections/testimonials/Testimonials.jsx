import React from "react";
import Card from "../../components/Card";
import data from "./data";
import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import "swiper/css/effect-fade";


SwiperCore.use([EffectCoverflow, Pagination]);

const Testimonials = () => {
  
  return (
    <section  id="testimonials">
      <h2>What My Clients Say</h2>
      <p className="testimonial__description">These are unbaised testimonials from some of my clients</p>

      <Swiper
        spaceBetween={10}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // slidesPerView={1}
        breakpoints={{
          // Responsive breakpoints
          768: {
            slidesPerView: 3, // Number of slides per view for tablets
          },
          480: {
            slidesPerView: 1, // Number of slides per view for phones
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 20,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container container"
      >
        {data.map((item) => (
          <SwiperSlide>
            <Card classsName="testimonial_item" key={item.id}>
              <small>{item.desc}</small>
              <div className="testimonial_image">
                <img src={item.image} alt="client-image" />
                <div className="testimonial_content-topic">
                  <span className="testimonial__name">{item.name}</span>
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
