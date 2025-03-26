import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import {
  FaChevronDown,
  FaDollarSign,
  FaItunes,
  FaLocationArrow,
  FaSearch,
} from "react-icons/fa";
import { MdOutlineTune } from "react-icons/md";
import map from "../../assets/map.png";
import { CiMenuKebab } from "react-icons/ci";
import PropertyCard from "../../components/user/propertyCard";
import { LuListFilter } from "react-icons/lu";
import Filter from "../../components/user/filterBar";
import PropertySmallCard from "../../components/user/propertySmallCard";
import shortProperty from "../../assets/shortProperty.png";
import axios from "axios";
import config from "../../common/config";
import PropertySearch from "../../components/user/search";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DateCompo from "../../components/user/date";

const menuItems = [
  { label: "Beds", icon: null, options: ["1 Bed", "2 Beds", "3 Beds"] },

  {
    label: "Location",
    icon: <FaLocationArrow />,
    options: ["New York", "Los Angeles", "Chicago"],
  },
  {
    label: "Price Range",
    icon: <FaDollarSign />,
    options: ["1000 - 2000", "2000 - 3000", "3000 - 4000"],
  },
  { label: "Buy", icon: null, options: ["House", "Apartment", "Land"] },
  { label: "Villa", icon: null, options: ["Luxury", "Budget", "Duplex"] },
];

const smallProperty = [
  {
    image: shortProperty,
    date: "10 March",
    title: "Top 5 Resources for Writing Excellent Academic Assignments",
    description:
      " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
    link: "#",
  },
  {
    image: shortProperty,
    date: "10 March",
    title: "Top 5 Resources for Writing Excellent Academic Assignments",
    description:
      " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
    link: "#",
  },
  {
    image: shortProperty,
    date: "10 March",
    title: "Top 5 Resources for Writing Excellent Academic Assignments",
    description:
      " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
    link: "#",
  },
  {
    image: shortProperty,
    date: "10 March",
    title: "Top 5 Resources for Writing Excellent Academic Assignments",
    description:
      " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
    link: "#",
  },
  {
    image: shortProperty,
    date: "10 March",
    title: "Top 5 Resources for Writing Excellent Academic Assignments",
    description:
      " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
    link: "#",
  },
  {
    image: shortProperty,
    date: "10 March",
    title: "Top 5 Resources for Writing Excellent Academic Assignments",
    description:
      " of an individual's work. In the following lines, we'll look at some of the research tools available online that can make collecting details for an assignment much more straightforward for students, as well ",
    link: "#",
  },
];

