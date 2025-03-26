import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaChevronDown, FaDollarSign, FaLocationArrow } from "react-icons/fa";
import dubai from "../../assets/dubai.png";
import axios from "axios";
import config from "../../common/config";
import { useNavigate } from "react-router";

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

  const [developers, setDevelopers] = useState([]);
  console.log("developers", developers);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/api/developer`)
      .then((response) => setDevelopers(response.data.data))
      .catch((error) => console.log(error.message));
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const navigate = useNavigate();
  return (
    <section className="lg:mt-4 md:mt-4 -mt-2 mb-8">
      <div className="max-w-7xl mx-auto lg:px-10 md:px-10 px-5">
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
          {developers.map((developer, index) => (
            <div
              onClick={() => navigate(`/developer/${developer._id}`)}
              key={index}
              className="relative hover:scale-[102%] transition-all duration-500 flex items-center rounded-[5px] justify-center h-[259px] shadow-2xl bg-white overflow-hidden group"
            >
              <img
                src={developer.image}
                className="h-[259px] w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
