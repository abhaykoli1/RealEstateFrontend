import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const PropertyCardCompo = ({ pro }) => {
  return (
    // bg-[#AAB9D61A] min-w-[296px]  shadow-lg rounded-[5px] p-4 mx-3
    <div className=" bg-[#AAB9D61A] shadow-lg  rounded-[5px] overflow-hidden  mx-3 p-3">
      <img
        src={pro.image}
        alt="Property"
        className="rounded-[5px] w-full h-48 object-cover mb-4"
      />

      {/* Property Title */}
      <h4 className="text-lg font-semibold">The Acres</h4>

      {/* Location */}
      <div className="flex items-center text-[#2F5885] text-sm font-medium mt-1">
        <SlLocationPin className="mr-1" size={17} />
        Dubailand
      </div>

      {/* Details */}
      <div className="flex flex-col space-y-2">
        <p className="text-sm mt-3  font-light flex gap-3">
          <span className="font-semibold">Delivery Date:</span> Dec, 2028
        </p>
        <p className="text-sm  font-light flex gap-3">
          <span className="font-semibold">Price from:</span> AED 5,080,000
        </p>
        <p className="text-sm  font-light flex gap-3">
          <span className="font-semibold">Developer:</span> MERAAS
        </p>
      </div>
      {/* Call & WhatsApp Buttons */}
      <div className="mt-4  rounded-lg flex gap-2 ">
        <a className="  flex items-center text-[9px] gap-2 h-[27px]  justify-center bg-[#C6D5E6]  cursor-pointer hover:scale-[102%] transition-all !text-[#2F5885]  !hover:text-black rounded-[5px] shadow-sm w-full">
          <FaPhoneAlt size={13} className="text-[#2F5885]" />
          Call
        </a>
        <a className="flex items-center text-[9px] gap-2 h-[27px] cursor-pointer hover:scale-[102%] transition-all bg-[#C6D5E6] !text-[#2F5885]  justify-center !hover:text-black rounded-[5px] shadow-sm w-full">
          <IoLogoWhatsapp size={13} className="text-[#2F5885]" />
          WhatsApp
        </a>
        <a className="flex items-center  gap-2 h-[27px] cursor-pointer hover:scale-[102%] transition-all bg-[#C6D5E6] !text-[#2F5885] px-2 !hover:text-black rounded-[5px] shadow-sm ">
          <BsThreeDotsVertical className="text-[#2F5885]" />
        </a>
      </div>
    </div>
  );
};

export default PropertyCardCompo;
