import {
  FaBed,
  FaBath,
  FaCar,
  FaPhone,
  FaEnvelope,
  FaMap,
} from "react-icons/fa";
import CardImg from "../../assets/cardimage.png";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../common/config";
// import { useEffect, useState } from "react";
// import config from "../../common/config";
// import axios from "axios";

const PropertyCard = ({
  title,
  seo_title,
  seo_description,
  description,
  refernce_number,
  permit_number,
  property_type,
  property_status,
  consultant,
  price,
  features,
  amenities,
  near_by,
  latitude,
  longitude,
  old_permit_number,
  old_permit_description,
  comerical,
  off_plan,
  image,
  location,
}) => {
  const [status, setStatus] = useState(null);
  const [pType, setPType] = useState(null);

  useEffect(() => {
    const fetchPropertyStatus = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property-status/${property_status}`
        );
        setStatus(response.data.data); // Store API response in state
      } catch (err) {
        // setError(err.message);
      }
    };

    if (property_status) {
      fetchPropertyStatus();
    }
  }, [property_status]);

  useEffect(() => {
    const fetchPropertyType = async () => {
      try {
        const response = await axios.get(
          `${config.API_URL}/api/property-type/${property_type}`
        );
        setPType(response.data.data);
      } catch (err) {
        // setError(err.message);
      }
    };

    if (property_type) {
      fetchPropertyType();
    }
  }, [property_type]);

  console.log("image : ", image[0]);
  return (
    <div className="w-[95%] ml-2 bg-white shadow-lg  rounded-md overflow-hidden ">
      <div className="relative">
        <img
          src={image[0].image}
          alt="House"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 left-2  bg-white/70 text-black text-xs font-semibold px-2 py-1 rounded">
          {pType ? pType.title : ""}
        </span>
        <span className="absolute top-2 right-2  bg-white/70 text-black text-xs font-semibold px-2 py-1 rounded">
          {status ? status.title : ""}
        </span>
        <span
          className={`absolute  ${
            off_plan ? "" : "hidden"
          }  bottom-2 left-2 bg-white/70 text-black text-xs font-semibold px-2 py-1 rounded`}
        >
          Off Plan
        </span>
      </div>

      <div className="p-2.5">
        <h3 className="font-semibold text-[15px]">{title}</h3>
        <p className="text-[15px] text-black">{location}</p>

        <div className="flex justify-between items-center flex-wrap mt-1">
          <div className="ProPrice text-black font-bold text-[18px] ">
            AED {price}
          </div>

          <div className="ProPriceBlocks flex items-center gap-2  text-[#1C3A5E]">
            {/* <span className="flex items-center gap-1 border border-[#1C3A5E] px-2 h-6 rounded-md">
              <FaBed /> 4
            </span>
            <span className="flex items-center gap-1 border border-[#1C3A5E] px-2 h-6 rounded-md">
              <FaBath /> 4
            </span> */}
            {amenities.map((ani, index) => (
              <span
                key={index}
                className="flex items-center gap-1 border border-[#1C3A5E] px-2 h-6 rounded-md"
              >
                <img src={ani?.amenities_img} alt="Amenity" className="h-5" />
                <span className="text-sm text-[#1C3A5E]">{ani?.title}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex gap-3">
            <div className="ProPhoneElement p-3 !bg-transparent !border-2 border-[#A9B9D6]  !rounded-full">
              <FaPhone className="text-gray-600" />
            </div>
            <div className="ProEnvElement p-3 !bg-transparent !border-2 border-[#A9B9D6]  !rounded-full">
              <FaEnvelope className="text-gray-600" />
            </div>
          </div>
          <div className="PropertyButton !bg-[#2F5FA7] text-white px-4 !py-1.5 rounded-lg">
            Set a viewing
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