const ListingProperties = () => {
  const [properties, setProperties] = useState([]);

  console.log("Listing properties", properties);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [isNewestFirst, setIsNewestFirst] = useState(true);

  // Filter properties based on search query
  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort filtered properties by createdAt (newest first or oldest first)
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();

    return isNewestFirst ? dateB - dateA : dateA - dateB; // Toggle between newest/oldest
  });

  const sliderRef = useRef(null);
  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 763,
        settings: {
          slidesToShow: 2,
          centerPadding: "0", // Optional: adjust this if you want a gap between slides
        },
      },
      {
        breakpoint: 602,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 402,
        settings: {
          slidesToShow: 2.2,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 338,
        settings: {
          slidesToShow: 2,
          centerPadding: "0",
        },
      },
    ],
  };
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("map");
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const [filterBar, setFilterBar] = useState(false);

  const markers = [
    { id: 1, position: [37.7749, -122.4194], label: "San Francisco" },
    { id: 2, position: [34.0522, -118.2437], label: "Los Angeles" },
    { id: 3, position: [40.7128, -74.006], label: "New York" },
  ];

  const defaultCenter = [37.7749, -122.4194]; // Centered around San Francisco

  return (
    <section className=" h-full lg:pt-12 md:py-12 !-mt-3">
      <div className="2xl:container mx-auto lg:px-10 md:px-5 ">
        <div className="flex flex-wrap  lg:space-x-4 lg:space-y-4">
          <div className="ListingHeader ">
            <div className="">
              <span className="!text-[12px] lg:hidden md:hidden flex items-center">
                <LuListFilter
                  onClick={() => setFilterBar(!filterBar)}
                  size={40}
                  color="#222"
                  className="lg:h-12 md:h-12 h-10  xl:hidden lg:w-9 md:w-9 w-8 xl:absolute   rounded-md   cursor-pointer"
                />
                <span className="pl-1">
                  Showing {properties.length} Results
                </span>
              </span>
              <Filter filterBar={filterBar} setFilterBar={setFilterBar} />
              <div
                onClick={() => setFilterBar(false)}
                className={`  ${
                  filterBar ? "flex" : "hidden"
                }  fixed top-0 right-0 left-0 bottom-0  z-10 h-screen`}
              ></div>

              <div className=" space-x-4 lg:flex md:flex   hidden ">
                <div className=" gap-3 flex flex-wrap relative ">
                  <PropertySearch
                    setShowDropdown={setShowDropdown}
                    showDropdown={showDropdown}
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                    setProperties={setProperties}
                    properties={properties}
                    map={true}
                  />
                  {/* <div className="flex bg-white shadow-[0px_5px_10px_rgba(0,0,0,0.1)] lg:mx-5">
                    <a
                      className={`px-7 py-3 text-[16px]  flex items-center gap-3 transition-all cursor-pointer shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-l-md  ${
                        activeTab === "map"
                          ? "bg-[#204A7A] !text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setActiveTab("map")}
                    >
                      Map
                    </a>
                    <a
                      className={`px-7 py-3 text-[16px]  flex items-center gap-3 transition-all cursor-pointer rounded-r-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] ${
                        activeTab === "list"
                          ? "bg-[#204A7A] !text-white"
                          : "bg-white text-black"
                      }`}
                      onClick={() => setActiveTab("list")}
                    >
                      List
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="lg:hidden  md:hidden  flex  shadow-[0px_5px_10px_rgba(0,0,0,0.1)]">
              <a
                className={`lg:px-7 lg:py-3 px-5 py-1.5 lg:text-[16px] text-[10px] flex items-center gap-3 transition-all cursor-pointer shadow-[0px_5px_10px_rgba(0,0,0,0.1)] rounded-l-md  ${
                  activeTab === "map"
                    ? "bg-[#204A7A] !text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveTab("map")}
              >
                Map
              </a>
              <a
                className={`lg:px-7 lg:py-3 px-5 py-1.5 lg:text-[16px] text-[10px] flex items-center gap-3 transition-all cursor-pointer rounded-r-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)] ${
                  activeTab === "list"
                    ? "bg-[#204A7A] !text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setActiveTab("list")}
              >
                List
              </a>
            </div>
          </div>
        </div>

        <div
          id="ListingItems"
          className="flex flex-1 lg:flex-row flex-col my-5 mt-16  gap-6"
        >
          <div
            className={` relative ${
              activeTab === "map" ? "lg:flex-1/3" : "lg:flex-1 -mx-5"
            }`}
          >
            <div
              className={`w-full rounded-md ${
                activeTab === "map" ? "" : "hidden"
              }`}
            >
              <MapContainer
                center={defaultCenter}
                zoom={7}
                style={{
                  height: "570px",
                  width: "100%",
                  borderRadius: "5px",
                  zIndex: 0,
                }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {properties.map((property) => (
                  <Marker
                    key={property.id}
                    position={[property.latitude, property.longitude]}
                  >
                    <Popup>{property.label}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            <div className="absolute lg:hidden md:hidden gap-4  bottom-4 left-1/2 -translate-x-1/2 w-full  flex flex-col justify-center">
              <div
                className={`mt-10  relative mx- ${
                  activeTab === "map" ? "" : "hidden"
                }`}
              >
                <Slider ref={sliderRef} {...settings}>
                  {properties?.map((pro, index) => (
                    <div key={index} className="slick-slide mx-20">
                      <div className="flex">
                        <PropertySmallCard {...pro} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          <div
            id="ListingContent"
            className={`
          ${activeTab === "map" ? "lg:flex-1/2" : "lg:w-full"}`}
          >
            <div className=" gap-5 xl:flex  hidden">
              <div className="bg-white w-full h-12 shadow-[0px_5px_10px_rgba(0,0,0,0.1)] flex items-center gap-5 py-3 px-5 rounded-md">
                <FaSearch size={20} />
                <input
                  type="text"
                  className="!w-full flex border-none outline-none text-xl"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Sort Button for Toggle Sorting */}
              <a
                className="bg-white px-7 py-3 h-[49px] flex items-center gap-3 rounded-[5px] shadow-[0px_5px_10px_rgba(0,0,0,0.1)] cursor-pointer"
                onClick={() => setIsNewestFirst(!isNewestFirst)}
              >
                {isNewestFirst ? "Newest" : "Oldest"}
              </a>

              {/* <FaChevronDown /> */}
            </div>
            <div className="lg:flex md:flex  hidden gap-5 justify-between xl:mt-3 ml-1 lg:mt-1 -mt-6">
              <div>
                <label className="text-[26px]">Available Properties</label>
                <p className="text-[14px] font-semibold -mt-2 text-[#7A9DC3]">
                  Found: {properties.length}
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 lg:mt-4 md:mt-4 mt-0">
              {/* Display Sorted and Filtered Properties */}
              {sortedProperties.length > 0 ? (
                sortedProperties.map((pro) => (
                  <div key={pro.id}>
                    <PropertyCard {...pro} />
                  </div>
                ))
              ) : (
                <p>No properties found</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setShowDropdown(false)}
        className={`${
          showDropdown ? "absolute" : " "
        }   top-0 right-0 left-0 bottom-0`}
      ></div>
    </section>
  );
};

export default ListingProperties;
