import React, { useRef } from "react";
import Slider from "react-slick";

import user from "../../../assets/user.png";
import TestimonialCardCompo from "../../../components/user/testimonialCardCompo";
import Divider from "../../../components/user/divider";
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Abhay Das",
      post: "AI Developer",
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 2,
      name: "Abhay Das",
      post: "AI Developer",
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 3,
      name: "Abhay Das",
      post: "AI Developer",
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 4,
      name: "Abhay Das",
      post: "AI Developer",
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      id: 5,
      name: "Abhay Das",
      post: "AI Developer",
      image: user,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const sliderRef = useRef(null);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // This will center the active slide
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 2,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 695,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <div className=" mx-auto max-w-[1320px] pt-5">
      <h2 className="lg:text-[32px] md:text-[32px]  text-[25px] font-bold text-center mb-4 ">
        CLIENT TESTIMONIALS
      </h2>
      <Divider />
      {/* TestimonialCardCompo */}
      <div className="mt-10  relative mx-10">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((tes, index) => (
            <div key={index} className="slick-slide">
              <TestimonialCardCompo {...tes} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex justify-center">
        <button className="h-[49px] w-[210px] bg-[#2F5FA7] hover:scale-[102%] transition-all duration-500 text-white !rounded-[5px]">
          Load More
        </button>
      </div>
    </div>
  );
}
