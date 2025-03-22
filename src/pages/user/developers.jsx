import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaChevronDown, FaDollarSign, FaLocationArrow } from "react-icons/fa";
import dubai from "../../assets/dubai.png";

const menuItems = [
  {
    label: "Property Type",
    icon: null,
    options: ["New York", "Los Angeles", "Chicago"],
  },
  { label: "Communities", icon: null, options: ["1 Bed", "2 Beds", "3 Beds"] },
  {
    label: "Project  Status",
    icon: null,
    options: ["House", "Apartment", "Land"],
  },
];
const Developers = () => {
  const properties = new Array(12).fill("Dubai Properties");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeTab, setActiveTab] = useState("map");

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };
  return (
    <section className="p-6 lg:mt-0 md:mt-0 -mt-10">
      <div className="max-w-7xl mx-auto px-5">
        {/* Breadcrumb Navigation */}
        <div className="text-gray-500 text-sm mb-4">
          <a href="#" className="hover:underline">
            Back to Listing
          </a>{" "}
          &gt; Home &gt; Property sale in Dubai &gt; Sell &gt; Shree Vilass
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4  my-10 mx-auto w-full ">
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

        {/* Grid Display */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 max-w-6xl mx-auto">
          {properties.map((property, index) => (
            <div
              key={index}
              className="relative flex items-center rounded-[5px] justify-center h-[259px] shadow-2xl bg-white overflow-hidden group"
            >
              <img src={dubai} className="h-[259px] w-full object-cover" />

              {/* Blue overlay */}
              <div className="absolute bottom-0 left-0 w-full rounded-[5px] h-0 bg-gradient-to-t to-[#3261A8] via-[#3261A8] from-[#87b3f5] opacity-0 group-hover:h-1/2 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-start p-4">
                <h3 className="text-white  text-[20px]">DUBAI PROPERTIES</h3>
                <p className="text-white font-semibold text-[14px]">
                  Give you a general notion of your study topic in the
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
