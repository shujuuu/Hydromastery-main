import React from 'react'
import './Testimonials.css'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Options from './Options.json';
import TestimonialItems from './TestimonialItems.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function Testimonials() {

  const renderItem = (item) => {
    return <SwiperSlide key={item.id}>
        <div className="swiper-slide">
          <div className="testimonial-item">
            <p>
              <ImQuotesLeft className="bx bxs-quote-alt-left quote-icon-left"/>
              {item.testimonialText}
              <ImQuotesRight className="bx bxs-quote-alt-right quote-icon-right"/>
            </p>
            <img src={item.testimonialImage} className="testimonial-img" alt=""/>
            <h3>{item.testimonialPerson}</h3>
            <h4>{item.testimonialPersonTitle}</h4>
          </div>
        </div>
      </SwiperSlide>
  }

  return <section id="testimonials" className="testimonials section-bg">
    <div className="container">
      <div className="section-title" data-aos="fade-in" data-aos-delay="100">
        <h2>{Options.Title}</h2>
        <p>{Options.Subtitle}</p>
      </div>
      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40
              },
              1200: {
                slidesPerView: 3
              }
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false
            }}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={console.log}
          >
          {TestimonialItems.map(item => renderItem(item))}
        </Swiper>
      </div>

    </div>
  </section>
}
