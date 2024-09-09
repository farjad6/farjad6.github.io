import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Full-Stack Web Development",
    description: "Specializing in building responsive, scalable web applications using the latest technologies.",
  },
  {
    Icon: RxPencil2,
    title: "Mobile App Development",
    description: "Developing feature-rich and intuitive mobile applications with React Native, tailored to your business needs.",
  },
  {
    Icon: RxDesktop,
    title: "Consulting & Strategy",
    description: "Providing expert technical consulting and strategic guidance to turn your ideas into successful projects.",
  },
  {
    Icon: RxReader,
    title: "B2B SaaS Solutions",
    description: "Developing robust SaaS platforms to optimize business processes and drive growth.",
  },
  {
    Icon: RxRocket,
    title: "E-commerce Development",
    description: "Customizing e-commerce platforms like WooCommerce for a seamless online shopping experience.",
  },
  {
    Icon: RxPencil2,
    title: "API & Third-Party Integrations",
    description: "Integrating third-party services like Twilio, QuickBooks, and ShipHero to enhance your digital solutions.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-72 rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            {/*<div className="text-3xl">*/}
            {/*  <RxArrowTopRight*/}
            {/*    className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"*/}
            {/*    aria-hidden*/}
            {/*  />*/}
            {/*</div>*/}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
