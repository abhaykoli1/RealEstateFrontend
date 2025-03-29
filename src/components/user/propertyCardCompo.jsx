import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";

const PropertyCardCompo = ({ ...pro }) => {
  if (!pro) {
    return <div>Loading property details...</div>; // Fallback UI
  }
  return (
    <div className=" bg-[#AAB9D61A] shadow-lg  rounded-[5px] overflow-hidden  mx-3 p-3">
      <img
        src={pro?.image[0].image}
        alt="Pro?perty"
        className="rounded-[5px] w-full h-48 object-cover mb-4"
      />
      <h4 className="text-lg font-semibold">{pro?.title}</h4>

      {/* Location */}
      <div className="flex items-center text-[#2F5885] text-sm font-medium mt-1">
        <SlLocationPin className="mr-1" size={17} />
        {pro?.location}
      </div>

      {/* Details */}
      <div className="flex flex-col space-y-2">
        <p className="text-sm  font-light flex gap-3 mt-2">
          <span className="font-semibold">Price :</span> AED {pro?.price}
        </p>
        <p className="text-sm  font-light flex gap-3">
          <span className="font-semibold">Consultant:</span>{" "}
          {pro?.consultant.name}
        </p>
      </div>

      {/* Call & WhatsApp Buttons */}
      <div className="mt-4  rounded-lg flex gap-2 ">
        <a
          href={`tel:${pro?.phone}`}
          className="  flex items-center text-[10px] gap-2 h-[27px]  justify-center bg-[#C6D5E6]  cursor-pointer hover:scale-[102%] transition-all !text-[#2F5885]  !hover:text-black rounded-[5px] shadow-sm w-full"
        >
          <FaPhoneAlt size={13} className="text-[#2F5885]" />
          Call
        </a>

        <a
          href={`https://wa.me/${pro?.country_code}${pro?.phone}`}
          className="flex items-center text-[10px] gap-2 h-[27px] cursor-pointer hover:scale-[102%] transition-all bg-[#C6D5E6] !text-[#2F5885]  justify-center !hover:text-black rounded-[5px] shadow-sm w-full"
        >
          <IoLogoWhatsapp size={15} className="text-[#2F5885]" />
          WhatsApp
        </a>

        {/* <a className="flex items-center  gap-2 h-[27px] cursor-pointer hover:scale-[102%] transition-all bg-[#C6D5E6] !text-[#2F5885] px-2 !hover:text-black rounded-[5px] shadow-sm ">
          <BsThreeDotsVertical className="text-[#2F5885]" />
        </a> */}
      </div>
    </div>
  );
};

export default PropertyCardCompo;
