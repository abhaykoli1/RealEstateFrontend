import {
  BadgeCheck,
  Bike,
  ChartNoAxesCombined,
  ChartNoAxesCombinedIcon,
  ChevronDown,
  ChevronLeftCircleIcon,
  ChevronLeftIcon,
  Contact,
  LayoutDashboard,
  User,
  X,
} from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSlidersH } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaDollarSign, FaLocationArrow } from "react-icons/fa";
import PropertySearch from "./search";
// Add Property ,
const adminSidebarMenuItems = [
  {
    id: "buy",
    label: "BUY",
    path: "/listing",
    // icon: <LayoutDashboard className="text-slate-700" />,
  },
  {
    id: "rent",
    label: "RENT",
    path: "/listing",
    // icon: <BadgeCheck className="text-slate-700" />,
  },
  {
    id: "sell",
    label: "SELL",
    path: "/listing",
    // icon: <User className="text-slate-700" />,
  },
  {
    id: "offplan",
    label: "OFF-PLAN",
    path: "/",
    // icon: <Bike className="text-slate-700" />,
  },
  {
    id: "commercial",
    label: "COMMERCIAL",
    path: "/",
    // icon: <ReviewsOutlined className="text-slate-700" />,
  },
  {
    id: "more",
    label: "MORE",
    path: "/",
    // icon: <QueryStats className="text-slate-700" />,
  },
  {
    id: "insight",
    label: "INSIGHT",
    path: "/",
    // icon: <QueryStats className="text-slate-700" />,
  },
  {
    id: "contact",
    label: "CONTACT",
    path: "/",
    // icon: <QueryStats className="text-slate-700" />,
  },
  {
    id: "about",
    label: "ABOUT",
    path: "/",
    // icon: <QueryStats className="text-slate-700" />,
  },
];
const menuItems = [
  { label: "Beds", icon: null, options: ["1 Bed", "2 Beds", "3 Beds"] },
  { label: "Buy", icon: null, options: ["House", "Apartment", "Land"] },
  {
    label: "Location",
    icon: <FaLocationDot />,
    options: ["New York", "Los Angeles", "Chicago"],
  },
  {
    label: "Appartment",
    icon: <FaSlidersH />,
    options: ["1000 - 2000", "2000 - 3000", "3000 - 4000"],
  },
  { label: "Newest", icon: null, options: ["Luxury", "Budget", "Duplex"] },
];

const Filter = ({ setFilterBar, filterBar }) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
  const islargeScreen = useMediaQuery({ query: "(max-width: 1023px)" });
  //   function handleClose() {
  //     {
  //       isSmallScreen
  //         ? setFilterBar(false)
  //         : islargeScreen
  //         ? setFilterBar(true)
  //         : null;
  //     }
  //   }
  //   useEffect(() => {
  //     {
  //       isSmallScreen
  //         ? setFilterBar(false)
  //         : islargeScreen
  //         ? setFilterBar(false)
  //         : null;
  //     }
  //   }, [isSmallScreen, islargeScreen]);
  const [openDropdown, setOpenDropdown] = useState(null);
  // const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("map");

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  const navigate = useNavigate();

  const [filterBarVisible, setFilterBarVisible] = useState(true);

  // Use useEffect to hide the filterBar after 5 seconds
  useEffect(() => {
    if (filterBar) {
      const timer = setTimeout(() => {
        setFilterBar(false); // Hide the filter bar after 5 seconds
      }, 5000);

      // Cleanup the timer when the component unmounts or when state changes
      return () => clearTimeout(timer);
    }
  }, [filterBar]); // Dependency array ensures effect runs only when filterBar changes

  return (
    <div
      className={`max-w-[100vw]  w-[294px] z-50 ml-[3px]  bg-[#ffffff] h-[290px] mt-4 border border-gray-200 rounded-[5px]  fixed duration-500 transition-all  shadow-2xl
        ${filterBar ? "" : "-translate-x-[340px] shadow-2xl hidden"}`}
    >
      <aside className=" w-full justify-between bg- flex-col bg-transparnt  h-full  flex p-3">
        {/* Filter Options */}
        <div>
          <div className="flex justify-between">
            <h2 className="text-[18px] ">Filters</h2>
            <X onClick={() => setFilterBar(false)} />
          </div>

          <div className="flex flex-wrap gap-2 my-2 ">
            <PropertySearch />

            {/* <a className="bg-white   px-12 py-1.5 text-[12px] items-center gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)]">
              Commercial
            </a>
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <a
                  onClick={() => toggleDropdown(index)}
                  className="bg-white px-[18.5px] py-1.5 !w-full flex items-center text-[12px] gap-3 rounded-md shadow-[0px_5px_10px_rgba(0,0,0,0.1)]"
                >
                  {item.icon} {item.label} <FaChevronDown />
                </a>
                {openDropdown === index && (
                  <div className="absolute mt-2 bg-white shadow-md rounded-md w- z-10">
                    {item.options.map((option, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 hover:bg-gray-100  text-[12px] cursor-pointer"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))} */}
          </div>

          {/* Price Range */}
          <div className="my-4 ">
            <label className="block text-[12px] font-medium mb-">Price</label>
            <div className="flex justify-between text-gray-600 text-sm items-center">
              <span className="text-[7px]">AED 150,000</span>
              <input
                type="range"
                min="150000"
                max="15000000"
                className=" w-full accent-blue-900"
              />

              <span className="text-[7px]">AED 15,000,000</span>
            </div>
          </div>
        </div>
        {/* Add Filter Button */}
        <div className="flex justify-end items-end ">
          <button className="w-[108px] flex items-center !rounded-[5px] justify-center h-[29px] bg-[#7A9DC4] text-white !font-bold !py-0 !px-0  text-[12px]">
            Add Filter
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Filter;
