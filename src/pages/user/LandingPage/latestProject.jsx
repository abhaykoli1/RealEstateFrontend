import { useState } from "react";
import { FaSlidersH, FaLocationArrow, FaDollarSign } from "react-icons/fa";
import Divider from "../../../components/user/divider";
import { useNavigate } from "react-router";

export default function LatestProjects({ allPropertiesData }) {
  const menuItems = [
    { label: "Newest", options: ["1", "2", "3"] },
    {
      label: "Villa",
      icon: <FaSlidersH />,
      options: ["Luxury", "Budget", "Duplex"],
    },
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
    { label: "Beds", options: ["1 Bed", "2 Beds", "3 Beds"] },
  ];

  // Flatten all images with their corresponding seo_title
  const allImages = allPropertiesData.flatMap((property) =>
    property.images.map((image) => ({
      image,
      seo_title: property.seo_title,
      community: property.communities || "No Community",
      types: property.types || "No Property Type",
      statuses: property.statuses || " apn astring",
      developer: property.developers || "No Developer",
      createdAt: property.createdAt || "No createdAt",
      location: property.location || "No location",
      price: property.price || "No Price",
      beds: property.beds || "No Beds",
    }))
  );

  // console.log("allImages ", allImages);

  const shuffledImages = [...allImages].sort(() => Math.random() - 0.5);

  const navigate = useNavigate();
  const handelPerticularProperty = (seoTitle) => {
    navigate(`/property/${seoTitle}`);
  };

  // console.log("shuffledImages", shuffledImages);
  return (
    <div className="max-w-[1320px] mx-auto px-5">
      <h2 className="lg:text-[32px] md:text-[32px] text-[25px] font-semibold text-center mb-4 mt-5">
        LATEST PROJECTS
      </h2>
      <Divider />

      {/* Dropdown Menu */}
      <div className="flex gap-3 flex-wrap w-full justify-center relative mt-12 mb-10">
        {menuItems.map((item, index) => (
          <select
            key={index}
            className="bg-white px-7 py-3 rounded-md shadow-md"
          >
            <option>{item.label}</option>
            {item.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {shuffledImages.slice(0, 6).map((item, index) => (
          <div
            onClick={() => handelPerticularProperty(item.seo_title)}
            key={index}
            className="relative border cursor-pointer border-gray-300 rounded-[5px] w-auto h-auto hover:scale-[98%] transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.seo_title}
              className="w-auto h-[300px] rounded-[5px] object-cover"
            />
            <span className="absolute top-3 right-3 bg-[rgba(255,255,255,0.7)] text-black text-xs px-2 py-1 rounded">
              {item.statuses}
            </span>
            <span className="absolute bottom-3 left-3 bg-[rgba(255,255,255,0.7)] text-black text-sm px-2 py-1 rounded">
              {item.types}
            </span>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-4">
        <button className="h-[49px] w-[210px] bg-[#2F5FA7] hover:scale-[102%] transition-all duration-500 text-white rounded-[5px]">
          Load More
        </button>
      </div>
    </div>
  );
}
