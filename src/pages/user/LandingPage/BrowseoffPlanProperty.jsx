import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import property from "../../../assets/property.png";
import { SlLocationPin } from "react-icons/sl";
import { CiMenuKebab } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import React, { useRef } from "react";
import Slider from "react-slick";
import PropertyCardCompo from "../../../components/user/propertyCardCompo";

const OffPlanProperty = () => {
  const properties = [
    {
      id: 1,
      name: "The Acres",
      location: "Dubailand",
      deliveryDate: "Dec, 2028",
      price: "AED 5,080,000",
      developer: "MERAAS",
      image: property,
    },
    {
      id: 2,
      name: "Palm Heights",
      location: "Palm Jumeirah",
      deliveryDate: "Jan, 2027",
      price: "AED 7,200,000",
      developer: "Emaar Properties",
      image: property,
    },
    {
      id: 3,
      name: "Skyline Residences",
      location: "Downtown Dubai",
      deliveryDate: "Mar, 2026",
      price: "AED 4,500,000",
      developer: "Nakheel",
      image: property,
    },
    {
      id: 4,
      name: "Skyline Residences",
      location: "Downtown Dubai",
      deliveryDate: "Mar, 2026",
      price: "AED 4,500,000",
      developer: "Nakheel",
      image: property,
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
          slidesToShow: 4,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 1356,
        settings: {
          slidesToShow: 3,
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
    <section className=" bg-[#F4F4F4] mt-12">
      <div className="max-w-[1320px] mx-auto py-5 pb-14">
        <h3 className="lg:text-[32px] md:text-[32px] text-[27px] font-bold mb-1 px-5 ">
          Browse our Off Plan properties
        </h3>
        <span className="border-b-[3px]  border-[#A9B9D6] flex w-[150px] mb-8 mx-5 "></span>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 mt-6"> */}

        <div className="mt-10  relative mx-10">
          <Slider ref={sliderRef} {...settings}>
            {properties.map((pro, index) => (
              <div key={index} className="slick-slide">
                <PropertyCardCompo pro={pro} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default OffPlanProperty;
