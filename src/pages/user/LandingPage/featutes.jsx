import React, { useState } from "react";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineCleaningServices } from "react-icons/md";
import { IoIosExpand } from "react-icons/io";
import { IoLeafOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import { RiSofaLine } from "react-icons/ri";
import { GiPalmTree } from "react-icons/gi";
import { PiWashingMachine } from "react-icons/pi";

const Features = () => {
  const [selectedOption, setSelectedOption] = useState("For Sale");

  const features = [
    {
      name: "Private Pool",
      icon: <FaSwimmingPool className="text- text-xl" />,
    },
    {
      name: "Upgraded",
      icon: <MdOutlineCleaningServices className="text-green text-xl" />,
    },
    {
      name: "Large Plot",
      icon: <IoIosExpand className="text-gray text-xl" />,
    },
    {
      name: "Close to Park",
      icon: <IoLeafOutline className="text-green text-xl" />,
    },
    {
      name: "Brand New",
      icon: <IoDiamondOutline className="text-purple text-xl" />,
    },
    {
      name: "Furnished",
      icon: <RiSofaLine className="text-yellow text-xl" />,
    },
    {
      name: "Water Views",
      icon: <GiPalmTree className="text-blue text-xl" />,
    },
    {
      name: "Vacant on Transfer",
      icon: <PiWashingMachine className="text-green text-xl" />,
    },
  ];
  return (
    <section className="max-w-[1320px] mx-auto mt-10 px-6">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-5">
        <div className="">
          <h2 className="lg:text-[32px] md:text-[32px] text-[27px] font-bold ">
            Search Properties by feature
          </h2>
          <span className="border-b-[3px]  border-[#A9B9D6] flex w-[150px] "></span>
        </div>
        <div className="  flex gap-6">
          {["For Sale", "For Rent"].map((option) => (
            <a
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`relative px py-2  lg:text-[18px] md:text-[18px] text-[14px] font-semibold transition-all  cursor-pointer ${
                selectedOption === option
                  ? "text-[#10324A]"
                  : "text-[#4a6e8996]"
              }`}
            >
              {option}
              <span
                className={`px-4 absolute -left-0 bottom-0  py-2 w-full font-semibold transition-all  cursor-pointer ${
                  selectedOption === option
                    ? "border-b-[2px] border-black text-black "
                    : "text-gray-500 border-b-[3px] border-transparent"
                }`}
              ></span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4 flex-wrap  ">
        {features.map((feature, index) => (
          <a
            key={index}
            className="border-2 lg:h-[55px] md:h-[55px] h-[48px] lg:text-[18px] md:text-[18px] text-[14px] flex items-center hover:bg-[#C6D5E6] hover:scale-105 transition-all duration-500 cursor-pointer gap-3 lg:px-4 md:px-3 px-3 py-2 rounded-sm border-[#2F5FA733]"
          >
            {feature.icon}
            {feature.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Features;
