import React, { useEffect, useRef, useState } from "react";
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
import config from "../../../common/config";
import axios from "axios";
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
  const [options, setOptions] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`${config.API_URL}/api/intrest`, {
        params: { page, limit, search },
      });
      setOptions(response.data.data);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, search]);

  const [selected, setSelected] = useState(2);
  const sliderRef = useRef(null);
  const OptionsSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // This will center the active slide
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 5,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 1356,
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
        breakpoint: 835,
        settings: {
          slidesToShow: 3,
          centerPadding: "0",
        },
      },

      {
        breakpoint: 630,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className=" text-center IntrestOption  bg-[#F3F3F3] h-[399px ">
      {options.length > 0 ? (
        <div className="lg:mt-12 md:mt-12  px-5 py-5 pb-14">
          <h2 className="lg:text-[32px] md:text-[32px] text-[25px] font-bold mt-2 mb-5">
            I AM INTERESTED IN
          </h2>
          <Divider />
          {/* 
      <div className="mt-10  relative ">
      <Slider ref={sliderRef} {...settings}>
      {options.length > 0 &&
      options.map((option, index) => (
        <a
        key={index}
        onClick={() => setSelected(option.id)}
        className={`slick-slid flex flex-col items-center h-[198px] hover:scale-105 !w-[164px] gap-2 p-10 rounded-lg transition-all duration-500  cursor-pointer
        bg-white hover:shadow-lg border border-[#A9B9D6] my-3`}
        >
        <img src={option.image} />
        <span className="text-gray-600 font-medium">
        {option.title}
        </span>
        </a>
        ))}
        </Slider>
        </div> */}
          <div className="max-w-7xl mx-auto">
            <div className=" mb-5 ml-2 mt-10 mx- relative">
              <Slider ref={sliderRef} {...OptionsSettings}>
                {options.map((option, index) => (
                  <div key={index} className="slick-slide">
                    <div
                      onClick={() => setSelected(option.id)}
                      className={`PerCommHighSwipp flex flex-col bg-white  items-center justify-center gap-2 w-[95%] h-[198px]   px-3  rounded-lg transition-all duration-500  cursor-pointer
                      bg-whit hover:shadow-lg border border-[#A9B9D6]`}
                    >
                      <img src={option.image} className="px-8" />
                      <span className="text-center text-gray-600 font-medium">
                        {option.title}
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
