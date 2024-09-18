import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'animate.css/animate.min.css';

const Middle = () => {
  return (
    <section id="hero">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,  // Increased delay to give more pause time between slides
          disableOnInteraction: false,
        }}
        speed={1000}  // Smooth transition speed (in milliseconds)
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}  // Include necessary modules
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: 'url(public/img/slide/DSC02309.JPG)' }}
          >
            <div className="text-center text-white">
              <h2 className="animate__animated animate__fadeInDown text-4xl font-bold">
                Welcome to <span className="text-red-500">Gieogita</span>
              </h2>
              <p className="animate__animated animate__fadeInUp mt-4 text-lg max-w-xl mx-auto">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam.
              </p>
              <a
                href="#about"
                className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg animate__animated animate__fadeInUp inline-block hover:bg-red-600 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: 'url(public/img/slide/DSC02294.JPG)' }}
          >
            <div className="text-center text-white">
              <h2 className="animate__animated animate__fadeInDown text-4xl font-bold">
                Lorem Ipsum Dolor
              </h2>
              <p className="animate__animated animate__fadeInUp mt-4 text-lg max-w-xl mx-auto">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut est quaerat sequi nihil ut aliquam.
              </p>
              <a
                href="#about"
                className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg animate__animated animate__fadeInUp inline-block hover:bg-red-600 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-screen flex items-center justify-center"
            style={{ backgroundImage: 'url(public/img/slide/guru_dev_ji1.jpg)' }}
          >
            <div className="text-center text-white">
              <h2 className="animate__animated animate__fadeInDown text-4xl font-bold">
                Sequi ea ut est quaerat
              </h2>
              <p className="animate__animated animate__fadeInUp mt-4 text-lg max-w-xl mx-auto">
                Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut est quaerat sequi nihil ut aliquam.
              </p>
              <a
                href="#about"
                className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg animate__animated animate__fadeInUp inline-block hover:bg-red-600 transition"
              >
                Read More
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Middle;
