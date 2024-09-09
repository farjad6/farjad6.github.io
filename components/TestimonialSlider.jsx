import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Victor Vatus",
    position: "Sell Me This Pen",
    message:
      "It's a pleasure working with Farjad and the rest of his team, they're very thorough and ask themselves business questions on top of being excellent coders. Highly recommended!",
  },
  {
    image: "/t-avt-2.jpeg",
    name: "Ammon Collins",
    position: "GetINCA",
    message:
      "Farjad is amazing. He deserves the highest rating I can give in terms of performance, communication, and efficiency. I've been extremely pleased with his work and would be happy to recommend him to anyone in need of his services. We have had excellent communication, cooperation, and work quality while working with him. Thank you very much Farjad, I wish I could pay you double.",
  },
  {
    image: "/t-avt-3.jpeg",
    name: "Shaun Ek",
    position: "Hero Bullion",
    message:
      "Farjad worked with us on a Wordpress/Woocommerce focused project for a little less than a year and he was a pleasure to work with. I can attest that he is flexible and accommodating and he has a strong work ethic.",
  },
  {
    image: "/t-avt-4.jpeg",
    name: "Mehdi Sidoumou",
    position: "Mijjim",
    message:
        "Farjad is Awesome! Great Technical skills, great with programing, PHP, Server Technology, He really went the extra mile to make sure my project was done correctly and without any flaws. I highly recommend his expertise! Will definitely work again with Farjad! I'm very pleased we hired Farjad, and I would work with him again!",
  },




];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar */}
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={100}
                    height={100}
                    alt={person.name}
                    className={"rounded-full"}
                  />
                </div>

                {/* name */}
                <div className="text-lg">{person.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>

            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* quote icon */}
              <div className="mb-4">
                <FaQuoteLeft
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
