import React from "react";
const PropertySmallCard = ({ image, date, title, description, link }) => {
  return (
    <div className="SmallCard rounded-md shadow-lg !overflow-hidden bg-white md:p-4 sm:p-3 p-2 w-full mx-1.5 !max-w-md">
      {/* Image */}
      <div className="SmallCardImage w-full h-[120px rounded-md overflow-hidden">
        <img
          src={image}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Text Content */}
      <div className="mt-3">
        <h2 className="text-[10px] font-semibold">1 private room in 2BHK</h2>
        <p className="text-black text-[8px]">RK beach road</p>
        <p className="text-black text-[8px] whitespace-nowrap overflow-hidden  text-ellipsis">
          For men + Private room + immediate ...
        </p>
        <p className="text-black font-normal text-[10px]">AED 150,000</p>
      </div>
    </div>
  );
};

export default PropertySmallCard;
