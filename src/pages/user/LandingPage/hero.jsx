import React, { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import building1 from "../../../assets/building.png";
import building from "../../../assets/main.png";
import building2 from "../../../assets/building2.png";
import building3 from "../../../assets/building3.png";

import line from "../../../assets/Line.png";
import Statistics from "./Statistics";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import axios from "axios";
import config from "../../../common/config";

const Hero = () => {
  const [selectedOption, setSelectedOption] = useState("RENT");
  const images = [building1, building2, building3]; // Your image array

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/api/banner`);
        setBanners(response.data);
        // console.log("banner s", response.data);
      } catch (err) {
        console.log("Failed to fetch banners");
      }
    };

    fetchBanners();
  }, []);

  return (
    <section className="relative bg-white  pt-16 ">
      <div className="max-w-[1320px] !z-50 mx-auto flex flex-col-reverse lg:flex-row lg:items-end gap-10 px-6">
        {/* Text Content */}
        <div className="w-full mb-10">
          <div className="flex  w-full">
            <h1 className="lg:!text-[48px] md:!text-[48px]  !text-[43px] font-semibold">
              Find Your{" "}
              <span className="relative mb-5 l:block">
                <span className="text-[#7A9DC4]">Perfect Home</span>
                <img
                  src={line}
                  alt="line"
                  className="absolute lg:top-14 lg:right-1 md:top-14 md:right-2 top-[45px] right-1 lg:w-[250px] md:w-[250px] h-4"
                />
              </span>
            </h1>
          </div>
          <p className="lg:!text-[48px] md:!text-[48px]  !text-[43px] font-semibold lg:mt-0 leading-[1.5]">
            With us
          </p>
          <div className="max-w-2xl">
            <div className="flex lg:mt-10 md:mt-14 mt-5 ">
              <div className="bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] h-[49px] -px-1 w-[275px] pt-[8px] rounded-[5px] flex justify-between">
                {["RENT", "BUY", "SELL"].map((option, index) => (
                  <div key={index} className="flex flex-col justify-between">
                    <a
                      href="/listing"
                      onClick={() => setSelectedOption(option)}
                      className={`text-center w-full font-semibold transition-all lg:text-[18px] md:text-[18px] text-[16px] cursor-pointer 
                        `}
                    >
                      {option}
                    </a>
                    <div
                      className={`w-[91px] px-  border-[#1E4B7A] ${
                        selectedOption === option
                          ? "border-[3px]  text-black " +
                            (option === "RENT"
                              ? "rounded-tr-lg rounded-bl-lg"
                              : option === "BUY"
                              ? "rounded-tr-lg rounded-tl-lg"
                              : "rounded-tl-lg rounded-br-lg ")
                          : "text-gray-500 border-b-[3px] border-transparent"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Search Bar */}
            <SearchBar />

            {/* Statistics */}
            <Statistics />
          </div>
        </div>
        {/* Hero Image */}

        <div className="m:w-1/2 !z-0 -mt-14">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }} // Smooth transition
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="w-full lg:max-w-lg md:max-w-lg max-w-screen mx-5"
          >
            {banners.map((banner, index) =>
              banner.images.map((image, imgIndex) => (
                <SwiperSlide key={`${index}-${imgIndex}`} className="relative">
                  <img
                    src={image}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-auto transition-opacity duration-1000 ease-in-out"
                  />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>

        {/* <div className="m:w-1/2 !z-0 -mt-14">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }} // Ensures smooth transition
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, EffectFade]}
            className="w-full lgmax-w-lg md:max-w-lg max-w-screen mx-5"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="relative">
                <img
                  src={img}
                  alt={`Building ${index}`}
                  className="w-full h-auto transition-opacity duration-1000 ease-in-out"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
