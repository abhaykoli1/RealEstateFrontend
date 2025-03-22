import { useState } from "react";
import { FaChevronDown, FaLocationArrow, FaSlidersH } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import Frame from "../../../assets/main.png";
import Divider from "../../../components/user/divider";
// import Divider from "../../../assets/divider.png";

const projects = [
  {
    id: 1,
    image: "/villa1.jpg",
    label: "VILLA",
    name: "The Acres",
  },
  {
    id: 2,
    image: "/villa2.jpg",
    label: "VILLA",
    name: "The Acres",
  },
  {
    id: 3,
    image: "/villa3.jpg",
    label: "VILLA",
    name: "The Acres",
  },
  {
    id: 4,
    image: "/villa4.jpg",
    label: "VILLA",
    name: "The Acres",
  },
  {
    id: 5,
    image: "/villa3.jpg",
    label: "VILLA",
    name: "The Acres",
  },
  {
    id: 6,
    image: "/villa4.jpg",
    label: "VILLA",
    name: "The Acres",
  },
  {
    id: 7,
    image: "/villa1.jpg",
    label: "VILLA",
    name: "The Acres",
  },
  {
    id: 8,
    image: "/villa3.jpg",
    label: "VILLA",
    name: "The Acres",
  },
];

export default function LatestProjects() {
  const menuItems = [
    { label: "Newest", icon: null, options: ["1 ", "2 ", "3 "] },
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
    { label: "Beds", icon: null, options: ["1 Bed", "2 Beds", "3 Beds"] },
  ];
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("map");

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <div className="max-w-[1320px] mx-auto px-5">
      <h2 className="lg:text-[32px] md:text-[32px] text-[25px] font-semibold text-center mb-4 mt-5">
        LATEST PROJECTS
      </h2>
      <Divider />

      <div className="flex gap-3 flex-wrap w-full justify-center relative mt-12 mb-10">
        {menuItems.map((item, index) => (
          <div key={index} className="relative">
            <a
              onClick={() => toggleDropdown(index)}
              className="bg-white px-7 py-3 flex items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)]"
            >
              {item.icon} {item.label} <FaChevronDown />
            </a>
            {openDropdown === index && (
              <div className="absolute mt-2 bg-white shadow-md rounded-md w-48 z-10">
                {item.options.map((option, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setOpenDropdown(null)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 !gap-2 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-auto h- bg-500  !p-0 hover:scale-[98%] transition-all duration-300"
          >
            <img
              src="https://picsum.photos/400/300"
              alt={project.name}
              className="w-auto h-[300px] rounded-[5px]  object-cover"
            />
            <span className="absolute top-3 right-3 bg-[rgba(255,255,255,0.7)] text-black text-xs px-2 py-1 rounded">
              {project.label}
            </span>
            <div className="absolute bottom-3 left-3 bg-[rgba(255,255,255,0.7)] text-black text-sm px-2 py-1 rounded">
              {project.name}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="h-[49px] w-[210px] bg-[#2F5FA7] hover:scale-[102%] transition-all duration-500 text-white !rounded-[5px]">
          Load More
        </button>
      </div>
    </div>
  );
}
