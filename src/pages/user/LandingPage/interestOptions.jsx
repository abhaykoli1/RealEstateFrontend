import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { FaHome, FaHandHoldingUsd } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import Propertyicon from "../../../assets/Propertyicon.png";
import Financial from "../../../assets/Financial.png";
import HGarden from "../../../assets/HGarden.png";
import Hotel from "../../../assets/Hotel.png";
import DogTag from "../../../assets/DogTag.png";
import Divider from "../../../components/user/divider";
const options = [
  { id: 1, name: "Buying/Renting", icon: Propertyicon },
  { id: 2, name: "Selling", icon: Financial },
  {
    id: 3,
    name: "Property Management",
    icon: HGarden,
  },
  { id: 4, name: "Holiday Homes", icon: Hotel },
  { id: 5, name: "Mortgage", icon: DogTag },
];

export default function InterestOptions() {
  const [selected, setSelected] = useState(2);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1044,
        settings: {
          slidesToShow: 4,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 397,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };
  return (
    <div className="text-center IntrestOption py-5 pb-14 bg-[#F3F3F3] h-[399px lg:mt-12 md:mt-12  px-5">
      <h2 className="lg:text-[32px] md:text-[32px] text-[25px] font-bold mt-2 mb-5">
        I AM INTERESTED IN
      </h2>
      <Divider />
      {/* <div className="flex justify-center mt-10 lg:gap-12 md:gap-12 gap-4 flex-wrap">
        {options.map((option) => (
          <a
            key={option.id}
            onClick={() => setSelected(option.id)}
            className={`flex flex-col items-center h-[198px] hover:scale-105 w-[164px] gap-2 p-10 rounded-lg transition-all duration-500  cursor-pointer
              bg-white hover:shadow-lg border border-[#A9B9D6]`}
          >
            <img src={option.icon} />
            <span className="text-gray-600 font-medium">{option.name}</span>
          </a>
        ))}
      </div> */}

      <div className="mt-10  relative ">
        <Slider ref={sliderRef} {...settings}>
          {options.map((option, index) => (
            <a
              key={index}
              onClick={() => setSelected(option.id)}
              className={`slick-slid flex flex-col items-center h-[198px] hover:scale-105 !w-[164px] gap-2 p-10 rounded-lg transition-all duration-500  cursor-pointer
              bg-white hover:shadow-lg border border-[#A9B9D6]`}
            >
              <img src={option.icon} />
              <span className="text-gray-600 font-medium">{option.name}</span>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}
